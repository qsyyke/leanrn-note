# tomcat服务器的概述



## 服务器：

就是安装了服务器软件的电脑，只是这种电脑的配置比较高，硬盘比较大，就比如使用的mysql，在使用的时候，我们会在自己的电脑上安装mysql服务器，那么我们就可以把我们自己的计算机看成是一个服务器，



## web服务器

web服务器就是像百度这样的，浏览器接收用户的请求，并且百度的服务器为这个请求作出响应，发送资源

在web服务器中，我们可以部署web项目，可以让不同的用户载不同的电脑上进行访问

## 常见的web服务器

常见的web服务器看截图，

### 什么是javaee?

javaee是企业级开发中使用的技术规范的总和，一共有13项规范

我们目前要使用的就是**tomca**tweb服务器，这是一个免费开源的项目，不收费，但是只支持少量的javaee规范

# Tomcat服务器

![](https://picture.xcye.xyz/image-20210214095714496.png?x-oss-process=style/pictureProcess1)

## Tomcat服务器的目录结构

- bin目录存放的是可执行的文件

- 如果想要启动Tomcat服务器，在Windows中就点击startup.bat，在Linux操作系统中，点击startup.sh，以sh结尾的都是在Linux中启动的

- conf是配置文件，

- lib目录存放的是启动Tomcat需要依赖的jar包

- logs日志打印

- temp存放的是临时文件，

- webapps是最重要的，存放的是web项目，如果我们想要将一个web项目在Tomcat服务器中打开，那么我们就只需要在webapps目录中新建一个目录，到时候访问这个目录进行

- work存放的是运行时的数据



## WebApps中打开自己的项目

webapps存放的是自己的web项目，我们的电脑已经安装了tomcatweb服务器，那么我们就可以认为，我的电脑就是一个服务器软件，

将品优购项目存入webapps目录中

![](https://picture.xcye.xyz/image-20210214100959883.png?x-oss-process=style/pictureProcess1)

现在我们就可以启动tomcat服务器，在浏览器中输入**127.0.0.1:8080/pyg**进行访问品优购项目

这里的127.0.0.1:8080/pyg中的pyg叫做虚拟目录

在像谷歌，火狐这种浏览器中我们不需要输入协议也是可以的，因为这种高级浏览器会自动添加上

现在，处于同一个局域网中的用户，就可以通过自己在局域网中的ip地址ip:8080/pyg访问这个品优购项目了

## tomcat项目的部署方式

部署项目的方式一共有三种

1. 第一种

   就是将项目的目录放置在webapps目录中，服务器启动，只需要输入../虚拟目录/资源文件就可以访问

   简化版本就是将资源文件打包成**war**包，放置在webapps目录中，系统会自动进行解压，如果把这个**war**包删除，系统也会自动删除

2. 第二种就是在server.xml文件中进行资源路径的配置

   在标签`<host></host>`标签中新建一个标签**`<Context docBase="D:\VSCodes\Shopping" path="/cc" />`**

   其中 Context是一个自闭和标签，docBase属性是资源的绝对路径位置

   path是虚拟目录，

   注意：配置完成之后，我们需要重启服务器才会生效，在浏览器中输入**127.0.0.1:8080/cc/index.html**就可以访问这个文件中的中资源

   但是这种方式不推荐使用，就是可能tomcat原本的文件会不可用，出现问题

3. 第三种部署项目的方式就是在**conf\Catalina\localhost**目录中新建任意xml的文件，并在里面写上`<Context docBase="D:\VSCodes\Shopping"/>`，这个docBase就是项目的绝对路径，必须要协商path虚拟目录，

   如何访问？这个时候，虚拟目录的名字就是这个xml的文件名，不用加后缀，例如**127.0.0.1:8080/pyg**



### 部署问题



tomcat 无法及时响应，http 请求一直pending状态

如果使用tomcat进行部署成功之后，我们点击控制台，也就是这个控制台，

![](https://picture.xcye.xyz/image-20210407083921270.png?x-oss-process=style/pictureProcess1)

那么我们访问servlet应用，发送请求的时候，status就会变成pending，这种状态，原因是因为我们点击了这个控制台，那么就会变成正在编辑，tomcat就不跑了，窗口设置默认选择了 “快速编辑模式，选项去掉，就可以了，（需要重启，不然选项即使去掉 对当前窗口不生效）





# 使用idea部署项目

步骤

## 配置tomcat

1. 首先是需要先配置tomcat在idea中

   在**run**中点击edit configurations

   ![](https://picture.xcye.xyz/image-20210214141456349.png?x-oss-process=style/pictureProcess1)

2. ![](https://picture.xcye.xyz/image-20210214141843396.png?x-oss-process=style/pictureProcess1)

3. 点击应用就行

   ![](https://picture.xcye.xyz/image-20210214141915844.png?x-oss-process=style/pictureProcess1)

   如果我们选择的是这个的话，那么我们只要更改java文件，就会重新进行部署，因为class文件我们经常会进行更改，所以这里不用选择update classes

![](https://picture.xcye.xyz/image-20210214142438032.png?x-oss-process=style/pictureProcess1)

如果是这个打钩了，那么就是在控制台不会打印out

这种不好看

![](https://picture.xcye.xyz/image-20210214142848913.png?x-oss-process=style/pictureProcess1)

这个配置还是挺重要的，默认的并不是这个斜杠，如果我么将其改成chuchen/，那么只有我们在浏览器中输入**127.0.0.1:8080/chuchen/**时，才会打开index.jsp文件

![](https://picture.xcye.xyz/image-20210214143148718.png?x-oss-process=style/pictureProcess1)

如果是一个斜杠**/**那么我么就只需要在浏览器中输入**127.0.0.1:8080**就能打开默认的index.jsp文件了

## 新建module

![](https://picture.xcye.xyz/image-20210214142214194.png?x-oss-process=style/pictureProcess1)

因为我们以前都是创建的是javase的module，现在我们要创建的是javaee的，就要选择**java Enteprise**，这里配置的可能是版本的原因，我找不到老师那种，但是也是可以使用的，

## 项目结构

![](https://picture.xcye.xyz/image-20210214142721321.png?x-oss-process=style/pictureProcess1)

如果我们想要创建HTML，那么就在webapp里创建html页面就行





# tomcat解决跨域问题



如果将一个项目部署到一个域名`api.vipblogs.cn`中，在本地或者是其他的域名`yq.vipblogs.cn`通过ajax请求`api.vipblogs.cn`中的某个接口的时候，就会出现跨域问题，在浏览器中可以正常请求，但是使用ajax就会出现跨域



浏览器报错情况

```
login.html:1 Access to XMLHttpRequest at 'http://localhost/sendmail?email=2291308006%40qq.com' from origin 'null' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```





## 解决方法



使用jar包

```
<!-- https://mvnrepository.com/artifact/com.thetransactioncompany/cors-filter -->
<dependency>
    <groupId>com.thetransactioncompany</groupId>
    <artifactId>cors-filter</artifactId>
    <version>2.9.1</version>
</dependency>

<!-- https://mvnrepository.com/artifact/com.thetransactioncompany/java-property-utils -->
<dependency>
    <groupId>com.thetransactioncompany</groupId>
    <artifactId>java-property-utils</artifactId>
    <version>1.16</version>
</dependency>
```





将这两个jar包添加到maven中，然后将下面的xml添加到tomcat的`web.xml`文件的上面

```xml
<welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
</welcome-file-list>
```





最后添加的情况，包括(`<welcome-file-list>`)

```
<!--  提供跨域支持 -->
<filter>    
    <filter-name>CORS</filter-name>    
    <filter-class>com.thetransactioncompany.cors.CORSFilter</filter-class>    
    <init-param>    
        <param-name>cors.allowOrigin</param-name>   
        <param-value>*</param-value>   
    </init-param>    
    <init-param>    
        <param-name>cors.supportedMethods</param-name>   
        <param-value>GET, POST, HEAD, PUT, DELETE</param-value>   
    </init-param>    
    <init-param>    
        <param-name>cors.supportedHeaders</param-name>   
        <param-value>Accept, Origin, X-Requested-With, Content-Type, Last-Modified</param-value>   
    </init-param>    
    <init-param>    
        <param-name>cors.exposedHeaders</param-name>   
        <param-value>Set-Cookie</param-value>   
    </init-param>    
    <init-param>    
        <param-name>cors.supportsCredentials</param-name>   
        <param-value>true</param-value>   
    </init-param>    
</filter>    
<filter-mapping>    
    <filter-name>CORS</filter-name>    
    <url-pattern>/*</url-pattern>    
</filter-mapping>

<welcome-file-list>
    <welcome-file>index.html</welcome-file>
    <welcome-file>index.htm</welcome-file>
    <welcome-file>index.jsp</welcome-file>
</welcome-file-list>
```





这样设置之后，便可以解决跨域出现的问题







# 将项目发布到云服务器，并使用域名进行访问



1. 在云服务器上安装tomcat

2. 将项目发布到webapps中

3. 进入servel.xml文件中，在Engine标签中，加上

    ```xml
    <Host autoDeploy="true" name="blogapi.cco.vin" unpackWARs="true" xmlNamespaceAware="false" xmlValidation="false">
        <Context crossContext="true" docBase="/usr/tomcat/tomcco/webapps/blog" path="" reloadable="true" />
    </Host>
    ```

   修改一下上面的字段就可以了，但是这样，需要在域名之后，加上端口号，才可以进行反问



## 宝塔添加反向代理

![](https://picture.xcye.xyz/image-20210514082721961.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210514082739967.png?x-oss-process=style/pictureProcess1)



如果添加失败，提示

`nginx: [emerg] host not found in upstream`，则进入到` /etc/hosts`，在后面加上

![](https://picture.xcye.xyz/image-20210514082910590.png?x-oss-process=style/pictureProcess1)

就可以解决
