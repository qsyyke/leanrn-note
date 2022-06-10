# jQuery使用

## 1. 入口函数的区别



> 1. 原生JS和jQuery入口函数的加载模式不同
>     原生JS会等到DOM元素加载完毕,并且图片也加载完毕才会执行
>     jQuery会等到DOM元素加载完毕,但不会等到图片也加载完毕就会执行



## 2. jquery对象

`jQuery`和`$`就是一个顶级对象

可以看一下源码

```js
	// Define a local copy of jQuery
	var jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};
```





`jQuery`获取到的是元素的jQuery对象，尽管是通过`id`进行获取，得到的也是对象，只能使用jQuery中的方法和属性，并且获取到的对象是一个伪数组的形式存在



```html
<div id="div">1</div>
<div>2</div>
<div>3</div>
<script>
    console.log($("div"));
    console.log($("#div"));
</script>

jQuery.fn.init(3) [div#div, div, div, prevObject: jQuery.fn.init(1)]
jQuery.fn.init [div#div]
```



## 3. 隐式迭代



执行相同的操作的时候，jQuery会在内部进行for循环的遍历，如果是调用`$("div").css("background","red");`，HTML中div有三个，`$("div").css()`会为网页中所有的div标签设置背景色为`red`，执行的顺序为

1. 使用for循环，遍历`$("div")`中多有的元素，因为`$("div")`是一个伪数组，jQuery对象
2. 遍历得到的每一个`div`都会调用`.css("background","red")`进行背景颜色的设置

`隐式迭代是发生在内部的，自动就进行的`，很大程度上免去了我们一个一个的for循环的遍历



## 4. 优先级问题



如果假设存在有两个库，一个`jquery`，另一个库中使用的简便符号也是`$`，那么这个使用使用`$()...`操作就会发生冲突问题，后面引入的那个库，会直接替换掉最开始引入的那个

```js
<script src="./jquery-3.5.1.js"></script>
<script src="./myself-1.1.1.js"></script>
//简便符号都是`$`
```

那么我们使用`$()`时，调用的就是`<script src="./myself-1.1.1.js"></script>`

### 4.1 释放$的使用权

我们也可以释放`$`的使用权来解决这个问题，

使用`jQuery`调用`jQuery.noConflict();`以此来释放`$`的使用权，以后就不能使用`$`这个函数了，就只能通过`jQuery()...`

```js
$("div").css("background","red");
Uncaught TypeError: $ is not a function
```

也可以重新设置新的符号来替换`$`

```js

    var j = jQuery.noConflict();
    j("div").css("background","red");
j相当于$
```



## 5. jQuery是一个匿名函数



## 6. 入口函数

```js
// 1.第一种写法
$(document).ready(function () {
    // alert("hello lnj");
});

// 2.第二种写法
jQuery(document).ready(function () {
    // alert("hello lnj");
});

// 3.第三种写法(推荐)
$(function () {
    // alert("hello lnj");
});

// 4.第四种写法
jQuery(function () {
    alert("hello lnj");
});

```



jQuery已经为我们封装了入口函数，可以使dom结构渲染完毕之后就执行内部代码，不必等到外部的资源加载完毕才执行

相当于原生js中的`DOMContentLoaded`

但是这个不用于原生中的`load`事件，是等页面文档，外部的js文件，css文件，图片加载完毕才会执行内部代码



 ## 7. jQuery和DOM



`DOM和jQuery之间是可以进行相互转换的`

原生的js比jQuery大，jQuery相当于将原生中的一些方法和属性进行了封装，简便了我们的操作，但是还有原生js中的一些属性和方法，jQuery并没有进行封装

`jQuery对象不能够去调用原生js中的方法和属性`



### 7.1 dom对象转换为jQuery对象

`格式`

> `$(DOM对象)`

```html
<div>1</div>
<script>
    var div = document.querySelector("div");//dom对象
    //转换为jQuery对象
    console.log($(div));
</script>
```



### 7.2 jquery对象转换为dom对象

1. 方式一：

    > `$("div")[index]`
    >
    > index是一个索引，因为`$("div")`是一个伪数组的形式，所以使用下标方式取出就是一个DOM对象

2. 方式二：

    > `$("div").get(index)`
    >
    > index是索引

## 8. jQuery核心函数

`jQuery() or $()`是一个核心函数

可以接收标签选择器和DOM对象，还可以接收字符串

1. 接收字符串

    > ```html
    > <script>
    >     $(function(){
    >         var te = $("<h1>这是标签</h1>");
    >         // var te = $("这是标签");
    >         console.log(te);
    >         $("body").append(te);
    >     });
    > </script>
    > ```
    >
    > console.log(var te = $("这是标签"))的长度为`0`，也就是说，如果传入的不是一个标签，那么就无效
    >
    > $("body").append(te);将传入的文本标签追加在body页面中



## 9. JavaScript中的静态方法和实例方法

```html
<script>
        //定义一个类
        function Aclass() {}
        //添加静态方法
        Aclass.staticMethod = function() {
            alert("1");
        }
        Aclass.staticMethod();
        //定义一个实例方法
        Aclass.prototype.instance = function() {
            alert("instance");
        }
        new Aclass().instance();
</script>
```

> function Aclass() {}是一个构造方法，相当于是一个类
>
> Aclass.staticMethod = function() {}是创建一个静态方法，staticMethod是这个静态方法的名字，并不是js中的属性或者方法
>
> `Aclass.prototype`可以获取这个对象，Aclass.prototype.instance = function() {}是创建一个实例方法



`静态方法通过类名直接进行调用，实例方法需要使用对象进行调用`

## 10. forEach方法

### 10.1 原生

可以使用这个方法进行数组的遍历，但是不能对对象进行遍历

```js
var arr = [1,3,5,7];
var obj = {
    name:12,
    age:23,
    java:'javaweb'
};
console.log(arr);
console.log(obj);
//数组的遍历
arr.forEach(function(value,index) {
    console.log(index+":"+value);
});

//对象的遍历
obj.forEach(function(value,index) {
    console.log(index+":"+value);
});

```

`obj是一个对象，此方法不能对对象进行遍历，报错TypeError: obj.forEach is not a function`

> `arr.forEach(function(value,index) {});`需要两个参数，第一个是数组每个下标的值，第二个参数index是数组的下标，会自动获取，不需要手动传值



### 10.2 jQuery的each方法

```js
//jQuery的foreach方法
$.each(arr,function(index,value){
    console.log(index+':'+value);
});
//jQuery的foreach方法遍历对象
$.each(obj,function(index,value){
    console.log(index+':'+value);
});
```

> jQuery的each方法不仅可以遍历数组，还可以遍历对象，
>
> `each()`方法需要两个参数
>
> 第一个：遍历对象
>
> 第二个：回调函数
>
> function(index,value)只是为了在方法一种便于使用，获取这个下标和值
>
> 对于对象的话，第二个参数是对象中属性的名称，第二个是值
>
> 下标和值都是内部自动获取，

```js
var obj = {
    name:12,
    age:23,
    java:'javaweb'
};

$.each(obj,function(index){
    console.log(index);
});

//结果
name
age
ava
```



`jQuery对象的each方法可以遍历数组和对象`

## 11. map



### 11.1 原生遍历

```js
var arr = [1,3,5,7];
var obj = {
name:12,
age:23,
java:'javaweb'
};
arr.map(function(value,index,array) {
    console.log(index,value,array);
});

//遍历对象
obj.map(function(value,index,array) {
    console.log(index,value,array);
});
```

> `map(function(value,index,array)`
>
> 第一个参数是值，第二个是下标，第三个是正在遍历的数组
>
> `原生map`不能遍历对象



### 11.2 jQuery进行map遍历

```js
//jQuery进行遍历
$.map(arr,function(value,index){
    console.log(index,value);
});
//遍历对象
$.map(obj,function(value,index){
    console.log(index,value);
});
```

> `$.map(this,callback)`
>
> 第一个参数是遍历的对象
>
> 第二个参数是回调函数
>
> 回调函数`function(value,index)`的第一个参数是值，第二个是下标或者是对象的名称
>
> `jQuery的map()可以遍历对象`伪数组也可以



### 11.3 区别

`jQuery中的each方法和map方法的区别`

> ```js
> 
> ```

> jQuery中的each静态方法和map静态方法的区别:
> each静态方法默认的返回值就是, 遍历谁就返回谁
> map静态方法默认的返回值是一个空数组
>
> ```js
> var arr1 = $.map(arr,function(value,index){
>         console.log(index,value);
>     });
>     console.log(arr1);//是一个空数组
> 
> ```
>
> ![image-20210228121807431](C:\Users\chuchen\Pictures\视频截图\javaweb\web\image-20210228121807431.png)
>
> each静态方法不支持在回调函数中对遍历的数组进行处理
> map静态方法可以在回调函数中通过return对遍历的数组进行处理, 然后生成一个新的数组返回
>
> ```js
> var arr1 = $.map(arr,function(value,index){
>     return index+':'+value;
> });
> console.log(arr1);
> console.log("---------");
> var arr2 = $.each(arr,function(index,value){
>     return index+':'+value;
> });
> console.log(arr2);
> console.log("-----------");
> ```
>
> 输出结果
>
> ```js
> ["0:1", "1:3", "2:5", "3:7"]
> 31 ---------
> [1, 3, 5, 7]
> ```
>
> 从结果中可以看出，jQuery的each方法不能对回调函数的返回值进行处理




## 12. 其他方法

- `trim()`去除字符串两端的空格

```js
var str = "   str    ";
console.log('--'+str+'--');
var str1 = $.trim(str);
console.log('--'+str1+'--');
```

运行结果

```js
--   str    --
--str--
```

`如果字符串的一端没有空格，那么并不会去除空格，像这样var str = "-   str    ";，调用此方法之后，还是var str = "   str    ";`

- `$.isArray();`

    > 作用: 判断传入的对象是否是真数组
    > 返回值:  true/false

- `$.isWindow();`

    > 作用: 判断传入的对象是否是window对象
    > 返 回值: true/false

- `holdReady()`

    > 作用就是可以展厅`ready()`函数的执行

    ```js
    $(document).ready(function() {
        alert("ready");
    })
    //只要页面的DOM元素加载完成就会出现弹框
    $.holdReady(true);//可以阻止ready()函数的执行
    $.holdReady(false);//恢复ready()函数的执行，
    ready()函数只会执行一次
    ```

    

## 13. vscod快速生成HTML文档

![](https://picture.xcye.xyz/image-20210228145107918.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210228145137130.png?x-oss-process=style/pictureProcess1)

```json
{
	"Html5-js": {
		"prefix": "js",
		"body": [
			"<!DOCTYPE html>",
			"<html lang=\"zh-CN\">",
			"<head>",
			"\t<meta charset=\"UTF-8\">",
			"\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
			"\t<meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">",
			"\t<title>chuchen</title>",
			"\t<script src=\"./jquery-3.5.1.js\"></script>",
			"</head>",
			"<body>\n",
			"\t<script>",
			"\t\t$(document).ready(function() {",
			"\n",
			"\t\t});",
			"\t</script>",
			"</body>",
			"</html>"
		],
		"description": "快速创建在html5编写的js模板"
	}
}
//"prefix": "js",是输入的快捷键的名称，输入js按tab就可以快速生成
```



## 14. 内容选择器

```html
<div></div>
<div><span></span></div>
<div>我是内容</div>
<div><span>我是内容那个div</span></div>
<script>
    $(document).ready(function() {
        // :contains(text)
        // var div = $("div:contains('我是内容')");
        // console.log(div);
        // :empty
        // var div = $("div:empty");
        // console.log(div);
        // :has(selector)
        // var div = $("div:has('span')");
        // console.log(div);
        // :parent
        var div = $("div:parent");
        console.log(div);
    });
</script>
```

- :contains(text)
    var div = $("div:contains('我是内容')");
    console.log(div);

    > 选择在选取的节点中查找含有内容为(text)的节点，不是等于，只要包含有这个文本就行

- :empty

    在所有找到的$(“div”)节点中寻找节点为空的，如果该节点中还有其他的子节点元素，那跳过，像这种`<div></div>`

    var div = $("div:empty");
    console.log(div);

- :has(selector)

    查找拥有(selector)子节点标签的元素，是子标签，不能含有内容

    var div = $("div:has('span')");，所有的div中是否子节点有span

- :parent

    返回该节点中还有子节点的元素

     var div = $("div:parent")

    ```html
    <div></div>
    <div><span></span></div>
    <div>我是内容</div>
    <div><span>我是内容那个div</span></div>
    <!--返回
    <div><span></span></div>
    <div>我是内容</div>
    <div><span>我是内容那个div</span></div>
    -->
    ```





## 15. 属性

- 什么是属性？
  
    > 在对象中的名称就是属性，其值是属性值

- 什么是属性节点

    > `<div class="div" name="chuchen"></div>`这个节点是一个对象，那么其中就有很多的属性，属性节点就是`class,name...`写在后面的值，也可以在浏览器中进行查看
    >
    > ![](https://picture.xcye.xyz/image-20210228153256215.png?x-oss-process=style/pictureProcess1)
    >
    > 在`attributes`中的值，才是属性节点，其他的都不是，我们可以使用原生js操作这些节点

##  16. `attr()`

使用这个方法可以操作属性节点

```html
<div class="div1" name="chu">1</div>
<div class="div2" name="chen">2</div>
```

参数

> 可以有一个，两个
>
> 1. 一个参数：获取属性节点值
>
>     `var div = $("div").attr("class");console.log(div);`只会打印一个值，无论获取到的元素有多少个，都只会返回第一个节点的属性值
>
> 2. 两个参数：设置属性节点值
>
>     `$("div").attr("class","beizi");`会将所有获取到的div的class设置为`beizi`，说实话，这个方法没有原生的好用



##17. `removeAttr()`

`$("div").removeAttr("class");`移除所有找到的节点的class值，是所有，如果想要一次性移除多个，可以使用这种方式进行

`$("div").removeAttr("class name");`中间使用空格，不要使用逗号



## 18. prop()

此方法和`attr()`方法的使用是一样的，但是这个获取的是属性的值，或者操作属性的值，`还可以获取或者设置属性节点的值`



参数也是一样，同样可以接收两个参数

`不能更改默认属性的值，像attributes，会报错`，如果有两个参数，那么会添加属性

` $("span").prop("avip","vipblogs.cn");`

获取属性节点的值，或者设置

> `var span1 = $("span:eq(0)").prop("class");`
>
> 通过这个方式可以获取到属性节点的值



- 通过prop()和attr()都可以获取到属性节点的值，那么该如果选择？

    > 具有 true 和 false 两个属性的属性节点，如 checked, selected 或者 disabled 使用prop()，其他的使用 attr()

## 19. 操作class



- addClass()

    此方法可以在元素中添加class属性节点值，可以添加多个，使用空格隔开`addClass("div1")`

- removeClass("div1")移除此节点中的指定class值，可以同时移除多个，使用空格隔开

- toggleClass("div1 div2")如果此节点中存在这个class值，那么就删除，否则就添加，进行切换

## 20. 获取文本值

- html([val|fn\])

    获取或者设置HTML前端，如果参数为0，就是获取HTML

    `$("div").html("<h1>h1标签</h1>")`

- text([val|fn\])

    和html()方法的使用一样，只是这个获取的是文本，原生js中的`innerText`

- val([val|fn|arr\])

    设置或者获取`input`的值，只能获取`value`的值

## 21. 操作css样式

- 第一种方式

    ```js
    $("div").css("width","100px");
    $("div").css("height","100px");
    $("div").css("background","red");
    ```

- 第二种方式

    `jQuery支持链式编程`

    ```js
    $("div").css("width","100px").css("height","100px").css("background","blue");
    ```

- 第三种方式

    使用对象的写法(推荐做法，因为这种方式和写css时一样的)

    ```js
    $("div").css({
        width:"100px",
        height:"100px",
        background:"pink"
    });
    ```

## 22. 获取尺寸和位置

- 获取尺寸

    > - height([val|fn\])
    >
    >     获取或者设置高度
    >
    >     `$("div").height("100px")`设置高度为`100px`
    >
    >     `$("div").height()`获取高度
    >
    > - width([val|fn\])
    >
    > - innerHeight()
    >
    > - innerWidth(
    >
    > - outerHeight([options\])
    >
    > - outerWidth([options\])

- 位置

    > - offset([coordinates\])
    >
    >     > 获取或者设置元素距离窗口的偏移位
    >
    >     ![](https://picture.xcye.xyz/image-20210228182656927.png?x-oss-process=style/pictureProcess1)
    >
    >     设置
    >
    >     ```js
    >     $("div").offset({
    >        left: 10
    >     });
    >     ```
    >
    >     
    >
    > - position()
    >
    >     获取元素距离定位位置的距离，也就是css中的left，top等值
    >
    >     `$("div").position().left`获取距离左边定位位置的值
    >
    >     `position()`只能获取，不能设置，如果需要设置的话，可以使用css()进行设置
    >
    >     ```js
    >     $(".son").position({
    >         left: 10
    >     });
    >     无效
    >     ```
    >
    >     

- scrollTop([val\])

    这个是设置或者获取滚动的偏移量

    ![](https://picture.xcye.xyz/image-20210228215904371.png?x-oss-process=style/pictureProcess1)

    

    > - 获取偏移量
    >
    > `$("html").scrollTop()`
    >
    > 对于像谷歌这种高级浏览器，`$("body").scrollTop()`获取到的是0，但是对于ie浏览器，只有`$("body").scrollTop()`才可以获取到
    >
    > 兼容方式:
    >
    > `$("html").scrollTop()+$("body").scrollTop()`，对于高级浏览器，`body`方式获取是0，低版本浏览器，通过`html`获取为0，
    >
    > - 设置偏移量
    >
    >     `$("html").scrollTop(400);`，注意这里不能加上`px`，只要数字就可以
    >
    >     `为了保证兼容方式，设置偏移量的时候，必须按照这种方式进行设置`
    >
    >     `$("html,body").scrollTop(400);`

    scrollLeft([val\])

## 23. 事件

### 23.1 事件的绑定方式

- 第一种方式

    > 通过`$("button").事件名称(function() {事件处理});`
    >
    > ```js
    > $("button").click(function() {
    >     console.log("点击事件");
    > });
    > ```

缺点：这种方式绑定的事件，只能是jQuery已经封装的事件，对于部分没有封装的原生事件，此方式不能使用

优点：同一个事件可以绑定不同的实现体，同一个事件源也可以绑定不同的事件，

```js
$("button").click(function() {
    console.log("点击事件");    
});
$("button").click(function() {
    console.log("点击事件+11");    
});
$("button").mouseenter(function() {
    console.log("鼠标进入");    
});
$("button").mouseleave(function() {
    console.log("鼠标离开");    
});
```



- 第二种方式

    > `$("button").on('事件名称',function() {...});`
    >
    > ```js
    > $("button").on('click',function() {
    >      console.log("点击事件+11");    
    > });
    > ```

    这种方式中的事件名称不仅可以设置jQuery已经封装的，还可以绑定原生js中的事件，适用所有的事件，这种方式同一个事件源也可以绑定不同的事件，并且同一个事件可以执行不同的处理方式

```js
$("button").on('click',function() {
    console.log("点击事件+11");    
});
$("button").on('mouseenter',function() {
    console.log("进入");    
});
$("button").on('mouseleave',function() {
    console.log("离开");    
});
```

### 23.2 移除事件

使用`off("需移除的事件名称")`

传入的参数不同，最后的效果也不同

- 零个参数

    > `$("...").off("")`无参，移除该事件源中所有的事件类型

- 一个参数

    > `$("...").off("click")`移除该事件源中指定(参数)事件的所有事件类型

- 两个参数

    > `$("...").off("click",test1)`test1是一个函数，移除该事件源中指定事件类型的指定事件
    >
    > ```js
    > $(function() {
    >             function test1() {
    >                 console.log("test1...");
    >             }
    >             function test2() {
    >                 console.log("test2...");
    >             }
    >             $("button").on('mouseenter',function() {
    >                 console.log("进入");    
    >             });
    >             $("button").click(test1);
    >             $("button").click(test2);
    >             $("button").on('mouseleave',test1);    
    >             // $("button").off("click");
    >             // $("button").off("click",test1);移除click类型中的test1事件
    >             $("button").off("mouseleave");
    >         });
    > ```

    

### 23.3 阻止事件冒泡



如果子元素没有添加事件，而父元素添加了事件，那么点击子元素，浏览器就会在子元素中寻找子元素是否有事件，如果没有找到，就会向上取找，也就是父元素，父元素有，那么就会执行父元素的事件，所以`冒泡事件无论你有没有事件，都会从当前元素寻找，接着向上寻找`

点击子元素的事件，就会向上冒泡，使用原生的方式也可以阻止，这里就通过jQuery的方式进行阻止

> 阻止事件冒泡
>
> - 方式一
>
>     在事件类型函数参数中，`return false`，可以阻止
>
>     ```js
>      $(".son").click(function(even) {
>          alert("son");
>          return false;
>     });
>     ```
>
> - 方式二
>
>     调用`even.stopPropagation();`也可以阻止事件冒泡
>
>     ```js
>     (".son").click(function(even) {
>        alert("son");
>        even.stopPropagation();
>     );
>     ```

### 23.4 阻止默认行为

像form表单，锚链接这种，点击之后，会出现跳转的，可以阻止这种默认行为的发生

- 方式一

    返回`return false`

    ```js
    $("a").click(function(even) {
        alert("注册");
         return false;
    });
    ```

    

- 方式二

    调用`even.preventDefault();`

    ```js
    $("a").click(function(even) {
        alert("注册");
        even.preventDefault();
    });
    ```

    

### 23.5 执行自动事件

有时候，我们需要在当用户进入页面的时候，就会让浏览器自动去执行一些事件，这个时候，就可以使用自动触发事件

添加步骤

1. 为需要执行自动触发的事件源绑定事件
2. 调用`$(".son").trigger("事件类型")`
    - 或者调用`$(".son").triggerHandler("事件类型");`

> `trigger()`和`triggerHandler()`的区别
>
> 1. trigger()会触发冒泡事件
>
> ​	对于submit，会触发默认行为
>
> 2. triggerHandler()不会触发冒泡事件
>
>     不会触发默认行为

`但是对于<a>标签，上面两个方法都不会触发默认行为，如果想要是锚链接自动触发事件，并且执行默认行为，需要使用下面这种方式`

> `<a href="https://www.vipblogs.cn"><span>博客</span></a>` 
>
> ```js
> $("span").click(function () {
>     alert("span")
> });
> // $("span").trigger("click");
> $("span").triggerHandler("click");
> ```
>
> 为`<a>`添加一个`span`，并且为这个span标签添加事件，添加自动触发事件



### 23.6 自动触发自定义事件

我们也可以自己定义事件，但是这个事件，我测试发现，只有设置自动触发，才会执行

使用步骤

1. 使用`$("").on('自定义事件名称',function(){})`

2. 调用自动触发函数，

    `trigger("自定义事件名")`，`triggerHandler("自定义事件名")`

```html
<script>
        $(function() {
            $(".son").on('mySelf',function () {
                alert("son")
            });
            $(".son").trigger('mySelf');
        });
    </script>
<div class="father">
    <div class="son"></div>
</div>
```



这里不能使用`$("").事件类型名称()`方式，因为这种方式只能调用jQuery已经封装好的事件类型名称，有限制，只能使用`$("").on("自定义事件名称",function(){})`



### 23.7 事件的命名空间



什么是事件的命名空间？

在写一个项目的时候，每一个项目都是很多个人一起共同协同开发的，对于一个事件源，可能存在不同的开发人员对其进行不同的事件的添加，那么这个时候，同一个事件源可以添加不同的事件，那么就会存在不知道这个事件是谁添加的，造成混乱，而且在执行的时候，也不能保证单独执行某个开发人员绑定的事件，`命名空间就是解决这个问题`



使用命名空间需要满足两个要求

1. 使用`$("...").on("")`进行事件的绑定

2. 事件名满足格式`click.开发人员标志`，开发人员标志随意，能够进行分辨就可以

```js
$(function() {
    $(".son").on("click.zs",function () {
        alert("son1")
    })
    $(".son").on("click.ls",function () {
        alert("son2")
    })
    $(".son").trigger("click.ls");
});
```



如何执行不同开发人员绑定的事件

调用`$(".son").trigger("click.ls");`注意:格式 `事件类型名.标志名`需要和绑定事件名一致

#### 23.7.1 事件命名空间面试题

```js
$(function () {

    $(".father").on("click.ls", function () {
        alert("father click1");
    });
    $(".father").on("click", function () {
        alert("father click2");
    });
    $(".son").on("click.ls", function () {
        alert("son click1");
    });
    // $(".son").trigger("click.ls");
    $(".son").trigger("click");
});

```

`利用trigger触发子元素带命名空间的事件, 那么父元素带相同命名空间的事件也会被触发. 而父元素没有命名空间的事件不会被触发
利用trigger触发子元素不带命名空间的事件,那么子元素所有相同类型的事件和父元素所有相同类型的事件都会被触发`



## 24. 事件委托



什么是事件委托？

像生活中的事情，把一件事委托给另一个人去完成，这个就是委托，

在js中，事件委托就是，把一个元素的某个事件，委托给另一个元素去帮他完成



 ```html
<ul>
    <li>我是第1个li</li>
    <li>我是第2个li</li>
    <li>我是第3个li</li>
</ul>
<button>新增一个li</button>

<script>
    $(function () {
        $("button").click(function () {
            $("ul").append("<li>我是新增的li</li>");
        })
        $("li").click(function () {
            console.log($(this).html());
        });
    });
</script>
 ```

如果是上面这个程序，为`li`绑定一个点击事件，最开始有三个`li`，并且绑定的点击事件是在入口函数中编写的，也就是等页面中的`DOM`元素都加载完成之后，才会执行js代码，但是等`DOM`元素加载完毕，这个时候浏览器看到的`li`只是已经加载的那三个`li`，对于点击按钮添加的事件，浏览器并不会发生，这个时候，点击新添加的`li`并不会触发事件，因为这个新添加的`li`是在入口函数执行之后才添加的，浏览器找不到，



解决这个问题的核心就是，使用事件委托机制，也就是找一个在执行入口函数的时候，已经加载完成的元素，进行委托，帮助其完成这个事件，可以使用`ul`进行委托，因为ul在执行入口函数的时候，就已经存在的了



委托事件的使用步骤

> 调用`$("委托谁").delegate("谁委托","事件类型","函数")`

```js
$("ul").delegate("li", "click", function () {
    console.log($(this).html());
});
li标签委托ul执行点击事件
```



## 25. 事件的移入移出



- `mouseover()`是鼠标进入此事件源，便会触发事件

- `mouseout()`鼠标离开此事件源，便会触发事件

缺点：

![](https://picture.xcye.xyz/image-20210302175925070.png?x-oss-process=style/pictureProcess1)

>  为大盒子添加了移出和移入事件，但是当鼠标进入子盒子，也会触发进入和离开事件，但是这种情况是不允许的，因为子盒子在父盒子内，是父盒子的一部分，我们想要的是，鼠标进入子盒子，不会触发进入和离开事件，可以使用下面两个事件进行解决



- `mouseenter()`监听移入事件，可以解决移入子盒子触发事件的情况
- `mouseleave()`监听移出事件，同样可以解决移出子盒子触发事件的情况



- `hover()`此事件可以同时监听鼠标移入和移出事件，根据参数的不同，效果也是不同

    > - 一个参数
    >
    >     `hover(function(){....})`
    >
    >     同时监听移入和移出事件，如果传入的只是一个函数的话，移入和移出事件源都会触发此函数
    >
    > - 两个参数
    >
    >     `hover(function(){....},function(){})`
    >
    >     第一个函数的监听移入事件，第二个是监听移出事件



## 显示和隐藏效果

下面的方法需要两个参数，可以有一个

如果是无参，那么基本上没有什么动画的效果

第一个参数，动画产生的时间

第二个参数，动画显示或者隐藏之后执行的代码

- `show()`
- `hide()`
- `toggle()`

```js
$(function() {
    $("button:eq(0)").click(f
        $("div").show(1000,fu
            // alert("显示")
        });
    });
    $("button:eq(1)").click(f
        $("div").hide(1000,fu
            // alert("隐藏")
        });
    });
    $("button:eq(2)").click(f
        $("div").toggle(1000,
        });
    });
});
```

`需要注意一下，显示和隐藏的移动方向`

![](https://picture.xcye.xyz/image-20210302205859044.png?x-oss-process=style/pictureProcess1)





- 显示与隐藏的对联案例

    ![](https://picture.xcye.xyz/image-20210302205523499.png?x-oss-process=style/pictureProcess1)

实现这种对联广告的案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        .left {
            /*display: none;*/
            width: 100px;
            height: 200px;
            float: left;
            position: fixed;
            left: 0px;
            top: 250px;
        }
        .right {
            /*display: none;*/
            width: 100px;
            height: 200px;
            float: right;
            position: fixed;
            right: 0px;
            top: 250px;
        }
    </style>
    <script src="../jquery-3.5.1.js"></script>
    <script>
        $(function() {
            $(window).scroll(function () {
                var scrol = $("html,body").scrollTop();
                console.log(scrol)
                if (scrol > 900) {
                    $("img").show(1000);
                }else {
                    $("img").hide(1000);
                }
            });
        });
    </script>
</head>
<body>
<div>
    <img class="left" src="./photo/left.jpg" alt="">
    <img class="right" src="./photo/right.jpg" alt="">

    <br><br><br><br><br><br><br><br><br><br><br><br>
    *20
</div>
</body>
</html>
```



## 滑动效果

> - slideDown([s\],[e],[fn])
> - slideUp([s,[e\],[fn]])
> - slideToggle([s\],[e],[fn])





如果某个盒子的css样式为

```css
display:none;
```

那么，如果为这个盒子添加滑动效果，会显示这个盒子

`slideToggle()`



折叠菜单案例

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>42-折叠菜单上</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        .nav{
            list-style: none;
            width: 300px;
            margin: 100px auto;
            /*border: 1px solid #000;*/
        }
        .nav>li{
            border: 1px solid #000;
            line-height: 35px;
            border-bottom: none;
            text-indent: 2em;
            position: relative;
        }
        .nav>li:last-child{
            border-bottom: 1px solid #000;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
        }
        .nav>li:first-child{
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
        }
        .nav>li>span{
            background: url("./photo/arrow_right.png") no-repeat center center;
            display: inline-block;
            width: 32px;
            height: 32px;
            position: absolute;
            right: 10px;
            top: 5px;
        }
        .sub {
            display: none;
        }
        .sub>li{
            list-style: none;
            background: mediumpurple;
            border-bottom: 1px solid white;
            /*display: none;*/
        }
        .sub>li:hover{
            background: red;
        }
    </style>
    <script src="../jquery-3.5.1.js"></script>
    <script>
        $(function() {
            // $(".nav>li>ul").css("display","none");
            $(".nav>li").click(function () {
                //为当前元素的子元素添加动画
                $(this).children(".sub").slideToggle(500);
                //清除当前元素的其他兄弟元素的子元素的动画
                $(this).siblings().children().slideUp();
            });
        });
    </script>
</head>
<body>
<ul class="nav">
    <li>一级菜单<span></span>
        <ul class="sub">
            <li>二级菜单</li>
            <li>二级菜单</li>
            <li>二级菜单</li>
            <li>二级菜单</li>
            <li>二级菜单</li>
        </ul>
    </li>
    。。。。*4
</ul>
</body>
</html>
```



## `stop()`

此方法可以停止所有在执行元素上执行的动画，是所有，`必须确定是指定元素上`



> 停止所有在指定元素上正在运行的动画。
>
> 如果队列中有等待执行的动画(并且clearQueue没有设为true)，他们将被马上执行

![](https://picture.xcye.xyz/image-20210302214720438.png?x-oss-process=style/pictureProcess1)

如果一直点这个的话，那么动画队列中还有很多的队列还没有执行完，只有等全部的动画执行完毕之后，才会停止，这种我们应该避免，可以使用`stop()`可以避免

```js
$(function () {
    $(".nav>li").mouseenter(function () {
        $(this).children(".sub").stop(true);
        $(this).children(".sub").slideToggle(400);
    });
    $(".nav>li").mouseleave(function () {
        $(this).children(".sub").stop(true);
        $(this).children(".sub").slideToggle(400);
    });
});
```



## 自定义动画`animate()`



- 第一个参数

    更改样式的一个`对象集合`，在里面写需要更改的样式，对于`width`，不需要加上`px`，否则报错

    多个样式之间使用逗号隔开，最后一个不需要

    `累加属性`：对象中，像width,height可以使用`+=100`这种形式，也就是宽度在前一次动画的基础之上，再加上100，能够使用`int`的样式都可以使用这种方式

    `关键字属性`：`width`等等可以使用之前的效果的关键字进行，`hide,toggle`等效果，同样可以在这里使用

    ```js
    $("button").eq(0).click(function () {
        $(".one").animate({
            width: 200,
            height: 300
        },1000,function () {
            // alert(1);
        });
    });
    $("button").eq(1).click(function () {
        $(".one").animate({
            width: "+=100"
        },1000,function () {
        });
    });
    $("button").eq(2).click(function () {
        $(".two").animate({
            // width:"hide"
            width:"toggle"
        },1000,function () {
        })
    });
    ```

    

    

- 第二个参数

    执行的时间

- 第三个参数

    速度，

- 第四个参数

    动画执行完毕之后需要执行的函数





> 样式参数中，如果一次性写多个，它是一起执行的，有时候我们想要比如，先等宽度先变化，然后在去变化高度，这个就可以分开写
>
> ```js
> $(".one").animate({
>     width: 400
> },1000);
> $(".one").animate({
>     height: 400
> },1000);
> ```
>
> `同时jQuery是支持链式编程的，所以我们可以使用链式编程，减少代码的编写量`
>
> ```js
> //链式编程
> $(".one").animate({width: 400},1000).animate({height:300},200);
> //但是这种方式，只能对于在同一个元素上进行的动画
> ```
>
> 

`delay()`延迟时间

使用这个方法，可以让一个动画执行完毕之后，延迟一定的时间，参数传递一个时间

```js
$(".one").animate({
    width: 400
},1000).delay(1000).animate({height:300},200);
```



`stop()`方法的使用

> ```js
> $("button").eq(1).click(function () {
>     // 立即停止当前动画, 继续执行后续的动画
>     // $("div").stop();
>     // $("div").stop(false);
>     // $("div").stop(false, false);
> 
>     // 立即停止当前和后续所有的动画
>     // $("div").stop(true);
>     // $("div").stop(true, false);
> 
>     // 立即完成当前的, 继续执行后续动画
>     // $("div").stop(false, true);
> 
>     // 立即完成当前的, 并且停止后续所有的
>     $("div").stop(true, true);
> });
> 
> ```
>
> 





## 实现无限循环的效果



```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>50-无限循环滚动</title>
    <style>
        *{
            margin: 0;
            padding: 0;
        }
        div{
            width: 600px;
            height: 161px;
            border: 1px solid #000;
            margin: 100px auto;
            overflow: hidden;
        }
        ul{
            list-style: none;
            width: 1800px;
            height: 161px;
            background: #000;
        }
        ul>li{
            float: left;
        }
    </style>
    <script src="js/jquery-1.12.4.js"></script>
    <script>
        $(function () {
            // 0.定义变量保存偏移位
            var offset = 0;
            // 1.让图片滚动起来
            var timer;
            function autoPlay(){
                timer = setInterval(function () {
                    offset += -10;
                    if(offset <= -1200){
                        offset = 0;
                    }
                    $("ul").css("marginLeft", offset);
                }, 50);
            }
            autoPlay();

           // 2.监听li的移入和移出事件
            $("li").hover(function () {
                // 停止滚动
                clearInterval(timer);
                // 给非当前选中添加蒙版
                $(this).siblings().fadeTo(100, 0.5);
                // 去除当前选中的蒙版
                $(this).fadeTo(100, 1);
            }, function () {
                // 继续滚动
                autoPlay();
                // 去除所有的蒙版
                $("li").fadeTo(100, 1);
            });
        });
    </script>
</head>
<body>
<div>
    <ul>
        <li><img src="images/a.jpg" alt=""></li>
        <li><img src="images/b.jpg" alt=""></li>
        <li><img src="images/c.jpg" alt=""></li>
        <li><img src="images/d.jpg" alt=""></li>
        <li><img src="images/a.jpg" alt=""></li>
        <li><img src="images/b.jpg" alt=""></li>
    </ul>
</div>
</body>
</html>
```



![](https://picture.xcye.xyz/image-20210302233926359.png?x-oss-process=style/pictureProcess1)

鼠标点击每一张图片，其余图片会自动添加一个蒙版，鼠标移开，有自动循环，蒙版消失



使用知识点：

> 定时器的使用
>
> `fadeTo()`方法
>
> 



## 操作文档



- ### 内部插入

    - append(content|fn)
    - appendTo(content)

    `append()/appendTo()会将元素添加到指定元素内部的最后`

    - prepend(content|fn)
    - prependTo(content)

    `prepend()/prependTo()会将元素添加到指定元素内部的最前面`

    > 这两种内部添加的方式的区别：

- ### 外部插入

    - after(content|fn)
    
        `会将元素添加到指定元素外部的后面`
    
        <img src="http://ooszy.cco.vin/img/blog-note/image-20210303125001188.png?x-oss-process=style/pictureProcess1" alt="image-20210303125001188" style="zoom:33%;" />
    
    - before(content|fn)
    
        `会将元素添加到指定元素外部的前面`
    
    - insertAfter(content)
    
    - insertBefore(content)

- 删除

	- empty()
	
	    删除指定元素的内容和子元素, 指定元素自身不会被删除
	
	    ```html
	    <div>sdfkjsdfl<p>sdfsdf</p></div>
	    			变为
	    <div></div>
	    
	    ```
	
	    
	
	- remove([expr\]))
	
	    利用remove删除之后再重新添加,原有的事件无法响应
	
	- detach([expr\]))
	
	    利用detach删除之后再重新添加,原有事件可以响应
