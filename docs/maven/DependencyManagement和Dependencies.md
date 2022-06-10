---
date: 2022/1/15 18:56
title: Maven中的DependencyManagement和Dependencies
---


Maven使用dependencyManagement元素来提供了一种管理依赖版本号的方式，通常会在一个组织或者项目的最顶层的父POM 中看到dependencyManagement 元素。

使用`pom.xml`中的`dependencyManagement`元素能让所有在子项目中引用一个依赖而不用显式的列出版本号。
Maven会沿着父子层次向上走，直到找到一个拥有dependencyManagement元素的项目，然后它就会使用这个dependencyManagement元素中指定的版本号。

```xml
<!--第一个pom.xml文件-->
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
            <version>2.4.5</version>
        </dependency>
    </dependencies>
</dependencyManagement>
```

```xml
<!--第二个pom.xml文件-->
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>
</dependencies>
```

我们在第二个pom文件中，增加`spring-boot-starter-web`依赖，我们并没有指定版本号，但是当我们刷新的时候，依赖中的`spring-boot-starter-web`的版本是`2.4.5`，这个就是`dependencyManagement`的作用，

如果想要在第二个pom中指定版本，我们只需要加上`<version></version>`即可

```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <version>2.6.1</version>
    </dependency>
</dependencies>
```

![](https://picture.xcye.xyz/image-20220115191922503.png)





这样做的好处就是：如果有多个子项目都引用同一样依赖，则可以避免在每个使用的子项目里都声明一个版本号，这样当想升级或切换到另一个版本时，只需要在顶层父容器里更新，而不需要一个一个子项目的修改 ；另外如果某个子项目需要另外的一个版本，只需要声明version就可。

*     dependencyManagement里只是声明依赖，`并不实现引入`，因此子项目需要显示的声明需要用的依赖。

*   如果不在子项目中声明依赖，是不会从父项目中继承下来的；只有在子项目中写了该依赖项，并且没有指定具体版本，才会从父项目中继承该项，并且version和scope都读取自父pom;
    
*     如果子项目中指定了版本号，那么会使用子项目中指定的jar版本。
