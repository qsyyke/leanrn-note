"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[795],{9147:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-75734cf9",path:"/rabbitmq/%E9%97%AE%E9%A2%98.html",title:"rabbitmq问题整理",lang:"en-US",frontmatter:{date:"2022/1/12 15:30",tag:["问题","issue"]},excerpt:"",headers:[{level:2,title:"java.util.concurrent.TimeoutException",slug:"java-util-concurrent-timeoutexception",children:[]},{level:2,title:"spring集成集成swagger报错",slug:"spring集成集成swagger报错",children:[]},{level:2,title:"发现消费者不能使用Message对象",slug:"发现消费者不能使用message对象",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},88127:(n,s,a)=>{a.r(s),a.d(s,{default:()=>b});var e=a(66252);const t=(0,e._)("h1",{id:"rabbitmq问题整理",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#rabbitmq问题整理","aria-hidden":"true"},"#"),(0,e.Uk)(" rabbitmq问题整理")],-1),p=(0,e._)("p",null,"这里记录了学习过程中，遇到的所有rabbitmq相关的问题，以及解决方法",-1),o=(0,e._)("h2",{id:"java-util-concurrent-timeoutexception",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#java-util-concurrent-timeoutexception","aria-hidden":"true"},"#"),(0,e.Uk)(" java.util.concurrent.TimeoutException")],-1),c=(0,e.Uk)("参照此"),l={href:"https://blog.csdn.net/lmx_sky/article/details/105398898",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("博客"),u=(0,e.Uk)("解决的"),r=(0,e.uE)('<p>我们需要在windows上修改一下<code>hosts</code>文件，因为rabbitmq使用主机名与节点进行通信</p><blockquote><p>你需要在<code>hosts</code>文件中，添加下面的映射关系</p><p><code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>127.0.0.1   localhost RabbitMQ服务IP地址  主机名 \n\n例如我的\n127.0.0.1   localhost 192.168.86.142 aurora\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="spring集成集成swagger报错" tabindex="-1"><a class="header-anchor" href="#spring集成集成swagger报错" aria-hidden="true">#</a> spring集成集成<code>swagger</code>报错</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span>ApplicationContextException</span><span class="token operator">:</span><span class="token class-name">Failed</span> <span class="token keyword">to</span> <span class="token namespace">start</span> bean &#39;documentationPluginsBootstrapper&#39;<span class="token punctuation">;</span>nested exception is <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>NullPointerException</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><ul><li><p>解决</p><p>在spring启动类上，加入<code>@EnableWebMvc</code>注解</p></li></ul><h2 id="发现消费者不能使用message对象" tabindex="-1"><a class="header-anchor" href="#发现消费者不能使用message对象" aria-hidden="true">#</a> 发现消费者不能使用<code>Message</code>对象</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token annotation punctuation">@Slf4j</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLetterConsumer</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;QD&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">Channel</span> channe<span class="token punctuation">,</span><span class="token class-name">String</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间{},收到消息{}&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//这里的message就是生产者发送的消息</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>但是不能使用下面这种方式，会报错</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Component</span>\n<span class="token annotation punctuation">@Slf4j</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DeadLetterConsumer</span> <span class="token keyword">implements</span> <span class="token class-name">Serializable</span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@RabbitListener</span><span class="token punctuation">(</span>queues <span class="token operator">=</span> <span class="token string">&quot;QD&quot;</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">receive</span><span class="token punctuation">(</span><span class="token class-name">Channel</span> channe<span class="token punctuation">,</span><span class="token class-name">Message</span> message<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间{},收到消息{}&quot;</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',10),k={},b=(0,a(83744).Z)(k,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,o,(0,e._)("p",null,[c,(0,e._)("a",l,[i,(0,e.Wm)(a)]),u]),r],64)}]])}}]);