---
stick: false
date: 2021/2/22
---

# 简单案例

1. 在数据库中创建表
2. 创建实体类，但是这个类的属性最好和表中的字段相对应，因为每一条记录代表着一个实体对象
3. 创建接口dao
4. 在当前dao所在的包中，创建一个与dao接口名相同的`.xml`文件，在该xml文件中使用sql映射，以后执行数据库操作的语句，都是在这个`.xml`文件中进行写，这个文件的约束在mybatis的官网中可以找到





## 创建表

![](https://picture.xcye.xyz/image-20210412204442569.png?x-oss-process=style/pictureProcess1)

## 实体类



```java
package cn.vipblogs.domain;


/**
 * @author 青衫烟雨客 程钦义
 * @date 2021/04/12 20:18
 **/

public class Student {
    private Integer id;
    private String name;
    private String email;
    private Integer age;

    public Integer getId () {
        return id;
    }

    public void setId (Integer id) {
        this.id = id;
    }

    public String getName () {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }

    public String getEmail () {
        return email;
    }

    public void setEmail (String email) {
        this.email = email;
    }

    public Integer getAge () {
        return age;
    }

    public void setAge (Integer age) {
        this.age = age;
    }

    @Override
    public String toString () {
        return "Student{" + "id=" + id + ", name='" + name + '\'' + ", email='" + email + '\'' + ", age=" + age + '}';
    }
}
```





## 接口

```java
package cn.vipblogs.dao;

import cn.vipblogs.domain.Student;

import java.util.List;

public interface StudentDao {

    //返回一个student对象
    List<Student> selectAll();
}
```





## .mxl文件

```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE mapper
        PUBLIC "-//mybatis.org//DTD Mapper 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-mapper.dtd">
<mapper namespace="cn.vipblogs.dao.StudentDao">
    <select id="selectAll" resultType="cn.vipblogs.domain.Student">
        select * from student
    </select>

</mapper>
```



这个文件是sql的映射文件，也就是说，对于操作数据库中的记录的语句，都是在这个文件中进行编写的，mybatis能够识别出里面的语句



但是需要准守其约束文件，不然mybatis不会认识

`<mapper namespace="cn.vipblogs.dao.StudentDao">`是根目录，`namespace`这里面需要写dao接口类的全限定名称，就是类的名称，需要包含包，也就是上面定义的接口`public interface StudentDao `的全限定名称



`<select id="selectAll" resultType="cn.vipblogs.domain.Student"></select>`

在跟中，可以定义操作数据库的语句，包括`<select></select>,<insert></insert>,<update></update>,<delete></delete>`等等

其中，`id="selectAll"`这个id就像是id选择器一样，需要唯一，能够通过这个id找到这个sql语句，

这个id的值可以是任意的，但是为了规范和方便操作，强力规定使用`dao`接口中的对应的方法名(`操作数据库的sql语句`)，`resultType`的值规定执行这个sql语句，对返回的结果集的数据做什么处理，可以是将其转换成`List`，也可以是`Student`对象





# 配置mysql连接信息

如果没有使用mybatis的话，那么我们会使用代码进行mysql的连接处理，包括用户名，密码等等



```
<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE configuration
        PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
        "http://mybatis.org/dtd/mybatis-3-config.dtd">
<!--这个根标签-->
<configuration>
<!--  使用哪个数据库配置信息，可以进行其额度三
 通过设置default的值，这个值对应<environment id="development">中的id值，也是需要唯一，
 如果<environment id="development">有多个标签的话，那么我们在使用云数据库的时候，
 就可以使用云数据库的<environment id="development">的id进行切断

 -->
    <environments default="dev">

<!--    配置连接数据库的信息  id是唯一的  -->
        <environment id="dev">
            <!--mysql的事务类型，type只有两个值，如果是JDBC，则表示使用mysql自带的commit事务，回滚事务-->
            <transactionManager type="JDBC"/>

            <!--这里就是配置数据库连接信息-->
            <dataSource type="POOLED">
                <!--type：表示数据源的类型， POOLED表示使用连接池-->
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/mybatis"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>

        <!--云数据库的配置-->
        <environment id="online">
            <transactionManager type="JDBC"/>
            <dataSource type="POOLED">
                <property name="driver" value="com.mysql.jdbc.Driver"/>
                <property name="url" value="jdbc:mysql://localhost:3306/mybatis"/>
                <property name="username" value="root"/>
                <property name="password" value="123456"/>
            </dataSource>
        </environment>

    </environments>

    <!--这里是配置sql映射文件，mappers是根标签-->
    <mappers>
        <!--每一个sql映射文件对应一个mapper，可以有多个-->
        <!--resource表示sql映射文件的类路径，也就是从target，classes后面的该文件的路径-->
        <mapper resource="cn/vipblogs/dao/StudentDao.xml"/>
    </mappers>
</configuration>
```





## 什么是类路径？

类路径就是在使用maven进行编译之后，在`target/classes...`后面的文件的路径，就是类路径，

就比如说，`cn/vipblogs/dao/StudentDao.xml`

但是默认情况下，如果一个`.xml`文件，不是在resources文件夹中，在使用maven进行编译的时候，是不会将这个文件编译保留的，需要使用插件

在`pom.xml`文件中插入下面标签，需要在`<build></build>`标签下

```xml
<resources>
    <resource>
        <directory>src/main/java</directory><!--所在的目录-->
        <includes><!--包括目录下的.properties,.xml 文件都会扫描到-->
            <include>**/*.properties</include>
            <include>**/*.xml</include>
        </includes>
        <filtering>false</filtering>
    </resource>
</resources>
```

这样之后，尽管一个其他类型的文件，不在resources文件夹下，也会被保留





# 执行sql

```java
//连接数据库信息 从classes文件开始，也就是配置文件的所在目录
//String config = "cn/vipblogs/dao/main/mybatis.xml";
String config = "mybatis.xml";

//读取配置文件
InputStream in = Resources.getResourceAsStream(config);

//创建SqlSessionFactoryBuilder
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();

//创建SqlSessionFactory对象
SqlSessionFactory factory = builder.build(in);

//创建SqlSession
SqlSession sqlSession = factory.openSession();

//指定要执行sql语句的标识，通过全限定类名.id 进行选择执行哪句sql
String sqlId = "cn.vipblogs.dao.StudentDao"+"."+"selectAll";

//执行sql
List<Student> list = sqlSession.selectList(sqlId);

for (Student student : list) {
    System.out.println(student);
}

//也可以 使用下面方式进行数据的处理
 list.forEach(student -> System.out.println(student));
```





`String config = "cn/vipblogs/dao/main/mybatis.xml";`需要写从`classes`目录开始的路径

指定执行的sql语句的时候，通过全限定类名加上`.`加上`<select id=''></select>`假设查询操作的id，这样，mybatis就可以知道我们需要执行的是哪一个sql语句

`String sqlId = "cn.vipblogs.dao.StudentDao"+"."+"selectAll";`



![](https://picture.xcye.xyz/image-20210412220018784.png?x-oss-process=style/pictureProcess1)





# 执行插入语句

1. 在dao中定义一个方法，执行插入操作
2. 在`.xml`文件中写insert语句`<insert id=""></insert>`
3. 创建一个对象
4. 执行语句
5. 提交事务





`int insertStudent(Student student);`

```xml
<insert id="insertStudent">
    insert into student value(#{id},#{name},#{email},#{age})
</insert>
```



这里的value不能写成一个固定的值，应该使用`#{字段}`来动态的获取，但是中括号里面的字段的名字应该是student对象中的字段



```java
String config = "mybatis.xml";
InputStream in = Resources.getResourceAsStream(config);
SqlSessionFactoryBuilder builder = new SqlSessionFactoryBuilder();
SqlSessionFactory factory = builder.build(in);
SqlSession sqlSession = factory.openSession();
String sqlId = "cn.vipblogs.dao.StudentDao"+"."+"insertStudent";

Student student = new Student(6,"李五","2291@qq.com",21);
sqlSession.insert(sqlId,student);

sqlSession.commit();
```



打印执行插入数据的过程

```java
Logging initialized using 'class org.apache.ibatis.logging.stdout.StdOutImpl' adapter.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
PooledDataSource forcefully closed/removed all connections.
Opening JDBC Connection

Created connection 1621002296.
Setting autocommit to false on JDBC Connection [com.mysql.jdbc.JDBC4Connection@609e8838]
==>  Preparing: insert into student value(?,?,?,?) 
==> Parameters: 6(Integer), 李五(String), 2291@qq.com(String), 21(Integer)
<==    Updates: 1
Committing JDBC Connection [com.mysql.jdbc.JDBC4Connection@609e8838]
```



因为mybatis使用的是连接池，所以首先会先拿到一个连接进行操作

但是`Setting autocommit to false on JDBC Connection `会将事务设置自动提交为`false`，所以我们如果执行插入，或者是更新操作的时候，需要提交事务，否则数据不会被插入



执行完毕之后，应该关闭连接，因为如果不`close()`的话，其不会自动关闭

```java
sqlSession.commit();
sqlSession.close();
```



调用关闭方法之后的执行过程

```java
Created connection 1621002296.
Setting autocommit to false on JDBC Connection [com.mysql.jdbc.JDBC4Connection@609e8838]
==>  Preparing: insert into student value(?,?,?,?) 
==> Parameters: 7(Integer), liubei(String), 2291@qq.com(String), 21(Integer)
<==    Updates: 1
Committing JDBC Connection [com.mysql.jdbc.JDBC4Connection@609e8838]
Resetting autocommit to true on JDBC Connection [com.mysql.jdbc.JDBC4Connection@609e8838]
Closing JDBC Connection [com.mysql.jdbc.JDBC4Connection@609e8838]
Returned connection 1621002296 to pool.
```



`Closing JDBC Connection [com.mysql.jdbc.JDBC4Connection@609e8838]`可以看到，其关闭了这个连接




## 开启打印日志

默认情况下，我们的执行过程，mybatis不会打印，在控制台上，我们需要在配置文件中开启

在配置文件中，插入下面标签就可以开启日志输出



```
<configuration>
    <settings>
        <!--设置mybatis输出日志-->
        <setting name="logImpl" value="STDOUT_LOGGING" />
    </settings>
    <environments default="dev">
```

```
<settings>
    <!--设置mybatis输出日志-->
    <setting name="logImpl" value="STDOUT_LOGGING" />
</settings>
```





## 其他问题

![](https://picture.xcye.xyz/image-20210413164249169.png?x-oss-process=style/pictureProcess1)

如果执行插入的时候，输入的字段只有三个，那么就会报错，就像下面这种情况

```xml
<insert id="insertStudent">
    insert into student values(#{name},#{email},#{age})
</insert>
```

student表中，一共有4个字段，但是这里只写三个字段，那么就会报错，所以在执行插入的时候，必须将表所有的字段都写出，尽管id为自增

```xml
<insert id="insertStudent">
    insert into student values(#{id},#{name},#{email},#{age},#{w})
</insert>
```





报错信息

```java
org.apache.ibatis.exceptions.PersistenceException: 
### Error updating database.  Cause: java.sql.SQLException: Column count doesn't match value count at row 1
```



同时，如果表中的字段只要4个，但是在`xml`文件中，插入5个字段，也是不可以成功的



如果插入的字段中，在这个表的实体类中，没有对应的`get`方法，同样也会报错，所以在写实体类的时候，一定要写上`get`方法

```
w字段没有设置get方法
<insert id="insertStudent">
    insert into student values(#{id},#{name},#{email},#{age},#{w})
</insert>
```





```java
org.apache.ibatis.exceptions.PersistenceException: 
### Error updating database.  Cause: org.apache.ibatis.reflection.ReflectionException: There is no getter for property named 'w' in 'class cn.vipblogs.domain.Student'
```





# 主要类说明

1. Resources： mybatis中的一个类， 负责读取主配置文件

```java
InputStream in = Resources.getResourceAsStream("mybatis.xml");
```

2. SqlSessionFactoryBuilder : 创建SqlSessionFactory对象， 

```java
SqlSessionFactoryBuilder builder  = new SqlSessionFactoryBuilder();
//创建SqlSessionFactory对象
SqlSessionFactory factory = builder.build(in);
```

3. SqlSessionFactory ： 重量级对象， 程序创建一个对象耗时比较长，使用资源比较多。
    在整个项目中，有一个就够用了。

 SqlSessionFactory:接口  ， 接口实现类： DefaultSqlSessionFactory
  SqlSessionFactory作用： 获取SqlSession对象。

`SqlSession sqlSession = factory.openSession();`

  openSession()方法说明：

- `openSession() `：无参数的， 获取是非自动提交事务的SqlSession对象

- `openSession(boolean)`: openSession(true)  获取自动提交事务的SqlSession. 
         openSession(false)  非自动提交事务的SqlSession对象

4. SqlSession: 
       SqlSession接口 ：定义了操作数据的方法 例如 selectOne() ,selectList() ,insert(),update(), delete(), commit(), rollback()
       SqlSession接口的实现类DefaultSqlSession。





`使用要求： SqlSession对象不是线程安全的，需要在方法内部使用， 在执行sql语句之前，使用openSession()获取SqlSession对象。
在执行完sql语句后，需要关闭它，执行SqlSession.close(). 这样能保证他的使用是线程安全的。`



因为其是线程不安全的，所以我们在使用它的时候，必须要在方法体中进行，因为方法体中的变量是不能被共享的

`SqlSessionFactory`这个对象是一个可以被共享的变量对象，所以我们不用每次使用的时候，都进行创建，可以使用一个工具类，使用静态方法进行加载



如果使用`factory.openSession(true)`对象的时候，我们执行插入操作的时候，就没有必要在使用`commit()`方法







# mybatis的动态代理

对于正常情况下，我们定义了一个接口dao，那么如果我们需要使用的话，就必须定义一个类，实现这个接口，然后在这个实现类的方法中，使用mybatis的方式进行数据的操作，代码也就是下面这个



```java
public class StudentDaoImpl implements StudentDao {
    @Override
    public List<Student> selectAll () {
        String sqlId = "cn.vipblogs.dao.StudentDao.selectAll";
        SqlSession sqlSession = MybatisUtils.getSqlSession();
        List<Student> list = sqlSession.selectList(sqlId);
        return list;
    }

    @Override
    public int insertStudent (Student student) {
        return 0;
    }
}
```



但是这种方式的话，代码量其实并没有减少多少

我们在使用mybatis方式进行操作的时候，命名空间就是这个dao接口的全限定名称，而且`<select id="selectAll" resultType="cn.vipblogs.domain.Student">`查询，插入等等定义的id值，我们也可以通过dao的`class`进行获取，这个id就是方法名，`resultType`就是方法的返回值类型，也可以这样理解，因为对于插入操作而言，返回值为int类型，update的返回值也是int类型，但是对于查询操作，如果我们在dao的实现类中进行定义，那么如果返回的是`List`，我们通过执行这个方法，就可以知道其返回值类型，同样mybatis也可以通过dao方法中的返回值的类型，可以看到用户想要执行的操作是查询还是更新操作，根据返回值的类型



但是这些东西，mybatis已经帮助我们做了，这个就叫做mybatis的动态代理





使用动态代理过程



1. 获取SqlSession对象
2. 定义一个dao对象，这个对象的引用可以通过SqlSession.getMapper()方法获取
3. 调用dao中的方法进行执行
4. 处理结果集



那么现在，我们就可以减少很多的代码，直接连dao的实现类，都可以不用了，而且对于这种方式，如果我们在之后的项目中，如果已经定义了接口，那么我们还需要继续添加其他方法的话，我们就可以直接在接口中进行添加，可以不用再去其实现类中进行重写方法，特别方便



```java
SqlSession sqlSession = MybatisUtils.getSqlSession();
StudentDao dao = sqlSession.getMapper(StudentDao.class);

List<Student> students = dao.selectAll();
for (Student student : students) {
    System.out.println(student);
}
```



运行结果

```java
Student{id=null, name='初尘', email='2291308094@qq.com', age=21}
Student{id=null, name='qsyyke', email='2347634@qq.com', age=20}
Student{id=null, name='张飞', email='2291@qq.com', age=21}
Student{id=null, name='李四', email='2291@qq.com', age=21}
Student{id=null, name='李五', email='2291@qq.com', age=21}
Student{id=null, name='liubei', email='2291@qq.com', age=21}
Student{id=null, name='诸葛亮', email='2291@qq.com', age=21}
Student{id=null, name='猪八戒', email='2291@qq.com', age=21}
Student{id=null, name='猪八戒23', email='2291@qq.com', age=21}
```

同样对于执行操作，也是一样的



返回一个map List集合

```java
SqlSession sqlSession = MybatisUtils.getSqlSession();
StudentDao dao = sqlSession.getMapper(StudentDao.class);

List<Map<String, Object>> list = dao.selectAllMap();
for (Map<String, Object> map : list) {
    String name = (String)map.get("name");
    System.out.println(name);

}
```



执行结果

```java
初尘
qsyyke
张飞
李四
李五
liubei
诸葛亮
猪八戒
猪八戒23
```



# 执行查询语句

如果想要使用where进行查询的话，那么就可以使用下面的方式进行

```java
List<Student> selectById(Integer id);

<select id="selectById"  resultType="cn.vipblogs.domain.Student">
    select * from student where  id = #{id}
</select>
    
    @Test
    public void test4() throws Exception {
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    StudentDao dao = sqlSession.getMapper(StudentDao.class);

    List<Student> students = dao.selectById(4);
    for (Student student : students) {
        System.out.println(student);
    }
}
```



执行过程

```java
==>  Preparing: select * from student where id = ? 
==> Parameters: 4(Integer)
<==    Columns: id, name, email, age
<==        Row: 4, 张飞, 2291@qq.com, 21
<==      Total: 1
Student{id=4, name='张飞', email='2291@qq.com', age=21}
```





在使用条件查询，需要加上参数的时候，我们可以在xml的语句上，指明参数的类型

`<select id="selectById"  parameterType="java.lang.Integer" resultType="cn.vipblogs.domain.Student">`

请注意了，这个`parameterType`可以写成简短的形式，就像`int`，但是这里的参数类型，并不是java中的参数类型，这里的是mybatis自己内定的

我们推荐使用全限定名称进行，这样方便看，但是也可以不用写上参数类型，因为mybatis通过使用映射，`getMapper()`就可以知道参数的类型



mybatis中支持的简短的别名，`这个不是java中的别名，比如int，两者是不同的概念`

![](https://picture.xcye.xyz/image-20210413232928168.png?x-oss-process=style/pictureProcess1)









# mybatis参数问题

## 简单类型

- mybatis把java的基本数据类型和String都叫简单类型。



## 方式一

在`mapper`文件中，在sql语句中使用`#{字段名}`，在调用这个方法的时候，传入一个参数就可以，那么在调用方法时传入的那个参数将被传入到`#{字段名中}`



```java
//dao方法
List<Student> selectById(Integer id);
```

```
mapper
<select id="selectById"  parameterType="java.lang.Integer" resultType="cn.vipblogs.domain.Student">
    select * from student where  id = #{idd}
</select>
```

调用

```java
@Test
public void test4() throws Exception {
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    StudentDao dao = sqlSession.getMapper(StudentDao.class);


    List<Student> students = dao.selectById(4);
    for (Student student : students) {
        System.out.println(student);
    }
}
```



可以从调用实例中看到，

![](https://picture.xcye.xyz/image-20210414085243928.png?x-oss-process=style/pictureProcess1)

方法实参最终会被传入到`#{idd}`中，`如果在dao方法中的形式参数并不是一个对象，是一个基本的数据类型，那么在这里select * from student where  id = #{idd}`的`#{字段名}`字段名可以写任意字符，都可以，在执行的时候，都会被方法的实际参数给替换



`但是如果dao方法的形式参数是一个对象的话，那么就必须保证#{字段名}中的字段名在方法形式参数的对象中拥有get方法，否则会报错`



比如下面例子

```java
//dao传入对象
List<Student> selectById(Student student);
```



```xml
<select id="selectById"  parameterType="java.lang.Integer" resultType="cn.vipblogs.domain.Student">
    select * from student where  id = #{idd}
</select>
```

```java
//调用测试
@Test
public void test6() throws Exception {
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    StudentDao dao = sqlSession.getMapper(StudentDao.class);

    Student student = new Student();
    student.setId(4);
    List<Student> students = dao.selectById(student);
    for (Student student1 : students) {
        System.out.println(student1);
    }
}
```

这个对象的id有get方法，但是在mapper文件中，使用的是`#{idd}`，如果执行的话，会收到下面报错信息

```java
org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: org.apache.ibatis.reflection.ReflectionException: There is no getter for property named 'idd' in 'class cn.vipblogs.domain.Student'
### Cause: org.apache.ibatis.reflection.ReflectionException: There is no getter for property named 'idd' in 'class cn.vipblogs.domain.Student'
```

`here is no getter for property named 'idd' in 'class cn.vipblogs.domain.Student'`没有getIdd()方法，所以就会出错，所以`如果形势参数是一个对象的话，就必须保证此对象中有#{字段名} get字段名()这个方法，但是不一定对象中有 "字段名"这个属性，只要有get字段名()方法就行`



但是如果方法的形式参数中有多个值，而且在mapper文件中，也是使用多个`#{字段名}`，那么这种情况下，将会操作，字段名不能找到

```java
List<Student> selectById(Integer id,String name);
```

```xml
<select id="selectById"  parameterType="java.lang.Integer" resultType="cn.vipblogs.domain.Student">
    select * from student where  id = #{id} or name=#{name}
</select>
```

```java
@Test
public void test7() throws Exception {
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    StudentDao dao = sqlSession.getMapper(StudentDao.class);
    List<Student> list = dao.selectById(4, "张飞");
    for (Student student : list) {
        System.out.println(student);
    }
}
```



尽管mapper中的`#{字段名}`已经和方法中的形式参数名相同，但是也不能进行匹配，所以如果想使用多个参数的情况下，不能使用这种方式进行

报错信息

```java
org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: org.apache.ibatis.binding.BindingException: Parameter 'id' not found. Available parameters are [arg1, arg0, param1, param2]
### Cause: org.apache.ibatis.binding.BindingException: Parameter 'id' not found. Available parameters are [arg1, arg0, param1, param2]
```







## 传入多个参数



如果mapper中想要传入多个参数的话，就可以使用注解的方式

```java
List<Student> selectMulitParam(@Param("myname") String name, @Param("myage") Integer age)
```

但是如果使用这种方式的话，在mapper文件中，`#{字段名}`就必须和注解里面的`@Param("名称")`相同



如果mapper文件中使用的`#{字段名}`字段名和注解中的不一样的话，就会出现报错情况

```java
List<Student> selectMultiId(@Param("myid") int id);
```

```xml
<select id="selectMultiId" resultType="cn.vipblogs.domain.Student">
select * from student where id = #{myidd}
</select>
```



报错

```java
### Error querying database.  Cause: org.apache.ibatis.binding.BindingException: Parameter 'myidd' not found. Available parameters are [myid, param1]
### Cause: org.apache.ibatis.binding.BindingException: Parameter 'myidd' not found. Available parameters are [myid, param1]
```



例子测试

```java
List<Student> selectMulti(@Param("myId")Integer id, @Param("myName")String name);
```

```xml
<select id="selectMulti" resultType="cn.vipblogs.domain.Student">
    select * from student where  id =#{myId} and name = #{myName}
</select>
```

```java
//test
@Test
public void test8() throws Exception {
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    StudentDao dao = sqlSession.getMapper(StudentDao.class);
    List<Student> list = dao.selectMulti(4, "张飞");
    for (Student student : list) {
        System.out.println(student);
    }
}
```



运行结果

```java
Created connection 116734858.
Setting autocommit to false on JDBC Connection [com.mysql.jdbc.JDBC4Connection@6f53b8a]
==>  Preparing: select * from student where id =? and name = ? 
==> Parameters: 4(Integer), 张飞(String)
<==    Columns: id, name, email, age
<==        Row: 4, 张飞, 2291@qq.com, 21
<==      Total: 1
Student{id=4, name='张飞', email='2291@qq.com', age=21}
```



#### 方式二

多个参数-简单类型的，按位置传值，
     * mybatis.3.4之前，使用 #{0} ，#{1}
     * mybatis。3.4之后 ，使用 #{arg0} ,#{arg1}



例子：

```java
List<Student> selectMultiParam(String name,int id,int age);
```



```xml
<select id="selectMultiParam" resultType="cn.vipblogs.domain.Student">
    select * from student where id = #{arg1} or name=#{arg0}  or age=#{arg2}
</select>
```



```java
//test
@Test
public void test10() throws Exception {
    SqlSession sqlSession = MybatisUtils.getSqlSession();
    StudentDao dao = sqlSession.getMapper(StudentDao.class);
    List<Student> list = dao.selectMultiParam("李四", 6, 20);
    for (Student student : list) {
        System.out.println(student);
    }
}
```



使用这种方式比较麻烦，如果更改了参数的位置，那么就需要对mapper文件进行更改

不推荐使用这种方式进行书写



#### 通过使用map对象进行传值



这种方式通过传入一个map对象，并且在mapper文件中，`#{map的key值}`

但是这种方式不推荐使用，阿里巴巴，如果更改了key值，就需要对mapper文件进行更改



```java
List<Student> selectMultiByMap(Map<String,Object> map);
```

```xml
<select id="selectMultiByMap" resultType="cn.vipblogs.domain.Student">
    select * from student where id = #{mId} or name=#{mName}
</select>
```

```java
@Test
public void test11() throws Exception {
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    Map<String,Object> map = new HashMap<>();
    map.put("mId",7);
    map.put("mName","李四");

    List<Student> list = dao.selectMultiByMap(map);
    for (Student student : list) {
        System.out.println(student);
    }
}
```

![](https://picture.xcye.xyz/image-20210414185648576.png?x-oss-process=style/pictureProcess1)



# #和$的区别



`#`的作用是占位符的作用，也就是相当于

1. `#`使用 ？在sql语句中做占位的， 使用PreparedStatement执行sql，效率高
2. `#`能够避免sql注入，更安全。
3. `$`不使用占位符，是字符串连接方式，使用Statement对象执行sql，效率低
4. `$`有sql注入的风险，缺乏安全性。
 5. `$`:可以替换表名或者列名



`$`就相当于是字符串的连接



有一个方法，这个方法的参数就是name，那么最后就是

`select * from student where name=name`

`select * from student where name='name'`

使用`$`的话，会存在sql注入的风险



```java
List<Student> selectMultiBy$(String name);
```

```xml
<select id="selectMultiBy$" resultType="cn.vipblogs.domain.Student">
    select * from student where name=${name}
</select>
```

```java
//test
@Test
public void test12() throws Exception {
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    List<Student> list = dao.selectMultiBy$("李四");
    for (Student student : list) {
        System.out.println(student);
    }
}
```



运行结果

```java
Setting autocommit to false on JDBC Connection [com.mysql.jdbc.JDBC4Connection@58e1d9d]
==>  Preparing: select * from student where name=李四 
==> Parameters: 

org.apache.ibatis.exceptions.PersistenceException: 
### Error querying database.  Cause: com.mysql.jdbc.exceptions.jdbc4.MySQLSyntaxErrorException: Unknown column '李四' in 'where clause'
```

报错，因为`$`是一个字符串的连接，而且在mysql中，name字段是一个`varchar`类型，所以sql语句就出错，因为没有引号

`select * from student where name=李四 `



需要这样传入参数

`List<Student> list = dao.selectMultiBy$("'李四'");`

最后运行的sql语句

```mysql
select * from student where name='李四' 
```





# resulType

这个是mybatis执行sql之后，指定返回的对象类型，这个返回的类型应该和dao方法中的对应方法返回值一致，这个和`resultMap`只能存在一个





## 定义自定义别名

在有的时候，使用全限定名称会变得特别的麻烦，这个时候，我们就可以使用全限定名称就行`resultType`的书写





自定义`resulyType`需要在配置文件中进行书写



- 方式一

```xml
<typeAliases>
    <typeAlias type="com.bjpowernode.domain.Student" alias="stu" />
    <typeAlias type="com.bjpowernode.vo.ViewStudent" alias="vstu" />
</typeAliases>
```

- type:自定义类型的全限定名称
- alias:别名（短小，容易记忆的）

这个时候，我们就可以在mapper文件中使用自定义的别名

```xml
<select id="selectMultiByMap" resultType="stu">
    select * from student where id = #{mId} or name=#{mName}
</select>
```

`如果需要为多个类使用自定义的别名，那么就需要写多个<typeAlias>标签`，这种方式有点麻烦



- 方式二



```xml
<typeAliases>
    <package name="cn.vipblogs.domain"/>
</typeAliases>
```

同样也是在`<typeAliases>`标签下，`package`写包名，使用这种方式的话，就为package包中的所有的类定义了别名，别名就是类的名称，这种方式是通用的，推荐使用

`但是如果使用package，在两个包中出现类名相同的情况，这个时候，就不能对这两个相同的类使用package，可以使用全限定名称或者是<typeAlias type="com.bjpowernode.domain.Student" alias="stu" />的方式`



使用

![](https://picture.xcye.xyz/image-20210414202435558.png?x-oss-process=style/pictureProcess1)

```xml
<select id="selectMultiBy$" resultType="Student">
    select * from student where name=${name}
</select>
```



```java
//test
@Test
public void test12() throws Exception {
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    List<Student> list = dao.selectMultiBy$("'李四'");
    for (Student student : list) {
        System.out.println(student);
    }
}
```



`自定义别名一定要在<settings>`标签下面定义，否则就会爆红

```
<settings>
    <!--设置mybatis输出日志-->
    <setting name="logImpl" value="STDOUT_LOGGING" />
</settings>

<typeAliases>
    <package name="cn.vipblogs.domain"/>
</typeAliases>
```



# resultMap

使用这个可以将数据库中查询出来的某个字段映射到某个对象中的某个属性中



使用方法

1. 定义一个`<resultMap id="studentMap" type="cn.vipblogs.domain.Student"></resultMap>`
2. 在此标签中定义`<result /><id />`
3. 在`<select resultMap="" id="">`中使用



定义`<resultMap>`标签

```xml
<resultMap id="studentMap" type="cn.vipblogs.domain.Student">

</resultMap>
```

- `id`: 字段是唯一，用于在`<select resultMap="" id="">`中的resultMap中使用
- `type`:类的完全限定名，此标签下面的`<result column="name" property="" /> property=""值指向此type中的属性字段名`

定义子标签

```xml
<resultMap id="studentMap" type="cn.vipblogs.domain.Student">
    <id column="age" property="id" />
    <result column="name" property="email" />
    <result column="email" property="name" />
    <!--<result column="age" property="id" />-->
</resultMap>
```

- `id`: 这个和`result`差不多

    id和result元素都将一个列的值映射到一个简单数据类型（String, int, double, Date 等）的属性或字段。

    这两者之间的唯一不同是，*id* 元素对应的属性会被标记为对象的标识符，在比较对象实例时使用。 这样可以提高整体的性能，尤其是进行缓存和嵌套结果映射（也就是连接映射）的时候。

- `column`:数据库中的列名，或者是列的别名。一般情况下，这和传递给`resultSet.getString(columnName)` 方法的参数一样。

- `property`:

    映射到列结果的字段或属性。如果 JavaBean 有这个名字的属性（property），会先使用该属性。否则 MyBatis 将会寻找给定名称的字段（field）。 无论是哪一种情形，你都可以使用常见的点式分隔形式进行复杂属性导航。 比如，你可以这样映射一些简单的东西：“username”，或者映射到一些复杂的东西上：“address.street.number”。

`需要注意的是，id必须要写在result标签的前面`



简单例子

```java
//dao
List<Student> selectResultMap();
```

```java
//student属性
private Integer id;
private String name;
private String email;
private Integer age;
```

```
<resultMap id="studentMap" type="cn.vipblogs.domain.Student">
    <id column="age" property="id" />
    <result column="name" property="email" />
    <result column="email" property="name" />
    <!--<result column="age" property="id" />-->
</resultMap>

<select resultMap="studentMap" id="selectResultMap">
    select name,email,age from student where id >8
</select>
```

测试程序

```java
@Test
public void test13() throws Exception {
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    List<Student> list = dao.selectResultMap();
    for (Student student : list) {
        System.out.println(student);
    }
}
```

![](https://picture.xcye.xyz/image-20210414221242827.png?x-oss-process=style/pictureProcess1)

数据库中的name字段会被映射到student对象中的email，数据库中的email的值会被赋值student对象中的name



运行结果

```java
<==    Columns: name, email, age
<==        Row: 猪八戒, 2291@qq.com, 21
<==        Row: 猪八戒23, 2291@qq.com, 21
<==      Total: 2
Student{id=21, name='2291@qq.com', email='猪八戒', age=null}
Student{id=21, name='2291@qq.com', email='猪八戒23', age=null}
```



同一个resultMap我们可以在多个`<select>`中进行使用，直接输入resultMap的id就行

![](https://picture.xcye.xyz/image-20210414221641004.png?x-oss-process=style/pictureProcess1)





使用resultMap的情况，在很多时候，对于对象中的字段名和数据库中列名不相同的时候，但是我们又是必须要使用数据库中的某个值多个对象中的属性值时，我们就可以使用这种方式，使用到的情况还是很常见的



## 对象属性名和数据库列名不同解决

```java
//MyStudent
private int myId;
private String myName;
private String myEmail;
```

如果直接使用这种方式的话

```xml
<select id="selectMyStudent" resultType="cn.vipblogs.domain.MyStudent" >
    select id,name,email,age from student
</select>
```

运行结果

```java
null
null
null
null
null
null
null
null
```

因为数据库中的列名是name，而MyStudent中的是myName，所以全部都是null





### 方式一

使用`resultMap`映射方式

```
<resultMap id="myStudent" type="cn.vipblogs.domain.MyStudent">
    <id column="id" property="myId" />
    <result column="name" property="myName" />
    <result column="email" property="myEmail" />
</resultMap>

<select id="selectMyStudent" resultMap="myStudent" >
    select id,name,email,age from student
</select>
```



运行结果

```java
MyStudent{myId=7, myName='liubei', myEmail='2291@qq.com'}
MyStudent{myId=8, myName='诸葛亮', myEmail='2291@qq.com'}
MyStudent{myId=9, myName='猪八戒', myEmail='2291@qq.com'}
MyStudent{myId=10, myName='猪八戒23', myEmail='2291@qq.com'}
```



### 方式二

方式二不使用`resultMap`我们也可以解决，但是在使用的时候，我们应该知道`resultType`的执行过程

`resultType`默认会将数据库中查询出来的列的值，赋值给`resultType`对应对象相同名字的属性

所以不使用`resultMap`的情况下，想要解决，解需要使查询出来的列名和对象中的属性名相同，所以我们可以为数据库中的查询类添加`别名`的方式

```xml
<select id="selectMyStudent" resultType="cn.vipblogs.domain.MyStudent" >
select id myId,name myName,email myEmail,age myAge from student
</select>
```





# 动态sql

## 简单判断

使用`<if test=""> </if>`可以进行简单动态sql的if语句判断

`test`：为if的条件



例子

```java
List<Student> selectIf(Student studnet);
```

```java
//test
@Test
public void test1() throws Exception {
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    Student student = new Student();
    student.setId(5);
    student.setName("李四");

    List<Student> list = dao.selectIf(student);
    for (Student student1 : list) {
        System.out.println(student1);
    }
}
```

```xml
<select id="selectIf" resultType="cn.vipblogs.domain.Student">
    select name,id,email,age from student where
    <if test="name != null">
        name=#{name}
    </if>
    <if test="id>3">
        and id = #{id}
    </if>
</select>
```



原始的sql语句为`select name,id,email,age from student where`

使用if判断，但是这里，需要注意一些，如果第一个不满足，第二个满足的话，那么这里就会出现报错情况

就比如

```java
<select id="selectIf" resultType="cn.vipblogs.domain.Student">
    select name,id,email,age from student where
    <if test="name != null">
        name=#{name}
	</if>
    <if test="id>3">
        and id = #{id}
	</if>
</select>
        
Student student = new Student();
student.setId(5);

List<Student> list = dao.selectIf(student);
```

那么执行的sql语句为：

`Preparing: select name,id,email,age from student where and id = ? `

`where and `不报错才怪



但是可以使用下面这个解决这个问题，让进行判断的语句都是使用`and`进行连接，在where处使用`where 1=1`

```xml
<select id="selectIf" resultType="cn.vipblogs.domain.Student">
    select name,id,email,age from student where 1 = 1
    <if test="name != null">
        and name=#{name}
    </if>
    <if test="id>3">
        and id = #{id}
    </if>
</select>
```





## where动态sql



语法

```xml
<select id="selectWhere" resultType="cn.vipblogs.domain.Student">
    select email,name,age,id from student
    <where>
        <if test="name != null">
            name = #{name}
        </if>
        <if test="id >= 7">
            or id > #{id}
        </if>
    </where>
</select>
```

在一个where中可以嵌套一个或者多个if

如果if中，有一个满足的时候，就会添加where，但是使用where if的话，我们就不能在sql语句的后面添加上where

```xml
<select id="selectWhere" resultType="cn.vipblogs.domain.Student">
    select email,name,age,id from student where
</select>
```

如果想上面这个select标签的话，运行结果为

```java
Preparing: select email,name,age,id from student where WHERE name = ? or id > ? 
```

出现两个where，语法错误



`mybatis会自动进行检测，如果有 一个满足，就会自动在sql后面添加上where`



但是下面这种情况，mybatis就不会自动设置

```xml
<where>
    <if test="name != null">
        name = #{name}
    </if>
    <if test="id >= 7">
        id > #{id}
    </if>
</where>
```



如果两个if都是满足的，那么运行情况近会变成

```java
Preparing: select email,name,age,id from student WHERE name = ? id > ? 
```

`mybatis不会自动添加or`



但是这种情况

```xml
<select id="selectWhere" resultType="cn.vipblogs.domain.Student">
    select email,name,age,id from student
    <where>
        <if test="name != null">
            name = #{name}
        </if>
        <if test="id >= 7">
            or id > #{id}
        </if>
    </where>
</select>
```

```java
@Test
public void test2() throws Exception {
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    Student student = new Student();
    student.setId(7);
    //student.setName("李四");
}
```

name值为null，所以第一个不满足，但是对于这种情况，按照之前的情况会出现报错情况，理想中的sql语句为`.... where or id >7`

但是mybatis会自动取到or

运行时的sql语句为

```java
Preparing: select email,name,age,id from student WHERE id > ? 
```





所以，进行比较

![](https://picture.xcye.xyz/image-20210415221439454.png?x-oss-process=style/pictureProcess1)

`所以，在使用where if的时候，我们可以在if语句的标签中写上and 或者是or，这样能够防止条件只出现一个的话，sql语句错误`



`where标签中也可以一个if也不写，这种情况不会出现报错情况，那么就会查询所有的记录`

```xml
<select id="selectWhere" resultType="cn.vipblogs.domain.Student">
    select email,name,age,id from student
    <where>
        <if test="name != null">
            name = #{name}
        </if>
        <if test="id >= 7">
            or id > #{id}
        </if>
    </where>
</select>
```





## foreach



<table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>collection</td><td>表示迭代集合的名称，可以使用@Param注解指定，如下图所示<img src="https://img-blog.csdn.net/20180706202903393?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3d0X2JldHRlcg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70" alt="这里写图片描述"> 该参数为必选</td></tr><tr><td>item</td><td>表示本次迭代获取的元素，若collection为List、Set或者数组，则表示其中的元素；若collection为map，则代表key-value的value，该参数为必选</td></tr><tr><td>open</td><td>表示该语句以什么开始，最常用的是左括弧’(’，注意:mybatis会将该字符拼接到整体的sql语句之前，并且只拼接一次，该参数为可选项</td></tr><tr><td>close</td><td>表示该语句以什么结束，最常用的是右括弧’)’，注意:mybatis会将该字符拼接到整体的sql语句之后，该参数为可选项</td></tr><tr><td>separator</td><td>mybatis会在每次迭代后给sql语句append上separator属性指定的字符，该参数为可选项</td></tr><tr><td>index</td><td>在list、Set和数组中,index表示当前迭代的位置，在map中，index代指是元素的key，该参数是可选项。</td></tr></tbody></table>



例子

```java
List<Student> selectForeach(List<Student> li);
```

```java
@Test
public void test3() throws Exception {
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    List<Student> list = new ArrayList<>();
    list.add(new Student(5));
    list.add(new Student(6));
    list.add(new Student(7));
    List<Student> list1 = dao.selectForeach(list);
    for (Student student : list1) {
        System.out.println(student);
    }
}
```



```xml
<select id="selectForeach" resultType="cn.vipblogs.domain.Student">
    select * from student where id in
    <foreach collection="list" open="(" close=")" separator="," index="2" item="stu">
        #{stu.id}
    </foreach>
</select>
```



如果foreach的对象是一个数组的话，那么`collection`便是array，如果是一个List的话，便写list，这个list便代表此foreach遍历的对象是一个`List`集合

mybatis不会自动为遍历的元素添加括号什么的，需要自己设置，使用`open`设置遍历元素的前开头

`item`需要写一个临时变量，`list.add(new Student(5))`，那么每遍历的这个item就是Student对象

在`<foreach>`标签中就可以使用这个item，但是这个item是一个Student，那么我们想要得到id，就需要使用`.`运算符`#{stu.id}`

运行结果

```java
Preparing: select * from student where id in ( ? , ? , ? ) 
==> Parameters: 5(Integer), 6(Integer), 7(Integer)
<==    Columns: id, name, email, age
<==        Row: 5, 李四, 2291@qq.com, 21
<==        Row: 6, 李五, 2291@qq.com, 21
<==        Row: 7, liubei, 2291@qq.com, 21
<==      Total: 3
```





- 如果是这样进行遍历

```xml
<foreach collection="list"  separator="," item="stu">
    (#{stu.id})
</foreach>
```

运行结果

```java
Preparing: select * from student where id in (?) , (?) , (?) 
==> Parameters: 5(Integer), 6(Integer), 7(Integer)
```

这种方式适用于`insert into 表 values(),(),()`的情况

但是不能这样使用

```xml
<foreach collection="list"  separator="," item="stu">
    ('#{stu.id}')
</foreach>
```

使用引号想把获取到的id引起来，不能这样，这样不会获取到id

![](https://picture.xcye.xyz/image-20210416133706923.png?x-oss-process=style/pictureProcess1)

没有下文







- 还可以这样

```xml
<select id="selectForeach" resultType="cn.vipblogs.domain.Student">
    select * from student where id in

    <foreach collection="list"  separator="," item="stu">
        (#{stu.id})
    </foreach>
    order by id desc
</select>
```

运行结果

```java
==>  Preparing: select * from student where id in (?) , (?) , (?) order by id desc 
==> Parameters: 5(Integer), 6(Integer), 7(Integer)
```





# 代码片段

在有的时候，可能会存在重复的代码片段，我们可以只需要写一个就行

mybatis的代码片段就可以解决这个问题



使用步骤

1. 定义一个`sql`标签
2. 在`select update delete`等标签中，使用`<include>`标签使用

- sql标签

```xml
<sql id="selectAll">
    select * from student
</sql>
```

`id`是一个必须值



- include标签

```xml
<select id="selectRe" resultType="cn.vipblogs.domain.Student">
    <include refid="selectAll"></include>
    where id > #{id}
</select>
```

`refid`的值也就是我们需要使用的定义了的`<sql>`中的id值

如果还需要其他的条件的话，可以在`<include>`后面进行添加



# 数据库属性配置文件

在mybatis的主配置文件xml中，我们可以配置数据库的连接信息，但是这样做的话，可能看起来会比较乱，所以我们可以考虑使用`properties`配置文件作为数据库的信息配置



使用步骤

1. 定义一个properties文件，并记录数据库的连接信息
2. 在mybatis中使用`<properties resource="" />`引入这个属性配置文件
3. 在需要使用连接配置的地方使用`${properties key值}`



```properties
jdbc.driver = com.mysql.jdbc.Driver
jdbc.url = jdbc:mysql://localhost:3306/mybatis
jdbc.user = root
jdbc.pwd = 123456
```



mybatis主配置文件

```
//引入properties文件
<properties resource="jdbc.properties" />


//配置连接信息
<dataSource type="POOLED">
    <!--type：表示数据源的类型， POOLED表示使用连接池-->
    <property name="driver" value="${jdbc.driver}"/>
    <property name="url" value="${jdbc.url}"/>
    <property name="username" value="${jdbc.user}"/>
    <property name="password" value="${jdbc.pwd}"/>
</dataSource>
```

`resource=""是properties文件的类路径，从classes目录开始写`





![](https://picture.xcye.xyz/image-20210416174757014.png?x-oss-process=style/pictureProcess1)

`注意需要打上双引号`



properties文件中的key值书写推荐使用`xxx.xxx`的形式，这样一个类别的，在逗号前面相同，推荐使用这种方式

```properties
jdbc.driver = com.mysql.jdbc.Driver
jdbc.url = jdbc:mysql://localhost:3306/mybatis
jdbc.user = root
jdbc.pwd = 123456
```





# PageHelper工具的使用

在进行分页的时候，使用这个工具我们可以很快的就能完成分页的查询，`PageHelper`并不是mybatis官方的，不是他们写的



使用步骤

1. 添加依赖
2. 在mybatis环境连接环境配置上方添加此插件
3. 在需要进行查询分页的地方，调用`PageHelper.startPage(2,3)`方法即可



- 添加依赖

```xml
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper</artifactId>
    <version>5.1.2</version>
</dependency>
```

- 主配置文件添加插件

```
<plugins>
    <plugin interceptor="com.github.pagehelper.PageInterceptor"></plugin>
</plugins>

<!--一定要在此标签前面-->
<environments default="dev">
```



`interceptor`全限定名称



使用

```java
@Test
public void test5() throws Exception {
    //PageHelper.startPage(2,3);
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    List<Student> list = dao.selectAllPage();
    for (Student student : list) {
        System.out.println(student);
    }

}
```

- 不使用情况测试

```java
==>  Preparing: select * from student 
==> Parameters: 
<==    Columns: id, name, email, age
<==        Row: 1, 初尘, 2291308094@qq.com, 21
<==        Row: 2, qsyyke, 2347634@qq.com, 20
<==        Row: 4, 张飞, 2291@qq.com, 21
<==        Row: 5, 李四, 2291@qq.com, 21
<==        Row: 6, 李五, 2291@qq.com, 21
<==        Row: 7, liubei, 2291@qq.com, 21
<==        Row: 8, 诸葛亮, 2291@qq.com, 21
<==        Row: 9, 猪八戒, 2291@qq.com, 21
<==        Row: 10, 猪八戒23, 2291@qq.com, 21
<==      Total: 9
```

注意`select * from student `



- 使用

```java
@Test
public void test5() throws Exception {
    PageHelper.startPage(2,3);
    StudentDao dao = MybatisUtils.getSqlSession().getMapper(StudentDao.class);
    List<Student> list = dao.selectAllPage();
    for (Student student : list) {
        System.out.println(student);
    }

}


//打印结果
==>  Preparing: SELECT count(0) FROM student 
==> Parameters: 
<==    Columns: count(0)
<==        Row: 9
<==      Total: 1
==>  Preparing: select * from student LIMIT ?, ? 
==> Parameters: 3(Integer), 3(Integer)
<==    Columns: id, name, email, age
<==        Row: 5, 李四, 2291@qq.com, 21
<==        Row: 6, 李五, 2291@qq.com, 21
<==        Row: 7, liubei, 2291@qq.com, 21
<==      Total: 3
Student{id=5, name='李四', email='2291@qq.com', age=21}
Student{id=6, name='李五', email='2291@qq.com', age=21}
Student{id=7, name='liubei', email='2291@qq.com', age=21}
```

`如果使用这个工具的话，会在sql语句后面加上limit  select * from student LIMIT ?, ? `

在执行开始之前，会先计算总共有多少条数据，然后在进行分页

`==>  Preparing: SELECT count(0) FROM student `



- 参数

```java
PageHelper.startPage(2,3);
```

第一个参数是第几页，第二个参数是，显示多少条数据

在执行的时候，首先调用`==>  Preparing: SELECT count(0) FROM student `计算总共有多少条数据，然后在根据参数，显示多少条，计算分成多少页，所以第二个参数直接决定总的页数

