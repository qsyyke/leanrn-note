# Vue CLI

- CLI是什么意思?
    CLI是Command-Line Interface, 翻译为命令行界面, 但是俗称脚手架.
    Vue CLI是一个官方发布 vue.js 项目脚手架
    使用 vue-cli 可以快速搭建Vue开发环境以及对应的webpack配置.



## Vue CLI使用前提

如果要使用这个，就必须安装vue

- 安装NodeJS

    - 检测安装的版本
        默认情况下自动安装Node和NPM
        Node环境要求8.9以上或者更高版本

- webpack

- 安装vue cli

    ```
    npm install -g @vue/cli
    ```

    

什么是NPM呢?
NPM的全称是Node Package Manager
是一个NodeJS包管理和分发工具，已经成为了非官方的发布Node模块（包）的标准。
后续我们会经常使用NPM来安装一些开发过程中依赖包.





# 安装

- 安装全局脚手架

    默认情况下，下面命令安装的是cli3，目前最新是cli3

    ```
    npm install -g @vue/cli
    ```

    注意：上面安装的是Vue CLI3的版本，如果需要想按照Vue CLI2的方式初始化项目时不可以的

![](https://picture.xcye.xyz/image-20210720212556915.png?x-oss-process=style/pictureProcess1)

> - Vue CLI2初始化项目
>     vue init webpack 项目名
> - Vue CLI3初始化项目
>     vue create 项目名





## vue CLI2详解

![](https://picture.xcye.xyz/image-20210720213831347.png?x-oss-process=style/pictureProcess1)



## cli2目录结构

![](https://picture.xcye.xyz/image-20210720213848371.png?x-oss-process=style/pictureProcess1)

> `static`文件夹中存放的资源是静态资源，在此文件夹中的资源，进行打包的时候，不会进行其他处理，如base64，或者重新命名等，原来是什么样，打包之后，还是什么样





## 分析目录结构

如果分析cli2，我们应该从`package.json`进行分析，因为执行命令，会在这个配置文件中，去找所需加载的js配置文件



![](https://picture.xcye.xyz/image-20210720215044323.png?x-oss-process=style/pictureProcess1)

上面这个文件的目的就是根据配置中的浏览器的条件，将es6转成es5，当安装了`babel-preset-env`之后，我们就需要创建此文件，也就是`.babelrc`

![](https://picture.xcye.xyz/image-20210720215224653.png?x-oss-process=style/pictureProcess1)

并且可以看到index.html和我们之前写的一样

![](https://picture.xcye.xyz/image-20210720215422887.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210720215451224.png?x-oss-process=style/pictureProcess1)

其中，package.json中，版本号的区别

> `"vue": "^2.5.2"`在安装版本的时候，其真实安装的版本不会是2.5.2，会比2.5.2高，但是因为是`^`，所以其版本号在`2.5.x`进行变化
>
> `"vue": "~2.5.2"`会有两处变化，在`2.x.x`



```json
"build": "node build/build.js"
"dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
```

当执行`npm run build`时，就会执行build.js文件，因为js文件，我们可以直接在node中执行，可以不用依赖浏览器

`rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {}`在进行打包的时候，会先将之前打包的文件删除，然后在重新打包，也就是maven中的生命周期，总会执行clean

此命令，最终会执行`require('./webpack.prod.conf')`配置



main.js分析

`Vue.config.productionTip = false`就是是否开启提示





# Runtime-Compiler和Runtime-only的区别

左边的这个是Runtime-Compiler，右边那个是Runtime-only

![](https://picture.xcye.xyz/image-20210720221247803.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20210720221354989.png?x-oss-process=style/pictureProcess1)

- 简单总结
    如果在之后的开发中，你依然使用template，就需要选择Runtime-Compiler
    如果你之后的开发中，使用的是.vue文件夹开发，那么可以选择Runtime-only

    

![](https://picture.xcye.xyz/image-20210720221401836.png?x-oss-process=style/pictureProcess1)



在后期的时候，我们都会选择Runtime-only，因为其代码量会比Runtime-Compiler更小

## render和template

![](https://picture.xcye.xyz/image-20210720221522989.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210720221528112.png?x-oss-process=style/pictureProcess1)



## Vue程序运行过程

![](https://picture.xcye.xyz/image-20210720221548728.png?x-oss-process=style/pictureProcess1)

从运行过程中，可以得知，对于Runtime-Compiler其运行过程是`template --> ast --> render --> dom --> ui`

但是对于Runtime-only，其运行过程只有`render --> dom -->ui`，其没有template，ast这两个步骤，所以对于Runtime-only，其代码量会更少



runtime-only我们可以写成

```js
new Vue({
  el: '#app',
  render: function (h) {
    return h(App)
  }
})
```

原始的是es6的箭头函数，



##  render函数的使用

![](https://picture.xcye.xyz/image-20210720222302065.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210720222307003.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210720222311549.png?x-oss-process=style/pictureProcess1)

>  所以，Runtime-only最终我们可以转成Runtime-Compiler，`所以最终我们在构建项目的时候，都会选择Runtime-only`



## npm run build

![](https://picture.xcye.xyz/image-20210720222743568.png?x-oss-process=style/pictureProcess1)



## npm run dev

![](https://picture.xcye.xyz/image-20210720222758664.png?x-oss-process=style/pictureProcess1)





# 认识Vue CLI3

- vue-cli 3 与 2 版本有很大区别
    vue-cli 3 是基于 webpack 4 打造，vue-cli 2 还是 webapck 3
    vue-cli 3 的设计原则是“0配置”，移除的配置文件根目录下的，build和config等目录
    vue-cli 3 提供了 vue ui 命令，提供了可视化配置，更加人性化
    移除了static文件夹，新增了public文件夹，并且index.html移动到public中





![](https://picture.xcye.xyz/image-20210720223208774.png?x-oss-process=style/pictureProcess1)

当进行选择的时候，我们使用空格选择或者取消，enter确定

![](https://picture.xcye.xyz/image-20210720223051467.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20210720223145548.png?x-oss-process=style/pictureProcess1)



从main.js中，我们就可以发现与cli2的最大不同点`createApp(App).mount('#app')`，其实其内部源码的实现也是一样的，在cli2中，实例化vue之后，都会调用mount，只是这个再源码中



当我们创建了一个cli3之后，在最后，会有一个选项，询问我们时候将当前创建的这个cli3作为一个模板，我们可以起一个名字，当下一次创建cli3之后，我们就可以选择这个保存的模板



![](https://picture.xcye.xyz/image-20210720224445370.png?x-oss-process=style/pictureProcess1)

这个也是可以删除的，但是删除的话，需要我们在本地文件中，进行删除

![](https://picture.xcye.xyz/image-20210720224603892.png?x-oss-process=style/pictureProcess1)

将这个删除就行

![](https://picture.xcye.xyz/image-20210720224630513.png?x-oss-process=style/pictureProcess1)





## 配置去哪里了？

我们可以在两个地方中，查看配置

可以在cmd中，启动`vue ui`进入查看，进入界面如下

![](https://picture.xcye.xyz/image-20210720224820224.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210720225111039.png?x-oss-process=style/pictureProcess1)

在这里面我们可以创建项目，添加配置，插件等等

另外我们也可以在`@vue --> cli-service`中进行查看配置



![](https://picture.xcye.xyz/image-20210720225351210.png?x-oss-process=style/pictureProcess1)



