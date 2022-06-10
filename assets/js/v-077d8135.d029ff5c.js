"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4867],{40599:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-077d8135",path:"/spring/springcloud/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4/seata.html",title:"seata",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用nacos作为配置中心",slug:"使用nacos作为配置中心",children:[{level:3,title:"使用",slug:"使用",children:[]}]},{level:2,title:"mysql中使用dateTime问题",slug:"mysql中使用datetime问题",children:[]},{level:2,title:"报错信息",slug:"报错信息",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},49383:(n,a,s)=>{s.r(a),s.d(a,{default:()=>x});var e=s(66252);const t=(0,e.uE)('<h1 id="seata" tabindex="-1"><a class="header-anchor" href="#seata" aria-hidden="true">#</a> seata</h1><p>使用的话，我就不用讲了，直接看官方的教程</p><p>https://gitee.com/itCjb/spring-cloud-alibaba-seata-demo#https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Fseata%2Fseata%2Ftree%2Fdevelop%2Fscript%2Fclient</p><h2 id="使用nacos作为配置中心" tabindex="-1"><a class="header-anchor" href="#使用nacos作为配置中心" aria-hidden="true">#</a> 使用nacos作为配置中心</h2><p>如果我们需要使用nacos作为配置中心的话，也就是我们将<code>registry.conf</code>中的type设置为<code>nacos</code>之后，我们需要配置，否则就会出现问题</p>',5),p=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220413145833453",originSrc:"https://picture.xcye.xyz/image-20220413145833453.png",data:"aurora"})],-1),l=(0,e.uE)('<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">io<span class="token punctuation">.</span>seata<span class="token punctuation">.</span>common<span class="token punctuation">.</span>exception<span class="token punctuation">.</span></span>FrameworkException</span><span class="token operator">:</span> <span class="token class-name">No</span> available service\n    \ncan not get cluster name in registry config &#39;service<span class="token punctuation">.</span>vgroupMapping<span class="token punctuation">.</span>aurora<span class="token operator">-</span>message<span class="token operator">-</span>seata<span class="token operator">-</span>service<span class="token operator">-</span>group&#39;<span class="token punctuation">,</span> please make sure registry config correct\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',1),c=(0,e._)("ol",null,[(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("设置"),(0,e._)("code",null,"conf/registry.conf"),(0,e.Uk)("中的type值，将其设置为nacos，并设置端口ip等")])]),(0,e._)("li",null,[(0,e._)("p",null,"因为使用nacos作为配置中心，就需要我们将配置都上传到nacos，官方提供了一个工具，我们可以直接一键上传")]),(0,e._)("li",null,[(0,e._)("p",null,"https://github.com/seata/seata/blob/develop/script/config-center/nacos/nacos-config.sh将此文件下载下来，放在seata的conf目录")]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("https://github.com/seata/seata/blob/develop/script/config-center/config.txt将此文件下载下来，放在"),(0,e._)("code",null,"seata"),(0,e.Uk)("根目录下，也就是bin同级目录那里，不能修改该文件的名字，这个文件里面的内容，就是我们上传到nacos中的")]),(0,e._)("p",null,"因为有一些配置是不需要的，我们可以删除，如果此文件中，某些配置项的值为空，并且没有注释掉，那么是不能上传成功的")]),(0,e._)("li",null,[(0,e._)("p",null,[(0,e.Uk)("在"),(0,e._)("code",null,"nacos-config.sh"),(0,e.Uk)("目录下，运行"),(0,e._)("code",null,"sh nacos-config.sh -h localhost -p 8848")]),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220413162657186",originSrc:"https://picture.xcye.xyz/image-20220413162657186.png",data:"aurora"})]),(0,e._)("p",null,"像下图这样就可以了，如果有一个错误，都会导致上传失败，对于造成上传失败的项，如果我们不需要的话，可以直接注释，然后再次上传")])],-1),o=(0,e._)("p",null,"然后回到nacos刷新，就可以看到这些配置",-1),r=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220413162813402",originSrc:"https://picture.xcye.xyz/image-20220413162813402.png",data:"aurora"})],-1),i=(0,e._)("p",null,[(0,e.Uk)("这些配置的命名都是以"),(0,e._)("code",null,"seata的配置名作为名字"),(0,e.Uk)("，值就直接写")],-1),u=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220413163233065",originSrc:"https://picture.xcye.xyz/image-20220413163233065.png",data:"aurora"})],-1),g=(0,e.uE)('<p>然后就可以了</p><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><p>在<code>bootstrap.yml</code>文件中，设置nacos配置中心的地址</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>\n    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>\n      <span class="token key atrule">config</span><span class="token punctuation">:</span>\n        <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>在<code>application.yml</code>文件中，在配置一下</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">seata</span><span class="token punctuation">:</span>\n  <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token key atrule">enable-auto-data-source-proxy</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token key atrule">tx-service-group</span><span class="token punctuation">:</span> default_tx_group\n  <span class="token key atrule">config</span><span class="token punctuation">:</span>\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> nacos\n    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>\n      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>\n      <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&quot;SEATA_GROUP&quot;</span>\n      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>\n      <span class="token key atrule">username</span><span class="token punctuation">:</span> <span class="token string">&quot;nacos&quot;</span>\n      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;nacos&quot;</span>\n  <span class="token key atrule">registry</span><span class="token punctuation">:</span>\n    <span class="token key atrule">type</span><span class="token punctuation">:</span> nacos\n    <span class="token key atrule">nacos</span><span class="token punctuation">:</span>\n      <span class="token key atrule">application</span><span class="token punctuation">:</span> seata<span class="token punctuation">-</span>server\n      <span class="token key atrule">server-addr</span><span class="token punctuation">:</span> 127.0.0.1<span class="token punctuation">:</span><span class="token number">8848</span>\n      <span class="token key atrule">group</span><span class="token punctuation">:</span> <span class="token string">&quot;SEATA_GROUP&quot;</span>\n      <span class="token key atrule">namespace</span><span class="token punctuation">:</span> <span class="token string">&quot;&quot;</span>\n      <span class="token key atrule">username</span><span class="token punctuation">:</span> <span class="token string">&quot;nacos&quot;</span>\n      <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&quot;nacos&quot;</span>\n  <span class="token key atrule">service</span><span class="token punctuation">:</span>\n    <span class="token key atrule">vgroup-mapping</span><span class="token punctuation">:</span>\n      <span class="token key atrule">default_tx_group</span><span class="token punctuation">:</span> default\n  <span class="token key atrule">client</span><span class="token punctuation">:</span>\n    <span class="token key atrule">undo</span><span class="token punctuation">:</span>\n      <span class="token key atrule">log-table</span><span class="token punctuation">:</span> undo_log\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><blockquote><p>需要注意的是，如果我们的nacos配置中心和<code>application.yml</code>文件中的配置重合了，那么会使用<code>nacos</code>的配置作为默认配置，也就是<code>application.yml</code>会不生效</p></blockquote><blockquote><p>如果在使用<code>feign</code>进行服务之间的远程调用的时候，如果对异常进行了处理，一定要设置响应码为5xxx，否则如果远程服务发生了异常，那么也是不能回滚的</p></blockquote><h2 id="mysql中使用datetime问题" tabindex="-1"><a class="header-anchor" href="#mysql中使用datetime问题" aria-hidden="true">#</a> mysql中使用dateTime问题</h2><p>将mysql中的时间存储格式修改为timesmap，添加依赖</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;\n&lt;groupId&gt;com.esotericsoftware.kryo&lt;/groupId&gt;\n&lt;artifactId&gt;kryo&lt;/artifactId&gt;\n&lt;version&gt;2.24.0&lt;/version&gt;\n&lt;/dependency&gt;\n\n&lt;dependency&gt;\n&lt;groupId&gt;com.esotericsoftware&lt;/groupId&gt;\n&lt;artifactId&gt;kryo&lt;/artifactId&gt;\n&lt;version&gt;4.0.2&lt;/version&gt;\n&lt;/dependency&gt;\n\n&lt;dependency&gt;\n&lt;groupId&gt;de.javakaffee&lt;/groupId&gt;\n&lt;artifactId&gt;kryo-serializers&lt;/artifactId&gt;\n&lt;version&gt;0.44&lt;/version&gt;\n&lt;/dependency&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>在<code>nacos</code>中增加一个配置</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>client.undo.logSerialization=kryo\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',13),b=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220423125359311",originSrc:"https://picture.xcye.xyz/image-20220423125359311.png",data:"aurora"})],-1),k=(0,e._)("h2",{id:"报错信息",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#报错信息","aria-hidden":"true"},"#"),(0,e.Uk)(" 报错信息")],-1),d=(0,e._)("p",null,"can not get cluster name in registry config 'service.vgroupMapping.account-service-fescar-service-group', please make sure registry config correc",-1),m=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220503162849313",originSrc:"https://picture.xcye.xyz/image-20220503162849313.png",data:"aurora"})],-1),y=(0,e._)("p",null,[(0,e.Uk)("因为之前的tx-service-group的值为"),(0,e._)("code",null,"aurora_blog_tx_group"),(0,e.Uk)("，需要修改成"),(0,e._)("code",null,"aurora-blog-tx-group"),(0,e.Uk)("，nacos中也需要修改一下")],-1),h=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20220503162954948",originSrc:"https://picture.xcye.xyz/image-20220503162954948.png",data:"aurora"})],-1),v=(0,e._)("p",null,"issue",-1),_=(0,e._)("p",null,"https://github.com/seata/seata-samples/issues/408",-1),f={},x=(0,s(83744).Z)(f,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,l,c,o,r,i,u,g,b,k,d,m,y,h,v,_],64)}]])}}]);