"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7450],{85958:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-716b72d6",path:"/java-base/%E6%B3%A8%E8%A7%A3.html",title:"Java中注解的使用",lang:"en-US",frontmatter:{date:"2022/3/9 17:22"},excerpt:"",headers:[{level:2,title:"自定义注解的使用",slug:"自定义注解的使用",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},9915:(n,s,a)=>{a.r(s),a.d(s,{default:()=>o});const p=(0,a(66252).uE)('<h1 id="java中注解的使用" tabindex="-1"><a class="header-anchor" href="#java中注解的使用" aria-hidden="true">#</a> Java中注解的使用</h1><p>注解的概述就不用多说了，这里记录了遇到的问题</p><ol><li><p>如果需要在注解中，定义数组属性的时候，必须是特定的那些，比如</p><blockquote><p>String,int,char...</p></blockquote><p>而不能是自定义的类属性，比如自己定义的一个类User</p></li><li><p>如果想要使用反射机制，获取到某个自定义注解中的属性值，那么一定要保证<code>@Retention(RetentionPolicy.RUNTIME)</code>，否则是获取不到的</p></li></ol><h2 id="自定义注解的使用" tabindex="-1"><a class="header-anchor" href="#自定义注解的使用" aria-hidden="true">#</a> 自定义注解的使用</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Retention</span><span class="token punctuation">(</span><span class="token class-name">RetentionPolicy</span><span class="token punctuation">.</span>RUNTIME<span class="token punctuation">)</span>\n<span class="token annotation punctuation">@Target</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>TYPE<span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>FIELD<span class="token punctuation">,</span><span class="token class-name">ElementType</span><span class="token punctuation">.</span>METHOD<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token annotation punctuation">@interface</span> <span class="token class-name">AuroraAnnotation</span> <span class="token punctuation">{</span>\n    <span class="token class-name">String</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">String</span> <span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token string">&quot;aurora&quot;</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">int</span> <span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">default</span> <span class="token number">23</span><span class="token punctuation">;</span>\n\n    <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token function">habits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@AuroraAnnotation</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;UserClass&quot;</span><span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">,</span>habits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;noHabit&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;video&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>\n\n    <span class="token keyword">private</span> <span class="token keyword">int</span> age<span class="token punctuation">;</span>\n\n    <span class="token annotation punctuation">@AuroraAnnotation</span><span class="token punctuation">(</span>name <span class="token operator">=</span> <span class="token string">&quot;getAuroraName&quot;</span><span class="token punctuation">,</span>age <span class="token operator">=</span> <span class="token number">12</span><span class="token punctuation">,</span>habits <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;coding&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;computer&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;theme&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getAuroraName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> name<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n\n    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getF</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token number">12</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>测试</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">AuroraTest</span> <span class="token punctuation">{</span>\n\n    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>\n        <span class="token class-name">Class</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> userClass <span class="token operator">=</span> <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span><span class="token string">&quot;xyz.xcye.myannotation.User&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n        <span class="token class-name">Method</span><span class="token punctuation">[</span><span class="token punctuation">]</span> methods <span class="token operator">=</span> userClass<span class="token punctuation">.</span><span class="token function">getMethods</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Method</span> method <span class="token operator">:</span> methods<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token class-name">String</span> methodName <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token class-name">AuroraAnnotation</span> annotation <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">AuroraAnnotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n            <span class="token keyword">boolean</span> isAuroraAnnotation <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">isAnnotationPresent</span><span class="token punctuation">(</span><span class="token class-name">AuroraAnnotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>isAuroraAnnotation<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;methodName = &quot;</span> <span class="token operator">+</span> methodName<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token class-name">AuroraAnnotation</span> auroraAnnotation <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">getAnnotation</span><span class="token punctuation">(</span><span class="token class-name">AuroraAnnotation</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">int</span> age <span class="token operator">=</span> auroraAnnotation<span class="token punctuation">.</span><span class="token function">age</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token class-name">String</span> name <span class="token operator">=</span> auroraAnnotation<span class="token punctuation">.</span><span class="token function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> habits <span class="token operator">=</span> auroraAnnotation<span class="token punctuation">.</span><span class="token function">habits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">String</span> habit <span class="token operator">:</span> habits<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>name <span class="token operator">+</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">+</span> age <span class="token operator">+</span> <span class="token string">&quot; : &quot;</span> <span class="token operator">+</span> habit<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><p>运行结果</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>methodName <span class="token operator">=</span> getAuroraName\ngetAuroraName <span class="token operator">:</span> <span class="token number">12</span> <span class="token operator">:</span> coding\ngetAuroraName <span class="token operator">:</span> <span class="token number">12</span> <span class="token operator">:</span> computer\ngetAuroraName <span class="token operator">:</span> <span class="token number">12</span> <span class="token operator">:</span> theme\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>',10),t={},o=(0,a(83744).Z)(t,[["render",function(n,s){return p}]])}}]);