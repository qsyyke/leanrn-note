# JackJson

自定义过滤字段，如果需要某个字段不展示，则在该字段上，添加`@JsonIgnore`注解



但是使用上面这种方式的话，如果我们使用`openFeign`远程调用服务，就会出现一个错误

```java
No fallback setter/field defined for creator property ''
```

可以使用另一个注解

```
@JsonIgnoreProperties(value = {"code","message"})
@Data
@Builder
public class ModifyResult {
    /**
     * 影响的行数
     */
    private int affectedRows;

    /**
     * 是否成功
     */
    private boolean success;

    /**
     * 成功或者失败的消息
     */
    //@JsonIgnore
    private String message;

    /**
     * 响应码
     */
    private int code;

    /**
     * 主键uid
     */
    private long uid;
}
```

使用此注解之后，在`value`中配置我们需要过滤的字段，远程调用的时候，也不会出错

