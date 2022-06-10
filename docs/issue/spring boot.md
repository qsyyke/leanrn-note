---
date: 2022/3/31
---

# spring boot问题总结

## 全局异常处理，没有返回json数据

最开始是这样

```java
@ControllerAdvice
@Component
public class GlobalExceptionHandler {

    @ExceptionHandler
    public Object bing(Exception e) {
        log.error("执行了");
        return "new File()";
    }
}
```

但是发生异常之后，这里也捕获了，但是就是没有返回new File()字符串，而是返回404页面

不能使用`@ControllerAdvice`注解，该注解默认返回的是页面，需要使用`@RestControllerAdvice`，或者在方法上添加`@ResponseBody`注解





## 自定义过滤json过滤字段

### 一、自定义一个json过滤器

```java
public class FieldFilterSerializer {
    /**
     * 想要保留的字段标识
     */
    private static final String DYNAMIC_INCLUDE = "DYNAMIC_INCLUDE";

    /**
     * 想要过滤的字段标识
     */
    private static final String DYNAMIC_EXCLUDE = "DYNAMIC_EXCLUDE";

    /**
     * jackson核心类 过滤属性全部由这个类完成
     */
    private final ObjectMapper mapper = new ObjectMapper();

    @JsonFilter(DYNAMIC_EXCLUDE)
    interface DynamicExclude {}

    @JsonFilter(DYNAMIC_EXCLUDE)
    interface DynamicInclude {}

    public void filter(Class<?> clazz, String... propertyArray) {
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.serializeAllExcept(propertyArray);
        SimpleFilterProvider provider = new SimpleFilterProvider().addFilter(DYNAMIC_EXCLUDE, filter);
        mapper.setFilterProvider(provider);
        mapper.addMixIn(clazz, DynamicExclude.class);
    }

    public String toJSONString(Object object) throws JsonProcessingException {
        //解决jackson2无法反序列化LocalDateTime的问题
        //这里要注意时间属性上要加入 @JsonFormat 注解 否则无法正常解析
        mapper.registerModule(new JavaTimeModule());
        //将类转换成json字符串返回
        return mapper.writeValueAsString(object);
    }
}
```

> 这里一定要保证`addFilter(DYNAMIC_EXCLUDE, filter)`中的`DYNAMIC_EXCLUDE`是一个`@JsonFilter(DYNAMIC_EXCLUDE)`注解中的值，否则不会有效果
>
> 我们也可以将此`@JsonFilter("")`注解放在其他实体类上，但是不方便，所以这里直接定义一个内部接口，放在此接口上，也可以达到一样的效果



这里还有一个坑，在spring boot中，如果我们直接返回`toJSONString()`的值，那么在浏览器中，看到的json会添加斜杠，这里可以这样解决

```java
JSON.parse(toJSONString(obj))
```

返回此对象就可以了

还有一个注意的项，如果我们做了统一处理，统一返回`R`对象，controller返回的是`User`对象，因为此user需要添加到r对象的data中，那么这里的`mapper.addMixIn(clazz, DynamicExclude.class)`中的`clazz`需要填`User.class`，而不是`R.class`

返回的`mapper.writeValueAsString(object)`才是传入`R`对象

### 二、定义一个自定义注解

```
@Retention(RetentionPolicy.RUNTIME)
@Target(value = {ElementType.METHOD,ElementType.TYPE})
public @interface FieldFilter {
    /**
     * 过滤哪个类
     */
    Class<?> value();

    /**
     * 需要排除的字段
     */
    String[] excludeFields();
}
```



### 三、响应体增强

```java
@Slf4j
@ConditionalOnClass(ResponseBodyAdvice.class)
@ControllerAdvice
public class ResponseResultHandler implements ResponseBodyAdvice<Object> {

    @Override
    public boolean supports(MethodParameter returnType, Class<? extends HttpMessageConverter<?>> converterType) {
        return true;
    }

    @Override
    public Object beforeBodyWrite(Object responseBody, MethodParameter methodParameter, MediaType selectedContentType, Class<? extends HttpMessageConverter<?>> selectedConverterType, ServerHttpRequest request, ServerHttpResponse response) {
        //response.getHeaders().setContentType(MediaType.APPLICATION_JSON);
        //执行的方法
        Method method = methodParameter.getMethod();

        assert method != null;
        //判断是否存在ResponseResult注解
        boolean hasResponseResultAnnotation = method.isAnnotationPresent(ResponseResult.class);

        /**
         * 获取方法或者异常的返回值类型
         * 这里如果没有发生异常是通过注解进行判断，如果存在异常，因为做了全局处理，返回值是ExceptionResultEntity
         */
        Class<?> resultReturnType = method.getReturnType();
        if (hasResponseResultAnnotation) {
            // 存在注解，没有发生异常，对结果封装
            // 判断返回体是不是ModifyResult类型
            if (responseBody instanceof ModifyResult) {
                ModifyResult modifyResult = (ModifyResult) responseBody;
                return R.success(modifyResult.getCode(), modifyResult.getMessage(),responseBody);
            }

            R r = R.success(ResponseStatusCodeEnum.SUCCESS.getCode(),
                    ResponseStatusCodeEnum.SUCCESS.getMessage(), responseBody);
            // 需要R对象整体传入
            return fieldFilter(r, method);
        }

        if (responseBody instanceof ExceptionResultEntity) {
            //发生了异常，对结果进行封装
            ExceptionResultEntity exceptionResultEntity = (ExceptionResultEntity) responseBody;

            Map<String,Object> errorMap = new HashMap<>();
            errorMap.put("errorUrl",exceptionResultEntity.getErrorUrl());
            if (exceptionResultEntity.getData() != null) {
                errorMap.put("additionalData",exceptionResultEntity.getData());
            }

            return R.failure(exceptionResultEntity.getCode(), exceptionResultEntity.getMessage(),errorMap);
        }

        return fieldFilter(responseBody,method);
    }

    /**
     * 进行字段过滤，对于返回值是ModifyResult的对象，不做任何处理，因为没有需要过滤的字段，对于查询操作，因为返回的是一个
     * VO层实体，会存在敏感字段，这里根据当前登录用户的权限进行判断，如果拥有查看敏感字段的权限，或者是管理员，那么不做脱敏处理
     * 返回过滤该字段
     * @param responseBody
     * @param method
     * @return
     */
    private Object fieldFilter(Object responseBody, Method method) {
        // 判断是否有FieldFilter注解(判断当前登录用户是否具有查看密码的权限，动态过滤某个字段)
        boolean hasFieldFilterAnnotation = method.isAnnotationPresent(FieldFilter.class);

        if (hasFieldFilterAnnotation) {
            FieldFilter fieldFilterAnnotation = method.getAnnotation(FieldFilter.class);
            // 需要排除的字段集合
            String[] excludeFields = fieldFilterAnnotation.excludeFields();
            // 序列化的class
            Class<?> serializerClass = fieldFilterAnnotation.value();

            // 过滤字段
            FieldFilterSerializer filterSerializer = new FieldFilterSerializer();
            filterSerializer.filter(serializerClass,excludeFields);
            try {
                String json = filterSerializer.toJSONString(responseBody);
                responseBody = JSON.parse(json);
            } catch (JsonProcessingException e) {
                log.warn("对象转json出错了:{},出错原因:{}",responseBody,e.getMessage());
            }
        }

        return responseBody;
    }
}
```

这里也可以在环绕通知中，只是我这里，是对响应体进行增强，效果也一样

### 四、测试

```java
@FieldFilter(value = UserVO.class,excludeFields = {"uid","userSummary","nickname"})
@GetMapping("/{uid}")
@ResponseResult
@ApiOperation(value = "通过uid查询用户信息")
public UserVO queryUserByUid(@PathVariable("uid") long uid) throws InstantiationException, IllegalAccessException {
    return userService.queryByUid(uid);
}
```



除此以外，还有其他的方法可以过滤字段，但是并不是很好

https://juejin.cn/post/6844904061725065230





## 不同模块之间导入组件问题

包结构

![image-20220428194334582](https://picture.xcye.xyz/image-20220428194334582.png)

如果我们想要将`aurora-message`中的某个组件，导入到`aurora-comment`，像上面这种情况，不不能自动导入的，我们可以在主启动类上，自动添加其他包路径，还可以将`aurora-message`的主启动类放在`xyz.xcye`这个包下，这样`aurora-comment`和`aurora-message`的主启动类的包结构就相同了，那么他们就能够导入



## 增加自定义属性配置类，不提示问题

```java
@Data
@ConfigurationProperties(prefix = AuroraProperties.AURORA_PREFIX)
public class AuroraProperties {
    /**
     * 主题配置文件的前缀
     */
    public static final String AURORA_PREFIX = "aurora";

    private int workerId;
}
```

我们需要添加下面这个依赖

```pom
<dependency>
<groupId>org.springframework.boot</groupId>
<artifactId>spring-boot-configuration-processor</artifactId>
</dependency>
```

如果提示

![image-20220430124409767](https://picture.xcye.xyz/image-20220430124409767.png)

可以把下面这个关闭

![image-20220430124455924](https://picture.xcye.xyz/image-20220430124455924.png)



## 排除bean

```java
@ComponentScan(excludeFilters = {@ComponentScan.Filter(type = FilterType.REGEX, pattern = {"xyz.xcye.aurora.exception.*", "xyz.xcye.aurora.interceptor.*","xyz.xcye.aurora.manager.advice.*"})})
@SpringBootApplication
public class AuroraGateWayMain {
    public static void main(String[] args) {
        SpringApplication.run(AuroraGateWayMain.class, args);
    }
}
```

