# Mysql报错集合

## is blocked because of many connection errors; unblock with 'mysqladmin flush-ho

出现这个错误是因为同一个ip在短时间内产生太多（超过mysql数据库max_connection_errors的最大值）中断的数据库连接而导致的阻塞；



### 解决

我是通过设置`max_connect_errors`，网上还有一个方法可以解决

```mysql
show global variables like '%max_connect_errors%'; #查看max_connect_errors数
```

```mysql
set global max_connect_errors=1000; #值可以设置
```



::: tip

运行上面代码的时候，请确保你有所有的MySQL权限，我链接的是云数据库，在Navicat中执行，不起作用，没有得到全部权限，所以我进入宝塔中，使用root用户名登录进去，进入对应数据库中，执行上面sql语句就可可以了

:::
