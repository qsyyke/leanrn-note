"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2553],{56066:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-b5d81a8c",path:"/spring/springboot/%E5%B5%8C%E5%85%A5%E5%BC%8Fservlet%E6%9C%8D%E5%8A%A1%E5%99%A8.html",title:"嵌入式servlet服务器",lang:"en-US",frontmatter:{tag:["servlet","服务器","web服务器"]},excerpt:"",headers:[{level:2,title:"原理描述",slug:"原理描述",children:[]},{level:2,title:"选择servlet服务器",slug:"选择servlet服务器",children:[]},{level:2,title:"定制化servlet容器",slug:"定制化servlet容器",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},89719:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});var e=a(66252);const t=(0,e.uE)('<h1 id="嵌入式servlet服务器" tabindex="-1"><a class="header-anchor" href="#嵌入式servlet服务器" aria-hidden="true">#</a> 嵌入式servlet服务器</h1><h2 id="原理描述" tabindex="-1"><a class="header-anchor" href="#原理描述" aria-hidden="true">#</a> 原理描述</h2><p>官方描述</p><p>Under the hood, Spring Boot uses a different type of <code>ApplicationContext</code> for embedded servlet container support. The <code>ServletWebServerApplicationContext</code> is a special type of <code>WebApplicationContext</code> that bootstraps itself by searching for a single <code>ServletWebServerFactory</code> bean. Usually a <code>TomcatServletWebServerFactory</code>, <code>JettyServletWebServerFactory</code>, or <code>UndertowServletWebServerFactory</code> has been auto-configured.</p><ol><li><p>spring boot启动，发现是一个web项目（因为导入web的start），导入tomcat</p></li><li><p>servlet的web服务器ServletWebServerFactoryAutoConfiguration在启动的时候，会导入ServletWebServerFactoryConfiguration，此ServletWebServerFactoryConfiguration中，有多个bean，都是不同服务器的WebServerFactory</p></li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>\n<span class="token class-name">TomcatServletWebServerFactory</span> <span class="token function">tomcatServletWebServerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token annotation punctuation">@Bean</span>\n<span class="token class-name">JettyServletWebServerFactory</span> <span class="token class-name">JettyServletWebServerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token annotation punctuation">@Bean</span>\n<span class="token class-name">UndertowServletWebServerFactory</span> <span class="token function">undertowServletWebServerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><ol start="3"><li><p>ServletWebServerApplicationContext启动的时候，会寻找<strong>ServletWebServerFactory</strong></p><p>在ServletWebServerFactoryConfiguration中内置了三个ServletWebServerFactory，<code>TomcatServletWebServerFactory</code>, <code>JettyServletWebServerFactory</code>, or <code>UndertowServletWebServerFactory</code></p></li><li><p>因为springboot在启动的时候，会自动导入xxAutoConfiguration中的配置，导入ServletWebServerFactoryAutoConfiguration中的配置，还会导入ServletWebServerFactoryConfiguration配置，ServletWebServerFactoryConfiguration会动态的判断导入的是哪个WebServletFactory，因为导入的是web-start，所以默认是tomcat---&gt;TomcatServletWebServerFactory</p></li><li><p>TomcatServletWebServerFactory会创建tomcat服务器，并会启动</p><p>ServletWebServerApplicationContext容器在启动的时候，会有一个</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">void</span> <span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">BeansException</span><span class="token punctuation">,</span> <span class="token class-name">IllegalStateException</span> <span class="token punctuation">{</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">RuntimeException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">////////////////////重要</span>\n        <span class="token class-name">WebServer</span> webServer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>webServer<span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>webServer <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            webServer<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">throw</span> ex<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">//如果发生异常的话，就会停止，否则会createWebServer();</span>\n<span class="token annotation punctuation">@Override</span>\n<span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">onRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">onRefresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">try</span> <span class="token punctuation">{</span>\n        <span class="token function">createWebServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ApplicationContextException</span><span class="token punctuation">(</span><span class="token string">&quot;Unable to start web server&quot;</span><span class="token punctuation">,</span> ex<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>下面方法是寻找webServletFactory，在一个应用中，只能有一个web服务器</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">protected</span> <span class="token class-name">ServletWebServerFactory</span> <span class="token function">getWebServerFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Use bean names so that we don&#39;t consider the hierarchy</span>\n    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> beanNames <span class="token operator">=</span> <span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBeanNamesForType</span><span class="token punctuation">(</span><span class="token class-name">ServletWebServerFactory</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>beanNames<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ApplicationContextException</span><span class="token punctuation">(</span><span class="token string">&quot;Unable to start ServletWebServerApplicationContext due to missing &quot;</span>\n                                              <span class="token operator">+</span> <span class="token string">&quot;ServletWebServerFactory bean.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>beanNames<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">ApplicationContextException</span><span class="token punctuation">(</span><span class="token string">&quot;Unable to start ServletWebServerApplicationContext due to multiple &quot;</span>\n                                              <span class="token operator">+</span> <span class="token string">&quot;ServletWebServerFactory beans : &quot;</span> <span class="token operator">+</span> <span class="token class-name">StringUtils</span><span class="token punctuation">.</span><span class="token function">arrayToCommaDelimitedString</span><span class="token punctuation">(</span>beanNames<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token function">getBeanFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getBean</span><span class="token punctuation">(</span>beanNames<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token class-name">ServletWebServerFactory</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>在WebServer中，可以看到webServer的实现，对于tomcat</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">WebServer</span> <span class="token function">getWebServer</span><span class="token punctuation">(</span><span class="token class-name">ServletContextInitializer</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> initializers<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>disableMBeanRegistry<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Registry</span><span class="token punctuation">.</span><span class="token function">disableRegistry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token class-name">Tomcat</span> tomcat <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tomcat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Connector</span> additionalConnector <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>additionalTomcatConnectors<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        tomcat<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addConnector</span><span class="token punctuation">(</span>additionalConnector<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">prepareContext</span><span class="token punctuation">(</span>tomcat<span class="token punctuation">.</span><span class="token function">getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> initializers<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token function">getTomcatWebServer</span><span class="token punctuation">(</span>tomcat<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在这里直接new了一个tomcat，Tomcat tomcat = new Tomcat()，此方法调用之后，会返回一个TomcatWebServer，在这个类中，存在一个start()方法，这个就是启动tomcat</p></li></ol><h2 id="选择servlet服务器" tabindex="-1"><a class="header-anchor" href="#选择servlet服务器" aria-hidden="true">#</a> 选择servlet服务器</h2><p>因为默认使用的是tomcat服务器，但是我们可以选择其他的</p>',9),p=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20210707220632323.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),o=(0,e.uE)('<p>因为默认的是tomcat，我们如果想要使用其他的服务器的话，就需要将tomcat进行移除，因为只能有一个服务器</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;dependency&gt;\n    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n    &lt;artifactId&gt;spring-boot-starter-web&lt;/artifactId&gt;\n    &lt;exclusions&gt;\n        &lt;exclusion&gt;\n            &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n            &lt;artifactId&gt;spring-boot-starter-tomcat&lt;/artifactId&gt;\n        &lt;/exclusion&gt;\n    &lt;/exclusions&gt;\n&lt;/dependency&gt;\n\n&lt;dependency&gt;\n    &lt;groupId&gt;org.springframework.boot&lt;/groupId&gt;\n    &lt;artifactId&gt;spring-boot-starter-undertow&lt;/artifactId&gt;\n&lt;/dependency&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="定制化servlet容器" tabindex="-1"><a class="header-anchor" href="#定制化servlet容器" aria-hidden="true">#</a> 定制化servlet容器</h2><p>官方文档https://docs.spring.io/spring-boot/docs/current/reference/html/features.html##features.developing-web-applications.embedded-container.customizing</p><ul><li><p>实现 <code>WebServerFactoryCu**stomizer&lt;ConfigurableServletWebServerFactory&gt;</code></p></li><li><p>把配置文件的值和<code>**ServletWebServerFactory 进行绑定**</code></p></li><li><p>修改配置文件 <strong>server.xxx</strong></p></li><li><p>直接自定义 <strong>ConfigurableServletWebServerFactory</strong></p></li></ul><p><strong>xxxxx<strong><strong>Customizer</strong></strong>：定制化器，可以改变xxxx的默认规则</strong></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">WebServerFactoryCustomizer</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>server<span class="token punctuation">.</span></span><span class="token class-name">ConfigurableServletWebServerFactory</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span><span class="token punctuation">;</span>\n\n<span class="token annotation punctuation">@Component</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomizationBean</span> <span class="token keyword">implements</span> <span class="token class-name">WebServerFactoryCustomizer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ConfigurableServletWebServerFactory</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>\n\n    <span class="token annotation punctuation">@Override</span>\n    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">customize</span><span class="token punctuation">(</span><span class="token class-name">ConfigurableServletWebServerFactory</span> server<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        server<span class="token punctuation">.</span><span class="token function">setPort</span><span class="token punctuation">(</span><span class="token number">9000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>',7),c={},l=(0,a(83744).Z)(c,[["render",function(n,s){return(0,e.wg)(),(0,e.iD)(e.HY,null,[t,p,o],64)}]])}}]);