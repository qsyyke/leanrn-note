# REST风格的URL

## 什么是rest:

REST(英文：Representational State Transfer, 简称REST)描述了一个架构样式的网络系统，比如web应用程序，它首次出现在2000年Roy Fielding的博士论文中，他是HTTP规范的主要编写者之一。在目前主流的三种Web服务交互方案中，REST相比于SOAP（Simple Object Access protocol, 简单对象访问协议）以及XML-RPC更加简单明了，无论是对URL的处理还是Payload的编码，REST都倾向于用更加轻量的方法设计和实现。值得注意的是REST并没有一个明确的标准，而更像是一种设计的风格。

它本身并没有什么实用性，其核心价值在于如何设计出符合REST风格的网络接口

restful的优点

>  它结构清晰，符合标准，易于理解，扩展方便，所以正得到越来越多网站的采用。

restful的特性

> 资源（Resources）：网络上的一个实体，或者说是网络上的一个具体信息。

它可以是一段文本、一张图片、一首歌曲、一种服务，总之就是一个具体的存在。可以用一个URI（统一资源定位符）指向它，每种资源对应一个特定的URI。要获取这个资源，访问它的URI就可以，因此URI即为每个资源的独一无二的标识符。

表现层（Representation）：把资源具体呈现出来的形式，叫做它的表现层（Representation）。

比如，文本可以用txt格式表现，也可以用HTML格式、XML格式、JSON格式表现，甚至可以采用二进制格式。

状态转换（State Transfer）：每发出一个请求，就代表了客户端和服务器的一次交互过程。

HTTP协议，是一个无状态协议，即所有的状态都保存在鼓舞段。因此，如果客户端想要操作服务器，必须通过某种手段，让服务器端发生“状态转化“（State Transfer）。而这种转化是建立在表现层之上的，所以就是”表现层状态转化“。具体说，就是HTTP协议里面，四个表示操作方式的动词；GET、POST、PUT、DELETE。它们分别对应四种基本操作：GET用来获取资源，POST用来新建资源，PUT用来更新资源，DELETE用来删除资源。

## 实例

- /account/1         HTTP GET：得到id=1的account

- /account/1         HTTP DELETE：删除id=1的account

- /account/1         HTTP PUT：更新id=1的account

- /account             HTTP POST：新增account

![](https://picture.xcye.xyz/image-20210616120511740.png)





# 配置

## spring和springmvc

因为需要使用到spring的配置文件，但是在ssm项目中，spring需要设置视图解析器和bean还有mysql的数据源，连接池等等。

我们可以将他们一个spring配置文件拆分成两个，其中一个用来设置非web控制器，这样就可以使用配置文件看起来比较清晰



```
控制器部分配置
<context:component-scan base-package="vin.cco" use-default-filters="false">
    <!--因为这里配置的组件扫描器的包为vin.cco，会扫描所有的包，所以对这个组件扫描器进行限制-->
    <!--只扫描Controller包-->
    <context:include-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>

<!--配置视图解析器-->
<bean class="org.springframework.web.servlet.view.InternalResourceViewResolver" >
    <property name="prefix" value="/WEB-INF/view" />
    <property name="suffix" value=".jsp" />
</bean>

<!--将spring不能处理的请求交给tomcat进行处理-->
<mvc:default-servlet-handler />

<!--驱动注册-->
<mvc:annotation-driven />
```

> `component-scan`组件扫描器，设置扫描vin.cco下的所有包

### use-default-filters设置作用

默认的 filter 会扫描所有 @Component 注解修饰的 Java 类，而 @Controller、@Service、@Repository 甚至是 @Configuration 注解都是 @Componet 的衍生注解，所以也会被扫描到。因此，最简单的注解扫描配置就是只配置包路径，而 use-default-filters 属性不需要配置，其值默认为 true，默认是开启的，也就是`use-default-filters="true"`，设置`use-default-filters="false"`能够将组件扫描关闭



#### spring配置

```
<!-- 配置 IoC 容器的注解扫描的包路径 -->
<context:component-scan base-package="com.example">
    <!-- 制定扫包规则，不扫描 @Controller 注解修饰的 Java 类，其它还是要扫描 -->
    <context:exclude-filter type="annotation"
                            expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

`exclude-filter`是不扫描某个注解修饰的java类，但是其他的注解，是需要扫描的

因为默认是开启的，也就是`use-default-filters="true"`，因为spring不需要扫描`@Controller`注解，所以需要排除这个注解，最后只会扫描@Component、@Service、@Repository 和@Configuration 注解修饰的 Java 类。



#### springmvc配置

```
<!-- 配置 IoC 容器的注解扫描的包路径 -->
<context:component-scan base-package="com.example" use-default-filters="false">
    <!-- 制定扫包规则，只扫描使用 @Controller 注解修饰的 Java 类 -->
    <context:include-filter type="annotation"
                            expression="org.springframework.stereotype.Controller"/>
</context:component-scan>
```

`use-default-filters="false"`关闭扫描功能，也就是不会扫描`@Component`注解及其衍生的注解，但是在`include-filter`标签有指定了，能够扫描`@Controller`直接，所以最后，只会扫描 @Controller 注解修饰的 Java 类。



### spring mvc

```
<context:property-placeholder location="classpath:dbconfig.properties" />

<bean id="dataSource" class="com.mchange.v2.c3p0.ComboPooledDataSource" >
    <property name="jdbcUrl" value="${jdbc.url}" />
    <property name="user" value="${jdbc.username}" />
    <property name="password" value="${jdbc.password}" />
    <property name="driverClass" value="${jdbc.driver}" />
</bean>

<!--组件扫描器，因为这个并不是做web相关的，不是用来处理请求，所以，这里组件扫描器，就设置扫描除了控制器之外的所有类-->
<context:component-scan base-package="vin.cco" >
    <context:exclude-filter type="annotation" expression="org.springframework.stereotype.Controller"/>
</context:component-scan>

<!--配置sqlsession-->
<bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
    <property name="dataSource" ref="dataSource" />
    <property name="configLocation"  value="classpath:mybatis.xml" />
    <!--指定所有dao的mapper文件的路径，这里将所有的mapper文件放在mapper文件中，不放在dao包中-->
    <property name="mapperLocations" value="classpath:mapper/*.xml" />
</bean>

<!--将dao接口加入到容器中-->
<bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
    <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory" />
    <property name="basePackage" value="vin.cco.dao" />
</bean>

<!--事务控制配置-->
<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager" >
    <property name="dataSource" ref="dataSource" />
</bean>

<!--开启基于注解的事务，使用xml配置形成的事务-->
<aop:config >
    <!--设置切入点表达式 在service包及其子包中的所有方法，都是切入点-->
    <aop:pointcut id="txPointcut" expression="execution(* vin.cco.service..*(..))"/>
    <!--配置事务增强-->
    <aop:advisor advice-ref="txAdvisor" pointcut-ref="txPointcut" />
</aop:config>

<!--配置事务增强，事务如何切入 事务和切入点之间的联系是通过transaction-manager进行的 -->
<tx:advice id="txAdvisor" transaction-manager="transactionManager">
    <tx:attributes>
        <!--
             所有方法都是事务方法 这里的所有方法指的是execution(* vin.cco.service..*(..))
             切入点表达式中的所有的方法
             -->
        <tx:method name="*"/>
        <!--以get开始的所有方法  -->
        <tx:method name="get*" read-only="true"/>
    </tx:attributes>
</tx:advice>
```

因为需要使用到事务，但是事务，我们可以使用aop来做，这个可以使用注解，也可以使用xml配置的方式，在这里，我们使用的是基于xml的aop设置

- 设置切入点表达式

```
<aop:config >
    <!--设置切入点表达式 在service包及其子包中的所有方法，都是切入点-->
    <aop:pointcut id="txPointcut" expression="execution(* vin.cco.service..*(..))"/>
    <!--配置事务增强-->
    <aop:advisor advice-ref="txAdvisor" pointcut-ref="txPointcut" />
</aop:config>
```





## web.xml配置

```
<!--注册中央调度器-->
<servlet>
    <servlet-name>dispatcherServlet</servlet-name>
    <servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>
    <init-param>
        <param-name>contextConfigLocation</param-name>
        <param-value>classpath:dispatcherContext.xml</param-value>
    </init-param>
</servlet>

<servlet-mapping>
    <servlet-name>dispatcherServlet</servlet-name>
    <url-pattern>/</url-pattern>
</servlet-mapping>

<!--处理字符集过滤器-->
<filter>
    <filter-name>characterEncodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter</filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>utf-8</param-value>
    </init-param>
    <init-param>
        <param-name>forceRequestEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
    <init-param>
        <param-name>forceResponseEncoding</param-name>
        <param-value>true</param-value>
    </init-param>
</filter>
<filter-mapping>
    <filter-name>characterEncodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>

<!--使用rest风格的uri，使用过滤器将所有的post请求转换为put或者delete请求-->
<filter>
    <filter-name>methodFilter</filter-name>
    <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
</filter>

<filter-mapping>
    <filter-name>methodFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

因为我们需要使用rest风格的url，所以需要使用过滤器拦截所有的请求

```
<filter>
    <filter-name>methodFilter</filter-name>
    <filter-class>org.springframework.web.filter.HiddenHttpMethodFilter</filter-class>
</filter>

<filter-mapping>
    <filter-name>methodFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```

上面这个，可以将所有的post请求转换为put请求或者是delete请求



## mybatis配置

```
<settings>
    <!--设置mybatis输出日志-->
    <setting name="logImpl" value="STDOUT_LOGGING"/>
</settings>

<typeAliases>
    <package name="vin.cco.domain"/>
</typeAliases>
下面这个是设置分页插件
<plugins>
    <plugin interceptor="com.github.pagehelper.PageInterceptor">
        <!--分页参数合理化  -->
        <property name="reasonable" value="true"/>
    </plugin>
</plugins>
```





# mybatis逆向工程

什么是mybatis逆向工程？

我们可以先写好表，然后通过mybatis的逆向工程就可以更具数据表完成实体类，dao接口，dao接口映射mapper的xml文件，以及sql语句的创建

使用步骤

1. 进入到mybatis generator官网，使用其xml配置文件
2. 添加mybatis generator依赖
3. 完成

> 官网 http://mybatis.org/generator/



- 配置

可以使用下面这个配置

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE generatorConfiguration
        PUBLIC "-//mybatis.org//DTD MyBatis Generator Configuration 1.0//EN"
        "http://mybatis.org/dtd/mybatis-generator-config_1_0.dtd">
<generatorConfiguration>

    <!--此文件用于配置mybatis的逆向工程配置文件-->
    <context id="DB2Tables" targetRuntime="MyBatis3">
        <commentGenerator>
            <!--为true，表示生成不带注释的-->
            <property name="suppressAllComments" value="true" />
        </commentGenerator>
        <!-- 配置数据库连接 -->
        <jdbcConnection driverClass="com.mysql.jdbc.Driver"
                        connectionURL="jdbc:mysql://localhost:3306/ssm_crud" userId="root"
                        password="123456">
        </jdbcConnection>

        <javaTypeResolver>
            <property name="forceBigDecimals" value="false" />
        </javaTypeResolver>

        <!-- 指定javaBean生成的位置 -->
        <javaModelGenerator targetPackage="vin.cco.domain"
                            targetProject=".\src\main\java">
            <property name="enableSubPackages" value="true" />
            <property name="trimStrings" value="true" />
        </javaModelGenerator>

        <!--指定sql映射文件生成的位置 -->
        <sqlMapGenerator targetPackage="mapper" targetProject=".\src\main\resources">
            <property name="enableSubPackages" value="true" />
        </sqlMapGenerator>

        <!-- 指定dao接口生成的位置，mapper接口 -->
        <javaClientGenerator type="XMLMAPPER"
                             targetPackage="vin.cco.dao" targetProject=".\src\main\java">
            <property name="enableSubPackages" value="true" />
        </javaClientGenerator>


        <!-- table指定每个表的生成策略 -->
        <table tableName="emp_tb" domainObjectName="Employee"></table>
        <table tableName="dept_tb" domainObjectName="Department"></table>
    </context>
</generatorConfiguration>
```

> - 需要设置数据库连接信息
>
>     ```
>     <jdbcConnection driverClass="com.mysql.jdbc.Driver"
>                     connectionURL="jdbc:mysql://localhost:3306/ssm_crud" userId="root"
>                     password="123456">
>     </jdbcConnection>
>     ```
>
>     
>
> - 设置生成实体类位置
>
>     ```
>     <javaModelGenerator targetPackage="vin.cco.domain"
>                         targetProject=".\src\main\java">
>         <property name="enableSubPackages" value="true" />
>         <property name="trimStrings" value="true" />
>     </javaModelGenerator>
>     ```
>
>     `targetProject`目标工程，会在这个工程下，创建`targetPackage`包，生成的实体类就放在这个 里面
>
> - 设置生成策略
>
>     ```
>     <table tableName="emp_tb" domainObjectName="Employee"></table>
>     <table tableName="dept_tb" domainObjectName="Department"></table>
>     ```
>
>     这个就是设置文件的名字等，对于mapper文件，其命名格式为`domainObjectNameMapper.xml`，dao接口为`domainObjectNameMapper`
>
>     ![](https://picture.xcye.xyz/../image-20210616122036803.png)



```java
//生成的实体类
public class Department {
    private Integer deptId;

    private String deptName;

    public Integer getDeptId() {
        return deptId;
    }

    public void setDeptId(Integer deptId) {
        this.deptId = deptId;
    }

    public String getDeptName() {
        return deptName;
    }

    public void setDeptName(String deptName) {
        this.deptName = deptName == null ? null : deptName.trim();
    }
}
```

但是除了这个，还会生成几个

![](https://picture.xcye.xyz/image-20210616122211793.png)



# 使用spring单元测试

推荐使用spring的单元测试，因为我们可以使用spring容器中的对象，通过自动注入的，或者其他的方式

使用步骤

> 1. 导入spring-test依赖
>
>     ```
>     <dependency>
>         <groupId>org.springframework</groupId>
>         <artifactId>spring-test</artifactId>
>         <version>5.3.6</version>
>     </dependency>
>     ```
>
> 2. @ContextConfiguration指定Spring配置文件的位置
>
>     ```java
>     @RunWith(SpringJUnit4ClassRunner.class)
>     @ContextConfiguration(locations = {"classpath:applicationContext.xml"})
>     ```
>
> 3. 那么现在之后，我们就可以直接使用` @Autowired`注解进行自动注入



# JSR303字段检验

为了增加数据的安全性，除了前端进行字段校验之外，还需要后端进行字段校验，外加数据库的索引，`hibernate-validator`提供了字段校验，可以直接使用

## 使用步骤

> - 添加依赖
>
>     ```
>     <dependency>
>         <groupId>org.hibernate.validator</groupId>
>         <artifactId>hibernate-validator</artifactId>
>         <version>6.2.0.Final</version>
>     </dependency>
>     ```
>
>
> - 在实体类上添加校验规则
> - 在Controller中使用



```java
@Pattern(regexp = "^[a-z0-9_-]{3,16}$",message = "用户名必须是3到16位")
private String empName;

@Pattern(regexp = "^([a-z0-9_\\.-]+)@([\\da-z\\.-]+)\\.([a-z\\.]{2,6})$",
         message = "邮箱格式不正确")
private String email;
```



`@Pattern`注解中，可以使用正则表达式，错误消息等配置

> `@Pattern(regexp = "^[a-z0-9_-]{3,16}$",message = "用户名必须是3到16位")`
>
> 使用正则表达式`regexp`，`message`是如果校验失败，会出现的错误消息



但是官方提供了一些普遍的校验规格，比如邮箱，可以直接使用`@Email`便可以，但是推荐使用自己的校验规格

```java
@RequestMapping(value="/emp",method=RequestMethod.POST)
public Msg saveEmp(@Valid Employee employee, BindingResult result){
    if(result.hasErrors()){
        //校验失败，应该返回失败，在模态框中显示校验失败的错误信息
        Map<String, Object> map = new HashMap<>();
        List<FieldError> errors = result.getFieldErrors();
        for (FieldError fieldError : errors) {
            System.out.println("错误的字段名："+fieldError.getField());
            System.out.println("错误信息："+fieldError.getDefaultMessage());
            map.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        return Msg.sendMsg("fail",200).add("fieldError",map);
    }else{
        service.saveEmp(employee);
        return Msg.sendMsg("fail",200);
    }
}
```

如果需要使用，那么只需要在需要校验的地方，使用`@Valid Employee employee`此注解，表明将对该employee对象进行校验

`result.hasErrors()`能够查看校验是否通过

上面运行结果

```java
错误的字段名：empName
错误信息：用户名必须是3到16位
错误的字段名：email
错误信息：邮箱格式不正确
```



![](https://picture.xcye.xyz/image-20210621210517533.png)

