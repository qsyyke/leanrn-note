



# vuex

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式

也就是，加入我们有多个组件，我们想要在这些组件内共享数据，并且是响应式的，也就是该项目中的所有组件都能拿到这个数据，还能对该数据进行更改，那么就需要用到vuex



如果只是想要让项目内的所有组件都能拿到某一个值，那么就可以通过vue实例的原型添加一个属性就可以做到，但是这个属性不是响应式，因为所有组件都继承了vue实例，也就能拿到此属性

```js
Vue.prototype.name = "chuchen"
```



## 单界面的状态管理

- State：不用多说，就是我们的状态。（你姑且可以当做就是data中的属性）
- View：视图层，可以针对State的变化，显示不同的信息。
- Actions：这里的Actions主要是用户的各种操作：点击、输入等等，会导致状态的改变。

![](https://picture.xcye.xyz/image-20210722220505108.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210722220513492.png?x-oss-process=style/pictureProcess1)

比如计数器中的count就是state，actions就是点击的动作，count目前的值需要被显示在界面中，也就是我们的View部分。



## 多界面状态管理

- Vue已经帮我们做好了单个界面的状态管理，但是如果是多个界面呢？
    多个试图都依赖同一个状态（一个状态改了，多个界面需要进行更新）
    不同界面的Actions都想修改同一个状态（Home.vue需要修改，Profile.vue也需要修改这个状态）

- 也就是说对于某些状态(状态1/状态2/状态3)来说只属于我们某一个试图，但是也有一些状态(状态a/状态b/状态c)属于多个试图共同想要维护的
    状态1/状态2/状态3你放在自己的房间中，你自己管理自己用，没问题。
    但是状态a/状态b/状态c我们希望交给一个大管家来统一帮助我们管理！！！
    没错，Vuex就是为我们提供这个大管家的工具。
- 全局单例模式（大管家）
    我们现在要做的就是将共享的状态抽取出来，交给我们的大管家，统一进行管理。
    之后，你们每个试图，按照我规定好的规定，进行访问和修改等操作。
    这就是Vuex背后的基本思想。





# 安装

因为vuex也是一个插件，所以我们需要先安装

```
npm install vuex --save
```



# 使用

一般推荐，在src下面创建一个`store`文件夹，用来存储此vuex数据

实现定时器的一个小案例

```vue
<template>
  <div>
    <h2>当前: {{this.$store.state.count}}</h2>
    <button @click="incr">+</button>
    <button @click="decr">-</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  methods: {
    decr() {
      this.$store.state.count--
    },
    incr() {
      this.$store.state.count++
    }
  }
}
</script>
```

```js
//store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

// 1.安装插件
Vue.use(Vuex)

// 2.创建对象
const state = {
    count: 1000
}
const store = new Vuex.Store({
    state,

})

// 3.导出store独享
export default store
```

因为在vuex中，state是存储我们需要共享的数据，我们可以通过`this.$store.state`得到所有的对象



如果想要修改count值，我们可以通过`this.$store.state++`实现，但是我们不能监听器过程，通过`devtools`插件

在vuex中，其状态管理图例为

![](https://picture.xcye.xyz/image-20210722231127062.png?x-oss-process=style/pictureProcess1)

通过这图，我们也可以看到，修改值的过程是`actions--->mutations--->state`，因为devtools工具只有你通过mutations修改state值，其才会进行监听，所以修改代码如下



```js
//store/index.js
const state = {
    count: 1000
}
const store = new Vuex.Store({
    state,
    mutations: {
        increment(data) {
            this.state.count++
        },
        decrement(data) {
            this.state.count--
        }
    }
})
```

```js
//count
methods: {
    decr() {
        this.$store.commit("decrement")
    },
        incr() {
            this.$store.commit("increment")
        }
}
```

其中，在mutations中，定义的方法都能够被`devtools`监听到，increment(data) {}，其中increment是事件，后面的是回调函数，也就是代码逻辑

我们需要在actions处，进行commit提交，使用`this.$store.commit("对应mutations中的事件名")`

![](https://picture.xcye.xyz/image-20210722232209778.png?x-oss-process=style/pictureProcess1)





# 五个属性

## state

此属性我们已经知道了，其就是存储我们需要共享的属性

## Getters

在组件中，如果我们需要定义一些复杂的属性，那么我们可以使用计算属性，在vuex中，可以使用Getters进行代替，也就相当于计算属性

获取学生年龄大于20的个数。

![](https://picture.xcye.xyz/image-20210722232757707.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210722232803444.png?x-oss-process=style/pictureProcess1)



注意：

> 在store/index.js中，我们获取state值时，不能使用`this.state`或者是`this.$store.state`，会出现一下异常
>
> ```js
> vue.runtime.esm.js?ff9b:619 [Vue warn]: Error in render: "TypeError: Cannot read property 'state' of undefined"
> ```
>
> 因为此方法是在`getters`内的，所以这里的this指向的是`getters`这个属性，![](https://picture.xcye.xyz/image-20210723112644169.png?x-oss-process=style/pictureProcess1)





### getters中，方法参数问题

经过测试，发现getters中的方法，我们只能在`getParams()`中，传入两个值，state和getters，不能传入其他的，否则就会出现

```js
this.$store.getters.getParams2 is not a function"
```

```js
getParams(state,getters) {
            console.log(getters)
            console.log(state)
        }
```

如果我们参数中，使用两个参数接收，在使用的时候，我们不需要传入，就可以使用这两个参数`this.$store.getters.getParams`，并且会将state赋值给第一个参数，将getters赋值给第二个参数getters



但是如果我们真的想要在`getParams`内使用，用户传入的值，那么就需要在此方法的return处，再次嵌套一个函数，参数放在此函数形参处就可以了

```js
getParams2(state,getters) {
    console.log(state,getters)
    return (id) => {
        console.log("-----getParams2 id------"+id)
        return id
    }
}

//使用
{{this.$store.getters.getParams2(4)}}
```

运行结果

```js
state --->this.$store.state
getters ---> this.$store.getters
id ---> 4
```





## Mutations

我们知道，如果要对state的状态进行更新，唯一方式就是提交mutation，因为如果使用其他的方式的话，state状态的改变不会被devtools工具监听，我们很难进行维护

![](https://picture.xcye.xyz/image-20210723120029282.png?x-oss-process=style/pictureProcess1)

> Mutation主要包括两部分：
>
> - 字符串的事件类型（type）
> - 一个回调函数（handler）,该回调函数的第一个参数就是state。

![](https://picture.xcye.xyz/image-20210723120445201.png?x-oss-process=style/pictureProcess1)

默认情况下，在使用是，如果我们没有传递参数的话，那么此data默认是`this.$store.state`



### Mutation传递参数

在通过mutation更新数据的时候, 有可能我们希望携带一些额外的参数

> 参数被称为是mutation的载荷(Payload)



- 一个参数

    ```js
    //mutations
    increment(state,n) {
        console.log("-----------")
        console.log(state)
        console.log(n)
        console.log("-------")
        this.state.count += n
    }
    
    //Count.vue
    incr() {
        this.$store.commit("increment",2)
    }
    ```

    运行结果

    ```js
    state ---> this.$store.state
    n ---> 2
    ```

- 多个参数

    如果需要传递多个参数，我们一般是以对象的形式进行传递

    ```js
    //mutations
    decrement(state,payload) {
        console.log(state)
        console.log(payload)
        this.state.count--
    }
    
    //Count.vue
    decr() {
        this.$store.commit("decrement",{
            name: 'chuchen',
            age: 23
        })
    }
    ```

    运行结果

    ![](https://picture.xcye.xyz/image-20210723121402130.png?x-oss-process=style/pictureProcess1)



### Mutation提交风格

除了上面的提交风格之外，vue还提供了另一种提交风格

```js
incr() {
  this.$store.commit({
    type: "increment",
    n: 20
  })
}
```

![](https://picture.xcye.xyz/image-20210723121741960.png?x-oss-process=style/pictureProcess1)





### Mutation响应规则

Vuex的store中的state是响应式的, 当state中的数据发生改变时, Vue组件会自动更新.

- 这就要求我们必须遵守一些Vuex对应的规则:
    提前在store中初始化好所需的属性.


> 也就是说，如果我们要做到state中的数据时响应式的，那么在项目启动的之前，这些数据就需要已经存在state中，如果是后面通过对state中的某个对象添加新的属性，那么在devtools工具中，我们能够看到state中的对象确实已经添加了新属性，但是页面中，该对象的数据，不会发生改变，因为state数据，是响应式的前提就是，已经初始化好数据

但是还可以通过以下方法做到响应式（初始化时未存在）

当给state中的对象添加新属性时, 使用下面的方式:

- 方式一: 使用Vue.set(obj, 'newProp', 123)
- 方式二: 用新对象给旧对象重新赋值



### Mutation常量类型

- 我们来考虑下面的问题:
    在mutation中, 我们定义了很多事件类型(也就是其中的方法名称).
    当我们的项目增大时, Vuex管理的状态越来越多, 需要更新状态的情况越来越多, 那么意味着Mutation中的方法越来越多.
    方法过多, 使用者需要花费大量的经历去记住这些方法, 甚至是多个文件间来回切换, 查看方法名称, 甚至如果不是复制的时候, 可能还会出现写错的情况.
- 如何避免上述的问题呢?
    在各种Flux实现中, 一种很常见的方案就是使用常量替代Mutation事件的类型.
    我们可以将这些常量放在一个单独的文件中, 方便管理以及让整个app所有的事件类型一目了然.
- 具体怎么做呢?
    我们可以创建一个文件: mutation-types.js, 并且在其中定义我们的常量.
    定义常量时, 我们可以使用ES2015中的风格, 使用一个常量来作为函数的名称.



```js
//mutation.type.js
export const INCREMENT = 'INCREMENT'

//store/index.js
import * as types from './mutation.type'
mutations: {
    [types.INCREMENT](http://ooszy.cco.vin/img/blog-note/state,n) {
        this.state.count += n
    }
}
 
//Count.vue
import * as types from '../store/mutation.type'
incr() {
    this.$store.commit({
        type: types.INCREMENT,
        n: 20
    })
}
```





### Mutation同步函数

- 通常情况下, Vuex要求我们Mutation中的方法必须是同步方法.
    主要的原因是当我们使用devtools时, 可以devtools可以帮助我们捕捉mutation的快照.
    但是如果是异步操作, 那么devtools将不能很好的追踪这个操作什么时候会被完成.

> 如果是对于异步信息，比如`setTimeout()`，官方推荐在actions里面进行操作





## Actions

- 我们强调, 不要再Mutation中进行异步操作.
    但是某些情况, 我们确实希望在Vuex中进行一些异步操作, 比如网络请求, 必然是异步的. 这个时候怎么处理呢?
    Action类似于Mutation, 但是是用来代替Mutation进行异步操作的.



基本使用如下

- context是什么?
    context是和store对象具有相同方法和属性的对象.
    也就是说, 我们可以通过context去进行commit相关的操作, 也可以获取context.state等.
    但是注意, 这里它们并不是同一个对象, 为什么呢? 我们后面学习Modules的时候, 再具体说.

    ![](https://picture.xcye.xyz/image-20210723124602071.png?x-oss-process=style/pictureProcess1)

- 这样的代码是否多此一举呢?
    我们定义了actions, 然后又在actions中去进行commit, 这不是脱裤放屁吗?
    事实上并不是这样, 如果在Vuex中有异步操作, 那么我们就可以在actions中完成了.

![](https://picture.xcye.xyz/image-20210723124240712.png?x-oss-process=style/pictureProcess1)



### 基本使用

```js
//store/index.js actions
actions: {
    aIncrement(context) {
        console.log("------actions-------")
        console.log(context)

        context.commit({
            type: types.INCREMENT,
            n: 400
        })
    }
}

//mutations
mutations: {
    [types.INCREMENT](http://ooszy.cco.vin/img/blog-note/state,n) {
        this.state.count += n.n
    }
}

//Count.vue
incr() {
    this.$store.dispatch('aIncrement')
}
```



![](https://picture.xcye.xyz/image-20210723125813683.png?x-oss-process=style/pictureProcess1)

> 理解这个图的过程，我们使用actions，需要在组件中，调用dispatch进行解析到actions，然后actions通过commit提交到mutations，从而对state的状态进行修改，经过这一系列的操作，无论是异步请求还是同步，devtools都能够监控到state的改变



### Action返回的Promise

- 前面我们学习ES6语法的时候说过, Promise经常用于异步操作.
    在Action中, 我们可以将异步操作放在一个Promise中, 并且在成功或者失败后, 调用对应的resolve或reject.



代码

```js
//store/index.js/actions
aIncrement(context) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            context.commit({
                type: types.INCREMENT,
                n: 600
            })

            resolve()
        },2000)
    })
}

//Count.vue
incr() {
    this.$store.dispatch('aIncrement').then(()=> {
        console.log("action 2秒已经完成")
    })
}
```

使用这种方式，能够将异步的逻辑处理，和执行成功的代码进行分开

> 其执行逻辑为:
>
> ![](https://picture.xcye.xyz/image-20210723131030229.png?x-oss-process=style/pictureProcess1)
>
> ![](https://picture.xcye.xyz/image-20210723131152165.png?x-oss-process=style/pictureProcess1)





### Actions的写法

在es6中，我们可以使用对象的解构

```js
const obj = {
    name: 'qsyyke',
    age: 22,
    height: '1.66'
}

const {name,age,height} = obj
console.log(name)
console.log(age)
console.log(height)
```

运行结果

![](https://picture.xcye.xyz/image-20210723133524597.png?x-oss-process=style/pictureProcess1)

并且其实按照属性名进行赋值的，就不用`const name = obj.name`的方式进行赋值

- 局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState

![](https://picture.xcye.xyz/image-20210723133620730.png?x-oss-process=style/pictureProcess1)

- 如果getters中也需要使用全局的状态, 可以接受更多的参数

![](https://picture.xcye.xyz/image-20210723133653750.png?x-oss-process=style/pictureProcess1)



# 项目结构

因为在vuex中，我们需要管理很多的内容，如果代码很多的话，结构就会非常的混乱，所以我们就需要对index.js中的内容进行抽取

![](https://picture.xcye.xyz/image-20210723133814788.png?x-oss-process=style/pictureProcess1)



抽离之后，我们只需要在`index.js`中导入就可以了

```js
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";
```

对于state，我们也可以抽离出来





























