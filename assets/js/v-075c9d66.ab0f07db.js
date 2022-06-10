"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1573],{64954:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-075c9d66",path:"/spring/springboot/%E6%B3%A8%E6%84%8F.html",title:"spring boot 注意点",lang:"en-US",frontmatter:{tag:["注意"]},excerpt:"",headers:[{level:2,title:"@Bean方法参数自动赋值",slug:"bean方法参数自动赋值",children:[]},{level:2,title:"拦截所有",slug:"拦截所有",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},65961:(n,a,s)=>{s.r(a),s.d(a,{default:()=>p});const e=(0,s(66252).uE)('<h1 id="spring-boot-注意点" tabindex="-1"><a class="header-anchor" href="#spring-boot-注意点" aria-hidden="true">#</a> spring boot 注意点</h1><h2 id="bean方法参数自动赋值" tabindex="-1"><a class="header-anchor" href="#bean方法参数自动赋值" aria-hidden="true">#</a> @Bean方法参数自动赋值</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Bean</span>\n<span class="token annotation punctuation">@ConditionalOnBean</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">MultipartResolver</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token annotation punctuation">@ConditionalOnMissingBean</span><span class="token punctuation">(</span>\n    name <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;multipartResolver&quot;</span><span class="token punctuation">}</span>\n<span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token class-name">MultipartResolver</span> <span class="token function">multipartResolver</span><span class="token punctuation">(</span><span class="token class-name">MultipartResolver</span> resolver<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> resolver<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n这个是文件上传解析器的配置，如果容器中，存在<span class="token class-name">MultipartResolver</span>对象，不存在一个名为multipartResolver的bean，那么就会执行这个方法，在使用<span class="token annotation punctuation">@Bean</span>注解的方法中，如果参数是一个对象的话，那么在创建此bean的时候，就会从容器中，寻找此类对象，并将此类对象自动赋值给这个对象，此操作可以防止，我们使用其他方法配置文件上传解析器的时候，没有使用规范的bean名字multipartResolver\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="拦截所有" tabindex="-1"><a class="header-anchor" href="#拦截所有" aria-hidden="true">#</a> 拦截所有</h2><p>在原生tomcat中，拦截所有是<code>/css/*</code>，但是在spring中是<code>/css/**</code>，两颗星</p>',5),t={},p=(0,s(83744).Z)(t,[["render",function(n,a){return e}]])}}]);