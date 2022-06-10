# json介绍

# 语法规则

> - 数据在名称/值对中
> - 数据由逗号分隔
> - 花括号保存对象
> - 方括号保存数组

`使用的是键值对的方式`

```js
键:值
```



`值的写法和数据类型`

> - 数字（整数或浮点数）
> - 字符串（在双引号中）
> - 逻辑值（true 或 false）
> - 数组（在方括号中）
> - 对象（在花括号中）
> - null



# 嵌套

json可以进行嵌套使用

- **--->   {}**

> ```json
> var person = {name:"cqy","pwd":"123",age:12,sex:true};                 
> ```

- **[] ---> {}**

> ```json
> var persons = 
> [
>     {name:...,age:345,...},
>     {name:...,age:345,...},
>     {name:...,age:345,...}
> ]
> ```



- **{} ---> []**

> ```json
> var persons = 
> {
>     [....],[...],[...],[...]
> }
> 
> var persons = 
> {                                                                   
>     "habit":[{code:"coding",ah:"ppq",is:true},				{code:"computer",ah:"ymq",is:false}],	
>     "name":[{name_age:12},{name_age:34}]                                         
> };                                                                                
> ```



- **{} ---> {}**

> ```json
> var persons = 
> {
>     {name:....},
> 	{age:234},
> 	{sex:true}
> }
> ```



# 获取json值

格式

> - 对象：
>     - `对象名.键名`
>     - `对象名['键名']`
>
> - 数组
>
>     - `对象[]...`
>
>     如果保存的是一个数组的格式，那么就是使用`下标`获取到这个数组对象，如果这个对象是`{}`，就还是一样的

```js
var person = {                                                                     
    name:"cqy",                                                                    
    "pwd":"123",                                                                   
    age:12,                                                                        
    sex:true                                                                       
};                                                                                 
alert(person.name);                                                             
alert(person['age']);                                                           
                                                                                   
var persons = {                                                                    
    "habit":[{code:"coding",ah:"ppq",is:true},{code:"computer",ah:"ymq",is:false}],
    "name":[{name_age:12},{name_age:34}]                                           
};                                                                                 
alert(persons.habit[0].code);                                                      
```





## json的遍历



```js
var person = {                           
    name:"cqy",                          
    "pwd":"123",                         
    age:12,                              
    sex:true                             
};                                       
//遍历                                     
for (let key in person) {                
    // console.log(key+" : "+person.key);
    console.log(key+" : "+person[key]);  
}                                        
```



```js
var persons = {                                                                    
    "habit":[{code:"coding",ah:"ppq",is:true},{code:"computer",ah:"ymq",is:false}],
    "name":[{name_age:12},{name_age:34}]                                           
};                                                                                 
for (let key in persons) {                                                         
    //key为habit name  persons[key]为[{code:"coding",ah:"ppq",is:true}               
    for (let i = 0; i < persons[key].length; i++) {                                
        //f 为{code:"coding",ah:"ppq",is:true}                                      
        var f = persons[key][i];                                                   
        for (let key_f in f) {                                                     
            //key_f为每一个值                                                         
            console.log(key_f+" : "+f[key_f]);                                     
        }                                                                          
    }                                                                              
}                                                                                  
                                                                                   
```



# json解析



解析json的技术有很多

> Jsonlib，Gson，fastjson，jackson



使用`jackson`进行解析的步骤

1. 导入jar包

    > ![](https://picture.xcye.xyz/image-20210303230506507.png?x-oss-process=style/pictureProcess1)

2. 创建Jackson核心对象 ObjectMapper

3. 调用相关方法进行解析



```java
public void test1() throws Exception {
    //1.创建对象
    User zs = new User();
    zs.setUsername("张三");
    zs.setAge(22);
    zs.setSex('男');
    //创建对象
    ObjectMapper mapper = new ObjectMapper();
    //解析
    /*String s = mapper.writeValueAsString(zs);
    System.out.println(s);*/
	// mapper.writeValue(new File("D://zs.txt"),zs);
    mapper.writeValue(new PrintWriter(new File("D://zszs.txt")),zs);
    }
```



## 方法解释

`writeValue(参数1，obj)`此方法可以使用参数类型，将解析的json以参数类型进行保存

> File：将obj对象转换为JSON字符串，并保存到指定的文件中
> Writer：将obj对象转换为JSON字符串，并将json数据填充到字符输出流中
> OutputStream：将obj对象转换为JSON字符串，并将json数据填充到字节输出流中



`writeValueAsString(obj)`:将对象转为json字符串，返回的就是一个`String`类型



## Json注解



有的时候，我们会使用`Date`类来表示日期，但是时间戳的形式，用户根本就看不懂，

这个时候，就可以使用注解，

1. 将这个日期忽略，这样在将对象解析为json的时候，就会忽略`Date`字段
2. 也可以将这个转换成我们看得懂的形式



- `@JsonIgnore(true)`

    忽略此字段 再将对象扎转换为json的时候，会忽略此字段

    在对象解析为json的时候，就会忽略这个字段`private Date birthday;`

    此注解默认`value(true)`

- `@JsonFormat(pattern = "yyyy年MM月dd日")`

    将这个字段以某种格式进行转换

    `private Date birthday;`

    ```java
    {"username":"张三","age":22,"sex":"男","birthday":"2021年03月04日"}
    ```



## 将List或者Map集合转化为Json



- `List`转Json

    ```java
    public void test3() throws Exception {
        //1.创建对象
        User z1 = new User();
        z1.setUsername("张三");
        z1.setAge(22);
        z1.setSex('男');
        z1.setBirthday(new Date());
        User z2 = new User();
        z2.setUsername("张三");
        z2.setAge(22);
        z2.setSex('男');
        z2.setBirthday(new Date());
        User z3 = new User();
        z3.setUsername("张三");
        z3.setAge(22);
        z3.setSex('男');
        z3.setBirthday(new Date());
    
        //集合对象
        List list = new ArrayList<User>();
        list.add(z1);
        list.add(z2);
        list.add(z3);
        //创建对象
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(list);
        System.out.println(json);
    }
    ```

    

> 输出结果
>
> ```json
> [
>     {"username":"张三","age":22,"sex":"男","birthday":"2021年03月04日"},
>     {"username":"张三","age":22,"sex":"男","birthday":"2021年03月04日"},	   
>     {"username":"张三","age":22,"sex":"男","birthday":"2021年03月04日"}
> ]
> ```
>
> `因为list集合是一个数组的形式，所以将list集合转化为json一定是以数组形式进行存储的`，每一个list中存放了不同的对象数据，这个也就是数组中的每一个下标对应



- Map集合转Json

    ```java
    public void test4() throws Exception {
        Map<String,Object> map = new HashMap<>();
        map.put("name","chuchen");
        map.put("sex",true);
        map.put("age",23);
        map.put("habit","coding");
        ObjectMapper mapper = new ObjectMapper();
        String json = mapper.writeValueAsString(map);
        System.out.println(json);
    }
    ```

    > 输出结果
    >
    > ```json
    > {"habit":"coding","sex":true,"name":"chuchen","age":23}
    > ```

map集合就是以键值对的方式进行存储的，所以将map集合转化为json，那么也一定是以键值对的方式进行存储



## 将Json转换为java对象



```java
public void test5() throws Exception {
   //将json转换为java对象
   String json = "{\"username\":\"张三\",\"age\":22,\"sex\":\"男\",\"birthday\":\"2021年03月04日\"}";
   ObjectMapper mapper = new ObjectMapper();
   User user = mapper.readValue(json,User.class);
   System.out.println(user);
}
```



运行结果

```java
User{username='张三', age=22, sex=男, birthday=Thu Mar 04 08:00:00 CST 2021}
```



`将json作为String时，一定要加上{}，否则会报错`

一定要像这种方式

```json
{"username":"张三","age":22,"sex":"男","birthday":"2021年03月04日"}

//错误方式
"username":"张三","age":22,"sex":"男","birthday":"2021年03月04日"
```



# 出现的问题

如果导入json包，并且项目有导入Springjar，可能存在冲突问题，会ObjectMapper会出现空指针异常情况
