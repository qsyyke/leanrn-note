# servlet

动态资源的理解

像我们的java程序，就是一个动态资源，java程序必须得依赖于服务器才能运行，他没有主方法，没有main方法去运行，我们可以理解为，是tomcat去运行编写的java程序

但是并不是随便创建一个java类，tomcat就会去创建其对象，调用其方法，他们必须要具有一种规则，这种规则就是这些类必须是新**servlet**接口，只有实现了这个接口，tomcat才能去运行他们，创建他们的对象，调用方法

servlet接口是在javaee api中才能找到

# 编写servlet

如何编写一个servlet程序？

1. 新建一个类，实现`Servlet`接口，重写里面的方法

## 配置web.xml文件

1. 配置web.xml文件

    ```
        <servlet>
            <servlet-name>demon1</servlet-name>
            <servlet-class>com.web.servlet.Demon1</servlet-class>
        </servlet>
        <servlet-mapping>
            <servlet-name>demon1</servlet-name>
            <url-pattern>/chu1</url-pattern>
        </servlet-mapping>
    
    ```

    其中servlet-name标签值随便写

    servlet-class需要写这个java类的完成类名

    servlet-mapping是映射，就是将一个浏览器中的虚拟目录映射到这个文件

    servlet-mapping标签中的servlet-name需要和servlet中的servlet-name保持一样

    url-pattern就是浏览器端口后面的虚拟目录，使用这个访问就可以执行这个`Demon1.java`程序

    如果想要测试，可以在

    ```java
    public void service (ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
            System.out.println("hello servlet");
        }
    ```

    中打印语句话，这样只要我们在浏览器中刷新一次，就会在控制台打印这句话

    ![](https://picture.xcye.xyz/image-20210214154616915.png?x-oss-process=style/pictureProcess1)

# servlet的执行原理

- 首先tomcat服务器接收浏览器的请求，解析请求地址

    http://localhost:8080/web/demon1

- 通过地址定位到服务器中的web项目，在web.xml文件中查找url-pattern是否有一个为**demon1**，没有，则找不到，如果存在，继续

- 通过mapping的servlet-name标签内容在servlet标签中查找servlet-name内容，如果都是一样的，那么tomcat就可以拿到这个java程序的字节码文件，因为包名已经知道，通过servlet-class知道的

- 拿到字节码文件，Class.forName()，就可以使用这个Class创建一个对象（newInstance()），之后就调用service方法，其他方法之后补充

## 配置servlet的启动时机

在web.xml文件中进行配置，并且一定要在servlet标签中进行配置，如果你想要为几个类，都设置启动时机，那么每一个类都需要设置

`<load-on-startup>5</load-on-startup>`有两个值，如果为负，则是第一次被访问的时候，就执行，也就是在浏览器中输入虚拟目录，按enter的时候

如果为整整数或者是0，那么就是只要服务器启动就执行，并且如果你有多个servletjava程序，那么就会执行多个多的init方法（前提所有的java程序都设置时机为整数的时候）

```xml
<servlet>
        <servlet-name>demon1</servlet-name>
        <servlet-class>com.web.servlet.Demon1</servlet-class>
<!--        指定servlet的创建时机-->
        <!--
        有两个值，一个为负，一个为正
        1. 第一次被访问时，创建，其值为负
        2. 在服务器启动时，创建，其值为正或者是0，也就是服务器启动的时候，就调用init()方法
        -->
        <load-on-startup>5</load-on-startup>
    </servlet>
```

# 方法

## destroy被摧毁时

这个方法是在servlet被销毁之前就执行，相当于是交代遗言，

一般用于释放资源

## init方法

只是在servlet被创建时执行，servlet是单例的，所以存在线程不安全的问题，解决的办法就是不要设置成员变量，设置局部变量

一般用于加载资源

# 注解进行配置

使用注解进行配置的时候，我们就不需要在使用web.xml就可以完成配置

但是只有servlet3.0才支持注解，也就是从javaee6开始就支持

## @WebServlet

![](https://picture.xcye.xyz/image-20210214174532429.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210214174555564.png?x-oss-process=style/pictureProcess1)

这个注解只能作用于类上，不能作用于方法或者其他上

urlPatterns()为虚拟目录，我们可以进行配置，@WebServlet(urlPatterns = "demon1")

其是一个数组

因为在配置的时候，最重要的就是url的地址，而且在注解中，value就代表着最重要的，所以我们也可以把urlPatterns()的值写在value中，这种方式更加的简洁

# 错误诊断

![](https://picture.xcye.xyz/image-20210214202758327.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210214202827864.png?x-oss-process=style/pictureProcess1)

# idea中如何打开不同项目tomca

## 将javaee jar包添加到项目中

![](https://picture.xcye.xyz/image-20210214205524478.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210214205610567.png?x-oss-process=style/pictureProcess1)

将tomcat中的lib目录添加到这里就可以了 

## 启动不同的项目

### 添加不同的tomcat

记住：不同的module需要启动不同的tomcat

![](https://picture.xcye.xyz/image-20210214205824444.png?x-oss-process=style/pictureProcess1)

点击加号，可以为不同的module添加不同的tomcat，如果启动一个tomcat，但是有两个，不能用这个module的tomcat去访问另一个的文件，减号可以取消tomcat

启动的时候，可以选择

![](https://picture.xcye.xyz/image-20210214211055144.png?x-oss-process=style/pictureProcess1)

## 配置

![](https://picture.xcye.xyz/image-20210214211335162.png?x-oss-process=style/pictureProcess1)

需要填写的是web的绝对位置

## tomcat Catalina Log乱码情况

将**apache-tomcat-9.0.40\conf\logging.prpperties**所有编码方式全部改成GBK就可以解决



# idea和tomcat的相关配置

我们知道，部署web应用就三种方式，其实idea就是使用的第三种的方式，只是idea已经为我们设置了

## 查看配置

通过打印信息Using CATALINA_BASE:   "C:\Users\chuchen\AppData\Local\JetBrains\IntelliJIdea2020.3\tomcat\6667befc-6feb-477e-b64c-eac42a173bf1"

可以打开当前项目的tomcat的配置

![](https://picture.xcye.xyz/image-20210214214439637.png?x-oss-process=style/pictureProcess1)

结构还是一样的

打开文件

![](https://picture.xcye.xyz/image-20210214214534075.png?x-oss-process=style/pictureProcess1)

从这里就可以知道，idea使用的就是部署项目中的第三种方式

![](https://picture.xcye.xyz/image-20210214214643541.png?x-oss-process=style/pictureProcess1)

此文件里对应的docBase就是web项目的地址，path就是我们在idea中的配置

![](https://picture.xcye.xyz/image-20210214214757778.png?x-oss-process=style/pictureProcess1)

并且此文件名就是以这个保存的，如果更改，只有重新启动tomcat才会看到改变的效果

## docBase

打开这个目录，此目录就是tomcat的工作空间

![](https://picture.xcye.xyz/image-20210214215022618.png?x-oss-process=style/pictureProcess1)

WEB-INF中保存的就是我们的java的字节码文件，并且其结构就是和我们在idea中的Src中的目录是一样的

![](https://picture.xcye.xyz/image-20210214215221927.png?x-oss-process=style/pictureProcess1)

