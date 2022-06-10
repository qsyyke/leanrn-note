---
tag: [vue]
---

# promise

这个是es6的一个链式编程的东西，主要用于处理异步请求，能够使代码更加简洁，维护更加方便



# 传统

```js
setTimeout(()=> {
        console.log("-------1------");
        console.log("-------1------");
        console.log("-------1------");
        console.log("-------1------");

        setTimeout(()=> {
            console.log("-------2------");
            console.log("-------2------");
            console.log("-------2------");
            console.log("-------2------");

            setTimeout(()=> {
                console.log("-------3------");
                console.log("-------3------");
                console.log("-------3------");
                console.log("-------3------");


            },1000)
        },1000)
    },1000)
```

上面是实现一个定时嵌套的功能，虽然现在看着还是挺简洁的，但是如果每一个setTimeout的function内，都有几百行代码，那么就会特别混乱，并且代码一多，我们就很难看到，到底那个`{}`内，属于当前这一层

![](https://picture.xcye.xyz/image-20210722213947624.png?x-oss-process=style/pictureProcess1)



## promise

定义

```js
new Promise((resolve, reject) => {
    resolve("hello resolve")
    reject('hello reject')

}).then(function (data) {
    console.log(data)
}).catch(function (error) {
    console.log(error)
})
```

- `then(function(data){....})`：当`(resolve, reject) => {代码}`内的代码，遇到`resolve("hello resolve")`方法调用时，就会立即跳转到`then()`执行，并且会将`resolve("hello resolve")`内的hello resolve传给data



- `catch(function (error) {}`：当`(resolve, reject) => {代码}`内的代码，遇到`reject('hello reject')`方法调用时，就会立即跳转到`catch(function (error) {}`执行，并且会将`reject('hello reject')`内的hello reject传给data

### Promise三种状态

- pending：等待状态，比如正在进行网络请求，或者定时器没有到时间。
- fulfill：满足状态，当我们主动回调了resolve时，就处于该状态，并且会回调.then()
- reject：拒绝状态，当我们主动回调了reject时，就处于该状态，并且会回调.catch()

![](https://picture.xcye.xyz/image-20210722214433231.png?x-oss-process=style/pictureProcess1)



## 链式编程

我们可以在`then()`内，再次new Promise，就可以做到链式编程

```js
new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("-------1------")
        })
    }).then(function (data) {
        console.log(data)
        console.log(data)
        console.log(data)
        console.log(data)
        

        new Promise((resolve, reject) => {
            setTimeout(()=> {
                resolve("-------2------")
            })
        }).then(function (data) {
            console.log(data)
            console.log(data)
            console.log(data)
            console.log(data)


            new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve("-------3------")
                })
            }).then(function (data) {
                console.log(data)
                console.log(data)
                console.log(data)
                console.log(data)

            })
        })
    })
```

![](https://picture.xcye.xyz/image-20210722215604632.png?x-oss-process=style/pictureProcess1)

