# 读取properties中文乱码

不能使用InputStream进行读取，使用Reader

```java
InputStreamReader is = null;
try {
    is = new InputStreamReader(Thread.currentThread().getContextClassLoader().
                               getResourceAsStream("common.properties"),"utf-8");
    pro.load(is);
} catch (UnsupportedEncodingException e) {
    e.printStackTrace();
}
```





# 连接数据库时区不正确

```java
The server time zone value '' is unrecognized or represents more than one time zone. You ....
```

就两种解决方式

- 使用sql命令设置时区

    ```sql
    show variables like '%time_zone%';
    set global time_zone='+8:00';
    ```

- 访问数据库的地址加上

    `url = "jdbc:mysql://localhost:3306/user?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=GMT"`



# Tomcat启动项目警告: org.apache.jasper.servlet.TldScanner.scanJars 至少有一个JAR被扫描用于TLD但尚未包含TLD...

找到自己Tomcat安装路路径下的`conf`目录里面的`catalina.properties`文件；
![](https://picture.xcye.xyz/image-20210523154429717.png?x-oss-process=style/pictureProcess1)
将下图等号后面的内容改为 ；
![](https://picture.xcye.xyz/image-20210523154444586.png?x-oss-process=style/pictureProcess1)
然后重新配置自己的服务器，重新启动，就成功了！！





# java.lang.ClassNotFoundException: com.thetransactioncompany.cors.CORSFilter

出现这个问题，是由于这个jar包的却是造成的，将这个依赖，添加到maven中，便可以解决

```xml
<dependency>
    <groupId>com.thetransactioncompany</groupId>
    <artifactId>cors-filter</artifactId>
    <version>2.10</version>
</dependency>
```



# `<url-pattern>/*</url-pattern>`遇到问题

如果这样配置映射的话，那么会遇到下面这个异常

```java
org.springframework.beans.factory.UnsatisfiedDependencyException: Error creating bean with name 'myController': Unsatisfied dependency expressed through field 'userSer'; nested exception is org.springframework.beans.factory.BeanCreationException: Error creating bean with name 'userSer': FactoryBean threw exception on object creation; nested exception is com.alibaba.dubbo.rpc.RpcException: Fail to create remoting client for service(dubbo://localhost:20081/vin.cco.service.UserSer?
```



## Linux后台运行jar

```shell
nohup java -jar xxx.jar &
```

杀死某个端口进程

```shell
netstat -apn|grep 8099
kill -9 811392
```

