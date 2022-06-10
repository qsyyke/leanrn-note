# webpack

## 安装

如果需要安装webpack，那么首先就需要安装node，node的安装，直接在官网下载应用程序进行安装，安装之后，还需要设置环境变量

![](https://picture.xcye.xyz/image-20210719163612029.png?x-oss-process=style/pictureProcess1)

安装webpack之前，需要初始化npm

执行命令

```
npm init -y 
or 
npm init
```

配置路径

```
npm config set cache  "C:\Program Files\nodejs\node_cache"
```

配置全局文件夹

```
npm config set prefix "C:\Program Files\nodejs\node_global" 
```



安装webpack一定要以管理员身份运行

```
npm install webpack@3.6.0 -g
```

-g是全局安装

如果没有出现error，那么就表示安装成功，可以在node_global文件夹中，看到

![](https://picture.xcye.xyz/image-20210719164206113.png?x-oss-process=style/pictureProcess1)

但是现在cmd执行`webpack`，会出现`'webpack' 不是内部或外部命令的问题`，这是因为安装webpack完成之后，我们还需要配置环境变量

![](https://picture.xcye.xyz/image-20210719164410126.png?x-oss-process=style/pictureProcess1)

和path环境变量

![](https://picture.xcye.xyz/image-20210719164442935.png?x-oss-process=style/pictureProcess1)

那么现在就安装成功了，执行webpack -version就可以看到刚安装的版本



# 简单使用

在写项目的时候，我们都需要使用模块化的思想

目录结构像下面这样

![](https://picture.xcye.xyz/image-20210719172139023.png?x-oss-process=style/pictureProcess1)

其中，dist是我们打包后存放的位置，src是我们开发时候的文件，

## commonjs

```
//math.js
function sum(a,b) {
    return a+b;
}

function dec(a,b) {
    return a-b;
}
module.exports = {
    sum,
    dec
}

//main.js
const {sum,dec} = require('./math')
console.log(sum(10,20))
console.log(dec(10,20))

//index.html
<script src="dist/bundle.js"></script>
```

在index.html中，我们只引入了bundle.js，如果没有打包前，这个文件是编译存在的

打包

```
E:\vue\webpack\learnwebpack>webpack ./src/main.js ./dist/bundle.js
```

我们在打包的时候，需要先进入到此文件夹中

![](https://picture.xcye.xyz/image-20210719172458847.png?x-oss-process=style/pictureProcess1)

`./src/main.js`是需要为哪些文件进行打包，这里只打包main.js，math.js不用，因为在main.js中，已经导入了math.js

`./dist/bundle.js`是将前面的打包成什么

![](https://picture.xcye.xyz/image-20210719172627880.png?x-oss-process=style/pictureProcess1)

成功，可以看到bundle.js文件，里面就有main.js,math.js等

## es6

es6的使用也是一样

```js
//info.js
export const name = "chuchen";
export const age = 22;
export const coding = "java";

console.log(name)
console.log(age)
console.log(coding)

//main.js
import {name,age,coding} from "./info";
```



# 配置webpack

如果每次进行打包的时候，都使用`webpack ./... ./...`，那么就会特别麻烦，我们可以进行配置，也就是在terminal中执行webpack，就进行打包

在当前文件夹下，新建一个`webpack.config.js`文件，名字需要使用这个，后期可以更改，内容为

```js
const path = require('path')
//const path = require('path')是导入node中的path包

module.exports = {
    entry: './src/main.js',//entry是入口文件路径，也就是webpack xxx +++中XXX对应
    output: {//output是出口文件，也就是+++对应内容，但是出口路径不能使用相对路径，需要使用绝对路径，
        path: path.resolve(__dirname, 'dist'),//使用node中的方法，可以自动获取绝对路径，resolve是将dist和__dirname进行拼接，也就是./dist的绝对路径
        filename: 'bundle.js'//打包后的文件
    },
}
```

那么这样配置之后，我们就可以使用webpack就可以代表以前的那一串了



idea设置管理员cmd

`C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe`



# 全局和本地

在开发或者进行打包的时候，我们可能会使用不同版本的webpack对项目进行打包，那么这个时候，我们就需要在本地进行安装webpack所需要的版本

所有的在cmd或者是webstorm的terminal中使用`webpack ...`进行打包时，使用的都是全局webpack，但是如果在`package.json`中进行脚本定义之后，使用`npm run build`时，会优先在本地中寻找，如果没有找到，那么就会使用全局

```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  }
```

`"scripts"`是所有脚本，里面的键如test，build，就是`npm run 键`时执行的，比如`npm run build`，那么执行的时候，就是简单的执行webpack





全局安装

```
npm install webpack@3.6.0 -g
```

本地安装

```
npm install webpack@3.6.0 --sabe-dev
```

都需要在管理员状态下运行

当为当前项目配置本地webpack之后，就可以在`webpack.json`文件中，看到新出现的几行

```
"devDependencies": {
    "webpack": "^3.6.0"
  }
这个是新出现的，Dev开发依赖，从这里可以看到，当前项目的webpack版本是3.6.0
```



# 使用css

写一个样式

![](https://picture.xcye.xyz/image-20210719185607616.png?x-oss-process=style/pictureProcess1)

当我们写了这个样式之后，我们不应该在index.html中，引入这个css文件，应该是使用webpack进行统一打包

在main.js中，导入这个样式

```js
require("./css/style.css")
```

但是现在如果进行打包时，就会出现

```
ERROR in ./src/css/style.css
Module parse failed: E:\vue\webpack\learnwebpack3\src\css\style.css Unexpected token (1:5)
You may need an appropriate loader to handle this file type.
```

这个是因为，webpack是不支持css的，如果需要使用，就需要使用webpack的插件loader进行处理

使用这个loader，进入webpack查看我们需要的loader，使用npm进行安装

[css-loader | webpack 中文网 (webpackjs.com)](http://ooszy.cco.vin/img/blog-note/https://www.webpackjs.com/loaders/css-loader/)

安装css的loader

```
npm install --save-dev css-loader
```

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}

也就是在webpack.config.js中加入module的配置
const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 'css-loader' ]
            }
        ]
    }
}
```



当使用这个进行打包之后，我们打开index.html，发现背景并没有发生改变，这个因为我们还需要style-loader的支持，`把 CSS 插入到 DOM 中`也是需要安装

```
npm install --save-dev style-loader@2.0.0
```

配置

```
module: {
        rules: [
            {
                test: /\.css$/,
                style-loader和css-loader的顺序不能颠倒，因为在webpack中，是从右边开始加载，不是从左边style-loader开始加载
                use: ["style-loader",'css-loader']
            }
        ]
    }
```



# 使用less

我们也可以对less进行打包，需要`less-loader`，但是并不是有这个loader之后，就可以不要`css-loader`，两个都需要有，less-loader是将less文件编译成css文件，css-loader是加载 CSS 文件并解析 import 的 CSS 文件，最终返回 CSS 代码，并且还需要修改配置中的正则表达式

```
module: {
        rules: [
            {
                test: /\.(less|css)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            }
        ]
    }
```

![](https://picture.xcye.xyz/image-20210719220021503.png?x-oss-process=style/pictureProcess1)





# 图片资源的加载

对于图片资源的加载，一共有两种情况，一种是，图片文件大小小于url-loader中limit的配置，单位是b

```
{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
```

上面的就是小于9.76kb的图片情况

当图片大小小于9.26kb时，在进行打包时，就会对图片进行`base64编码`，最终显示的图片地址为

`url(data:image/jpeg;base64,/9j/4QzFRXhpZgAATU0AKgAAAAgACQESAAMAAAABAAEAAAEaAAUAAAA...`很长，不会再文件夹中，新生成一张图片



当图片大于limit值时，进行打包之后，默认会在dist目录下，生成一种新的图片，名字以`哈希值.后缀`进行显示，但是当在HTML中，查看该打包后的图片url是，会发现并不会显示出来，这是因为其地址为`图片.后缀`，但是我们HTML和该图片之间，还存在一层dist

![](https://picture.xcye.xyz/image-20210719225501643.png?x-oss-process=style/pictureProcess1)

所以就会出错，不会显示出来，解决这个问题，我们在`webpack.config.js`中，加入该配置，就可以

![](https://picture.xcye.xyz/image-20210719225544174.png?x-oss-process=style/pictureProcess1)

 

我们也可以更改新生成图片的命名，在`webpack.config.js`中更改

```
{
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30000,
                            name: 'img/[name].[hash:8].[ext]'//[name]会自动取图片名字，[hash:8]哈希值 [ext]后缀名
                        }
                    }
                ]
            }
```





# es6语法处理

如果你仔细阅读webpack打包的js文件，发现写的ES6语法并没有转成ES5，那么就意味着可能一些对ES6还不支持的浏览器没有办法很好的运行我们的代码。
在前面我们说过，如果希望将ES6的语法转成ES5，那么就需要使用babel。
而在webpack中，我们直接使用babel对应的loader就可以了。

安装loader

```
npm install --save-dev babel-loader@7 babel-core babel-preset-es2015
```



配置

```
{
        test: /\.js$/,
        // exclude: 排除
        // include: 包含
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      }
```

打包之后，我们通过bundle.js可以看到，已经没有了const语法了，都是var进行变量命名





# 使用vue

如果要使用vue，那么就需要安装vue，因为demon的时候，我们是引入vue.js文件，但是在开发的时候，我们都是使用npm进行包管理，而且我们是进行模块化开发，所以就必须使用webpack对vue进行管理

![](https://picture.xcye.xyz/image-20210720121355157.png?x-oss-process=style/pictureProcess1)



使用

```js
//index.html
<div id="app">
    {{message}}
</div>

//main.js
import Vue from "vue";
new Vue({
    el: "#app",
    data: {
        message: "hello"
    }
})
```

因为npm安装vue之后，会在node_modules文件夹中，添加vue的依赖，所以我们需要使用`import Vue from "vue"`导入，

编译完成之后，打开index.html，会出现报错

![](https://picture.xcye.xyz/image-20210720121608515.png?x-oss-process=style/pictureProcess1)

这个是因为，在进行vue开发时候，我们有两种方式

> - runtime-only 这种方式vue不认识我们的模板，如`<div id="app"></div>`，没有任何的template，所以就会出错
> - runtime-compiler 可以有complete，因为有compiler可以用于编译template

所以我们修改webpack的配置，添加如下内容即可

![](https://picture.xcye.xyz/image-20210720121928590.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210720122715344.png?x-oss-process=style/pictureProcess1)





## el和template区别

- 正常运行之后，我们来考虑另外一个问题：
    如果我们希望将data中的数据显示在界面中，就必须是修改index.html
    如果我们后面自定义了组件，也必须修改index.html来使用组件
    但是html模板在之后的开发中，我并不希望手动的来频繁修改，是否可以做到呢？



- 定义template属性：
    在前面的Vue实例中，我们定义了el属性，用于和index.html中的#app进行绑定，让Vue实例之后可以管理它其中的内容
    这里，我们可以将div元素中的{{message}}内容删掉，只保留一个基本的id为div的元素
    但是如果我依然希望在其中显示{{message}}的内容，应该怎么处理呢？
    我们可以再定义一个template属性，代码如下：

也就是说，如果在vue实例中，也就是root组件，同时存在el和template，那么在template中编写标签会替换vue实例在index.html中绑定的`<div id="app"></div>`

```js
new Vue({
    el: "#app",
    template: `<div><h2>{{message}}}</h2></div>`,
    data: {
        message: "hello"
    }
})
```

![](https://picture.xcye.xyz/image-20210720123953871.png?x-oss-process=style/pictureProcess1)

template中的元素直接替换index.html中vue绑定的dom节点





- 重新打包，运行程序，显示一样的结果和HTML代码结构
- 那么，el和template模板的关系是什么呢？
    在我们之前的学习中，我们知道el用于指定Vue要管理的DOM，可以帮助解析其中的指令、事件监听等等。
    而如果Vue实例中同时指定了template，那么template模板的内容会替换掉挂载的对应el的模板。
- 这样做有什么好处呢？
    这样做之后我们就不需要在以后的开发中再次操作index.html，只需要在template中写入对应的标签即可
    但是，书写template模块非常麻烦怎么办呢？
- 没有关系，稍后我们会将template模板中的内容进行抽离。
    会分成三部分书写：template、script、style，结构变得非常清晰。





## vue组件化开发

```js
//定义一个组件
const App = {
    template: `<div><h2>{{name}}</h2></div>`,
    data() {
        return {
            name: "qsyyke"
        }
    }
}

new Vue({
    el: "#app",
    template: `
      <div>
          <h2>{{message}}</h2>
          <App></App>
      </div>
    `,
    data: {
        message: "hello"
    },
    components: {
        App
    }
})
```

![](https://picture.xcye.xyz/image-20210720124737047.png?x-oss-process=style/pictureProcess1)





除此以外，我们还可以，root根组件中，我们什么节点也不用写，我们可以将我们的其他组件通过组件树的形式加入到vue实例中的template中，因为template会直接替换`<div id="app"></div>`，这样就能够使我们的结构更加的清晰



```js
//定义一个组件
const second = {
    template: `<div>
    <h2>这是三级级组件</h2>
    <p>{{name}}</p>
    </div>`,
    data() {
        return {
            name: "三级组件内容"
        }
    }
}

const App = {
    template: `<div>
    <h2>这是二级组件</h2>
    <p>{{name}}</p>
    <second/>
    </div>`,
    data() {
        return {
            name: "二级组件内容"
        }
    },
    components: {
        second
    }
}

new Vue({
    el: "#app",
    template: '<App/>',
    components: {
        App
    }
})
```

![](https://picture.xcye.xyz/image-20210720125348495.png?x-oss-process=style/pictureProcess1)

`这样，我们的new Vue({})实例中，就只是引入下一个组件，通过组件引入组件的方式，将程序组成一颗组件树`

![](https://picture.xcye.xyz/image-20210720125532674.png?x-oss-process=style/pictureProcess1)





除此意外，我们的main.js中的结构还是非常的混乱，我们可以将我们的template进行抽离

```js
//app.js
export default {
    //定义一个组件
    template: `<div>
    <h2>这是三级级组件</h2>
    <p>{{name}}</p>
    </div>`,
        data() {
            return {
                name: "三级组件内容"
            }
        }
}

//main.js
import App from './vue/app'

new Vue({
    el: "#app",
    template: '<App/>',
    components: {
        App
    }
})
```

那么现在结构就比较好了



## .vue文件封装处理

- 但是一个组件以一个js对象的形式进行组织和使用的时候是非常不方便的
    一方面编写template模块非常的麻烦

- 另外一方面如果有样式的话，我们写在哪里比较合适呢？
    现在，我们以一种全新的方式来组织一个vue的组件

- 但是，这个时候这个文件可以被正确的加载吗？
    必然不可以，这种特殊的文件以及特殊的格式，必须有人帮助我们处理。
    谁来处理呢？vue-loader以及vue-template-compiler。

- 安装vue-loader和vue-template-compiler

    ```
    npm install vue-loader vue-template-compiler --save-dev
    ```

    这两个使用的版本号为

    ```
    "vue-loader": "^13.0.0",
    "vue-template-compiler": "^2.5.21",
    ```

    可以先将版本号修改为这两个，然后在使用`npm install`重新安装一下，就会安装配置文件中的对应的版本号

    因为这个也是我们在编译时使用，所以直接安装到本地

    [vuejs/vue-loader: 📦 Webpack loader for Vue.js components (github.com)](http://ooszy.cco.vin/img/blog-note/https://github.com/vuejs/vue-loader)

    这个`xx.vue`文件的模板为

    ```vue
    <template>
      <div class="example">{{ msg }}</div>
    </template>
    
    <script>
    export default {
      data () {
        return {
          msg: 'Hello world!'
        }
      }
    }
    </script>
    
    <style>
    .example {
      color: red;
    }
    </style>
    ```





比如上面的`app.js`中的内容，我们就可以使用这个进行替换

```vue
<template>
  <div>
    <h2 class="title">这是三级级组件</h2>
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "三级组件内容"
    }
  }
}
</script>

<style scoped>
  .title {
    color: red;
  }
</style>
```



> 其中`<template></template>`是我们写template
>
> `<script>`是写脚本，如data，components，methods等等
>
> `<style scoped>`是写样式，我们可以为template中的标签添加样式

安装完成之后，还需要修改`webpack.config.js`的配置

![](https://picture.xcye.xyz/image-20210720130018338.png?x-oss-process=style/pictureProcess1)





### 问题

如果这样在main.js中导入App.vue，那么编译通过之后，运行可能会没有变化，

`import App from './vue/App'`

但是如果修改成`import App from './vue/App.vue'`就会应用，这个需要配置一下

```
resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    }
```



# plugin

webpack中，我们可以安装很多的插件



## 添加版权的Plugin

该插件名字叫BannerPlugin，属于webpack自带的插件。

按照下面的方式来修改webpack.config.js的文件：

![](https://picture.xcye.xyz/image-20210720132503199.png?x-oss-process=style/pictureProcess1)

重新打包程序：查看bundle.js文件的头部，看到如下信息

![](https://picture.xcye.xyz/image-20210720132528936.png?x-oss-process=style/pictureProcess1)

```js
const webpack = require('webpack')
plugins: [
        new webpack.BannerPlugin('最终版权归aaa所有')
        ]
```





## 打包html的plugin

- 目前，我们的index.html文件是存放在项目的根目录下的。

    我们知道，在真实发布项目时，发布的是dist文件夹中的内容，但是dist文件夹中如果没有index.html文件，那么打包的js等文件也就没有意义了。
    所以，我们需要将index.html文件打包到dist文件夹中，这个时候就可以使用HtmlWebpackPlugin插件

- HtmlWebpackPlugin插件可以为我们做这些事情：
    自动生成一个index.html文件(可以指定模板来生成)
    将打包的js文件，自动通过script标签插入到body中

安装HtmlWebpackPlugin插件

```
npm install html-webpack-plugin --save-dev
```

安装的版本号为`"html-webpack-plugin": "^3.2.0"`

- 使用插件，修改webpack.config.js文件中plugins部分的内容如下：
    这里的template表示根据什么模板来生成index.html
    另外，我们需要删除之前在output中添加的publicPath属性
    否则插入的script标签中的src可能会有问题





当打包完成之后，我们可以看到

原来的index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>qsyyke</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
```



新生成的

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>qsyyke</title>
</head>
<body>
<div id="app"></div>
<script type="text/javascript" src="bundle.js"></script></body>
</html>
```

可以发现，其会自动将script引入加上

但是这里有一个问题



![](https://picture.xcye.xyz/image-20210720133831454.png?x-oss-process=style/pictureProcess1)

这是因为我们之前了`publicPath`属性造成的，删除就可以解决，但是图片就会出问题

```
output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/'
    }
```





## js压缩的Plugin

- 在项目发布之前，我们必然需要对js等文件进行压缩处理
    这里，我们就对打包的js文件进行压缩
    我们使用一个第三方的插件uglifyjs-webpack-plugin，并且版本号指定1.1.1，和CLI2保持一致



```
npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
```

修改webpack.config.js文件，使用插件：

![](https://picture.xcye.xyz/image-20210720134207607.png?x-oss-process=style/pictureProcess1)

查看打包后的bunlde.js文件，是已经被压缩过了。



![](https://picture.xcye.xyz/image-20210720134612623.png?x-oss-process=style/pictureProcess1)





## 搭建本地服务器

- webpack提供了一个可选的本地开发服务器，这个本地服务器基于node.js搭建，内部使用express框架，可以实现我们想要的让浏览器自动刷新显示我们修改后的结果

- 不过它是一个单独的模块，在webpack中使用之前需要先安装它

    ```
    npm install --save-dev webpack-dev-server@2.9.1
    ```

- devserver也是作为webpack中的一个选项，选项本身可以设置如下属性：
    contentBase：为哪一个文件夹提供本地服务，默认是根文件夹，我们这里要填写./dist
    port：端口号
    inline：页面实时刷新
    historyApiFallback：在SPA页面中，依赖HTML5的history模式

- webpack.config.js文件配置修改如下

    ![](https://picture.xcye.xyz/image-20210720134717342.png?x-oss-process=style/pictureProcess1)

- --open参数表示直接打开浏览器

    ![](https://picture.xcye.xyz/image-20210720134733502.png?x-oss-process=style/pictureProcess1)









# 配置文件分离

因为我们开发时和最终项目打包时，使用的配置可能不一样，比如代码丑化，在开发时，我们并不希望，但是最终打包时，我们希望对代码进行丑化，那么就需要对配置文件进行分离

在进行配置文件分离时，我们需要创建三个js文件配置文件

> base.config.js 开发和打包共同的配置
>
> dev.config.js 开发特需要的配置
>
> prod.config.js 打包特需要的配置



在目前，开发主要就是代码就是搭建本地服务器，而打包主要就是代码丑化，所以我们目前就只需要将这两样分离就行

当分离之后，我们就需要修改`package.json`中的build和dev

```js
//base
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.(less|css)$/,
                loader: [
                    'style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30000,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                // exclude: 排除
                // include: 包含
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
    ]
}
```

```js
//dev
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    devServer: {
        contentBase: './dist',
        inline: true
    }
})
```

```js
//prod
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerge(baseConfig, {
    plugins: [
        new UglifyjsWebpackPlugin()
    ]
})
```

```
//package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack --config ./build/prod.config.js",
    "dev": "webpack-dev-server --config ./build/dev.config.js"
  },
```

其中，`webpack-merge`我们需要进行安装，版本为`4.1.5`，`module.exports = webpackMerge(baseConfig, {})`的作用就是将baseConfig和后面的进行合并



