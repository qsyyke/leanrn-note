"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6769],{21391:(e,s,n)=>{n.r(s),n.d(s,{data:()=>l});const l={key:"v-d1a2d83c",path:"/redis/Redis%E5%93%88%E5%B8%8C%E8%A1%A8%E7%BB%93%E6%9E%84.html",title:"哈希类型(hash)",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"hset",slug:"hset",children:[]},{level:2,title:"hget",slug:"hget",children:[]},{level:2,title:"hmset",slug:"hmset",children:[]},{level:2,title:"hmget",slug:"hmget",children:[]},{level:2,title:"hgetall",slug:"hgetall",children:[]},{level:2,title:"hdel",slug:"hdel",children:[]},{level:2,title:"hlen",slug:"hlen",children:[]},{level:2,title:"hexists",slug:"hexists",children:[]},{level:2,title:"hkeys",slug:"hkeys",children:[]},{level:2,title:"hvals",slug:"hvals",children:[]},{level:2,title:"hincrby",slug:"hincrby",children:[]},{level:2,title:"hincrbyfloat",slug:"hincrbyfloat",children:[]},{level:2,title:"hsetnx",slug:"hsetnx",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},67081:(e,s,n)=>{n.r(s),n.d(s,{default:()=>J});var l=n(66252);const a=(0,l.uE)('<h1 id="哈希类型-hash" tabindex="-1"><a class="header-anchor" href="#哈希类型-hash" aria-hidden="true">#</a> 哈希类型(hash)</h1><p>Redis的hash 是一个string类型的key和value的映射表，这里的value是一系列的键值对，hash特别适合用于存储对象。</p><p><code>key值可以存放对象名，对象里面有很多的属性，每一个属性都有一个值，也就是hash中的key value形式</code></p><p>哈希类型的数据操作总的思想是通过key和field操作value，key是数据标识，field是域，value是我们感兴趣的业务数据。</p><h1 id="基本操作命令" tabindex="-1"><a class="header-anchor" href="#基本操作命令" aria-hidden="true">#</a> 基本操作命令</h1><br><h2 id="hset" tabindex="-1"><a class="header-anchor" href="#hset" aria-hidden="true">#</a> hset</h2><blockquote><p>语法：<code>hset key field value [field value …]</code></p></blockquote><p>功能：将键值对field-value设置到哈希列表key中，如果key不存在，则新建哈希列表，然后执行赋值，如果key下的field已经存在，则value值覆盖。</p><p>返回值：返回设置成功的键值对个数。</p>',10),t=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps2-1615082512733.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),i=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hset h1 id 1 name chuchen age 22 blog vipblogs.cn\n(integer) 4\n127.0.0.1:6379[1]&gt; hset h2 name cc habit coding\n(integer) 2\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="hget" tabindex="-1"><a class="header-anchor" href="#hget" aria-hidden="true">#</a> hget</h2><blockquote><p>语法：<code>hget key field</code></p></blockquote><p>功能：获取哈希表 key 中给定域 field 的值。</p><p>返回值：field域的值，如果key不存在或者field不存在返回nil。</p>',5),r=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps3-1615082512733.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),c=(0,l._)("h2",{id:"hmset",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hmset","aria-hidden":"true"},"#"),(0,l.Uk)(" hmset")],-1),u=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("语法："),(0,l._)("code",null,"hmset key field value [field value…]")])],-1),p=(0,l._)("p",null,"功能：同时将多个 field-value (域-值)设置到哈希表 key 中，此命令会覆盖已经存在的field，hash表key不存在，创建空的hash表，再执行hmset.",-1),o=(0,l._)("p",null,"返回值：设置成功返回ok，如果失败返回一个错误。",-1),h=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps4-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),d=(0,l._)("h2",{id:"hmget",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hmget","aria-hidden":"true"},"#"),(0,l.Uk)(" hmget")],-1),b=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("语法："),(0,l._)("code",null,"hmget key field [field…]")])],-1),g=(0,l._)("p",null,"功能：获取哈希表 key 中一个或多个给定域的值",-1),m=(0,l._)("p",null,"返回值：返回和field顺序对应的值，如果field不存在，返回nil。",-1),y=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps5-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),q=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hmget h1 id age name\n1) &quot;1&quot;\n2) &quot;22&quot;\n3) &quot;chuchen&quot;\n127.0.0.1:6379[1]&gt; hmget h2 habit drink \n1) &quot;computer&quot;\n2) &quot;water&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="hgetall" tabindex="-1"><a class="header-anchor" href="#hgetall" aria-hidden="true">#</a> hgetall</h2><blockquote><p>语法：<code>hgetall key</code></p></blockquote><p>功能：获取哈希表 key 中所有的域和值</p><p>返回值：以列表形式返回hash中域和域的值，key不存在，返回空hash.</p>',5),x=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps6-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),k=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hgetall h1\n1) &quot;id&quot;\n2) &quot;1&quot;\n3) &quot;name&quot;\n4) &quot;chuchen&quot;\n5) &quot;age&quot;\n6) &quot;22&quot;\n7) &quot;blog&quot;\n8) &quot;vipblogs.cn&quot;\n127.0.0.1:6379[1]&gt; hgetall h2\n1) &quot;name&quot;\n2) &quot;cc&quot;\n3) &quot;habit&quot;\n4) &quot;computer&quot;\n5) &quot;drink&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="hdel" tabindex="-1"><a class="header-anchor" href="#hdel" aria-hidden="true">#</a> hdel</h2><blockquote><p>语法：<code>hdel key field [field…]</code></p></blockquote><p>功能：删除哈希表 key 中的一个或多个指定域field，不存在field直接忽略。</p><p>返回值：成功删除的field的数量。</p>',5),v=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps7-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),f=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hgetall h2\n1) &quot;name&quot;\n2) &quot;cc&quot;\n3) &quot;habit&quot;\n4) &quot;computer&quot;\n5) &quot;drink&quot;\n6) &quot;water&quot;\n127.0.0.1:6379[1]&gt; hdel h2 name habit\n(integer) 2\n127.0.0.1:6379[1]&gt; hgetall h2\n1) &quot;drink&quot;\n2) &quot;water&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="hlen" tabindex="-1"><a class="header-anchor" href="#hlen" aria-hidden="true">#</a> hlen</h2><blockquote><p>语法：<code>hlen key</code></p></blockquote><p>功能：获取哈希表 key 中域field的个数</p><p>返回值：数值，field的个数。key不存在返回0.</p>',5),_=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps8-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),z=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hgetall h1\n1) &quot;id&quot;\n2) &quot;1&quot;\n3) &quot;name&quot;\n4) &quot;chuchen&quot;\n5) &quot;age&quot;\n6) &quot;22&quot;\n7) &quot;blog&quot;\n8) &quot;vipblogs.cn&quot;\n127.0.0.1:6379[1]&gt; hlen h1\n(integer) 4\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="hexists" tabindex="-1"><a class="header-anchor" href="#hexists" aria-hidden="true">#</a> hexists</h2><blockquote><p>语法：<code>hexists key field</code></p></blockquote><p>功能：查看哈希表 key 中，给定域 field 是否存在</p><p>返回值：如果field存在，返回1，其他返回0。</p>',5),j=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps9-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),w=(0,l._)("h2",{id:"hkeys",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hkeys","aria-hidden":"true"},"#"),(0,l.Uk)(" hkeys")],-1),E=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("语法："),(0,l._)("code",null,"hkeys key")])],-1),S=(0,l._)("p",null,"功能：查看哈希表 key 中的所有field域列表",-1),P=(0,l._)("p",null,"返回值：包含所有field的列表，key不存在返回空列表",-1),U=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps10-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),B=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hkeys h1\n1) &quot;id&quot;\n2) &quot;name&quot;\n3) &quot;age&quot;\n4) &quot;blog&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="hvals" tabindex="-1"><a class="header-anchor" href="#hvals" aria-hidden="true">#</a> hvals</h2><blockquote><p>语法：<code>hvals key</code></p></blockquote><p>功能：返回哈希表 中所有域的值列表</p><p>返回值：包含哈希表所有域值的列表，key不存在返回空列表。</p>',5),C=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps11-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),A=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hvals h1\n1) &quot;1&quot;\n2) &quot;chuchen&quot;\n3) &quot;22&quot;\n4) &quot;vipblogs.cn&quot;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><code>不包含key值</code></p><h2 id="hincrby" tabindex="-1"><a class="header-anchor" href="#hincrby" aria-hidden="true">#</a> hincrby</h2><blockquote><p>语法：<code>hincrby key field int</code></p></blockquote><p>功能：给哈希表key中的field域增加int</p><p>返回值：返回增加之后的field域的值</p>',6),R=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps12-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),D=(0,l.uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1:6379[1]&gt; hincrby h1 age 199\n(integer) 222\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="hincrbyfloat" tabindex="-1"><a class="header-anchor" href="#hincrbyfloat" aria-hidden="true">#</a> hincrbyfloat</h2><blockquote><p>语法：<code>hincrbyfloat key field float</code></p></blockquote><p>功能：给哈希表key中的field域增加float</p><p>返回值：返回增加之后的field域的值</p>',5),H=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps13-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),T=(0,l._)("h2",{id:"hsetnx",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#hsetnx","aria-hidden":"true"},"#"),(0,l.Uk)(" hsetnx")],-1),Y=(0,l._)("blockquote",null,[(0,l._)("p",null,[(0,l.Uk)("语法："),(0,l._)("code",null,"hsetnx key field value")])],-1),Z=(0,l._)("p",null,"功能：将哈希表 key 中的域 field 的值设置为 value ，当且仅当域 field 不存在的时候才设置，否则不设置。",-1),F=(0,l._)("p",null,"返回值：设值成功返回1，其他返回0.",-1),G=(0,l._)("p",null,[(0,l._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/wps14-1615082512734.jpg?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),I={},J=(0,n(83744).Z)(I,[["render",function(e,s){return(0,l.wg)(),(0,l.iD)(l.HY,null,[a,t,i,r,c,u,p,o,h,d,b,g,m,y,q,x,k,v,f,_,z,j,w,E,S,P,U,B,C,A,R,D,H,T,Y,Z,F,G],64)}]])}}]);