---
tag: [vue,前端]
---

# vue使用

第一个实例

```js
<div id="app">{{name}}</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: 'hello vue',
            name: 'chuchen'
        }
    });
</script>
```

其执行原理是

`el: '#app'`会将此元素交给vue进行管理，也就是管理其中的数据

`data: {}`中的存入的是数据，可以是手动写的，也可以从服务器中请求回来

`<div id="app">{{name}}</div>`，使用双`{{}}`中存入`data`中属性值，这样，当浏览器编译的时候，如果遇到`el: '#app'`，那么就会去找这个元素，这个元素中的`{{}}`就是一个语法

## 基本操作

### 展示数组数据

```js
<div id="app">
    <ul>
        <li v-for="item in movies">{{item}}</li>
    </ul>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            movies: ['忠犬八公的故事','海王','一条狗的使命','驯龙高手']
        }
    });
</script>
```

使用`v-for='item in 数组'`语法，item也是一个变量

![](https://picture.xcye.xyzimage-20210601204649773.png?x-oss-process=style/pictureProcess1)

如果在控制台对这个数组添加一个元素，那么就会立刻显示出来，这个就是响应式编程



### 计数器案例

```js
<div id="app">
    <h1>计数器: {{count}}</h1>
    <button v-on:click="add">+</button>
    <button v-on:click="des">-</button>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            count: 0
        },
        methods: {
            add:function () {
                this.count ++;
            },
            des: function () {
                this.count --;
            }
        }
    });
</script>
```

<div id="app">
    <h1>计数器: 0</h1>
    <button v-on:click="add">+</button>
    <button v-on:click="des">-</button>
</div>

实现，点击加号和减号的时候，对计数器进行相应的加减操作，如果使用js来做的话，那么这个过程就会需要很多的代码，但是使用vue，简单几步就可以做了

`<button v-on:click="add">+</button>`使用`v-on:`可以为这个元素绑定一个事件，后面写上事件的名字，比如点击等等

`v-on:click="操作"`，操作中，可以写一个表达式，比如`count=count==`，也可以写一个事件方法，但是这个方法必须是定义在`methods`属性中的，如果是下面这样，那么就不可以

```js
<button v-on:click="f()">+</button>
function f() {
    console.log(12)
}
```



`methods`属性中，定义执行的方法，可以定义多个

```js
methods: {
    add:function () {
        this.count ++;
    },
    des: function () {
        this.count --;
    }
}
```

因为`count`这个变量是对象中的，并不是全局，所以如果需要使用这个变量的话，那么就需要使用`app.count`或者`this.count`或者`app['count']`

也可以使用这种简化的方式`<button @click="add()">+</button>`，使用`@`就可以代表`v-on:`，这种叫做`语法糖`



### 声明周期

vue在创建一个对象的时候，也是存在了很多的声明周期，这个也像java中的声明周期那样，这些声明周期都会一些回调函数，比如，在对象创建的时候，会有一个函数`created()`，当我们在对象中，写上这个

```js
const app = new Vue({
    el: '#app',
    data: {
        msg: 'sdf'
    },
    created: function () {
        console.log("created")
    },
    before: function () {
        console.log("before")
    },
    f: function () {
        console.log(12)
    }
});
```

那么在对象创建的时候，就会自动执行这个函数`created`，但是`f()`函数是我们自己定义的，不会执行



## 插值操作

### {{}}

```js
<div id="app">
    <h1>{{message}}</h1>
    <h1>{{firstName + lastName}}</h1>
    <h1>{{firstName +' '+ lastName}}</h1>
    <h1>{{firstName}} {{lastName}}</h1>
    <h1>{{count * 2}}</h1>
</div>


<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: 'hello',
            firstName: 'chu',
            lastName: 'chen',
            count: 100
        }
    });
</script>
```

`{{}}`这个语法叫做mustache语法，也可以叫做胡须语法，vue能够解析其中的变量，并将对象中的值，传进去



> `{{}}只能对元素内部有效，不能设置元素的属性值`



![](https://picture.xcye.xyz/image-20210601221913441.png?x-oss-process=style/pictureProcess1)

### v-html

当我们的数据是一个节点标签的时候，那么如果使用`mustache`，则会并不会将这个解析为HTML标签，所以就需要使用到`v-html`，使用这个，就可以将其解析为HTML标签使用

```js
<div id="app">
    <h1 >{{url}}</h1>
    <h1 v-html="url"></h1>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            url: '<a href="http://cco.vin">cco.vin</a>'
        }
    });
</script>
```

运行结果

![](https://picture.xcye.xyz/image-20210601224025973.png?x-oss-process=style/pictureProcess1)

### v-text

这个就是将这个数据，解析为text使用，但是这个，并不是很方便

```js
<div id="app">
    <h1>{{message}} 青衫烟雨客</h1>
    <h1 v-text="message"></h1>
    <h1 v-text="message"> 青衫烟雨客</h1>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: 'chuchen'
        }
    });
</script>
```

运行结果

![](https://picture.xcye.xyz/image-20210601224338580.png?x-oss-process=style/pictureProcess1)

从中，可以看到，如果是`<h1 v-text="message"> 青衫烟雨客</h1>`，那么就会被覆盖，所以这种方式不太推荐使用

### v-pre

```js
<h1 v-pre>{{message}}</h1>
```

如果我们的h1标签中的数据，就是`{{message}}`，我们不想要被vue进行解析，保留`{{message}}`，那么就可以使用到`v-pre`指令



### v-once

此指令的作用就是，此标签中的值，只能改变一次，如果我们通过js进行更改，值不会被改变

### v-cloak

在执行的过程中，如果某段代码发生了错误，那么`{{msg}}`就会显示给用户看到，这种并不友好，所以就可以使用`v-cloak`指令进行解决

```js
<style>
    [v-cloak] {
        display: none;
    }
</style>

<h1 v-cloak="">{{msg}}</h1>
```

必须要加上display:none，否则无效

执行的原理

如果没有执行到，那么就会给`<h1 v-cloak="">{{msg}}</h1>`这个标签加上css样式`display:none`，如果数据得到，那么就会移除`display:none`





## 设置属性

### v-bind

设置元素属性的值，比如src,href，不能使用`{{}}`，因为这个，只能设置元素`<h1></h1>`内部的值，不能设置属性的值，所以就需要使用到`v-bind`

```js
<img v-bind:="url" alt="">
```

> 简化`:`



#### 动态绑定样式（对象语法）

语法

> ```vue
> :style="{属性名: 属性值}"
> 
> ```
>
> ```html
> <div id="app" :style="{fontSize: '100px',color: 'red'}">{{message}}</div>
> ```
>
> 其中，属性名可以不同加引号，但是属性值必须加引号，如果不加的话，那么就会被当做变量来使用，如果此变量不存在，就会出错
>
> ```html
> <div id="app" :style="{fontSize: finalSize+'px',color: finalColor}">{{message}}</div>
> <script>
>     const app = new Vue({
>         el: '#app',
>         data: {
>             message: 'chuchen',
>             finalSize: 100,
>             finalColor: 'blue'
>         }
>     });
> </script>
> ```

#### 数组语法

```html
<div id="app" :style="[basesize,baseConlor]">{{message}}</div>
<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: 'chuchen',
            finalSize: 100,
            finalColor: 'blue',
            basesize: {
                fontSize: "200px"
            },
            baseConlor: {
                color: "pink"
            }
        }
    });
</script>
```

数组语法，就是可以在里面写一个数组，其中数组中的元素都是变量，并且这些变量都是对象，以键值对的方式已经定义好了





## 计算属性

计算属性就是将我们需要的几个对象中的属性，将其计算成一个新的属性，供我们使用

```html
<div id="app">{{message}}
    <h2>{{getFullName()}}</h2>
    <h2>{{fullName}}</h2>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: 'chuchen',
            firstName: "chu",
            lastName: "chen"
        },
        methods: {
            getFullName: function () {
                return this.firstName+ " "+ this.lastName;
            }
        },
        computed: {
            fullName: function () {
                return this.firstName+ " "+ this.lastName;
            }
        }
    });
</script>
```

我们也可以使用函数的方式{`{getFullName()}}，但是这种方式的话，会有点影响阅读，{`{fullName}}是一个属性，并不是一个函数，不能加上括号



#### 计算属性二

计算总价格

```js
data: {
books: [
    {name: 'Java编程思想', price: 99, count: 3},
    {name: 'Unix编程艺术', price: 118, count: 2},
    {name: 'Vuejs程序设计', price: 89, count: 1},
	]
}

computed: {
    total: function () {
        let totalCount = 0;
        for (let i = 0; i < this.books.length; i++) {
            totalCount = totalCount +this.books[i].price;
        }
        return totalCount;
    }
}
```



### get和set方法

此get和set方法和java中的一样，get用于获取值，set用于设置值，计算属性的正确写法，就是存在两个函数，一个get()，一个set()，只是在大多数情况下，我们不想将set方法暴露出来，所以就只写了get()方法，也就相当于写一个函数

```js
data: {
    firName: "chu",
        lastName: "chen"
},
    computed: {
        fullName: {
            get() {
                return this.firName + " "+ this.lastName;
            },
                set(newName) {
                    console.log("执行set方法")
                    var split = newName.split(" ");
                    this.firName = split[0];
                    this.lastName = split[1];
                }
        }
    }


这里的get()方法，等于下面这种
fullName: function() {
    return ....;
}
```

浏览器在显示数据的时候，就是调用了get()方法，如果要调用set()方法，只需要在浏览器中设置此计算属性的值就会调用

![](https://picture.xcye.xyz/image-20210715172147144.png?x-oss-process=style/pictureProcess1)





### 计算属性和methods比较(缓存)

计算属性有一个缓存的功能，也就是如果同一个计算属性被调用多次，计算属性的值，没有发生改变，那么就只会执行一次该计算属性的`get()`或者function，但是如果是一个methods中的函数的时候，调用几次，就会执行几次，所以，推荐使用计算属性

```js
computed: {
    fullName: {
        get() {
            return this.firName + " "+ this.lastName;
        },
            set(newName) {
                console.log("执行set方法")
                var split = newName.split(" ");
                this.firName = split[0];
                this.lastName = split[1];
            }
    }
},
    methods: {
        getFullName: function () {
            return return this.firName + " "+ this.lastName;
        }
    }
```





## v-on

methods中的方法可以使用这种方式进行书写

```js
methods: {
    add() {
        this.count++;
    },
        des() {
            this.count --;
        }
}
```

为`v-on`也提供了一种简便的语法糖，使用`@事件`的方式就可以代替，比如`<button @click="add">+</button>`



### 参数问题

![](https://picture.xcye.xyz/image-20210715174606299.png?x-oss-process=style/pictureProcess1)

如果该方法中，没有参数，在`v-on:click="add"`时，可以不用加上括号

```html
<div id="app">
    <button @click="add('chuchen',$event)">click</button>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {

        },
        methods: {
            add(abc,e) {
                console.log("----执行了---")
                console.log(abc)
                console.log(e)
            }
        }
    });
</script>
```

如果只有一个参数，`add(e){}`，那么`@click="add" or @click="add()"`就会将这个点击事件event对象传给参数，但是如果有两个参数，`add(a,e){}`，那么如果没有传入参数，那么两个参数的值都是undefined，如果想要给第二个参数e传入点击事件，那么可以这样`@click="add('chuchen',$event)"`



### 修饰符

Vue提供了修饰符来帮助我们方便的处理一些事件：
.stop - 调用 event.stopPropagation()。
.prevent - 调用 event.preventDefault()。
.{keyCode | keyAlias} - 只当事件是从特定键触发时才触发回调。
.native - 监听组件根元素的原生事件。
.once - 只触发一次回调。



修饰符也就是对于事件的操作，比如阻止冒泡行为，取消默认行为等等

取消冒泡行为

```js
<button @click.stop="but">点击</button>
```

取消默认行为

```html
<form action="baidu">
    <input @keydown.enter="key" type="text">
    <input type="submit" @click.prevent.stop="sub" value="提交">
    可以有多个修饰符
</form>
```

绑定键盘某个键

```html
<input @keydown.enter="key" type="text">
上面这个就是为该事件绑定enter键
```

只能点击一次，也是一样的方式





## v-if条件判断

```html
<h2 v-if="isTrue" >true</h2>
<h2 v-else>false</h2>

isTrue: true
```



```html
<h2 v-if="score>90">优秀</h2>
<h2 v-else if="score>70">良好</h2>
<h2 v-else if="score>60">及格</h2>
<h2 v-else>不合格</h2>

score: 60
```





### 登录切换案例

```html
<div id="app">
    <span v-if="type === 'email'">
        <label>邮箱</label>
        <input type="text" placeholder="邮箱" key="email" >
    </span>

    <span v-else>
        <label>用户名</label>
        <input type="email" placeholder="用户名" key="username" >
    </span>
    <button @click="butClick">点击切换</button>
</div>
<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: '',
            type: "email"
        },
        methods: {
            butClick() {
                this.type = this.type === "email" ? "username" : "email";
            }
        }
    });
</script>
```

![](https://picture.xcye.xyz/image-20210717222058613.png?x-oss-process=style/pictureProcess1)

但是这个会存在一个问题，当我们在input中输入值的时候，点击切换，里面的值，并不会消失，这是因为vue在渲染时候的问题

这是因为Vue在进行DOM渲染时，出于性能考虑，会尽可能的复用已经存在的元素，而不是重新创建新的元素。
在上面的案例中，Vue内部会发现原来的input元素不再使用，直接作为else中的input来使用了。
解决方案：
如果我们不希望Vue出现类似重复利用的问题，可以给对应的input添加key，并且我们需要保证key的不同

`<input type="text" placeholder="邮箱" key="email" >`





## v-show和v-if比较

v-show的用法和v-if非常相似，也用于决定一个元素是否渲染：
v-if和v-show对比
v-if和v-show都可以决定一个元素是否渲染，那么开发中我们如何选择呢？
v-if当条件为false时，压根不会有对应的元素在DOM中。
v-show当条件为false时，仅仅是将元素的display属性设置为none而已。
开发中如何选择呢？
当需要在显示与隐藏之间切片很频繁时，使用v-show
当只有一次切换时，通过使用v-if



> v-if是直接消失，而v-show只是`display:none`





## v-for

- 遍历数组

    格式为`(item,index) in items`，index是下标，注意他们不能颠倒位置

    ```js
    <li v-for="item in movies">{{item}}</li>
    movies: ['胖然心动','一条狗的使命','忠犬八公的故事','驯龙高手']
    ```

- 遍历对象

    如果需要遍历对象，那么格式为`(value,key,index) in XX`，不能颠倒位置

    ```js
    <li v-for="(value,key,index) in qsyyke">{{value}} - {{key}} - {{index+1}}</li>
    
    qsyyke: {
    name: "chuchen",
    age: 22,
    int: {
    first: "coding",
    second: "computer",
    third: "video"
    }
    }
    ```

    ![](https://picture.xcye.xyz/image-20210717223844766.png?x-oss-process=style/pictureProcess1)

    也就是像这样

    `<li v-for="item in movies" :key="item">{{item}}</li>`一定要注意，如果添加key是，他们一定要是同一个值

    ![](https://picture.xcye.xyz/image-20210717224016824.png?x-oss-process=style/pictureProcess1)







### 案例

实现这种效果

![](https://picture.xcye.xyz/image-20210717230730557.png?x-oss-process=style/pictureProcess1)

方法一

```html
<div id="app" v-cloak>
    <div v-if="list.length">
        <table>
            <thead>
            <tr>
                <th></th>
                <th>书籍名称</th>
                <th>出版日期</th>
                <th>价格</th>
                <th>购买数量</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list">
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                    <td>{{item.date}}</td>
                    <td>{{getPrice(item.price)}}</td>
                    <td><button @click="decr(index)">-</button>{{item.count}} <button @click="incr(index)">+</button></td>
                    <td><button @click="remove(index)">移除</button></td>
                </tr>
            </tbody>
        </table>
        <div>总价: {{totalPrice}}</div>
    </div>
    <div v-else>购物车为空</div>
</div>
```

```js
var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85.00,
                count: 1
            },
            {
                id: 2,
                name: '《UNIX编程艺术》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2006-3',
                price: 128.00,
                count: 1
            },
        ]
    },
    methods: {
        getPrice(price) {
            return "￥"+price;
        },
        decr(index) {
            this.list[index].count--;
            if (this.list[index].count <=0) {
                this.list[index].count = 0;
            }
        },
        incr(index) {
            this.list[index].count++;
        },
        remove(index) {
            this.list[index].count = 1;
        }
    },
    computed: {
        totalPrice() {
            var total = 0;
            for (let i = 0; i < this.list.length; i++) {
                total = total + this.list[i].price * this.list[i].count;
            }
            return total;
        }
    }
})
```

因为价格需要在前面加上`￥`,我们可以使用拼接的方式，但是最好使用方法`<td>`{`{getPrice(item.price)}}</td>`



返回总价格时候，使用计算`computed`





方法二

方法二和方法一的区别就是在获取总价格的时候，使用了不同的方式

`使用过滤器的方式`

```html
<td>{{item.price | showPrice}}</td>

filters: {
        showPrice(value) {
            return "￥"+ value;
        }
    }

执行原理：
{{item.price | showPrice}} 中|表示过滤器，showPrice是一个过滤器，也就是会过滤前面的item.price，会将item.price的值传入给showPrice(value)，然后最终结果，就是这个过滤器Return
```





## 表单绑定v-model

v-model能够双向绑定，也就是`<input type="text" v-model="message">`和`message: "chuchen"`进行了绑定，那么当在input中，输入值时，message的值也会改变，同理，修改message的值，input中的value值也会发生改变，这个就是双向改变

### input

```html
<div id="app">
    <input type="text" v-model="message">
    <h2>{{message}}</h2>
</div>

data: {                 
    message: "chuchen"  
}                       
```

这个其实就是两个指令的集合

```html
<div id="app">
    <input v-bind:value="message" type="text" v-on:input="getValue">
    <h2>{{message}}</h2>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            message: "chuchen"
        },
        methods: {
            getValue(event) {
                this.message = event.target.value;
            }
        }
    });
</script>
```

`v-on:input="getValue"`中的input是一个事件，当input输入框中的值，发生改变是，就会触发这个input事件，这种还可以使用简单的方式`<input v-bind:value="message" type="text" v-on:input="message = $event.target.value">`





### radio

```html
<div id="app">
    男<input type="radio" value="男" name="sex" v-model="gender">
    女<input type="radio" value="女" name="sex" v-model="gender">
    <h2>{{gender}}</h2>
</div>

const app = new Vue({
    el: '#app',
    data: {
        gender: "男"
    }
});
```



### checkbox

```html
<div id="app">
    请选择 <input type="checkbox" v-model="agree">
    <button :disabled="!agree">下一步</button>
    <h2>你选择的是: {{agree}}</h2>

    <div>
        <input type="checkbox" value="篮球" v-model="habits">篮球
        <input type="checkbox" value="足球" v-model="habits">足球
        <input type="checkbox" value="排球" v-model="habits">排球
        <input type="checkbox" value="乒乓球" v-model="habits">乒乓球
        <input type="checkbox" value="羽毛球" v-model="habits">羽毛球
        <h2>你的爱好为: {{habits}}</h2>
    </div>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            agree: true,
            habits: []
        }
    });
</script>
```

对于多选框，当我们和一个数组进行绑定时，我们选中某一个，其就会自动的将此多选框的值，添加到绑定的数组中

![](https://picture.xcye.xyz/image-20210718122502214.png?x-oss-process=style/pictureProcess1)







### select

还可以绑定select，但是如果绑定select时，需要绑定在select上

![](https://picture.xcye.xyz/image-20210718122610506.png?x-oss-process=style/pictureProcess1)





### 值绑定

值绑定，也就是`v-bind:value="值"`，这个值可能从请求中得到，其实就是一个v-bind

```html
value: "初尘"

<div id="app">
    <input type="text" :value="value">
    <h2>{{value}}</h2>
</div>
```





### 修饰符

> - lazy修饰符：
>     默认情况下，v-model默认是在input事件中同步输入框的数据的。
>     也就是说，一旦有数据发生改变对应的data中的数据就会自动发生改变。
>     lazy修饰符可以让数据在失去焦点或者回车时才会更新：
> - number修饰符：
>     默认情况下，在输入框中无论我们输入的是字母还是数字，都会被当做字符串类型进行处理。
>     但是如果我们希望处理的是数字类型，那么最好直接将内容当做数字处理。
>     number修饰符可以让在输入框中输入的内容自动转成数字类型：
> - trim修饰符：
>     如果输入的内容首尾有很多空格，通常我们希望将其去除
>     trim修饰符可以过滤内容左右两边的空格



同样的，一个v-model中，也可以同时使用这三个修饰符

```html
<input type="text" v-model.number.lazy="age">
<input type="text" v-model.lazy="message">
```

当`<input type="text" v-model.number.lazy="age">`时，如果输入的是字符串，那么输入的字符串是无效的

![](https://picture.xcye.xyz/image-20210718124011017.png?x-oss-process=style/pictureProcess1)





# 组件

## 概述

![](https://picture.xcye.xyz/image-20210718132419470.png?x-oss-process=style/pictureProcess1)

组件就像写HTML时候，我们将一个页面分成很多个div



## 步骤

1. 创建组件构造器
2. 注册组件
3. 使用组件

![](https://picture.xcye.xyz/image-20210718132750650.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210718132759646.png?x-oss-process=style/pictureProcess1)



在es6语法中，``也是可以代表字符串，并且使用这个，进行换行时，其不会使用加号+进行拼接

```html
创建组件构造器
const cpm = Vue.extend({
template: `
    <div>
        <h2>这是一个组件使用</h2>
        <h2>hahahhahaha</h2>
        <h2>呵呵呵</h2>
    </div>
`
})

注册组件
Vue.component("mycpm",cpm); 第一个参数是我们在页面中，使用的标签名<mycpm></mycpm>，第二个是我们创建的组件构造器

使用组件
<mycpm></mycpm>
```

使用组件的时候，我们需要在vue实例里面才能使用，如果在vue实例以外使用，那么是无效的

```html
<mycpm></mycpm> <!--无效-->
<div id="app">
    <mycpm></mycpm>
    <mycpm></mycpm>
    <mycpm></mycpm>
    <mycpm></mycpm>
</div>
```

`我们定义的vue实例，其实也是一个组件，其是一个根root组件，所以我们注册的所有组件，都可以看做是在vue实例组件下的`



![](https://picture.xcye.xyz/image-20210718133318464.png?x-oss-process=style/pictureProcess1)



## 全局组件和局部组件

全局组件就是，我们注册了一个组件之后，如果存在多个vue实例，那么便可以是所有的这些vue实例中，使用我们的组件

```html
<!--vues实例1-->
<div id="app">
    <mycpm></mycpm>
</div>

<!--vues实例1-->
<div id="app2">
    <mycpm></mycpm>
</div>

<script>
    const cpm = Vue.extend({
        template: `
            <div>
                <h2>这是一个组件使用</h2>
                <h2>hahahhahaha</h2>
                <h2>呵呵呵</h2>
            </div>
            `
    })

    Vue.component("mycpm",cpm);
    const app = new Vue({
        el: '#app',
        data: {

        }
    });

    const app2 = new Vue({
        el: "#app2",
    })
</script>
```

那么我们现在祖册的这个组件，是在注册两个实例之外，那么这个组件就是全局组件，全局组件，我们可以在所有的实例中，使用

![](https://picture.xcye.xyz/image-20210718134823694.png?x-oss-process=style/pictureProcess1)



局部组件的注册是在vue实例中，进行注册了，这个组件只能在当前vue实例管理中使用

```html
<!--vues实例1-->
<div id="app">
    <mycpm></mycpm>
</div>

<!--vues实例1-->
<div id="app2">
    <mycpm></mycpm>
</div>

const app = new Vue({
        el: '#app',
        data: {

        },
        components: {
            mycpm: cpm
        }
    });
```

那么现在这个组件就是局部组件，其只能在vue实例1中使用，不能在实例2中，使用



## 父组件和子组件

子组件是注册在父组件中，

![](https://picture.xcye.xyz/image-20210718135317333.png?x-oss-process=style/pictureProcess1)



```html
<div id="app">
    <parent></parent>
    <child></child>
</div>

<script>
    <!--子组件-->
    const mychild = Vue.extend({
        template: `
            <div>
                <h2>我是一个子组件</h2>
                <h2>我是子组件的内容</h2>
            </div>
        `
    })

    //父组件
    const myparent = Vue.extend({
        template: `
            <div>
                <h2>我是一个父组件</h2>
              <child></child>
            </div>
        `,
        components: {
            'child': mychild
        }
    })

    const app = new Vue({
        el: '#app',
        components: {
            'parent': myparent
        }
    });
</script>
```

因为我们就只在vue实例中注册了父组件，而且在父组件中，注册了子组件，所以我们可以在父组件中，使用子组件

![](https://picture.xcye.xyz/image-20210718141527846.png?x-oss-process=style/pictureProcess1)

但是如果在vue实例中，使用子组件时，子组件没有被注册，那么就会报错

```js
Unknown custom element: <child> - did you register the component correctly? For recursive components, make sure to provide the "name" option.

(found in <Root>)
```



![](https://picture.xcye.xyz/image-20210718141352948.png?x-oss-process=style/pictureProcess1)



> - 父子组件错误用法：以子标签的形式在Vue实例中使用
>     因为当子组件注册到父组件的components时，Vue会编译好父组件的模块
>     该模板的内容已经决定了父组件将要渲染的HTML（相当于父组件中已经有了子组件中的内容了）
>     `<child-cpn></child-cpn>`是只能在父组件中被识别的。
>     类似这种用法，`<child-cpn></child-cpn>`是会被浏览器忽略的。



父子组件的执行原理

```js
const myparent = Vue.extend({
    template: `
        <div>
            <h2>我是一个父组件</h2>
          <child></child>
        </div>
    `,
    components: {
        'child': mychild
    }
})

当解析vue实例1的时候，因为我们将父组件注册到了vue实例1中，所以vue能够解析到父组件，解析到template时，当遇到<child></child>时，因为这个标签，浏览器不认识，所以会优先在当前模板中，进行查找，也就是查找components，看有没有该标签被注册，当找到被注册时，就会将<child></child>标签对应的模板进行替换，这个就是其执行过程
也就是当编译完成之后，其看到的标签就是下面
<div>
    <h2>我是一个父组件</h2>
	<div>
        <h2>我是一个子组件</h2>
        <h2>我是子组件的内容</h2>
	</div>
</div>
```





## 注册组件语法糖形式

```html
全局组件
<div id="app">
    <cpn></cpn>
</div>

Vue.component("cpn",{
template: `
<div>
    <h2>我是一个子组件</h2>
    <h2>我是子组件的内容</h2>
</div>
`
})
```

那么我们现在就注册了一个全局组件，其实其内部也是调用Vue.extend()



```html
局部组件
<div id="app">
    <cpn></cpn>
</div>

components: {
cpn: {
template: `
<div>
    <h2>我是一个子组件</h2>
    <h2>我是子组件的内容</h2>
</div>
`
}
}
```





## 组件template模板的抽离

可以使用两种方式将template中的HTML标签进行抽离

- 方式一，使用script标签

    ```
    <script type="text/x-template" id="cpn">
    <div>
        <h2>我是标题</h2>
        <p>我是一个内容</p>
    </div>
    </script>
    
    全局组件
    Vue.component("cpn", {
            template: "#cpn"
        })
    
    局部组件
    components: {
                cpn: {
                    template: "#cpn"
                }
            }
    ```

但是使用这种script标签方式时，必须要保证其type值为`text/x-template`



- 使用template标签

    ```html
    <template id="cpn2">
        <div>
            <h2>我是标题</h2>
            <p>我是一个内容</p>
        </div>
    </template>
    
    cpn2: {
    template: "#cpn2"
    }
    ```

    使用id选择器可以得到这个template





## 为什么组件中的data必须是一个函数

当我们想要在template模板中，使用我们定义的值时，像下面这样

```html
<template id="cpn">
    <div>
        <h2>{{title}}</h2>
    </div>
</template>

const app = new Vue({
        el: '#app',
        data: {
            title: "初尘"
        }
    });
```

从上面可以看出，我们想要此title是vue实例中data对象中的title值，但是会报一个错误

![](https://picture.xcye.xyz/image-20210718152521493.png?x-oss-process=style/pictureProcess1)

也就是说，我们在模板中使用的这个title属性或者方法必须来自于组件实例中，但是上面的那个title是来自vue实例中，所以不能使用



组件也是一个实例，我们同样可以像vue实例中那样，在里面定义methods，filters，对象等等

```js
//正确写法
Vue.component("cpn",{
    template: "#cpn",
    data() {
        return {
            title: "初尘"
        }
    }
})

//错误写法
Vue.component("cpn",{
    template: "#cpn",
    data: {
    title: "初尘"
})
```

如果使用错误写法，那么就会报一个错误，如下

```js
The "data" option should be a function that returns a per-instance value in component definitions.
```

data必须是一个函数，并且返回对象





那么为什么必须是一个函数？

> 如果是一个对象的话，因为组件我们可以进行复用，也就像下面这样
>
> ```html
> <div id="app">
>     <cpn></cpn>
>     <cpn></cpn>
>     <cpn></cpn>
>     <cpn></cpn>
>     <cpn></cpn>
> </div>
> ```
>
> 如果在组件里面还进行一些操作的话，像计数器那样
>
> ![](https://picture.xcye.xyz/image-20210718153851955.png?x-oss-process=style/pictureProcess1)
>
> 此计数器是存在于template中，并且里面的count，等等都是使用组件实例中的对象，那么如果定义成`data{count:0}`这样的，那么更改其中一个计数器的count值，所有计数器的count都会随之发生改变，因为他们使用的是同一个对象，但是如果是`data(return)`返回一个对象时，因为每一个模板调用，都会返回一个新的对象，所以他们之间是不会影响的，因为是属于不同的对象



这就是为什么在组件实例中，data需要写成function的形式，是因为需要返回不同的对象





# 组件之间的通信

因为vue就是一个root组件，然而在子组件中，我们使用vue实例中data数据时，是不可以的，所以就需要使用另一种方式

![](https://picture.xcye.xyz/image-20210718161445577.png?x-oss-process=style/pictureProcess1)

>  组件之间的通信有两种方式
>
> 1. 通过props向子组件传递数据
>
>     父组件向子组件进行通信时，使用props
>
> 2. 通过事件向父组件发送消息
>
>     子组件向父组件通信时，使用自定义事件

![](https://picture.xcye.xyz/image-20210718161635198.png?x-oss-process=style/pictureProcess1)



> props有两种传值方式
>
> 方式一：字符串数组，数组中的字符串就是传递时的名称。
> 方式二：对象，对象可以设置传递时的类型，也可以设置默认值等。

实例

```html
<template id="cpn">
    <div>
        <h2>我是组件标题</h2>
        <p>{{cmovies}}</p>
        <ul>
            <li v-for="item in cmovies">{{item}}</li>
        </ul>
    </div>
</template>
<script src="../js/vue.js"></script>
<div id="app">
    <cpn v-bind:cmovies="movies"></cpn>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {
            movies: ['海王','驯龙高手','忠犬八公的故事']
        },
        components: {
            cpn: {
                template: "#cpn",
                props: ['cmovies']
            }
        }
    });
</script>
```

![](https://picture.xcye.xyz/image-20210718162638139.png?x-oss-process=style/pictureProcess1)



上面这种方式就是数组的方式，我们也可以使用对象的方式，使用对象的方式时，我们可以指定默认值(也就是当没有进行v-bind时，会显示的默认值，还有类型)，`但是最新的版本之后，default必须是一个函数，通过return返回默认的值，和data一样`

```js
components: {
    cpn: {
        template: "#cpn",
            props: {
                cmovies: {
                    default: "初尘",
                    type: Array,
                    required: true//required是一个布尔值，如果为true，那么就是必须传值，如果不传值的话，就会报错
                }
            }
    }
}
```

当没有传递值的时候

```html
<div id="app">
    <cpn></cpn>
</div>
```

那么就会显示成下面这样

![](https://picture.xcye.xyz/image-20210718163418353.png?x-oss-process=style/pictureProcess1)





写法

![](https://picture.xcye.xyz/image-20210718163953344.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210718164009758.png?x-oss-process=style/pictureProcess1)





## 关于驼峰命名

如果我们在props中使用驼峰命名

```js
props: {
    cMovies: {
        default: "初尘",
        type: Array,
        required: true
    }
}
```

在传值时`<cpn v-bind:cMovies="movies"></cpn>`，那么现在就会出错，`Missing required prop: "cMovies"`可以看到，根本就没有进行传值，这是因为目前在传值时，是不支持驼峰命名的，如果想要使用驼峰，那么就需要使用`-`，`<cpn v-bind:c-movies="movies"></cpn>`两边都改成小写，就可以了

驼峰命名问题，只是在传值的时候会出现，但是在子组件使用props驼峰数据时，是不影响的





## 子组件向父组件传递

如果想要子组件向父组件传递的时候，需要使用自定义事件，大多数，子组件向父组件进行传递时，一般是传递事件的行为，比如京东

![](https://picture.xcye.xyz/image-20210718172913778.png?x-oss-process=style/pictureProcess1)



```html
<template id="cpn">
    <div>
        <button @click="cclick(item)" v-for="item in categories">{{item.name}}</button>
    </div>
</template>
<script src="../js/vue.js"></script>
<!--父组件-->
<div id="app">
    <child @pclick="pget"></child>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {

        },
        methods: {
            pget(item) {
                console.log("-------pget-----")
                console.log(item)
            }
        },
        components: {
            child: {
                template: "#cpn",
                data() {
                    return {
                        categories: [
                            {id: "a",name: "热门推荐"},
                            {id: "b",name: "手机数码"},
                            {id: "c",name: "京东超市"},
                            {id: "d",name: "家用电器"},
                            {id: "e",name: "电脑办公"}]
                    }
                },
                methods: {
                    cclick(item) {
                        this.$emit("pclick",item)
                    }
                }
            }
        }
    });
</script>
```

其执行过程可以用下面的方式进行展示![](https://picture.xcye.xyz/image-20210718180102943.png?x-oss-process=style/pictureProcess1)

> 需要注意到的一点就是：`$emit("监听器","参数")`监听器是自己随意命名，参数是我们需要从子组件传给父组件的信息，父组件可以从里面获取到需要的值，在`<child @pclick="pget"></child>`中，方法pget我们可以不用传值，如果需要用到，在方法中，加入一个参数，就会自动将$emit(“参数”)中的参数传给其，因为这个监听器是我们自定义的，如果是click，那么就会默认将$event传给方法参数

![](https://picture.xcye.xyz/image-20210718175438119.png?x-oss-process=style/pictureProcess1)





## 子组件和父组件之间的双向绑定

如果想要通过v-model修改props中的值时，这种是不可以的，因为props是能通过子组件进行修改，子组件只能读，不能修，如果想要修改，就必须先修改父组件中，传递的值，然后就会自动修改props中的值





# 子组件和父组件之间的访问方式

父组件和子组件之间可以直接进行访问，父组件访问子组件通过`$children,$refs`，子组件访问父组件，通过`$parent`进行访问



## 父组件访问子组件---> $children

```html
<template id="cpn">
    <div>
        <h2>我是标题</h2>
    </div>
</template>
<div id="app">
    <cpn></cpn>
    <cpn></cpn>
    <cpn></cpn>
    <button @click="butclick">点击</button>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {

        },
        methods: {
            butclick() {
                console.log(this.$children[0].name)
            }
        },
        components: {
            cpn: {
                template: "#cpn",
                data() {
                    return {
                        name: "chuchen",
                        age: 22
                    }
                },
                methods: {
                    showMessage() {
                        console.log("------showMessage-------")
                    }
                }
            }
        }
    });
</script>
```



通过`this.$children`就可以拿到当前组件下的所有子组件信息，返回的是一个数组，`this.$children[0].name`可以拿到第一个子组件中的name属性值，`this.$children[0].showMessage()`可以直接调用第一个子组件中的showMessage()方法



> 缺点：
>
> 使用`this.$children`也是存在一个缺点，如果我们需要拿到第二个子组件，this.$children[1]，但是在第一个子组件之后，又重新添加了一个新的组件，那么this.$children[1]获取到的就不是我们想要的，所以缺点就很明显了



### $refs

使用步骤

如果要使用该$refs，那么就必须和ref指令一起使用

```html
<div id="app">
    <cpn></cpn>
    <cpn ref="c"></cpn>
    <cpn></cpn>
    <button @click="butclick">点击</button>
</div>

console.log(this.$refs.c)
```

如果该父组件中的所有子组件，都没有使用ref指令，那么this.$refs返回的是一个空数组，而如果使用了ref指令，那么返回的就是所有有ref指令的子组件，还可以通过`this.$refs.refId`可以访问此refid的组件

在项目开发中，我们使用最多的就是$refs，因为其不会因为加入新的组件，而获取发生改变





## 子组件访问父组件

子组件访问父组件，通过`$parent`进行，使用和$refs一样，如果想要直接访问根组件，那么直接使用`this.$root`





# slot使用

比如京东商城的搜索栏

![](https://picture.xcye.xyz/image-20210718224337501.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210718224342518.png?x-oss-process=style/pictureProcess1)

他们都是搜索栏，所以我们可以做成组件的形式，但是这些搜索栏又会有不同，所以我们子啊定义组件的时候，不能写死，在定义组件时，应该抽取他们的共性，预留出位置，这样，对于上面两种搜索栏，我们就可以使用同一个组件进行开发，也就是spring中的aop原理

```html
<template id="cpn">
    <div>
        <h2>我是标题</h2>
        <slot><button>默认</button></slot>
    </div>
</template>
<div id="app">
    <cpn><button>点击</button></cpn>
    <cpn><span>span标签</span></cpn>
    <cpn><p>p标签</p></cpn>
    <cpn></cpn>
    <cpn></cpn>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {

        },
        components: {
            cpn: {
                template: "#cpn"
            }
        }
    });
</script>
```

我们只需要在定义模板的时候，预留一个`<slot></slot>`标签就可以，在使用该组件的时候，比如组件`<cpn></cpn>`，只需要在该cpn标签中，写上我们需要的标签，那么在喧嚷的时候，就会将添加需要的标签替换`<slot>`，如果需要的标签存在多个，那么会将其看做一个整体进行替换

```html
<template id="cpn">
    <div>
        <h2>我是标题</h2>
        <slot><button>默认</button></slot>
    </div>
</template>
```

如果在slot标签中，定义了其他标签，那么这个就是默认的，也就是如果我们`<cpn></con>`中，没有添加其他的标签，那么就会使用`<slot>`中默认的标签，反之



## 具名插条

![](https://picture.xcye.xyz/image-20210718224337501.png?x-oss-process=style/pictureProcess1)

如果想搜索栏一样，一共有三个slot标签，但是在使用的时候，如果直接在slot里面加上需要的标签，那么会将三个slot都进行替换，这个并不是我们需要的

我们就可以为slot取一个名字，在使用时`<cpn><新标签 slot="需替换slot的名字"></新标签></cpn>`就可以替换指定的slot了，如果没有指定名字，那么就会将新标签替换所有没有名字的slot标签



```html
<template id="cpn">
    <div>
        <slot name="left"><span>左边</span></slot>
        <slot name="center"><span>中间</span></slot>
        <slot name="right"><span>右边</span></slot>
    </div>
</template>
<div id="app">
    <cpn><button slot="left">点击</button></cpn>
    <cpn><span slot="center" >搜索</span></cpn>
    <cpn></cpn>
</div>
```

![](https://picture.xcye.xyz/image-20210718230606066.png?x-oss-process=style/pictureProcess1)





# 作用域

在vue中，vue实例中的数据作用域只能在vue实例中，在组件中的数据的作用域只能在该组件中





## 插槽作用域使用

当我们在子组件中，定义了`<slot>`插条之后，并且子组件中，存在`data() {}`数据，那么就可以直接在父组件中，取到数据

```html
<template id="cpn">
    <div>
        <h2>这是组件标题</h2>
        <slot :data="languages"></slot>
    </div>
</template>
<div id="app">
    <cpn>
        <template slot-scope="slotProps">
            <ul>
                <li v-for="item in slotProps.data">{{item}}</li>
            </ul>
        </template>
    </cpn>
</div>

<script>
    const app = new Vue({
        el: '#app',
        data: {

        },
        components: {
            cpn: {
                template: "#cpn",
                data() {
                    return {
                        languages: ['java','python','c++']
                    }
                }
            }
        }
    });
</script>
```

在子组件插条中，使用`<slot :data="languages"></slot>`绑定数据，在父组件中，进行使用

![](https://picture.xcye.xyz/image-20210719091836069.png?x-oss-process=style/pictureProcess1)

template标签是自定义，可以是div等等，`slot-scope="slotProps"`是固定写法，也就是通过这种方式获取到插条中绑定的数据





# 模板化开发

当一个项目的目录结构像下面这种的时候，那么我们在a.js中定义了一个属性name，在b.js也定义了一个属性name，他们值不一样，那么我们在main.js中，使用name就会出现问题

![](https://picture.xcye.xyz/image-20210719092256055.png?x-oss-process=style/pictureProcess1)

```html
<script src="a.js"></script>
<script src="b.js"></script>
<script src="main.js"></script>
```

b.js中的name会覆盖a.js中的name，那么在main.js中拿到的name值，就是b.js中的，解决这个问题，我们最开始可以使用闭包的方式

```js
(function (){
    name = "chuchen";
})()
```

因为name的作用域就只能在当前文件中，也就不存在被覆盖的情况，但是我们想要在main.js中，使用a.js中的name时，也就不能得到这个值，那么就可以通过下面这种方式进行解决

```js
//a.js
var moduleA = (function (){
    const obj = {};
    name = "chuchen";
    function sum(a,b) {
        return a+b;
    }

    obj.name = name;
    obj.sum = sum;
    return obj;
})()

//main.js
console.log(moduleA.name);
console.log(moduleA.sum(10,20));
```

通过上面这种方式就可以解决这个问题

> 常见的模块化规范：
>
> CommonJS、AMD、CMD，也有ES6的Modules





## CommonJS

模块化有两个核心：导出和导入，但是如果需要使用这种的话，就需要node进行底层支撑，否则不会解析这种结构 
CommonJS的导出：

![](https://picture.xcye.xyz/image-20210719093306334.png?x-oss-process=style/pictureProcess1)

CommonJS的导入

![](https://picture.xcye.xyz/image-20210719093317244.png?x-oss-process=style/pictureProcess1)





## export使用

export指令用于导出变量，比如下面的代码

![](https://picture.xcye.xyz/image-20210719095911513.png?x-oss-process=style/pictureProcess1)

上面的代码还有另外一种写法：

![](https://picture.xcye.xyz/image-20210719095922596.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210719095944721.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210719095954366.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210719100003499.png?x-oss-process=style/pictureProcess1)

