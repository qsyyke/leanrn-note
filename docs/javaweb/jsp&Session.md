# jsp和session

什么是`jsp`？jsp就是为了简化我们开发时候的代码，如果没有，那么我们就需要使用java代码，将a标签，`<html>`等等标签，通过调用`response.getWriter().write()`方法写到页面上，这种非常麻烦，jsp就是为了解决这种情况



`jsp`就是一个java文件

<img src="http://ooszy.cco.vin/img/blog-note/image-20210218234614876.png?x-oss-process=style/pictureProcess1" alt="image-20210218234614876" style="zoom:50%;" />



在控制台打印信息中找到工作空间的路径

<img src="http://ooszy.cco.vin/img/blog-note/image-20210218234711670.png?x-oss-process=style/pictureProcess1" alt="image-20210218234711670" style="zoom:67%;" />

<img src="http://ooszy.cco.vin/img/blog-note/image-20210218234837763.png?x-oss-process=style/pictureProcess1" alt="image-20210218234837763" style="zoom:50%;" />![](https://picture.xcye.xyz/image-20210218234913574.png?x-oss-process=style/pictureProcess1)

<img src="http://ooszy.cco.vin/img/blog-note/image-20210218234837763.png?x-oss-process=style/pictureProcess1" alt="image-20210218234837763" style="zoom:50%;" />![](https://picture.xcye.xyz/image-20210218234913574.png?x-oss-process=style/pictureProcess1)

就可以看到这个`jsp`文件被解析成了java文件，所以`jsp就是一个java文件`，并且它是一个`servlet`文件，里面的`public void _jspService()`方法相当于`service()`方法











##  jsp脚本

一共有三种方式写

> `<%  代码 %>`：定义的java代码，在service方法中。service方法中可以定义什么，该脚本中就可以定义什么。



> `<%! 代码 %>`：定义的java代码，在jsp转换后的java类的成员位置。



> `<%= 代码 %>`：定义的java代码，会输出到页面上。输出语句中可以定义什么，该脚本中就可以定义什么。
>
> 不同定义`System.out.println()`，因为这个是输出语句中定义的，我们不能在输出语句中有定义输出语句，不能使用分好`;`写其他的，这个并不是写语句，只能用加号





`<%= request.getCookies()+"hello" %>`内部是`out.print( request.getCookies()+"hello" );`

还可以这样玩`<input value=<%= System.currentTimeMillis() %>/>`

为什么在jsp中定义的JavaScript不起作用？

> 因为根本就没有发送请求



尽管注释了，但是如果注释中有jsp语法，那么也会对这个进行编译，因为在源文件中进行注释，再次访问，是会发送请求

![](https://picture.xcye.xyz/image-20210219093400030.png?x-oss-process=style/pictureProcess1)

![](https://picture.xcye.xyz/image-20210219093416170.png?x-oss-process=style/pictureProcess1)

## 内置对象



像JavaScript中的`Date()`等等对象一样，并不是我们自己定义的，开发人员已经在内部就给我们定义好了，我们直接拿来使用就行，在jsp中也是一样，一共有`9`个内置的对象，像`request,respone,out`都是内置对象，因为他们在页面中就有声明，`request,respone`在方法中已经声明，`javax.servlet.jsp.JspWriter out = null;`out对象也已经声明了，所以我们可以直接使用



## out对象



`out.write()`对象和`respone.getWriter().write()`方法差不多，但是他们直接也还是有区别，

>  在tomcat服务器真正给客户端做出响应之前，会先找response缓冲区数据，再找out缓冲区数据。
> response.getWriter()数据输出永远在out.write()之前





## 新颖写法



### 改造cookie案例



当粘贴代码在`<%%>`中时，其会进行自动导包

<img src="http://ooszy.cco.vin/img/blog-note/image-20210219100406167.png?x-oss-process=style/pictureProcess1" alt="image-20210219100406167" style="zoom:67%;" />



```jsp
<%@ page import="java.net.URLDecoder" %>
<%@ page import="java.text.SimpleDateFormat" %>
<%@ page import="java.util.Date" %>
<%@ page import="java.net.URLEncoder" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
<%
    response.setContentType("text/html;charset=utf-8");
    //记录上次打开浏览器的时间 cookie名字为lastTime
    Cookie[] cookies = request.getCookies();
    //1.判断是否有cookie
    //2.存在cookie，获取cookie 打印上次访问时间
    //3.不存在cookie 则发送cookie，并写出欢迎词，发送cookie
    if (cookies != null) {
        //存在cookie 遍历cookie
        for (Cookie cookie : cookies) {
            //获取名字
            String name = cookie.getName();
            //判断名字中是否存在cookie名字
            if (name.contains("lastTime")) {
                //cookie中包含名字
                //获取值
                String value = cookie.getValue();
                //解码
                value = URLDecoder.decode(value,"utf-8");
%>
<h1><%= "你上次访问时间为"+value %></h1>
<%--<% Thread.sleep(10000); %>
<script>
    alert("欢迎你")
</script>--%>
<%
                //设置新的cookie时间
                //时间格式
                SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
                String format = sdf.format(new Date());
                //编码
                format = URLEncoder.encode(format,"utf-8");
                cookie.setValue(format);
                cookie.setMaxAge(60 * 60 * 24 * 30);//一个月
                response.addCookie(cookie);
                return;
            }
        }
%>
<%
    }
    if (cookies == null) {
        //不存在cookie  新建cookie 发送
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
        String format = sdf.format(date);
        //编码
        format = URLEncoder.encode(format, "utf-8");

        Cookie cookie = new Cookie("lastTime", format);
        //设置cookie的存活时间
        cookie.setMaxAge(60 * 60 * 24 * 30);//一个月
        response.addCookie(cookie);
        %>
<h1>欢迎你首次访问</h1>
<%
    }
%>
</body>
</html>
```



`输出欢迎词我们可以使用<h1>等等标签进行截断，因为在方法中是从上往下执行的，也就相当于从上往下进行解析`





# Session

是服务器端的会话技术，会将数据保存至服务器，使用根`cookie`一样

`能够共享数据，所以可以叫做域对象`



## 获取session对象

因为session是和cookie一起使用的，需要使用`request`进行获取

`Session`是一个接口，不能使用这个类new对象

`HttpSession session = request.getSession();`返回的是一个`HttpSession`对象



> `原理`： 
>
> 如果没有cookie，也就是第一次请求的时候，通过`request`获取session，因为没有cookie，所以服务器会自动创建一个`session`，并为这个session设置一个唯一id，并且在相应头中添加一个`Set-Cookie: JSESSIONID=5801991ED53032A55BA35ED3A56B4CC0;`，`5801991ED53032A55BA35ED3A56B4CC0`就是服务器设置的一个唯一id，浏览器再次请求时，会把这个`JSESSIONID=.....`添加到请求头中，一起发送给服务器，服务器接收到请求，通过`request.getSession()`获取session，会拿到这个session对象，会通过id在服务器中查找，是否有这一个id，因为第一次请求的时候，服务器就创建了这个id的session，并且保存在了服务器端，所以他可以找到，也就是通过这个id确定一个请求中的session对象是否是同一个，这就是为什么，第一次通过`session.getId()`可以得到数据

## 问一

> 关闭客户端，服务器不关闭，两次获取的session是否是同一个？
>
> 不是，因为session和cookie一样，代表的是`一次会话`之间的数据共享，如果客户端关闭，那么也就代表一次会话结束，再次打开时，就会重新发送请求，重新获取`session`，他们的id是不同的

但是可以通过方法设置，从而达到持久化保存

```java
//获取session对象                                                          
HttpSession session = request.getSession();                            
String id = session.getId();//250B456186329D52E73E97CCFB7F9B68         
Cookie cookie = new Cookie("JSESSIONID",id);                           
//设置存活时间                                                               
cookie.setMaxAge(60*60);                                               
response.addCookie(cookie);                                            
```







## 问二

>  客户端不关闭，服务器关闭，两次获取的session是否是同一个？
>
> 不是同一个，但是在客户端关闭之前，我们可以将这个session对象进行`序列化`操作保存在服务器端，下次服务器启动时，我们可以使用`反序列化`将保存的这个session对象取出，这样就可以保证对象中的数据不丢失

`序列化和反序列化Tomcat已经为我们做了，我们不需要自己序列化和反序列化`，但是idea并没有这样，idea有序列化的过程，当服务器正常关闭的时候，idea会在Word目录中生成一个文件保存session对象，但是当下一次服务器启动的时候，idea会把这个work目录删除，重新创建一个新的work目录，里面保存的session对象文件也不在了



>  `session的钝化`:在服务器正常关闭之前，将session对象系列化到硬盘上
> `session的活化`:在服务器启动后，将session文件转化为内存中的session对象即可。



## 问三

>  session什么时候被销毁？
>
> 1. 服务器关闭的时候
>
> 2. session对象调用`invalidate()`方法
>
> 3. session默认的失效时间是30分钟，可以在`web.xml`文件中进行配置失效时间
>
>     ```xml
>     <session-config>
>     	<session-timeout>30</session-timeout>
>     </session-config>
>     ```
>
>     失效时间就是，比如一个用户登录，如果30分钟没有操作，那么就提示退出，并让其再次登录，我们应该避免这种事情的发生



## session特点



session不像cookie那样，对数据的个数和大小有限制，可以随便存储任何长度的数据

session存储数据是安全的，因为是存储在服务器中

session存储在服务器端，cookie存储在浏览器端



# jsp

## 指令



> 作用：用于配置jsp页面，导入资源

`格式`:<% @指令名称 属性名=属性值，属性名=属性值.... %>  `@和指令名称之间需要空格`



###  `指令分类`

#### `page`:配置页面信息

> 
>
> 1. `contentType`：等同于response.setContentType()
>
>     设置响应体的mime类型以及字符集
>     设置当前jsp页面的编码
>
> 1. `import`：导包
>
>     `<%@ page import="java.util.Date" %>`现在就将`Date`类导入了进去，最好导一个，单独使用一行进行一个类的导入
>
> 2. `errorPage`：当前页面发生异常后，会自动跳转到指定的错误页面
>
>     ```jsp
>     <%@ page errorPage="../index.jsp" %>
>     <% System.out.println(3/0); %>
>     这里3/0会发生一个异常，就会自动进入index.jsp页面，不会在页面上打印错误信息
>     ```
>
> 3. `isErrorPage`：标识当前也是是否是错误页面。
>
>     1. true：是，可以使用内置对象exception
>     2. false：否。默认值。不可以使用内置对象exception



#### `include`

`include`:页面包含的。导入页面的资源文件 

`<%@include file="top.jsp"%>`

这个指令只有一个属性值，就是`file`

因为存在很多的页面，其表头，或者是logo都是相同的，我们可以使用这个指令进行这些页面的引入



#### `taglib`



`taglib`:导入资源

比如我们经常使用的`jstl`标签，就需要使用这个指令进行标签的引入，然后我们才能使用`jstl`标签

>  使用`jstl`标签步骤
>
> 1. 导入`jstl`jar包
>
>     <img src="http://ooszy.cco.vin/img/blog-note/image-20210220201450627.png?x-oss-process=style/pictureProcess1" alt="image-20210220201450627" style="zoom:67%;" />
>
> 2. 定义`taglib`指令
>
>     ```jsp
>     <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
>     ```
>
>     `prefix`值我们可以随意定义，比如可以定义为`hello`,使用的时候直接`<hello:>`因为他们都是标签，就像div标签一样使用，但是需要加上`冒号:`



## 注释



>  html注释：
> `<!-- -->`:只能注释html代码片段
> jsp注释：推荐使用
> `<%-- --%>`：可以注释所有





## 内置对象



jsp中已经内置了9个内置对象，因为每一个jsp都是一个java程序，在每一个jsp文件中，都定义了9个变量，也就是这9个对象，我们可以直接使用



| 变量名      | 真实类型            | 作用                                         |
| ----------- | ------------------- | -------------------------------------------- |
| pageContext | PageContext         | 当前页面共享数据，还可以获取其他八个内置对象 |
| request     | HttpServletRequest  | 一次请求访问的多个资源(转发)                 |
| session     | HttpSession         | 一次会话的多个请求间                         |
| application | ServletContext      | 所有用户间共享数据                           |
| response    | HttpServletResponse | 响应对象                                     |
| page        | Object              | 当前页面(Servlet)的对象  this                |
| out         | JspWriter           | 输出对象，数据输出到页面上                   |
| config      | ServletConfig       | Servlet的配置对象                            |
| exception   | Throwable           | 异常对象                                     |



# MVC



`MVC`是一种开发模式，不算设计模式，设计模式是解决一些开发中的小细节

- M：Model，模型。JavaBean
    - 完成具体的业务操作，如：查询数据库，封装对象
- V：View，视图。JSP
    - 展示数据
- C：Controller，控制器。Servlet
    - 获取用户的输入
    - 调用模型
    - 将数据交给视图进行展示

<img src="http://ooszy.cco.vin/img/blog-note/image-20210220204550240.png?x-oss-process=style/pictureProcess1" alt="image-20210220204550240" style="zoom:67%;" />

## 有点和缺点

- 优点：

    - 耦合性低，方便维护，可以利于分工协作

    - 重用性高

- 缺点：
    - 使得项目架构变得复杂，对开发人员要求高		





# EL表达式

什么是`EL`表达式：Expression Language 表达式语言，这是一种语言

使用这个，可以替换和简化jsp开发步骤

语法`${表达式}`

`jsp中默认是支持EL表达式的，如果想要禁止EL表达式，可以在page指令中进行设置`

```jsp
<%@ page isELIgnored="true" %>  
true为忽视
false为不忽视，也是默认的值
如果这样设置，是忽略当前页面中的所有的EL表达式
```



`忽略单独一个EL表达式`

```jsp
\${表达式} ：忽略当前这个el表达式
```



## 使用



- 作为运算符

    > - 算数运算符： + - * /(div) %(mod)  返回数字
    >
    > - 比较运算符： > < >= <= == !=  返回Boolean
    >
    > - 逻辑运算符： &&(and) ||(or) !(not) 
    >
    > - 空运算符： empty  返回Boolean
    >     - 功能：用于判断字符串、集合、数组对象是否为null或者长度是否为0
    >
    >         - ${empty list}:判断字符串、集合、数组对象是否为null或者长度为0
    >
    >         - ${not empty str}:表示判断字符串、集合、数组对象是否不为null 并且 长度>0

- 使用

    ```jsp
    <h1>算数运算符\${4+5}${4+5}</h1>
    <h1>算数运算符\${4*5}${4*5}</h1>
    <h1>比较运算符\${4>5}${4>5}</h1>
    <h1>比较运算符\${4!=5}${4!=5}</h1>
    <h1>逻辑运算符\${!false}${!false}</h1>
    <h1>逻辑运算符\${notfalse}${not false}</h1>
    <h1>空运算符\${empty ""}${empty ""}</h1>
    ```

    

运行结果

```html
算数运算符${4+5}9
算数运算符${4*5}20
比较运算符${4>5}false
比较运算符${4!=5}true
逻辑运算符${!false}true
逻辑运算符${notfalse}true
空运算符${empty ""}true
```



## 获取值



`EL`表达式只能从域对象中获取值

在jsp中一共有4个域对象，分别是

> pageScope		--> pageContext
> requestScope 	--> request
> sessionScope 	--> session
> applicationScope --> application（ServletContext）



1. `${域名称.键名}`：从指定域中获取指定键的值，域名称也就上上面的4个域对象，因为域对象中我们可以通过`request.setAttribute("msg","hello");`等对象设置值，就可以通过`键名`获取保存在域对象中的值，键名就是`msg`（对于`request.setAttribute("msg","hello");`）

    ```jsp
    <% request.setAttribute("msg","hello"); %>
    <h2>通过键名获取值</h2>
    <h2>${requestScope.msg}</h2>
    返回hello
    ```

2. `${键名}`：表示依次从最小的域中查找是否有该键对应的值，直到找到为止

3. 域对象范围从小到大的排序为: 

    > pageScope < requestScope < SessionScope < applicationScope

    例如

    ```jsp
    <%
        request.setAttribute("msg","hello_re");
        pageContext.setAttribute("msg","hello_pa");
    %>
    <h2>通过键名获取值</h2>
    <h2>${msg}</h2>
    
    返回结果为: hello_pa
    ```

    `${msg}`因为没有指明是哪个域对象中的`msg`键名，所以程序会从最小的开始查找那个域对象中是否有一个键名为`msg`，所以最开始从`pageScope`对象中查找，如果这个对象中没有保存键名为`msg`的数据，那么会接着从`request`中查找，如果到最后`applicationScope`中也没有找到，那么会返回`空字符串，并不是null`





## 获取对象，List，Map集合的值



### 获取对象

因为EL表达式获取值只能从域对象中获取，所以想要获取某个对象的值，必须先将对象存入域对象中，然后再通过EL进行获取

```jsp
<%
session.setAttribute("time",new Date());
%>
${sessionScope.time.month}
返回1，因为英文中是从0月开始
```



`其实，EL表达式获取对象的值是通过对象的set或者get方法进行的`



#### 对象的属性



这里说的对象的属性和类中的属性定义其实不太一样

```java
package com.chu.servlet;

public class User {
    private String name;
    private int age;
    private char sex;

    public String getName () {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }

    public int getAge () {
        return age;
    }

    public void setAge (int age) {
        this.age = age;
    }

    public char getSex () {
        return sex;
    }

    public void setSex (char sex) {
        this.sex = sex;
    }

    @Override
    public String toString () {
        return "User{" + "name='" + name + '\'' + ", age=" + age + ", sex=" + sex + '}';
    }
}
```

这个User类中的`name,sex,age`都是类中的属性

这里说的属性是，所有的`get...()或者set...()`方法去掉`get,set`得到的字段，并将这个字段的首字母小写后得到的字段，因为规范化命名的话，我们在类中定义的属性都是小写，去掉get，set后的属性名一般就是类中定义的属性

比如下面这个

```java
String name;
public String getName() {}
//去掉get，并设置首字母为小写后的属性就是name
```



但是有的时候，我们去掉get或者set，首字母小写之后，这个属性在类中并没有定义，这种情况我们也是会遇到



比如我们需要使用El表达式返回时间自定义的字符串格式，就可以通过下面这种形式

```java
//在User对类中定义
public String getDate() {
        //返回自定义时间格式
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:MM:ss");
        return sdf.format(date);
    }
```

`getDate()`的属性为`date`，很明显，在User类中我们并没有定义这个变量，像这种，只是为了完成某种数据展示的属性，被称作`逻辑视图`

现在在jsp中就可以通过user对象打印时间字符串了

```jsp
${sessionScope.user.date}
返回结果
2021年02月20日 22:02:33
```



如果直接`${sessionScope.user}`，那么就相当于执行`System.out.println(user)`的结果一样，调用`toString()`方法





### List



获取list数组结合中的值



> 格式:`${域对象.键名[下标]}`

```jsp
<%
    List list = new ArrayList();
    list.add(234);
    list.add("Sdf");
    list.add(34);
    request.setAttribute("list",list);
%>
<h3>获取list集合中的值</h3>
${requestScope.list[2]}
//返回34
相当于调用了list.get(2);
```



操作数组的时候，操作失误可能会出现下标越界的情况，那么使用El执行下标越界操作会怎么样？

> `El`已经解决数组下标越界的情况，如果真的发生了下标越界，那么会自动返回一个`空字符串`，并不会打印错误信息在页面上





### Map集合



使用El获取Map集合中的值操作



> 语法/格式: 
>
> `${域名称.键名.key名称}`
> `${域名称.键名["key名称"]}`



```jsp
<%
    Map map = new HashMap();
    map.put("name","chuchen");
    map.put("age",33);
    map.put("sex","男");
    session.setAttribute("map",map);
%>

${sessionScope.map.name}
<br>
${sessionScope.map}
返回结果
chuchen
{sex=男, name=chuchen, age=33}
```





## El隐式对象

EL表达式一共有11个隐式对象，这11个对象都已经定义好的，我们可以直接拿来使用

> pageScope		--> pageContext
> requestScope 	--> request
> sessionScope 	--> session
> applicationScope --> application（ServletContext）
>
> 这四个，就是隐式对象




`pageContext`：

			* 获取jsp其他八个内置对象
				* ${pageContext.request.contextPath}：动态获取虚拟目录

虚拟目录在我们开发过程中有时候会经常使用，动态的获取虚目录便于我们日常的维护，在登录界面上的请求路径，就可以通过`{pageContext.request.contextPath}`动态的获取虚拟目录



# JSTL	



- 概念：JavaServer Pages Tag Library  JSP标准标签库
     是由Apache组织提供的开源的免费的jsp标签		<标签>
- 作用： 用于简化和替换jsp页面上的java代码

1. if:相当于java代码的if语句
			1. 属性：
	            * test 必须属性，接受boolean表达式
	                * 如果表达式为true，则显示if标签体内容，如果为false，则不显示标签体内容
	                * 一般情况下，test属性值会结合el表达式一起使用
       		 2. 注意：
	       		 * c:if标签没有else情况，想要else情况，则可以在定义一个c:if标签
		2. choose:相当于java代码的switch语句
			1. 使用choose标签声明         			相当于switch声明
            2. 使用when标签做判断         			相当于case
            3. 使用otherwise标签做其他情况的声明    	相当于default

		3. foreach:相当于java代码的for语句

、

## 循环遍历



`int i=1;i<10;i++{}结构`

> 步骤：
>
> 1. 导入标签库，并定义使用的标签名称
>
> 2. 使用标签
>
>     ```jsp
>     <%
>     byte[] bytes = {1,3,5,4,8,4};
>     %>
>     <c:forEach begin="1" end="10" var="i" step="1">
>         ${i}
>     </c:forEach>
>     ```
>
> 3. begin    相当于i=1
>
>     end       相当于i<10
>
>     var        相当于 int i
>
>     strp       相当于i++
>
>     `begin and end都是[]`





foreach结构



# 三层架构：软件设计架构
1. 界面层(表示层)：用户看的得界面。用户可以通过界面上的组件和服务器进行交互

2. 业务逻辑层：处理业务逻辑的。
3. 数据访问层：操作数据存储文件。

<img src="http://ooszy.cco.vin/img/blog-note/image-20210220223909173.png?x-oss-process=style/pictureProcess1" alt="image-20210220223909173" style="zoom:50%;" />

