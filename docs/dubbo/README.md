---
tag: [java,dubbo,框架]
categories: [框架]
stick: false
date: 2019/3/2
---

# 软件架构模式

## **单一应用架构**

当网站流量很小时，应用规模小时，只需一个应用，将所有功能都部署在一起，以减少部署服务器数量和成本。此时，用于简化增删改查工作量的数据访问框架(ORM)是关键。数据库的处理时间影响应用的性能

![](https://picture.xcye.xyz/image-20210602082412105.png?x-oss-process=style/pictureProcess1)

这种结构的应用适合小型系统，小型网站，或者企业的内部系统，用户较少，请求量不大，对请求的处理时间没有太高的要求。 将所有功能都部署到一个服务器，简单易用。开发项目的难度低。



> 缺点：
>
> 1、性能扩展比较困难
>
>  2、不利于多人同时开发
>
>  3、不利于升级维护
>
> 4、整个系统的空间占用比较大

`所有的功能模块都是在一个程序中`



## **分布式服务架构**

当应用越来越多。应用之间交互不可避免，将核心业务抽取出来，作为独立的服务，逐渐形成稳定的服务中心，使前端应用能更快速的响应多变的市场需求。此时，用于提高业务复用及整合的**分布式服务框架****(RPC)**是关键。分布式系统将服务作为独立的应用，实现服务共享和重用。

![](https://picture.xcye.xyz/image-20210602082606893.png?x-oss-process=style/pictureProcess1)



## 分布式系统

分布式系统是若干独立计算机（服务器）的集合，这些计算机对于用户来说就像单个相关系统，分布式系统（distributed system）是建立在网络之上的服务器端一种结构。

分布式系统中的计算机可以使用不同的操作系统，可以运行不同应用程序提供服务，将服务分散部署到多个计算机服务器上。



## RPC

RPC 【Remote Procedure Call】是指远程过程调用，是一种进程间通信方式，是一种技术思想，而不是规范。它允许程序调用另一个地址空间（网络的另一台机器上）的过程或函数，而不用开发人员显式编码这个调用的细节。调用本地方法和调用远程方法一样。

RPC 的实现方式可以不同。例如 java 的 rmi, spring 远程调用等。

RPC 概念是在上世纪 80 年代由 Brue Jay Nelson(布鲁·杰伊·纳尔逊)提出。使用 PRC 可以将本地的调用扩展到远程调用（分布式系统的其他服务器）。

RPC 的特点

> 1. 简单：使用简单，建立分布式应用更容易。
>
> 2. 高效：调用过程看起来十分清晰，效率高。
>
> 3. 通用：进程间通讯的方式，有通用的规则。

![](https://picture.xcye.xyz/image-20210602082755882.png?x-oss-process=style/pictureProcess1)

### RPC调用过程

1.调用方 client 要使用右侧 server 的功能（方法），发起对方法的调用

2.client stub 是 PRC 中定义的存根，看做是 client 的助手。stub 把要调用的方法参数进行序列化，方法名称和其他数据包装起来。

3.通过网络 socket(网络通信的技术)，把方法调用的细节内容发送给右侧的 server

4.server 端通过 socket 接收请求的方法名称，参数等数据，传给 stub。 

5.server 端接到的数据由 serverstub(server 的助手)处理，调用 server 的真正方法，处理业务

6.server 方法处理完业务，把处理的结果对象（Object）交给了助手，助手把 Object 进行序

列化，对象转为二进制数据。 

7.server 助手二进制数据交给网络处理程序

8.通过网络将二进制数据，发送给 client。 

9.client 接数据，交给 client 助手。

10.client 助手，接收数据通过反序列化为 java 对象（Object），作为远程方法调用结果。



> rpc 通讯是基于 tcp 或 udp 议
>
> 序列化方式（xml/json/二进制）
>
> 所以只需要他们之间，能够建立连接，就可以进行通信





# dubbo

Apache Dubbo (incubating) |ˈdʌbəʊ| 是一款高性能、轻量级的开源 Java RPC 框架，它提供了三大核心能力：面向接口的远程方法调用，智能容错和负载均衡，以及服务自动注册和发现。

Dubbo 是一个分布式服务框架，致力于提供高性能和透明化的 **RPC** 远程服务调用方案、服务治理方案。

**官网：**http://dubbo.apache.org/zh-cn/



## 特性

![](https://picture.xcye.xyz/image-20210602083023932.png?x-oss-process=style/pictureProcess1)

面向接口代理：调用接口的方法，在 A 服务器调用 B 服务器的方法，由 dubbo 实现对B的调用，无需关心实现的细节，就像 MyBatis 访问 Dao 的接口，可以操作数据库一样。不用关心Dao接口方法的实现。这样开发是方便，舒服的。



`dubbo是和spring进行无缝对接的，所以在dubbo中，使用的到的容器对象，就是spring中的容器对象`

## 基本架构

![](https://picture.xcye.xyz/image-20210602083208139.png?x-oss-process=style/pictureProcess1)

> 过程理解
>
> Container是一个容器对象，这个容器就是spring中的容器，所以dubbo是和spring无缝对接的，
>
> 第一步：将容器`Container`交给提供者，这个提供者可以理解为一个外卖公司，容器理解为外卖公司平太上的每一个店家
>
> 第二步：服务提供者将容器注册到注册中心(外卖公司，将每一个店家发布的每一个菜品发布到平台，在详情中，展示给用户查看)
>
> 第三步：`Consumer`服务消费方（点外卖的人）到注册中心进行订阅(`subscribe`)，相当于用户点外卖，订阅成功之后，注册中心会返回一个`notify`订阅地址（相当于用户点餐成功之后的订单详情）
>
> 第四步：使用刚刚订阅的这个对象(`invoke`)
>
> `Monitor`是一个监控中心，我们的每一次操作，都能够被监测到

**服务提供者（Provider）**：暴露服务的服务提供方，服务提供者在启动时，向注册中心注册自己提供的服务。

**服务消费者（**Consumer）: 调用远程服务的服务消费方，服务消费者在启动时，向注册中心订阅自己所需的服务，服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。

**注册中心（**Registry）：注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者

**监控中心（Monitor）**：服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心



- **调用关系说明**: 

⚫ 服务容器负责启动，加载，运行服务提供者。

⚫ 服务提供者在启动时，向注册中心注册自己提供的服务。

⚫ 服务消费者在启动时，向注册中心订阅自己所需的服务。

⚫ 注册中心返回服务提供者地址列表给消费者，如果有变更，注册中心将基于长连接推送变更数据给消费者。

⚫ 服务消费者，从提供者地址列表中，基于软负载均衡算法，选一台提供者进行调用，如果调用失败，再选另一台调用。

⚫ 服务消费者和提供者，在内存中累计调用次数和调用时间，定时每分钟发送一次统计数据到监控中心。



## **dubbo** **支持的协议**

支持多种协议：dubbo , hessian , rmi , http, webservice , thrift , memcached , redis。 

dubbo 官方推荐使用 dubbo 协议。dubbo 协议默认端口 20880

使用 dubbo 协议，spring 配置文件加入：

`<dubbo:protocol name="dubbo" port="20880" />`

这个就是在`invoke`调用服务的时候使用的协议

其实也可以没有注册中心，那么最后的架构就是下面的这个形式了

![](https://picture.xcye.xyz/image-20210602085110291.png?x-oss-process=style/pictureProcess1)

服务消费者直接可以调用服务提供者中的服务，就可以了



# 使用

## 使用步骤

以直连方式进行作为例子

1. 创建一个服务提供者
    - 新建maven工程
    - 导入spring依赖，dubbo依赖
    - 新建dubbo.xml配置文件，并且设置相关配置
    - 编写
2. 创建服务消费者
    - 新建maven工程
    - 导入依赖，spring，dubbo
    - 新建dubbo配置文件，spring文件
    - 配置`web.xml`文件
    - 编写

## 服务提供者

服务提供者，就是提供服务的程序，这里，需要我们将编写的服务提供者打包成jar包形式，并且安装到本地仓库中，然后在maven中，导入刚刚安装的这个依赖



```java
//user
public class User implements Serializable {
    private Integer id;
    private String name;
    private int age;

    @Override
    public String toString () {
        return "User{" + "id=" + id + ", name='" + name + '\'' + ", age=" + age + '}';
    }

    public Integer getId () {
        return id;
    }

    public void setId (Integer id) {
        this.id = id;
    }

    public String getName () {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }

    public int getAge () {
        return age;
    }

    public void setAge (int age) {
        this.age = age;
    }
}


//interface
public interface UserSer {
    User selectById(Integer id);
}

//impl
public class UserSerImpl implements UserSer {
    @Override
    public User selectById (Integer id) {
        User user = new User();
        user.setName("chuchen");
        user.setAge(21);
        user.setId(id);

        return user;
    }
}
```

将程序打包成jar包，并且安装到本地仓库，使用maven的`install`命令，将此jar安装到本地仓库使用

### 依赖

- spring相关

    ```
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-webmvc</artifactId>
        <version>5.3.6</version>
    </dependency>
    
    <dependency>
        <groupId>org.springframework</groupId>
        <artifactId>spring-context</artifactId>
        <version>5.3.5</version>
    </dependency>
    ```

    

- dubbo

    ```xml
    <dependency>
        <groupId>com.alibaba</groupId>
        <artifactId>dubbo</artifactId>
        <version>2.6.2</version>
    </dependency>
    ```

    

    ### 配置文件编写

    dubbo的配置文件，可以依照官方的进行编写

    ```xml
    <!--服务提供者声明名称:必须保证服务名称的唯一性,它的名称是dubbo内部使用的唯一标识-->
    <dubbo:application name="myDubbo" />
    
    <!--访问服务协议的名称及端口号,dubbo官方推荐使用的是dubbo协议,端口号默认为20880-->
    <!--
            name:指定协议的名称
            port:指定协议的端口号(默认为20880)
        -->
    <dubbo:protocol name="dubbo" port="20881" />
    
    <!--
            暴露服务接口->dubbo:service
            interface:暴露服务接口的全限定类名
            ref:接口引用的实现类在spring容器中的标识
            registry:如果不使用注册中心,则值为:N/A
        -->
    <dobbo:service interface="vin.cco.service.UserSer" ref="userService" registry="N/A" />
    
    <bean id="userService" class="vin.cco.service.impl.UserSerImpl" />
    ```

    

    `<dubbo:application name="myDubbo" />`这个是声明服务提供者的名字，必须要，并且需要唯一

    `<dubbo:protocol name="dubbo" port="20881" />`设置提供者的协议和端口信息，因为服务消费者需要和服务提供者进行连接通信，就需要连接，`name`就是协议名称，此值必须要是dubbo提供的协议，不能写错，如果写成`dobbo`，就会报错

    `<dobbo:service interface="vin.cco.service.UserSer" ref="userService" registry="N/A" />`因为服务消费者需要使用服务提供者中的对象，所以就需要让提供者暴露出来(`接口`)，`interface`值就是暴露出来的类，使用全限定名称，因为接口不能创建对象，所以就必须引用其实现类创建的对象，`ref`就是引用其实现类对象

    `registry`设置是狗使用注册中心，如果不需要使用注册中心，那么此值就是`registry="N/A"`

    

    > 当我们`<dobbo:service interface="vin.cco.service.UserSer" ref="userService" registry="N/A" />`后，那么这个对象，那么如果服务消费者和服务提供者连接成功之后，服务消费者就可以拿到这个对象

    

## 服务消费者

依赖和服务提供者的是一样的

```java
@Controller
public class MyController {   
    @Autowired
    private UserSer userService;
    //使用服务提供者中的<dobbo:service interface="vin.cco.service.UserSer" ref="userService" registry="N/A" />对象，通过bytype进行传值

    @RequestMapping("user")
    public String doUser(Model model, Integer id) {
        System.out.println(userService);
        User user = userService.selectById(id);
        model.addAttribute("user",user);
        System.out.println(user);
        return "show.jsp";
    }
}
```



### 配置文件

spring的就不用多说了



- dubbo

因为这是服务消费者，所以就需要和服务提供者进行连接通信


```
<!--声明消费者名称-->
<dubbo:application name="dubboConsumer" />

<!--
        引用远程服务接口:
        id:远程服务接口对象名称
        interface:调用远程接口的全限定类名
        url:访问服务接口的地址
        registry:不使用注册中心,值为:N/A
    -->
<dobbu:reference id="userSer"
                 interface="vin.cco.service.UserSer"
                 url="dubbo://localhost:20881" registry="N/A"
                 />
```

`<dubbo:application name="dubboConsumer" />`定义服务消费者名字

因为在服务提供者中，`<dobbo:service interface="vin.cco.service.UserSer" ref="userService" registry="N/A" />`就已经暴露了此对象，所以我们在服务消费者中，就可以使用这个暴露的对象，`id`就是远程接口对象的名称

`interface`就是调用远程接口的全限定类名，需要先导入服务提供者的jar包

`url`进行连接的信息



## 测试

现在当我们连接成功，访问

```java
@RequestMapping("user")
```

那么我们使用的对象就是远程服务提供者暴露出来的对象

在调用的时候，控制台会打印下面消息，可以证明连接成功

```java
com.alibaba.dubbo.common.logger.jcl.JclLogger.info  [DUBBO] Successed connect to server /192.168.43.84:20881 from NettyClient 192.168.43.84 using dubbo version 2.6.2, channel is NettyChannel [channel=[id: 0x0292bdc0, /192.168.43.84:65253 => /192.168.43.84:20881]], dubbo version: 2.6.2, current host: 192.168.43.84
    
com.alibaba.dubbo.common.logger.jcl.JclLogger.info  [DUBBO] Start NettyClient DESKTOP-JD7N6TI/192.168.43.84 connect to the server /192.168.43.84:20881, dubbo version: 2.6.2, current host: 192.168.43.84

com.alibaba.dubbo.common.logger.jcl.JclLogger.info  [DUBBO] Refer dubbo service vin.cco.service.UserSer from url dubbo://localhost:20881/vin.cco.service.UserSer?application=dubboConsumer&dubbo=2.6.2&interface=vin.cco.service.UserSer&methods=selectById&pid=11752&register.ip=192.168.43.84&revision=1.0-SNAPSHOT&side=consumer&timestamp=1622619860088, dubbo version: 2.6.2, current host: 192.168.43.84
```



如果断开服务提供者，请求`user`，因为服务提供者已经断开了，所以他们之间的连接已经断开，服务消费者就不能得到服务提供者暴露出来的对象

报错信息

```java
com.alibaba.dubbo.common.logger.jcl.JclLogger.warn  [DUBBO] client reconnect to localhost:20881 find error . url: dubbo://localhost:20881/vin.cco.service.UserSer?application=dubboConsumer&codec=dubbo&dubbo=2.6.2&heartbeat=60000&interface=vin.cco.service.UserSer&methods=selectById&pid=11752&register.ip=192.168.43.84&revision=1.0-SNAPSHOT&side=consumer&timestamp=1622619860088, dubbo version: 2.6.2, current host: 192.168.43.84
```



### 理解

> 但是这个例子的话，我们能够想到，因为我们导入了服务提供者这个jar包，那么我们完全可以在服务消费者中，直接创建对象，这不是很简单么，但是如果这样的话，那么就没有dubbo什么事
>
> 所以dubbo官方推荐，将服务提供者暴露出来的接口存放到一个信息的接口工程中(就只是一个java工程)
>
> ![](https://picture.xcye.xyz/image-20210602192750111.png?x-oss-process=style/pictureProcess1)
>
> 那么消费者就不能直接new提供者暴露的接口，只能通过连接进行使用







# 配置接口工程使用

1. 创建接口工程（就是普通的java maven工程）
2. 创建服务提供者
3. 创建服务消费者

他们之间的关系就是下图展示的这样

![](https://picture.xcye.xyz/image-20210603213225329.png?x-oss-process=style/pictureProcess1)

如果不使用接口工程的话，那么服务消费这就可以直接进行`new`对象，这样就没有dubbo什么事了，所以就需要创建一个单独的接口工程，这个工程需要写service服务的接口，不用写实现，实现交给服务提供者去实现，并且在这个接口工程中，需要创建暴露的实体类，比如，需要暴露的实体类为`User`，那么创建这个类，就在接口工程中

```java
public class User implements Serializable {
    private String name;
    private int age;
    private int id;
}
```

这个类是暴露出来的，也就是原先服务提供者暴露出来的那么，还需要有一个接口服务，这个服务用语暴露这个实体类

```java
//service
public interface UserService {
    User queryById(Integer id);
}
```

现在这个接口工程就已经完成了，只需要在服务提供者和消费者中，引入这个接口工程依赖

服务提供者实现这个接口service中的`UserService`接口，那么当他们之间连接成功之后，服务提供者就可以返回这个这个对象



## 代码

> 因为服务提供者和服务消费者需要使用到接口工程，所以可以将接口工程打包成jar，也可以直接在服务提供者和消费者的`pom`中，直接加上接口工程的依赖坐标，不用进行打包

服务提供者

```java
public class UserServiceImpl implements UserService {
//UserService是接口工程中的接口
    @Override
    public User queryById (Integer id) {
        User user = new User();
        user.setAge(21);
        user.setName("chuchen");
        user.setId(id);
        return user;
    }
}
```

依赖还是一样



服务消费者

```java
@Controller
public class MyController {

    /*@Qualifier("userSer")
    @Autowired
    private UserSer userSer;*/

    @Autowired
    private UserSer userService;

    @RequestMapping("user")
    public String doUser(Model model, Integer id) {

        System.out.println(userService);
        User user = userService.selectById(id);
        model.addAttribute("user",user);
        System.out.println(user);
        return "show.jsp";
    }
}
```



# 安装zookeeper

因为我们如果要使用注册中心的话，就必须选择一个注册中心，官方推荐使用`zookeeper`

这个是一个Apache的一个项目，下载地址为

`https://downloads.apache.org/zookeeper/`，选择一个低版本的进行安装，因为高版本，可能会出现闪退的问题



## 修改配置

进入到`conf`中，将`zoo_sample.cfg`文件复制一份，并将其改名为`zoo.cfg`

`dataDir`此值就是保存数据的文件夹，可以在此目录中，创建一个data文件夹，将data地址复制进去

`clientPort`是zookeeper的端口号，模式是`2181`

因为zookeeper连接的时候，默认使用的是`8080`端口，但是这个端口是tomcat的，所以就需要进行配置，`admin.servicePort=8888`



## 运行

进入`bin`，运行`zkServer.cmd`就可以了

如果出现闪退，那么就使用低版本就可以解决

在Linux中，运行



开始

```
./zkServer.sh start
```

结束

```
./zkServer.sh stop
```



# 版本控制

一个服务，可以存在多个实现类

每个接口都应定义版本号，为后续不兼容升级提供可能。当一个接口有不同的实现，项目早期使用的一个实现类， 之后创建接口的新的实现类。区分不同的接口实现使用 version。特别是项目需要把早期接口的实现全部换位新的实现类，也需要使用 version.

可以用版本号从早期的接口实现过渡到新的接口实现，版本号不同的服务相互间不引用。

可以按照以下的步骤进行版本迁移：

> 在低压力时间段，先升级一半提供者为新版本
>
> 再将所有消费者升级为新版本
>
> 然后将剩下的一半提供者升级为新版本



对服务接口创建多个实现类

![](https://picture.xcye.xyz/image-20210604175518836.png?x-oss-process=style/pictureProcess1)

可以对其中的实现方法内容进行变动，以此进行区分

```
<dubbo:service interface="vin.cco.service.UserService" ref="userService" version="1.0" />
<dubbo:service interface="vin.cco.service.UserService" ref="userServiceImpl2" version="2.0" />
<!--bean-->
<bean id="userService" class="vin.cco.service.UserServiceImpl" />
<bean id="userServiceImpl2" class="vin.cco.service.UserServiceImpl2" />
```

使用`version`进行版本控制

但是需要注意

> 如果服务提供者添加了`version`，那么服务消费者就必须加上版本号，而且此版本号在服务提供者中必须存在，否则就会出现bean不存在的情况
>
> 两个`dubbo:service`标签中，ref的值，必须不能相同



- 修改服务消费者

```
<dubbo:reference id="userService" interface="vin.cco.service.UserService" version="1.0" />
<dubbo:reference id="userService2" interface="vin.cco.service.UserService" version="2.0" />
```

现在就可以了



# 监控中心

这个监控中心，是dubbo官方已经写好的，不用我们去写，只需要在我们系统上，运行就可以，提供的是一个jar形式

`dubbo-admin-0.0.1-SNAPSHOT.jar`就是监控中心程序的名称

在cmd中运行，`java -jar dubbo-admin-0.0.1-SNAPSHOT.jar`就可以，运行成功之后，在浏览器输入`localhost:7001`，账号密码默认都是`root`



## 修改配置信息

![](https://picture.xcye.xyz/image-20210604180255063.png?x-oss-process=style/pictureProcess1)

进入此jar中

![](https://picture.xcye.xyz/image-20210604180338493.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210604180357444.png?x-oss-process=style/pictureProcess1)

在此界面中，可以看到服务的名称，dubbo的版本号等等信息



# 原理分析

`BeanDefinitionParser.class`接口是spring用来解析`xml`配置文件标签的一个接口，其下有很多的实现类，`DubboBeanDefinitionParser`类也是其的一个实习类，这个类，用来解析dubbo配置文件中的标签，解析的方法是`parse()`，能够解析出，每一个标签，如`service,reference,application`等标签中的信息

`DubboNamespaceHandler`类中的init()方法部分如下

```java
public void init() {
    this.registerBeanDefinitionParser("application", new DubboBeanDefinitionParser(ApplicationConfig.class, true));
    this.registerBeanDefinitionParser("module", new DubboBeanDefinitionParser(ModuleConfig.class, true));
    this.registerBeanDefinitionParser("registry", new DubboBeanDefinitionParser(RegistryConfig.class, true));
    this.registerBeanDefinitionParser("monitor", new DubboBeanDefinitionParser(MonitorConfig.class, true));
}
```

此方法能够将解析到的标签，封装成对应的组件，以供使用











