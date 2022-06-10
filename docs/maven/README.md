# maven使用介绍

- 什么是依赖？

    > 比如一个a.java其中的部分功能需要使用到b.java这个类，那么运行a.java就必须要有b.java，并b.java导入到a.java中

    在jar中也是一样的，a.jar的运行需要使用到b.jar这个包，那么我们在c.java程序中使用a.jar包时，就必须先将b.jar包下载下来，并这个jar包导入，才可以运行a.jar

    如果是传统的方式进行依赖的解决过程，那么就会花费大量的时间去进行这件事，所以这个时候就有了`maven`的出现，可以解决依赖



## 能做什么？





> 1. maven可以管理jar文件
> 1. 自动下载jar和他的文档，源代码
> 1. 管理jar直接的依赖，a.jar需要b.jar，maven会自动下载b.jar
> 1. 管理你需要的jar版本
> 1. 帮你编译程序，把java编译为class
> 1. 帮你测试你的代码是否正确。
> 1. 帮你打包文件，形成jar文件，或者war文件
> 1. 帮你部署项目

所以，maven这个工具是真的特别的强大



- 相似工具

    > 类似自动化构建工具还有：Ant, Maven, Gradle。



## maven构建项目过程



> 构建过程中的各个环节：清理、编译、测试、报告、打包、安装、部署。

构建（build），是面向过程的(从开始到结尾的多个步骤，涉及到多个环节的协同工作。



- 构建过程的几个主要环节

    > 1. 清理：删除以前的编译结果，为重新编译做好准备。
    >
    > 2. 编译：将Java源程序编译为字节码文件。
    >
    >     - `maven一次性可以编译成千上万个java程序，但是javac就只能编译一个，一次`
    >
    >     ​		这个过程是批量的，maven可以同时把成千上百的文件编译为class。
    >
    > 3. 测试：针对项目中的关键点进行测试，确保项目在迭代开发过程中关键点的正确性\
    >
    >     - maven可以执行测试程序代码，验证你的功能是否正确。
    >     - 批量的，maven同时执行多个测试代码，同时测试很多功能。
    >
    > 4. 报告：在每一次测试后以标准的格式记录和展示测试结果。
    >
    >     编译运行测试的结果，会有一个返回
    >
    > 5. 打包：将一个包含诸多文件的工程封装为一个压缩文件用于安装或部署。Java 工程对应 jar 包，Web工程对应war包。
    >
    > 6. 安装：在Maven环境下特指将打包的结果——jar包或war包安装到本地仓库中。
    >
    >     这个过程是将5中的打包文件安装到本地仓库
    >
    > 7. 部署：将打包的结果部署到远程仓库或将war包部署到服务器上运行





## 核心概念



Maven能够实现自动化构建是和它的内部原理分不开的，这里我们从 Maven的九个核心概念入手，

看看Maven是如何实现自动化构建的

1. POM 

    这是一个文件`pom.xml`maven把一个项目当做一个模型使用。控制maven构建项目的过程，管理jar依赖。

2. 约定的目录结构：maven项目的目录和文件的位置都是规定的。

3. 坐标： 是一个唯一的字符串，用来表示资源的。

4. 依赖管理：管理你的项目可以使用jar文件

5. 仓库管理：你的资源存放的位置

6. 生命周期：maven工具构建项目的过程，就是生命周期。

7. 插件和目标：执行maven构建的时候用的工具是插件

8. 继承

9. 聚合





## 安装



`maven`的使用也是有命令行的，但是命令行一般特别难记，在idea中使用maven就会变得特别的容易

其本身是使用java进行编写的，所以在使用maven的时候，必须要确保安装了java，并且设置环境变量了



> `maven`同样也是需要配置环境变量，方法和java的一样，只需要将`bin`之前的目录添加到环境中，然后使用`%...%/bin`



![](https://picture.xcye.xyz/image-20210315193220348.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210315193255215.png?x-oss-process=style/pictureProcess1)

> 使用命令`mvn -v`就可以查看是否成功安装了maven





![](https://picture.xcye.xyz/image-20210315193337158.png?x-oss-process=style/pictureProcess1)



## 约定目录结构



这是一种规范，我们必须要遵守，但是可以打破，特别不建议这样使用



假如，我们现在正在写一个项目(`chuchen`)，其项目结构为



> chuchen(项目名)
>
> |---src(根目录)
>
> |---|---main
>
> |---|---|---java
>
> |---|---|---resources
>
> |---|---test
>
> |---|---|---java
>
> |---|---|---resources
>
> |---pom.xml



main目录中放置的程序是我们真正需要使用到的，就是核心的代码，main目录下的`resouces`目录中存放的是需要的配置文件，比如`xml,properties`等所有的配置文件，都必须放在此目录中

java目录放置我们的代码



test目录和main是同级的，这个目录下放置的就是我们的测试程序，但是这个目录是可有可无的

一个maven项目，必须要有`pom.xml`这个文件



### 执行一个maven项目



在本地新建一个目录，其目录为，使用cmd命令`tree 文件名可以查看此目录的结构`

> └─hello
>     └─src
>         ├─main
>         │  ├─java
>         │  │  └─com
>         │  │      └─chu
>         │  └─resources
>         └─test
>             ├─java
>             │  └─com
>             │      └─chu
>             └─resources



当写了一个程序之后，进入到`hello`目录中，运行命令`mvn compile`就可以编译，运行此命令的时候，编译的是`main`，会在src目录中创建一个`target`目录，编译`mvn compile`会main目录中的java程序编译之后，放在`target`中，



- 问题

    如果执行`mvn compile`，如果没有指定jdk的版本的话，那么就会报错，出现这种情况的原因是因为，默认maven使用的是低版本的jdk，但是我使用的是13，所以就出现了这个问题，

    ```java
    [ERROR] 不再支持源选项 5。请使用 7 或更高版本。
    [ERROR] 不再支持目标选项 5。请使用 7 或更高版本。
    ```

    

    

- 解决方式

    1. 在`pom.xml`文件中，指明使用的jdk版本

        ```xml
        <properties>
            <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        	<maven.compiler.source>13</maven.compiler.source>
        	<maven.compiler.target>13</maven.compiler.target>
        </properties>
        ```

    2. 方式二：(网络上)

        ```xml
        <profile>  
             <id>jdk-13</id>  
             <activation>  
                 <activeByDefault>true</activeByDefault>  
                 <jdk>13</jdk>  
             </activation>
             <properties>
                 <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
                 <maven.compiler.source>13</maven.compiler.source>  
                 <maven.compiler.target>13</maven.compiler.target> 
        		 <maven.compiler.compilerVersion>13</maven.compiler.compilerVersion> 
             </properties>   
        </profile>  
        ```

        

​    正常的时候，第一次使用maven，执行`mvn compile`会出现下载文件的过程，但是我在执行的时候，并没有这个过程

![](https://picture.xcye.xyz/image-20210315205354224.png?x-oss-process=style/pictureProcess1)

像这样



- 为什么会出现下载？

     maven工具执行的操作需要很多插件（java类--jar文件）完成的

- 下载什么东西了
     jar文件--叫做插件--插件是完成某些功能

- 下载的这些东西会存放在仓库中，仓库的默认位置为

    >  C:\Users\（登录操作系统的用户名）Administrator\.m2\repository

![](https://picture.xcye.xyz/image-20210315205550660.png?x-oss-process=style/pictureProcess1)



当执行一个maven程序的时候，无论是否编译成功，都会返回一个结果，有成功，有失败



![](https://picture.xcye.xyz/image-20210315200503914.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210315205651274.png?x-oss-process=style/pictureProcess1)





## 修改本地仓库位置



1. 先备份`conf setting.xml`文件
2. 修改`<localRepository>D:\other\mavenwarm</localRepository>`，将这个值修改为想要存放的位置

这样配置之后，之后下载的东西都不会存放在C盘中，会存放在设置的这个文件中



如果修改仓库地址之后，再次执行`mvn compile`，就会重新下载东西

![](https://picture.xcye.xyz/image-20210315211116448.png?x-oss-process=style/pictureProcess1)





## 仓库

现在我们对maven工程有一个大概的认识了，那现在思考一个问题，maven怎么就这么神奇，我们写完的工

程交给他之后，他就能够自动帮我们管理，我们依赖的jar包它从哪儿获取呢？有同学说已经安装了，在它的安装

包里啊，大家可以看一下maven下载下来才8M，我们需要的jar包有时候都几百兆甚至几个G，它从哪儿弄去呢？

其实，maven有仓库的概念。在Maven中，任何一个依赖、插件或者项目构建的输出，都可以称之为构件。Maven

核心程序仅仅定义了自动化构建项目的生命周期，但具体的构建工作是由特定的构件完成的。而且为了提高构建

的效率和构件复用，maven把所有的构件统一存储在某一个位置，这个位置就叫做仓库。



仓库就是我们每次在编译的时候，maven会从网络上进行下载，比如那些jar包，并且将这些下载的jar包放在我们在配置的`<localRepository>D:\other\mavenwarm</localRepository>`中，如果我们下次程序使用`mvn compile`的时候，并且java中的jar包没有进行多余的其他，那么就不会再进行下载，编译的时间就会非常的快



如果还有其他的jar包需要使用，那么就会再次进行下载，那些已经存在的jar包就不会再次进行下载

`每一个mvn compile`都会先从本地仓库中查找需要的jar包是否存在，如果没有存在，就进行下载



### 仓库中存放的是什么

1. Maven 的插件，插件也是一些 jar，这些 jar 可以完成一定的功能。

2. 我们自己开发项目的模块

3. 第三方框架或工具的 jar 包



### 仓库的类别

根据仓库存储的位置，把仓库分为本地仓库和远程仓库。

- 本地仓库

**本地仓库**，存在于当前电脑上,默认存放在~\.m2\repository中,为本机上所有的Maven工程服务。你也可以

通过Maven的配置文件Maven_home/conf/settings.xml中修改本地仓库所在的目录。

~ 是用户的主目录，windows系统中是 c：/user/登录系统的用户名

- 远程仓库

**远程仓库**，分为为全世界范围内的开发人员提供服务的中央仓库、为全世界范围内某些特定的用户提供服务的、

- 私服仓库

    为本公司提供服务自己架设的私服，只能存在于局域网中，外部人员不能使用，只能公司内部使用

- 中央镜像仓库

中央仓库是maven默认的远程仓库，其地址

是:http://repo.maven.apache.org/maven2/

中央仓库，包含了绝大多数流行的开源Java构件，以及源码、作者信息、许可证信息等。一般来说，简单的

Java项目依赖的构件都可以在这里下载得到。

私服是一种特殊的远程仓库，它是架设在局域网内的仓库服务，私服代理广域网上的远程仓库，供局域网内的

Maven用户使用。当Maven需要下载构件的时候，它从私服请求，如果私服上不存在该构件，则从外部的远程仓

库下载，缓存在私服上之后，再为Maven的下载请求提供服务。我们还可以把一些无法从外部仓库下载到的构件

上传到私服上。



- 分类说明：

    > 1. 本地仓库：本机当前电脑上的资源存储位置，为本机上所有 Maven工程提供服务
    >
    > 2. 远程仓库：不在本机上， 通过网络才能使用。多电脑共享使用的。
    >
    > 3. 中央仓库：通过Internet访问，为全世界所有 Maven工程服务。 最权威的。
    >
    > 4. 中央仓库的镜像：架设在不同位置，欧洲，美洲，亚洲等每个洲都有若干的服务器，为中央仓库分担流量。减轻中央仓库的访问，下载的压力。所在洲的用户首先访问的是本洲的镜像服务器。
    >
    > 5. 私服：在局域网环境中部署的服务器，为当前局域网范围内的所有 Maven工程服务。公司中常常使用这种方式。

![](https://picture.xcye.xyz/image-20210315213913248.png?x-oss-process=style/pictureProcess1)

其路径为

`本地仓库---> 私服 ---> 镜像 ---> 中央仓库`

也就是说，如果我们需要的一个jar包，在本地没有，那么就会在私服上进行查找(有私服的情况)，如果私服上也没有，那么就会向镜像上进行查找，如果这个也没有，则会到中央仓库中进行查找，如果中央仓库中也没有，则说明你的地址写错了



如果在中央仓库中找到，那么就会在镜像中备份一分，在私服中备份一份(有的情况)，保存到本地中，这样能够保证下次直接在本地就可以使用



## pom



即 Project Object Model 项目对象模型。Maven 把一个项目的结构和内容抽象成一个模型，在 xml 文件中进行声明，以方便进行构建和描述，pom.xml 是 Maven 的灵魂。所以，maven 环境搭建好之后，所有的学习和操作都是关于 pom.xml 的。



| modelVersion | Maven 模型的版本，对于 Maven2 和 Maven3 来说，它只能是 4.0.0 |                                    |
| ------------ | ------------------------------------------------------------ | ---------------------------------- |
| groupId      | 组织 id，一般是公司域名的倒写。 格式可以为：1. 域名倒写。 例如 com.baidu    2. 域名倒写+项目名。例如 com.baidu.appolo | groupId artifactIdversion 三个元素 |
| artifactId   | 项目名称，也是模块名称，对应 groupId 中 项目中的子项目。     |                                    |
| version      | 项目的版本号。如果项目还在开发中，是不稳定版本，通常在版本后带-SNAPSHOT   version 使用三位数字标识，例如 1.1.0 |                                    |
| packaging    | 项目打包的类型，可以使 jar、war、rar、ear、pom，默认是 jar   |                                    |

![](https://picture.xcye.xyz/image-20210315215810293.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210315215829760.png?x-oss-process=style/pictureProcess1)![](https://picture.xcye.xyz/image-20210315215847211.png?x-oss-process=style/pictureProcess1)





- `<modelVersion>4.0.0</modelVersion>`

    这个值是一个固定的值，目前就只有4.0

- `groupId `

    一般是公司域名的倒写，可以加上项目名

- `artifactId`

    是项目名，对应`groupId `的子项目名

如

```
<groupId>com.chu.hello</groupId>
<artifactId>hello</artifactId>
```

- `version `

    版本号，项目的版本号。如果项目还在开发中，是不稳定版本，通常在版本后带-SNAPSHOT，version 使用三位数字标识，例如 1.1.0



> `groupId ，artifactId，version`称为坐标，通过这三个值，可以在互联网上唯一标识一个jar包



中央仓库地址

 https://mvnrepository.com/ 搜索使用的中央仓库， 使用groupId 或者 artifactId作为搜索条件



- `packaging `

    可以指定我们这个项目会被打包成jar格式还是war格式，默认是jar格式

- `dependencies和dependency`这两个是一个使用的，配置项目所需的依赖包

    比如我们要使用mysql的驱动

    ```xml
    <dependencies>
        <!-- https://mvnrepository.com/artifact/mysql/mysql-connector-java -->
        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.14</version>
        </dependency>
    </dependencies>
    ```

- `properties`

    properties 是 用 来 定 义 一 些 配 置 属 性 的 ， 例 如project.build.sourceEncoding（项目构建源码编码方式），可以设置为UTF-8，防止中文乱码，也可定义相关构建版本号，便于日后统一升级

    ```xml
    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    	<maven.compiler.source>13</maven.compiler.source>
    	<maven.compiler.target>13</maven.compiler.target>
    </properties>
    ```

- `build `

    build 表示与构建相关的配置，例如设置编译插件的 jdk 版本





```
<project xmlns = "http://maven.apache.org/POM/4.0.0"
    xmlns:xsi = "http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation = "http://maven.apache.org/POM/4.0.0
    http://maven.apache.org/xsd/maven-4.0.0.xsd">
 
    <!-- 模型版本 -->
    <modelVersion>4.0.0</modelVersion>
    <!-- 公司或者组织的唯一标志，并且配置时生成的路径也是由此生成， 如com.companyname.project-group，maven会将该项目打成的jar包放本地路径：/com/companyname/project-group -->
    <groupId>com.companyname.project-group</groupId>
 
    <!-- 项目的唯一ID，一个groupId下面可能多个项目，就是靠artifactId来区分的 -->
    <artifactId>project</artifactId>
 
    <!-- 版本号 -->
    <version>1.0</version>
</project>
```





# 生命周期

Maven 构建生命周期定义了一个项目构建跟发布的过程。

一个典型的 Maven 构建（build）生命周期是由以下几个阶段的序列组成的：

、

![](https://picture.xcye.xyz/image-20210316220152028.png?x-oss-process=style/pictureProcess1)





![](https://picture.xcye.xyz/image-20210316220310236.png?x-oss-process=style/pictureProcess1)





## junit工具

这个工具就是用来测试方法是否能够执行，就是在方法的注解上加入`@Test`

但是使用这个工具需要满足下面的几点

> 1. 需要导入依赖
>
>     ```xml
>     <!-- https://mvnrepository.com/artifact/junit/junit -->
>     <dependency>
>         <groupId>junit</groupId>
>         <artifactId>junit</artifactId>
>         <version>4.12</version>
>         <scope>test</scope>
>     </dependency>
>     ```
>
> 2. 方法必须是`public`修饰的
>
> 3. 方法没有返回值，也就是方法是`void`





## 基本命令

1. `mvn clean`

    这个命令可以清楚在此之前编译的文件，当执行这个命令的时候，是由

    ![](https://picture.xcye.xyz/image-20210316223025101.png?x-oss-process=style/pictureProcess1)

    这个插件完成的，所以，如果没有这个插件的话，会进行下载

    当执行的时候，会

    ![](https://picture.xcye.xyz/image-20210316223107058.png?x-oss-process=style/pictureProcess1)

2. `mvn compile`

    当执行这个命令的时候，如果没有其他的依赖需要进行下载的话，那么这个命令会使用两个插件，此命令编译的是`main`中的程序

    首先就是`maven-resources-plugin:`此命令会去将main包中的resources目录中的文件，复制到

    `target\classes`目录中，也就是这个命令是用来执行配置文件的

    `maven-compiler-plugin`此命令是用来进行编译，会将编译的字节码文件放入到相应的包中

    ![](https://picture.xcye.xyz/image-20210316223756128.png?x-oss-process=style/pictureProcess1)



3. 编译测试`test`文件，执行命令`mvn test-compile`

    因为测试目录中，同样有`resources`，所以` maven-resources-plugin:`插件会被使用

    编译插件`maven-compiler-plugin:`也会被使用

4. 运行测试文件，使用命令`mvn test`

    此命令执行的是编译的测试的程序，因为maven的声明周期为：验证，编译，测试

    我们现在执行的`mvn test`就处于测试阶段，所以当我们执行这个命令的时候，其前面的验证，编译也会进行，所以当我们修改测试类中的代码的时候，我们不用先进行编译，在执行`mvn test`，因为这个命令就会执行编译

    ![](https://picture.xcye.xyz/image-20210316230154740.png?x-oss-process=style/pictureProcess1)

    ![](https://picture.xcye.xyz/image-20210316230614087.png?x-oss-process=style/pictureProcess1)

    执行两个，有一个执行出错

    ![](https://picture.xcye.xyz/image-20210316230759120.png?x-oss-process=style/pictureProcess1)

    

1. `mvn package`打包命令

    此命令会将main目录中的程序进行打包，被打包成什么文件，是由`pom.xml`文件进行指定的，默认是jar，如果执行成功，那么会将打包成的这个jar包放在`target目录中`，

    > `如果执行此命令的时候，测试类中的程序有至少一个发生了错误，那么这个打包命令就不能执行，会报错`
    >
    > 打包命令使用的插件为`maven-jar-plugin:2.4:jar`

    ![](https://picture.xcye.xyz/image-20210316231953592.png?x-oss-process=style/pictureProcess1)

    ![](https://picture.xcye.xyz/image-20210316232128213.png?x-oss-process=style/pictureProcess1)



- `mvn install`安装命令，执行此命令的时候，会将打包的文件，放入到本地仓库中，相应的，以为mvn的声明周期，当执行此命令的时候，会将前几个周期都执行

    ![](https://picture.xcye.xyz/image-20210316233007160.png?x-oss-process=style/pictureProcess1)

    如果配置文件中的`<groupId>vipblogs.cn.hello</groupId>`，是通过`.`进行隔开的，那么会在仓库中生成由`.`分割开的目录

    想要在本地仓库中去找这个jar包的话，就去后面的那个地址中进行查找

    ![](https://picture.xcye.xyz/image-20210316233310877.png?x-oss-process=style/pictureProcess1)





在另外的程序中，使用安装到本地的jar包

1. 首先需要导入依赖，这个依赖就是我们`pom.xml`中定义的坐标

    因为坐标都是全球唯一的，所以可以通过这个依赖查找到哪个jar

    ```
      <groupId>vipblogs.cn.hello</groupId>
      <artifactId>chuchen</artifactId>
      <version>1.0-0</version>
    ```

    





# idea中使用maven

因为默认idea中会有内置的maven配置，但是一般不使用idea默认的，以为修改配置会特别麻烦

手动配置需要修改maven安装目录，`setting.xml`文件的位置

仓库位置



![](https://picture.xcye.xyz/image-20210317081911224.png?x-oss-process=style/pictureProcess1)







![](https://picture.xcye.xyz/image-20210317082547065.png?x-oss-process=style/pictureProcess1)



设置此选项的目的，就是创建maven项目的时候，会联网进行模板文件的下载，添加此选项可以不用进行下载，会节省很大声的工程加载时间





- 除了上面的配置之外，还需要进行设置

    

    新建或者打开项目，由于每次项目中使用的是默认设置，这个默认设置会使得每次新建项目都会重新配置maven。 要想解决每次都去重新配置maven，就需要对默认设置进行修改。

   以下操作只对新版2020版本以上有用

    ![](https://picture.xcye.xyz/image-20210317083242420.png?x-oss-process=style/pictureProcess1)

    

    ![](https://picture.xcye.xyz/image-20210317083143821.png?x-oss-process=style/pictureProcess1)





##创建maven项目



![](https://picture.xcye.xyz/image-20210317083756716.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210317083930306.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210317084012047.png?x-oss-process=style/pictureProcess1)

之后就可以了

![](https://picture.xcye.xyz/image-20210317084044840.png?x-oss-process=style/pictureProcess1)





但是使用这个模板进行创建maven项目的时候，没有src



所以在进行创建的时候，不要点击使用`quickstart`进行创建，

![](https://picture.xcye.xyz/image-20210317084909654.png?x-oss-process=style/pictureProcess1)

点击这个就可以了

![](https://picture.xcye.xyz/image-20210317084846031.png?x-oss-process=style/pictureProcess1)





如果创建的目录中没有java，resources等目录，可以手动创建一个文件夹

![](https://picture.xcye.xyz/image-20210317085035750.png?x-oss-process=style/pictureProcess1)

然后右键，点击上面这个，在根据需要添加

需要保证变颜色才行

![](https://picture.xcye.xyz/image-20210317085124306.png?x-oss-process=style/pictureProcess1)





## 使用maven窗口



![](https://picture.xcye.xyz/image-20210317185830210.png?x-oss-process=style/pictureProcess1)

idea已经将maven中的命令行做成按钮的形式，直接点击就可以





## 新建一个web



![](https://picture.xcye.xyz/image-20210317190627767.png?x-oss-process=style/pictureProcess1)

新建的maven是没有test目录的，需要手动进行添加



因为正常情况，我们在创建web项目的时候，我们会进入到module中将需要的包进行导入，但是使用maven之后，就不需要再这样，可以直接在`pom.xml`文件中添加需要的依赖就行



## 将自己的web项目使用原生Tomcat进行部署

如果要完成这一步的话，那么需要将这个项目打包成`war`包，然后启动tomcat服务器，并将这个war文件放入到`webapps`中，就可以输入路径进行访问了



对于web应用，maven默认的打包形式就是`war`



![](https://picture.xcye.xyz/image-20210317200004303.png?x-oss-process=style/pictureProcess1)





# 依赖的范围

对于部分的依赖jar包，我们可能在不同的阶段，不需要使用到，所以这个时候，就可以设置依赖的范围

scope的值有 compile, test, provided ,默认是compile
scope:表示依赖使用的范围，也就是在maven构建项目的那些阶段中起作用。
maven构建项目  编译， 测试 ，打包， 安装 ，部署 过程（阶段）

![](https://picture.xcye.xyz/image-20210317203825552.png?x-oss-process=style/pictureProcess1)





依赖的范围使用`scope`进行设置

`其值是maven的声明周期值`

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.11</version>
    <scope>test</scope>
</dependency>
```

那么这个`junit`包就只能在测试阶段有作用，在其他的阶段，比如运行主程序的时候，不会使用到



![](https://picture.xcye.xyz/image-20210317203448960.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20210317203512460.png?x-oss-process=style/pictureProcess1)



`pom.xml`文件设置

![](https://picture.xcye.xyz/image-20210317203539433.png?x-oss-process=style/pictureProcess1)





但是更改之后，就可以正常使用

![](https://picture.xcye.xyz/image-20210317203655205.png?x-oss-process=style/pictureProcess1)



如果这个值为`provided`，那么就只是在特使阶段和编译阶段有效，对于其他的阶段，比如打包阶段，不会将这个jar包包含在类，就比如servlet类需要的jar包，我们就可以设置为`provided`，因为在tomcat中，就有这两个需要的jar包，在打包成的jar或者`war`包中，也找不到





- 下面图片是在测试打包后的jar包

![](https://picture.xcye.xyz/image-20210317204417110.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210317204350379.png?x-oss-process=style/pictureProcess1)







## 如果本地仓库中没有这个jar包，何时进行下载

如果本地的仓库中，没有这个需要的jar包，那么当我们写上这个依赖的时候，maven就会在本地仓库中进行搜索这个jar包，如果没有这个或者版本没有这个的话，就会立马进行下载



判断是否子本地有的最好办法，就是看是否有红色波浪线



- 测试

    ![](https://picture.xcye.xyz/image-20210317204827952.png?x-oss-process=style/pictureProcess1)

    本地仓库中，没有`junit.jar 4.12`

    ![](https://picture.xcye.xyz/image-20210317204906931.png?x-oss-process=style/pictureProcess1)

    ![](https://picture.xcye.xyz/image-20210317204954962.png?x-oss-process=style/pictureProcess1)

    自动进行下载，很快就完成了



# 全局变量

在 Maven 的 pom.xml 文件中，`<properties>`用于定义全局变量，POM 中通过${property_name}的形式引用变量的值。

定义全局变量：

```xml
<properties>
 <spring.version>4.3.10.RELEASE</spring.version>
</properties>
```

引用全局变量：

```xml
<dependency>
    <groupId>org.springframework</groupId>
    <artifactId>spring-context</artifactId>
    <version>${spring.version}</version>
</dependency>
```

Maven 系统采用的变量：

```xml
<properties>
     <maven.compiler.source>1.8</maven.compiler.source> 源码编译 jdk 版本
     <maven.compiler.target>1.8</maven.compiler.target> 运行代码的 jdk 版本
     <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding> 项目构建使用的编码，避免中文乱码
     <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding> 生成报告的编码
 </properties>
```



因为对于像spring这种框架，我们可能会使用他们的多个jar包，并且需要保证他们的版本号是统一的，如果一个一个的去进行修改的话，就会使得太麻烦，所以可以使用这种方式，只需要更改一个就可以了



- spring测试

不使用自定义变量的情况

![](https://picture.xcye.xyz/image-20210317211508447.png?x-oss-process=style/pictureProcess1)





更改版本的时候，特别的不容易，

使用自定义全局变量

![](https://picture.xcye.xyz/image-20210317211547557.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210317211552763.png?x-oss-process=style/pictureProcess1)







## 指定资源位置



src/main/java 和 src/test/java 这两个目录中的所有*.java 文件会分别在 comile 和 test-comiple 阶段被编译，编

译结果分别放到了 target/classes 和 targe/test-classes 目录中，但是这两个目录中的其他文件都会被忽略掉，如果需

要把 src 目录下的文件包放到 target/classes 目录，作为输出的 jar 一部分。需要指定资源文件位置。以下内容放到

`<buid>`标签中。

```xml
<build>
    <resources>
         <resource>
         <directory>src/main/java</directory><!--所在的目录-->
         <includes><!--包括目录下的.properties,.xml 文件都会扫描到-->
         <include>**/*.properties</include>
         <include>**/*.xml</include>
         </includes>
         <!--filtering 选项 false 不启用过滤器， *.property 已经起到过滤的作用了 -->
         <filtering>false</filtering>
         </resource>
     </resources>
</build>
```





  作用： mybatis课程中会用到这个作用

  1. 默认没有使用resources的时候， maven执行编译代码时， 会把src/main/resource目录中的文件拷贝到target/classes目录中。



> 如果不这么设置的话，那么如果在main --> java --> 下创建一个新的文件，但是当使用编译的时候，会发现这个文件并没有被移动到`target`目录中，因为如果没有设置`built`，只会将`resources`目录中的配置文件进行移动
>
> 如果设置这个标签的话，那么在main --> java --> 下的文件，编译之后，还是会在原来的目录中，也就是`classes`中





