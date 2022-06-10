# axios使用

## 安装

在使用之前，我们需要进行安装

```
npm install axios
```



# 使用

发送一个get请求

```
import axios from "axios";
created() {
    axios.get("http://api.vipblogs.cn/msinfo")
        .then(res=> {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
```

`import axios from "axios"`这样导入，那么axios是作为全局来使用的，但是我们不推荐使用全局

`axios.get()`返回的是一个Promise对象，所以我们使用`then()`和`catch()`方法

返回结果

![](https://picture.xcye.xyz/https://ooszy.cco.vin/img/blog-note/image-20210723201316869.png?x-oss-process=style/pictureProcess1)



## 发送并发请求

```js
axios.all([
    axios.get("http://api.vipblogs.cn/msinfo"),
    axios.get("http://api.vipblogs.cn/tall",{
        params: {
            isrefund: 0
        }})
]).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})
```

如果我们同时需要发送多个请求，那么就可以使用`axios.all()`方法，只要这多个请求中，有一个发生异常(404,500...)，那么就会直接执行`catch()`



# 全局配置

在上面的示例中, 我们的BaseURL是固定的

如果`import axios from "axios"`，那么这个axios就是一个全局对象，如果我们发送请求的所有url都是相同的，那么我们可以抽取`baseURL`，这样在发送get等请求的时候，就可以直接写资源路径和参数就行



```js
axios.defaults.baseURL = "http://api.vipblogs.cn/"
axios.get("/msinfo").then(res => {
    console.log(res)
})
```

![](https://picture.xcye.xyz/image-20210723202811966.png?x-oss-process=style/pictureProcess1)





# 实例axios

- 为什么要创建axios的实例呢?
    当我们从axios模块中导入对象时, 使用的实例是默认的实例.
    当给该实例设置一些默认配置时, 这些配置就被固定下来了.
    但是后续开发中, 某些配置可能会不太一样.
    比如某些请求需要使用特定的baseURL或者timeout或者content-Type等.
    这个时候, 我们就可以创建新的实例, 并且传入属于该实例的配置信息.

使用步骤

> 1. 创建实例
> 2. 使用该实例



```js
//创建实例
const axiosInstance = axios.create({
    baseURL: 'http://api.vipblogs.cn',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
})

//使用实例
axiosInstance({
    url: '/msinfo',
    method: 'get'
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})
```



# axios封装

为什么要封装？

> 如果我们使用axios框架，在每一个vue文件中，都使用此框架发送请求，那么如果在后期，此框架不会维护，我们需要换成其他的框架，那么这个时候，我们就需要每一个组件进行更改，并且还需要改大量的代码，这样可能还会出现很多预想不到的问题，所以就需要对请求进行封装
>
> `封装的核心就是，我们将所有发送请求都抽离出来，创建新的js文件，存放，然后我们在需要发送请求的组件中，传入对应的参数，url等，就可以拿到响应回来的data数据，这样，到时候更换框架时候，我们就不用更改组件中的代码，只需修改发送请求的代码，只要保证他们能够返回data就行`



这个是老师进行封装的

```js
//netword/axios.js
import originAxios from 'axios'

export function getTall(option) {

    return new Promise((resolve,reject) => {
        //1. 创建实例
        const instance = originAxios.create({
            baseURL: 'http://api.vipblogs.cn',
            method: 'get',
            timeout: 500
        })

        //2. 传入对象发送请求
        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

//使用 main.js
import {getTall} from "./network/axios";

getTall({
  url: 'tall',
  isrefund: 0
}).then(res => {
  console.log(res)
})
```

成功返回数据，但是返回的数据，还是包含其他的属性

其封装的核心，就是此请求方法返回一个Promise对象，当请求发送成功，返回数据时，调用`axios实例.then()`，然后在此方法中，调用`resolve(res)`，那么就会回到组件中，调用此方法的`then()`处，进行数据处理，因为此方法返回Promise对象，但是这里，应该在发送请求方法中，就将需要的数据从响应体中取出，返回，下面是我封装的



![](https://picture.xcye.xyz/image-20210723211250161.png?x-oss-process=style/pictureProcess1)





![](https://picture.xcye.xyz/image-20210723211621305.png?x-oss-process=style/pictureProcess1)

这里的baseURL等属性，应该是写在这个文件中，这样写的好处就是容易改，组件传入的对象，

在instance处传入对象，在组件中，将需要的参数，请求的形式等写在一个对象中，最好不要在此处就将url，params写死（option.url,option.param），这样不容易维护



# 拦截器

axios提供了拦截器，用于我们在发送每次请求或者得到相应后，进行对应的处理。

四种拦截器

> 1. 请求成功
> 2. 请求失败
> 3. 响应成功
> 4. 响应失败



使用

```js
//1. 创建实例
const instance = originAxios.create({
    baseURL: 'http://api.vipblogs.cn',
    method: 'get',
    timeout: 500
})

instance.interceptors.request.use(config => {
    console.log("来到request拦截成功中")
    console.log(config)
    return config
},err => {
    console.log("来到request拦截失败中")
    console.log(err)
})

instance.interceptors.response.use(response => {
    console.log("来到response拦截成功中")
    console.log(response)
    return response
},err => {
    console.log("来到resonse拦截失败中")
    console.log(err)
})

//2. 传入对象发送请求
instance(option).then(res => {
    console.log("响应成功----")
    resolve(res.data)
}).catch(err => {
    reject(err)
})
```

![](https://picture.xcye.xyz/image-20210723212757390.png?x-oss-process=style/pictureProcess1)

响应的失败拦截中，可以根据status判断报错的错误码，跳转到不同的错误提示页面

![](https://picture.xcye.xyz/image-20210723212824456.png?x-oss-process=style/pictureProcess1)







## axios发送文件上传请求

```html
 <input type="file" @change="getFile($event)" name="photos" multiple="multiple">
```

```js
methods: {
    getFile(e) {
      this.formData = new FormData()
      for (let i = 0; i < e.target.files.length; i++) {
        this.files.push(e.target.files[i])
      }
    },
    edit() {

      let formData = new FormData();
      for (let i = 0; i < this.files.length; i++) {
        formData.append("photos",this.files[i]);
      }
      formData.append("title",this.title)
      formData.append("content",this.content)
      formData.append("appId","lnZxmObbJSp3o8Zea2KXxPwat")
      formData.append("appKey","6TleVWdLeVwpOKv9eXtTQUam7")
      network.cors({
        baseURL: 'http://localhost:8901',
        url: '/mood/add',
        method: 'POST',
        timeout: 70000,
        headers: {
          "Content-type": "multipart/form-data;"
        },
        data: formData,

        responseType: 'json',
        /*transformRequest: [function () {
          return formData
        }]*/
      }).then((res) => {
        console.log(res)
      })
    }
  }
```

多个文件上传也是上面的方式

