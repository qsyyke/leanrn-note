# maven报错信息总结

##  jdk未设置版本



`Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.1:compile (default-compile)`

如果发生这种异常，是由jdk的版本不同引起的，所以可以在`pom.xml`文件中指定使用的jdk的版本

```xml
<properties>-->
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>13</maven.compiler.source>
    <maven.compiler.target>13</maven.compiler.target>
</properties>
```

 



## 编译之后，看不到target目录

把这个勾打上就可以了

![](https://picture.xcye.xyz/image-20210317185220066.png?x-oss-process=style/pictureProcess1)





## 导入依赖之后，依赖上出现波浪爆红



进入到本地仓库中，搜索`.lastU`结尾的文件，将这个文件删除

![](https://picture.xcye.xyz/image-20210317193035009.png?x-oss-process=style/pictureProcess1)



也可以进行刷新maven项目试试



![](https://picture.xcye.xyz/image-20210317201440306.png?x-oss-process=style/pictureProcess1)





![](https://picture.xcye.xyz/image-20210317201456224.png?x-oss-process=style/pictureProcess1)

但是后面这种刷新的方式是，当前所有的maven都会被刷新



## 导入一个maven项目



![](https://picture.xcye.xyz/image-20210317201638000.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210317201724259.png?x-oss-process=style/pictureProcess1)



因为这个项目是一个maven项目，所以需要选择maven



