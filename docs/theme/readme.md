# 使用VuePress三步搭建一个漂亮博客

> 最终效果，可以到我博客查看<a href="https://blog.cco.vin" target="_blank">my blog</a>

> 需要工具
>
> - node
> - Git
> - Github账号
> 

![](https://picture.xcye.xyz/image-20211027214245140.png?x-oss-process=style/pictureProcess1)

## VuePress

`VuePress`是一个以 Markdown 为中心的静态网站生成器。你可以使用 [Markdown](https://zh.wikipedia.org/wiki/Markdown) 来书写内容（如文档、博客等），然后 VuePress 会帮助你生成一个静态网站来展示它们。



Vuepress不止可以这样

<img src="https://ooszy.cco.vin/img/blog-note/image-20211027214617690.png?x-oss-process=style/pictureProcess1" alt="image-20211027214617690" style="zoom:50%;" />



还可以是这样

![](https://picture.xcye.xyz/image-20211027214739567.png?x-oss-process=style/pictureProcess1)



## 开始

运行环境需要依赖`node`，所以在安装之前，请确保操作系统已经安装了node，我运行时的版本为`v14.17.3`

> 安装node可查看<a href="https://aurora.cco.vin/use/useTheme.html" target="_blank">node 安装</a>

### 初始化博客

- 在本地创建一个新文件夹`blog-demo`,在此文件夹进入cmd，使用`npm init`命令初始化，你会得到一个`package.json`文件

<img src="https://ooszy.cco.vin/img/blog-note/image-20211027205250517.png?x-oss-process=style/pictureProcess1" alt="image-20211027205250517" style="zoom:50%;" />

<img src="https://ooszy.cco.vin/img/blog-note/image-20211027205338584.png?x-oss-process=style/pictureProcess1" alt="image-20211027205338584" style="zoom:50%;" />

### 安装依赖及主题

在此`blog-demo`文件夹内，进入`cmd`窗口中，运行下面两个命令

- 安装依赖

  ```sh
  npm i vuepress@2.0.0-beta.25
  npm i vuepress-theme-aurora
  ```



<img src="https://ooszy.cco.vin/img/blog-note/image-20211027205622730.png?x-oss-process=style/pictureProcess1" alt="image-20211027205622730" style="zoom:50%;" />



### 配置package.json

- 将下面内容复制替换`package.json`中的scripts项(`如果你没有编辑器，那么推荐下载notepad++`)<a href="http://notepad-plus-plus.org/" target="_blank">notepad++</a>

  ```json
  "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "dev": "vuepress dev docs",
      "build": "vuepress build docs",
      "deploy": "bash deploy.sh"
    },
  ```




<img src="https://ooszy.cco.vin/img/blog-note/image-20211027210010111.png?x-oss-process=style/pictureProcess1" alt="image-20211027210010111" style="zoom: 67%;" />



## 使用主题

#### 1.配置config.js

在`docs/.vuepress/config.js`下，添加下面内容(`docs,.vuepress,config.js都需要你自己创建`)

```js
module.exports = {
    //设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    head: [
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
            },
        ]
    ],
    theme: 'aurora',
    themeConfig: {
        darkMode: false,
    }
};
```

<img src="https://ooszy.cco.vin/img/blog-note/image-20211027210224745.png?x-oss-process=style/pictureProcess1" alt="image-20211027210224745" style="zoom:50%;" />



#### 2.使用

运行

```sh
npm run dev
```



<img src="https://ooszy.cco.vin/img/blog-note/image-20211027210341370.png?x-oss-process=style/pictureProcess1" alt="image-20211027210341370" style="zoom:50%;" />

> 运行成功之后，会出现一个地址，你只需要在浏览器中，输入这个地址，就可以看到下面的页面



![](https://picture.xcye.xyz/image-20211010232918219.png?x-oss-process=style/pictureProcess1)



🎉🎉🎉🎉🎉恭喜你，你已经搭建成功了，是不是很简单!!

接下来，你可以简单的发布第一篇文章



## 发布文章

因为`Vuepress`会自动将`docs/xx.md`文件，解析成`xx.html`，在此`docs`文件夹下，创建`.md`文件就可以了

![](https://picture.xcye.xyz/image-20211027220025857.png?x-oss-process=style/pictureProcess1)



然后在此`我的第一篇Vuepress文章.md`中，随便写点什么

```markdown
# 这是一个标题

随便写点啥
```



> 记得创建一个新`md`文件之后，需要重新运行`npm run dev`命令



然后你便可以在站点首页看到这篇文章了

![](https://picture.xcye.xyz/image-20211027220843170.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20211027220902018.png?x-oss-process=style/pictureProcess1)





## 配置博客

>  你如果按照上面步骤进行搭建，那么你博客什么也没有，你看到的都是默认配置
>
> 为了更好的对博客进行配置，你可以到GitHub的<a href="https://github.com/qsyyke/vuepress-theme-aurora/blob/master/docs/.vuepress/config-copy.js">config.js</a>，复制所有的配置，进行更改
>
> `Vuepress的配置文件为docs/.vuepress/config.js`



我从github中，复制下来之后，在浏览器中看到的最终效果为

![](https://picture.xcye.xyz/image-20211027221834768.png?x-oss-process=style/pictureProcess1)



### 修改导航栏

>  这里演示导航栏的修改

在`config.js`内，找到`navbar`项，此项便是修改导航栏的，具体配置，可以查看<a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html#navbar">Vuepress navbar</a>的配置

![](https://picture.xcye.xyz/image-20211027222204941.png?x-oss-process=style/pictureProcess1)





### 修改站点logo文字

![](https://picture.xcye.xyz/image-20211027222253292.png?x-oss-process=style/pictureProcess1)



> 1. 根据<a href="https://aurora.cco.vin/home/config.html#logotitle">aurora主题文档</a>的描述
> 2. 在`config.js`下，找到此项，然后对该项进行修改

![](https://picture.xcye.xyz/image-20211027222437502.png?x-oss-process=style/pictureProcess1)



![](https://picture.xcye.xyz/image-20211027222551847.png?x-oss-process=style/pictureProcess1)



成功修改

![](https://picture.xcye.xyz/image-20211027222727521.png?x-oss-process=style/pictureProcess1)



> 如果你们修改之后，在浏览器中，打开没有效果，这是因为你们没有重新运行`npm run dev`命令，每次修改`config.js`内容，都需要重新运行`npm run dev`命令



## 结束

使用Vuepress搭建博客，只需要简单的几步便可以了，下面是用到的所有链接

- <a href="https://v2.vuepress.vuejs.org/zh/">Vuepress</a>
- <a href="https://aurora.cco.vin/">Aurora Theme</a>
- <a href="https://github.com/qsyyke/vuepress-theme-aurora">Github</a>
- <a herf="https://aurora.cco.vin/home/config.html">Aurora主题所有配置</a>



关于如何部署，我改天的时候，再写一篇关于部署的文章，你也可以看一下这篇<a href="https://aurora.cco.vin/home/deploy.html">部署</a>

