"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4564],{9395:(a,s,n)=>{n.r(s),n.d(s,{data:()=>p});const p={key:"v-2202db7c",path:"/mybatis/%E9%97%AE%E9%A2%98.html",title:"连接数据库信息出错、",lang:"en-US",frontmatter:{stick:!1},excerpt:"",headers:[],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},41543:(a,s,n)=>{n.r(s),n.d(s,{default:()=>c});var p=n(66252);const t=(0,p.uE)('<h1 id="连接数据库信息出错、" tabindex="-1"><a class="header-anchor" href="#连接数据库信息出错、" aria-hidden="true">#</a> 连接数据库信息出错、</h1><p>报错情况</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span></span>PersistenceException</span><span class="token operator">:</span> \n### <span class="token class-name">Error</span> querying <span class="token class-name"><span class="token namespace">database<span class="token punctuation">.</span></span>  Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>SQLException</span><span class="token operator">:</span> <span class="token class-name">No</span> suitable driver found <span class="token keyword">for</span> mysql<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">3306</span><span class="token operator">/</span>mybatis\n### <span class="token class-name">The</span> error may exist in cn<span class="token operator">/</span>vipblogs<span class="token operator">/</span>dao<span class="token operator">/</span><span class="token class-name">StudentDao</span><span class="token punctuation">.</span>xml\n### <span class="token class-name">The</span> error may involve <span class="token class-name"><span class="token namespace">cn<span class="token punctuation">.</span>vipblogs<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span>StudentDao</span><span class="token punctuation">.</span>selectAll\n### <span class="token class-name">The</span> error occurred <span class="token keyword">while</span> executing a query\n### <span class="token class-name">Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>sql<span class="token punctuation">.</span></span>SQLException</span><span class="token operator">:</span> <span class="token class-name">No</span> suitable driver found <span class="token keyword">for</span> mysql<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">3306</span><span class="token operator">/</span>mybatis\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>对于这个问题，是因为我在配置连接数据库的时候，出错了</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dataSource</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>POOLED<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!--type：表示数据源的类型， POOLED表示使用连接池--&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>driver<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.mysql.jdbc.Driver<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>url<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>mysql://127.0.0.1:3306/mybatis<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>property</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>password<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>123456<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dataSource</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p><code> &lt;property name=&quot;url&quot; value=&quot;mysql://127.0.0.1:3306/mybatis&quot;/&gt;</code>应该为</p><p><code> &lt;property name=&quot;url&quot; value=&quot;jdbc:mysql://127.0.0.1:3306/mybatis&quot;/&gt;</code></p><h1 id="处理返回结果集报错" tabindex="-1"><a class="header-anchor" href="#处理返回结果集报错" aria-hidden="true">#</a> 处理返回结果集报错</h1><p>如果定义查询返回的返回值这样定义</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectAll<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>java.util.List<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    select id,name,email,age from student\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>那么在执行程序，处理结果<code>List&lt;Student&gt; list = sqlSession.selectList(sqlId);</code></p><p>就会出现异常，因为<code>resultType=&quot;java.util.List&quot;</code>定义的返回是一个List，但是接收使用<code>List&lt;Student&gt;</code>就会出现异常</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>exceptions<span class="token punctuation">.</span></span>PersistenceException</span><span class="token operator">:</span> \n### <span class="token class-name">Error</span> querying <span class="token class-name"><span class="token namespace">database<span class="token punctuation">.</span></span>  Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>UnsupportedOperationException</span>\n### <span class="token class-name">The</span> error may exist in cn<span class="token operator">/</span>vipblogs<span class="token operator">/</span>dao<span class="token operator">/</span><span class="token class-name">StudentDao</span><span class="token punctuation">.</span>xml\n### <span class="token class-name">The</span> error may involve <span class="token class-name"><span class="token namespace">cn<span class="token punctuation">.</span>vipblogs<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span>StudentDao</span><span class="token punctuation">.</span>selectAll\n### <span class="token class-name">The</span> error occurred <span class="token keyword">while</span> handling results\n### SQL<span class="token operator">:</span> select id<span class="token punctuation">,</span>name<span class="token punctuation">,</span>email<span class="token punctuation">,</span>age from student\n### <span class="token class-name">Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>UnsupportedOperationException</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h1 id="执行select语句时-出现不支持的类型" tabindex="-1"><a class="header-anchor" href="#执行select语句时-出现不支持的类型" aria-hidden="true">#</a> 执行select语句时，出现不支持的类型</h1><p>如果dao中的方法定义为</p><p><code>List&lt;Map&lt;String,Object&gt;&gt; selectAllMap();</code></p><p>xml中，使用下面的方式进行</p><p><code>&lt;select id=&quot;selectAllMap&quot; resultType=&quot;java.util.List&quot;&gt;</code></p><p>就会报下面这个错，不支持的类型</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">Error</span> querying <span class="token class-name"><span class="token namespace">database<span class="token punctuation">.</span></span>  Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>UnsupportedOperationException</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>在解决这个错误之前，应该知道一个概念，<code>resultType=</code>的值，是每一条查询到的数据的返回类型，我们方法中定义的是<code>List&lt;Map&lt;String,Object&gt;&gt;</code>，但是这个是所有的记录的总和是list，但是每一条数据是一个map集合，所以就出现了问题，这里改成map就可以了</p><p><code>&lt;select id=&quot;selectAllMap&quot; resultType=&quot;java.util.Map&quot;&gt;</code></p><h1 id="必须要有返回值类型" tabindex="-1"><a class="header-anchor" href="#必须要有返回值类型" aria-hidden="true">#</a> 必须要有返回值类型</h1><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>selectById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cn.vipblogs.domain.Student<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    select * from student where  id = #{id}\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><code>resultType=&quot;cn.vipblogs.domain.Student&quot;</code>一定要写上返回值类型，否则报错，报错信息</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>### <span class="token class-name">Error</span> querying <span class="token class-name"><span class="token namespace">database<span class="token punctuation">.</span></span>  Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>executor<span class="token punctuation">.</span></span>ExecutorException</span><span class="token operator">:</span> <span class="token class-name">A</span> query was run and no <span class="token class-name">Result</span> <span class="token class-name">Maps</span> were found <span class="token keyword">for</span> the <span class="token class-name">Mapped</span> <span class="token class-name">Statement</span> &#39;<span class="token class-name"><span class="token namespace">cn<span class="token punctuation">.</span>vipblogs<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span>StudentDao</span><span class="token punctuation">.</span>selectById<span class="token char">&#39;.  It&#39;</span>s likely that neither a <span class="token class-name">Result</span> <span class="token class-name">Type</span> nor a <span class="token class-name">Result</span> <span class="token class-name">Map</span> was specified<span class="token punctuation">.</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h1 id="id标签名重复问题" tabindex="-1"><a class="header-anchor" href="#id标签名重复问题" aria-hidden="true">#</a> id标签名重复问题</h1><p>如果标签中id的名称重复，那么会报以下错误</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>### <span class="token class-name">The</span> error may exist in cn<span class="token operator">/</span>vipblogs<span class="token operator">/</span>dao<span class="token operator">/</span><span class="token class-name">StudentDao</span><span class="token punctuation">.</span>xml\n### <span class="token class-name">Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>builder<span class="token punctuation">.</span></span>BuilderException</span><span class="token operator">:</span> <span class="token class-name">Error</span> parsing SQL <span class="token class-name">Mapper</span> <span class="token class-name">Configuration<span class="token punctuation">.</span> Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>builder<span class="token punctuation">.</span></span>BuilderException</span><span class="token operator">:</span> <span class="token class-name">Error</span> parsing <span class="token class-name">Mapper</span> <span class="token class-name">XML<span class="token punctuation">.</span> The</span> XML location is &#39;cn<span class="token operator">/</span>vipblogs<span class="token operator">/</span>dao<span class="token operator">/</span><span class="token class-name">StudentDao</span><span class="token punctuation">.</span>xml&#39;<span class="token punctuation">.</span> <span class="token class-name">Cause</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>IllegalArgumentException</span><span class="token operator">:</span> <span class="token class-name">Mapped</span> <span class="token class-name">Statements</span> collection already contains value <span class="token keyword">for</span> <span class="token class-name"><span class="token namespace">cn<span class="token punctuation">.</span>vipblogs<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span>StudentDao</span><span class="token punctuation">.</span>selectById<span class="token punctuation">.</span> please check cn<span class="token operator">/</span>vipblogs<span class="token operator">/</span>dao<span class="token operator">/</span><span class="token class-name">StudentDao</span><span class="token punctuation">.</span>xml and cn<span class="token operator">/</span>vipblogs<span class="token operator">/</span>dao<span class="token operator">/</span><span class="token class-name">StudentDao</span><span class="token punctuation">.</span>xml\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>mapper文件信息</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;select id=&quot;selectById&quot;  parameterType=&quot;java.lang.Integer&quot; resultType=&quot;cn.vipblogs.domain.Student&quot;&gt;\n    select * from student where  id = #{idd}\n&lt;/select&gt;\n\n&lt;select id=&quot;selectById&quot;  parameterType=&quot;java.lang.Integer&quot; resultType=&quot;cn.vipblogs.domain.Student&quot;&gt;\n    select * from student where  id = #{id} or name=#{name}\n&lt;/select&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>id重复</p><h1 id="出现异常-不匹配" tabindex="-1"><a class="header-anchor" href="#出现异常-不匹配" aria-hidden="true">#</a> 出现异常，不匹配</h1><p>如果出现下面的异常</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>binding<span class="token punctuation">.</span></span>BindingException</span><span class="token operator">:</span> <span class="token class-name">Invalid</span> bound statement <span class="token punctuation">(</span>not found<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token class-name"><span class="token namespace">vin<span class="token punctuation">.</span>cco<span class="token punctuation">.</span>dao<span class="token punctuation">.</span></span>GoodsDao</span><span class="token punctuation">.</span>selectById\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>那么就是无法找到dao接口文件的映射文件，这是一个很容易忽视的点，就是必须要保证接口名和mybatis的映射文件的名字要是一样的，否则就会报这个错误</p>',36),e=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20210522202336635.png",data:"aurora"})],-1),o={},c=(0,n(83744).Z)(o,[["render",function(a,s){return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e],64)}]])}}]);