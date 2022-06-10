---
date: 2022/3/22 21:58
---

# hibernate validator的使用





## 依赖安装

```
<dependency>
    <groupId>org.hibernate.validator</groupId>
    <artifactId>hibernate-validator</artifactId>
    <version>7.0.4.Final</version>
</dependency>

<dependency>
    <groupId>org.glassfish</groupId>
    <artifactId>jakarta.el</artifactId>
    <version>4.0.1</version>
</dependency>
```

上面这两个依赖是必须要的，否则就会报下面这个错误

```java
HV000183: Unable to initialize 'jakarta.el.ExpressionFactory'. Check that you have the EL dependencies on the classpath, or use ParameterMessageInterpolator instead
```

他们的包结构为

![image-20220322220152865](https://picture.xcye.xyz/image-20220322220152865.png)

其中`jakarta.el`这个依赖就是用来解析el的





## Validator的初步使用

下面是我们写的一个简单例子，检验一个对象中的某个字段

```java
public class ValidationUtil {
    private static Validator validator;

    static {
        validator = Validation.buildDefaultValidatorFactory().getValidator();
    }

    public static List<String> valid(UserInfo userInfo,Class<?>... groups) {
        Set<ConstraintViolation<UserInfo>> set = validator.validate(userInfo, groups);

        List<String> list = set.stream().map(
                v -> "属性: " +
                        v.getPropertyPath() + "，属性的值: " +
                        v.getInvalidValue() + "，校验不通过的提示信息: " +
                        v.getMessage() + "，消息模板：" + v.getMessageTemplate()).collect(Collectors.toList());
    }
}
```

上面这个就是一个校验器，我们使用`buildDefaultValidatorFactory()`创建一个默认的校验器，`valid()`是一个校验的方法，方法的第一个参数是需要校验的对象，第二个参数是一个可变参数，我们需要传入组

最终是通过执行`validate()`这个方法进行校验的，当执行这个方法之后，器就会将所有的需要校验的结果返回成一个集合，我们可以通过这个集合获取到哪些字段没有成功，还有失败的message，还有校验的语句模板等等信息



调用

```java
//UserInfo对象
public class UserInfo {
    @NotNull
    private String username;
}
```

```java
//main方法
public class Main {
    public static void main(String[] args) {
        UserInfo userInfo = new UserInfo();
        List<String> valid = ValidationUtil.valid(userInfo, UserInfo.Update.class, Default.class);
        System.out.println(valid);
    }
}
```

因为在`username`这个字段上使用`@NotNull`注解，所以该字段不能为null，所以验证不通过，我们就会得到下面的消息

```java
[属性: username，属性的值: null，校验不通过的提示信息: 不能为null]
```

> 上面的消息就是System.out.println输出的，`不能为null`这个也不是我们写的，默认就是这样，我们也可以自定义message，出现中文是因为官方做了国际化处理

上面这个就是一个简单的`validator`的初步使用



## 加载原理

除了上面的`@NotNull`注解之外，还有很多的注解，这些注解都是存放在`jakarta.validation-api/3.0.0/jakarta.validation-api-3.0.0.jar!/jakarta/validation/constraints`包中的

![image-20220322222034346](https://picture.xcye.xyz/image-20220322222034346.png)

就拿上面的`@NotNull`这个注解的执行原理来讲，每一个校验注解都存在一个处理的类，他们的名字都叫`XXXValidator`，比如`@NotNull`的真正校验器就是`NotNullValidator`这个类，这个类的源码为

```java
public class NotNullValidator implements ConstraintValidator<NotNull, Object> {

	@Override
	public boolean isValid(Object object, ConstraintValidatorContext constraintValidatorContext) {
		return object != null;
	}
}
```

是的，非常的简单，实现了`ConstraintValidator`这个接口，如果我们需要自定义校验器也是需要实现该接口，主要的方法就是`isValid()`，如果返回true的话，那么就是校验通过，不会有任何的消息，如果返回false的话，就是校验失败，我们就会看到失败的字段，消息等信息



需要注意的是，因为校验注解有很多，他们的功能都是非常单一的，也就是说，`@NotBlank`注解和`@NotNull`两个注解，`@NotBlank`是只校验字段是否为空字符串，他不会校验该字段是不是null，如果该字段是null的话，那么他会直接放行，因为为null，并不是他做的事，是`@NotNull`该执行的事，同理，`@NotNull也是一样的，下面这个就是`@NotBlank`的校验器的源码

```java
public class NotBlankValidator implements ConstraintValidator<NotBlank, CharSequence> {
	@Override
	public boolean isValid(CharSequence charSequence, ConstraintValidatorContext constraintValidatorContext) {
		if ( charSequence == null ) {//如果为null的话，直接放行
			return false;
		}

		return charSequence.toString().trim().length() > 0;
	}
}
```





## 约束和校验器的绑定原理

[java代码简洁之道 用bean validation和hibernate validator提升代码质量,让代码少点臭味道_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV17i4y157Ah?p=9)



## 自定义消息和消息模板

上面我们得到的`不能为null`是框架自己定义的消息，我们可以自己定义

在每一个注解里面，都存在一个`message`字段，这个就是设置错误消息

```java
public class UserInfo {
    @NotNull(message = "自定义消息：消息不能为null")
    private String username;
}
```



如果我们使用`@Max`这个注解的话，我们还可以在`message`中获取到注解中的`value`值

```java
public class UserInfo {
    @NotNull(message = "自定义消息：消息不能为null")
    private String username;
    
    @Max(value=12, message="年龄不能大于{value}")
    private int age;
}
```

我们可以通过`{value}`获取注解中的`value`值



消息模板的话，我们可以通过`v.getMessageTemplate()`获取到，在el解析之前的message，好像没啥用

## 分组校验

比如我们的字段中，有一个属性`int id`，这个属性，在插入数据的时候，可以为null，因为mysql中会自增，但是在修改数据的嘶吼，不能为null，如果我们像下面这样，就会冲突

```java
@NotNull
@Null
private Integer id;
```

这个时候，我们就需要用到分组校验

分组校验就是解决上述问题，针对不同的场景，使用不同的校验规则，可以像下面这样做



```java
public class UserInfo {
    public interface Add {}
    public interface Update{}

    @NotNull(groups = {Update.class})
    @Null(groups = {Add.class})
    private Integer id;
}
```

这里创建了两个接口，他们只是一个标志作用

然后我们在注解中的`groups`指定

还需要改造一下校验方法

```java
public static List<String> valid(UserInfo userInfo,Class<?>... groups) {
    Set<ConstraintViolation<UserInfo>> set = failFastValidator.validate(userInfo, groups);

    List<String> list = set.stream().map(
        v -> "属性: " +
        v.getPropertyPath() + "，属性的值: " +
        v.getInvalidValue() + "，校验不通过的提示信息: " +
        v.getMessage()).collect(Collectors.toList());
    return list;
}

//main方法
public static void main(String[] args) {
    UserInfo userInfo = new UserInfo();
    List<String> valid = ValidationUtil.valid(userInfo, UserInfo.Update.class, Default.class);
    System.out.println(valid);
}
```

因为校验方法中的第二个参数就是分组校验的字段，然后我们在调用的时候，就在`valid()`方法中传入，我们需要使用的场景是什么

比如上面使用的是`Update.class,Default.class`，那么在校验`id`字段时，就会使用`@NotNull`进行校验



如果没有传入`groups`，那么我们使用的都是默认分组校验，但是当我们自定义分组校验之后，我们一定要加上`Default.class`，否则其他的校验规则会失效，因为他们没有指定哪个组





## @Valid级联校验

如果在`UserInfo`对象中，还存在一个`Student`对象，代码如下

```java
public class Student {

    @Min(value = 5,message = "学生的学号不能小于{value}")
    private int no;
}
```

```java
@NotNull(message = "学生不能为null")
private Student student;
```

那么当没有对`UserInfo`对象中的`student`对象赋值的时候，会校验不通过，这个我们能够理解的，但是设置了`student`对象，但是student对象中，没有对no进行赋值，就是默认值0，器会不会校验通过呢？

答案是会校验通过的，因为在校验的时候，根本就没有对student对象中的no字段进行校验，如果我们需要对student对象中的no字段进行校验的话，我们就需要加上`@Valid`这个注解

```java
@Valid
@NotNull(message = "学生不能为null")
private Student student;
```





## 自定义校验规则

1. 创建一个注解`ValidStatus`，代码如下

    ```java
    @Target({ FIELD })
    @Retention(RUNTIME)
    @Documented
    @Constraint(validatedBy = { ValidStatusValidator.class }) //该注解标注的字段由哪个类进行校验
    public @interface ValidStatus {
        String message() default "{这是一个自定义校验注解}";
    
        Class<?>[] groups() default { };
    
        Class<? extends Payload>[] payload() default { };
    }
    ```

2. 创建该注解的校验器

    ```java
    public class ValidStatusValidator implements ConstraintValidator<ValidStatus, Integer> {
    
        @Override
        public void initialize(ValidStatus constraintAnnotation) {
            ConstraintValidator.super.initialize(constraintAnnotation);
        }
    
        @Override
        public boolean isValid(Integer value, ConstraintValidatorContext context) {
            if (value == null) {
                return true;
            }
    
            HashSet<Integer> set = new HashSet<>();
            set.add(1000);
            set.add(1001);
            set.add(1002);
            return set.contains(value);
        }
    }
    ```

3. 使用

    ```java
    @ValidStatus//自定义校验注解
    private Integer code;
    ```



> 在注解中，通过`@Constraint(validatedBy = { ValidStatusValidator.class })`指定该注解是由哪个校验器进行校验



## failfast校验

如果我们有很多的校验规则，那么默认方式，会等所有的字段都校验完成之后，然后将所有校验失败的结果，保存在一个集合中返回，但是我们希望的是，如果第一个校验失败了，就直接返回，不用在校验其他的字段了，这个就是failfast



使用

```java
public class ValidationUtil {
    private static Validator validator;
    private static Validator failFastValidator;

    static {
        validator = Validation.buildDefaultValidatorFactory().getValidator();

        failFastValidator = Validation.byProvider(HibernateValidator.class)
                .configure().failFast(true)//配置快速失败
                .buildValidatorFactory().getValidator();
    }


    public static List<String> valid(UserInfo userInfo,Class<?>... groups) {
        Set<ConstraintViolation<UserInfo>> set = failFastValidator.validate(userInfo, groups);

        List<String> list = set.stream().map(
                v -> "属性: " +
                        v.getPropertyPath() + "，属性的值: " +
                        v.getInvalidValue() + "，校验不通过的提示信息: " +
                        v.getMessage()).collect(Collectors.toList());
        return list;
    }
}
```

> 在创建`validator`的时候，就不能使用默认的实现，需要自定义，通过`Validation.byProvider(HibernateValidator.class)`进行设置，像上面一样，然后使用这个failfast校验对象去执行`failFastValidator.validate(userInfo, groups)`方法就可以了





## 非bean入参校验

我们也可以在方法的参数前面加上注解进行校验，比如`getByName(@NotNull String name) {}`这种



```java
public class ValidationUtil {
    private static ExecutableValidator executableValidator;
    static {
        executableValidator = Validation.buildDefaultValidatorFactory().getValidator().forExecutables();
    }


    public static <T> List<String> validNotBean(T object,
                                                Method method,
                                                Object[] parameterValues,
                                                Class<?>... groups) {
        Set<ConstraintViolation<T>> set = executableValidator.validateParameters(object, method, parameterValues, groups);

        List<String> list = set.stream().map(
                v -> "属性: " +
                        v.getPropertyPath() + "，属性的值: " +
                        v.getInvalidValue() + "，校验不通过的提示信息: " +
                        v.getMessage()).collect(Collectors.toList());
        return list;
    }
}
```

```java
public class UserINfoService {

    /**
     * 方法非bean类型（普通类型）的入参校验
     * 1. 参数前加上校验注解
     * 2. 执行校验
     * @param name
     * @return
     */
    public String getByName(@NotNull String name) {
        StackTraceElement st = Thread.currentThread().getStackTrace()[1];
        String methodName = st.getMethodName();

        Method method = null;
        try {
            method = this.getClass().getMethod(methodName,String.class);
        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        }

        List<String> list = ValidationUtil.validNotBean(this, method, new Object[]{name});
        System.out.println(list);

        return "ok";
    }
}
```

```java
//调用
UserINfoService userINfoService = new UserINfoService();
userINfoService.getByName(null);
```

