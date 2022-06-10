"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9550],{45980:(e,s,n)=>{n.r(s),n.d(s,{data:()=>a});const a={key:"v-82b66534",path:"/issue/mysql.html",title:"Mysql报错集合",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"is blocked because of many connection errors; unblock with 'mysqladmin flush-ho",slug:"is-blocked-because-of-many-connection-errors-unblock-with-mysqladmin-flush-ho",children:[{level:3,title:"解决",slug:"解决",children:[]}]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},14863:(e,s,n)=>{n.r(s),n.d(s,{default:()=>o});const a=(0,n(66252).uE)('<h1 id="mysql报错集合" tabindex="-1"><a class="header-anchor" href="#mysql报错集合" aria-hidden="true">#</a> Mysql报错集合</h1><h2 id="is-blocked-because-of-many-connection-errors-unblock-with-mysqladmin-flush-ho" tabindex="-1"><a class="header-anchor" href="#is-blocked-because-of-many-connection-errors-unblock-with-mysqladmin-flush-ho" aria-hidden="true">#</a> is blocked because of many connection errors; unblock with &#39;mysqladmin flush-ho</h2><p>出现这个错误是因为同一个ip在短时间内产生太多（超过mysql数据库max_connection_errors的最大值）中断的数据库连接而导致的阻塞；</p><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3><p>我是通过设置<code>max_connect_errors</code>，网上还有一个方法可以解决</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show global variables like &#39;%max_connect_errors%&#39;; #查看max_connect_errors数\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>set global max_connect_errors=1000; #值可以设置\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>运行上面代码的时候，请确保你有所有的MySQL权限，我链接的是云数据库，在Navicat中执行，不起作用，没有得到全部权限，所以我进入宝塔中，使用root用户名登录进去，进入对应数据库中，执行上面sql语句就可可以了</p></div>',8),l={},o=(0,n(83744).Z)(l,[["render",function(e,s){return a}]])}}]);