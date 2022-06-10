# ajax介绍

什么是`AJAX`?

`Asynchronous Javascript And XML`（异步 JavaScript 和 XML）



同步请求和异步请求的区别

![](https://picture.xcye.xyz/image-20210303131826786.png?x-oss-process=style/pictureProcess1)

`通过方式`:

如果是同步请求的话，如果页面中的某个连接或者某一部分需要和服务器进行交互，那么在和服务器进行交互的这段时间之内，整个页面必须处于等待状态，只有这个请求完成之后，才能进行其他的请求，而且，如果是同步的方式的话，某一部分发送请求，整个页面的请求都会发送，就是刷新网页，`同步方式发送请求非常的占用资源`



`异步方式`:

异步方式就不需要像同步方式那样，如果我们点击输入搜索框，那么单独的这一部分就只会发送这部分的请求，在控制台就能够清晰的看到发送了一个请求(点击一下)

![](https://picture.xcye.xyz/image-20210303132736544.png?x-oss-process=style/pictureProcess1)

> 客户端必须等待服务器端的响应。在等待的期间客户端不能做其他操作。
> 客户端不需要等待服务器端的响应。在服务器处理请求的过程中，客户端可以进行其他的操作。

`Ajax`是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术
通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。
传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。



# 原生方式使用ajax发送请求

## 代码编写



1. 创建核心对象

    ```js
    var xhttp;                                          
    if (window.XMLHttpRequest) {                        
        xhttp = new XMLHttpRequest();                   
    } else {                                            
        // code for IE6, IE5                            
        xhttp = new ActiveXObject("Microsoft.XMLHTTP"); 
    }                                                   
    ```

2. 建立连接

    ```js
    xhttp.open("POST","ajaxServlet",true);
    ```

    > 第一个参数：请求方式，如果是post请求，那么请求的数据可以放在`send()`方法中
    >
    > 第二个参数：请求的路径
    >
    > 第三个参数：true代表进行异步请求，反之

3. 发送请求

    ```js
    xhttp.send("username=1232434"); 
    ```

    

在发送请求之前，可以使用`xhttp.setRequestHeader("","");`方法设置请求头信息



## 同步请求缺点演示

```java
try {                                
    Thread.sleep(1000*7);            
} catch (InterruptedException e) {   
    e.printStackTrace();             
}                 
//HTML代码
<button>发送请求</button>
<br>
<input type="text">
```

在浏览器发送请求的时候，服务器进行休眠7秒，那么在服务器休眠7秒的这期间，不能点击`input`框，只有等服务器响应结束之后，才能点击，但是如果是异步请求的话，就不出现这种问题，尽管服务器处于休眠状态，`input`框也是可以进行点击



## 事件onreadystatechange()

使用ajax向服务器发送请求，会经历`5个阶段`，可以使用`xhttp.readyState`获取这几个状态

> 保存了 XMLHttpRequest 的状态。
>
> - 0: 请求未初始化
> - 1: 服务器连接已建立
> - 2: 请求已接收
> - 3: 正在处理请求
> - 4: 请求已完成且响应已就绪



`响应状态码`也可以通过`status`进行获取

> - 200: "OK"
> - 403: "Forbidden"
> - 404: "Page not found"



`onreadystatechange()`此事件只要`readyState`改变，便会被激活，可以使用这个事件巧妙的获取响应体信息

```js
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
            this.responseText;
       }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send(); 
} 
```



## 返回响应体



### js获取响应体

通过`xhttp.responseText`可以获取响应的文本，`responseXML`获取 XML 数据形式的响应数据

| getResponseHeader()     | 从服务器返回特定的头部信息 |
| ----------------------- | -------------------------- |
| getAllResponseHeaders() | 从服务器返回所有头部信息   |



### 服务器端注意点

在服务器端设置响应体信息的时候，

```java
byte[] bytes = "hello world ajax".getBytes();         
ServletOutputStream os = response.getOutputStream();  //输出流
os.write(bytes,0,bytes.length);                       
                                                      
response.getWriter().write("hello brows"); //另一个           
```

如果同时使用`getOut....()`和`getWriter()`那么就会报错，这两个只能写一个



并且服务器端使用这两种方式进行响应的时候，浏览器通过

```js
let text = xhttp.responseText;
```

就可以获取到



## jQuery



使用jQuery进行ajax请求，会使代码变得特别简单

代码

```js
$("button").click(function () {
        //发送请求
        $.ajax({
            url:"ajaxServlet2",//请求路径
            type:"POST",//请求方式 默认get
            // data:"username=chuchen&password=123&blog=vipblogs.cn",//请求数据
            data:{
                username:"chuchen",
                password:"chu123",
                age:123,
                sex:true
            },
            async:true,//异步还是同步
            statusCode:{200:function () {
                    alert("状态码200");
                }},
            success:function () {
                alert("成功");
            },
            password: "fff",
            timeout:2000//超时时间

        });
    });
```



直接调用`$.ajax()`便可进行

直接在参数中使用键值对的方式进行写

- `data`键可以有两种方式

```
//第一种方式
data:"username=chuchen&password=123&blog=vipblogs.cn"

//第二种方式
data:{
    username:"chuchen",
    password:"chu123",
    age:123,
    sex:true
}
```

推荐使用第二种方式

使用第二种json的方式，在发送的时候，浏览器会将`json`解析为第一种的方式，再传给服务器

- statuCode

    可以对响应的状态码进行判断

    如果是200，可以执行自定义的函数

    ```
    statusCode:{200:function () {
       alert("状态码200");
    }},
    ```

- success

    `请求成功后的回调函数`，请求成功就执行的函数

    ```
    function (data, textStatus) {
        // data 可能是 xmlDoc, jsonObj, html, text, 等等...
        this; // 调用本次AJAX请求时传递的options参数
    }
    ```

    

- error

    如果请求出错，便会执行其函数

### jQuery.get(url, *[data]*, *[callback]*, *[type]*)

> **url**:待载入页面的URL地址
>
> **data**:待发送 Key/value 参数。
>
> **callback**:载入成功时回调函数。
>
> **type**:返回内容格式，xml, html, script, json, text, _default。

```js
$("button").click(function () { 
    //发送请求                      
    $.get("ajaxServlet2",{      
        username:"chu",         
        pwd:"123",              
        age:2323                
    },function (data,f) {       
        alert("request: "+data) 
    });                         
});                             
```





### jQuery.post(url, *[data]*, *[callback]*, *[type]*)、

> **url**:发送请求地址。
>
> **data**:待发送 Key/value 参数。
>
> **callback**:发送成功时回调函数。
>
> **type**:返回内容格式，xml, html, script, json, text, _default。



```js
$("button").click(function () {
    //发送请求
    $.post("ajaxServlet2",{
        username:"chu",
        pwd:"123",
        age:2323
    },function (data,f) {
        alert("request: "+data)
    });
});
```







# 案例注意

如果服务器传回的是一个`json`，那么必须在响应头中设置格式

```java
response.setContentType("text/json;charset=utf-8");
```

否则，浏览器获得的总是字符串格式，只有设置响应头的格式`json`，浏览器才能拿到这个json



- 如果服务器返回的是一个`json`，那么浏览器不能直接输出



- 如果服务器返回的json有多个，那么返回的格式中间没有逗号，这样对于JavaScript操作来说，有点困难

    就可以使用数组的方式，也就是`dao`层查到结果集，封装在一个list集合中，使用

    `mapper.writeValueAsString(lists)`获取到的就是一个数组，中间有逗号，并且直接响应给浏览器，浏览器通过下标获取到的就是一个对象

    ```json
    [
        {"suggest":"hello","id":1},
        {"suggest":"chuchen","id":2},
        {"suggest":"phone","id":3}
    ]
    ```

    

    ```java
    List<Suggest> lists = service.getSuggest(suggest);
    ObjectMapper mapper = new ObjectMapper();
    String json = mapper.writeValueAsString(lists);
    response.getWriter().write(json);
    ```

    

- jQuery获取服务器返回的结果

    ```js
    $.get("/aj/suggestServlet",{
       suggest:input.value,
       dataType:"text"
        },function (data,isRight) {});
    ```

    `get`方法的第三个参数就可以传递一个`function`，就可以在这个函数中操作返回的结果

    这个函数可以接收两个参数，第一个是返回的响应体数据，第二个是返回的成功与否

    成功就返回`success`，也就是`isRight=success`

    
