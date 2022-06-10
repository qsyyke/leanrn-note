"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3467],{921:(s,e,a)=>{a.r(e),a.d(e,{data:()=>l});const l={key:"v-58c6d026",path:"/mysql/issue.html",title:"mysql问题集合",lang:"en-US",frontmatter:{date:"2022/3/10 10:46"},excerpt:"",headers:[{level:2,title:"允许远程链接",slug:"允许远程链接",children:[]},{level:2,title:"mac启动mysql服务",slug:"mac启动mysql服务",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},14327:(s,e,a)=>{a.r(e),a.d(e,{default:()=>r});const l=(0,a(66252).uE)('<h1 id="mysql问题集合" tabindex="-1"><a class="header-anchor" href="#mysql问题集合" aria-hidden="true">#</a> mysql问题集合</h1><h2 id="允许远程链接" tabindex="-1"><a class="header-anchor" href="#允许远程链接" aria-hidden="true">#</a> 允许远程链接</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code># 错误\nERROR 1130: Host &#39;xxx&#39; is not allowed to connect to this MySQL server\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>解决</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>use mysql;\n\nupdate user set host = &#39;%&#39; where user = &#39;root&#39;;\n\n# 一定要执行下面这步\nflush privileges; \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="mac启动mysql服务" tabindex="-1"><a class="header-anchor" href="#mac启动mysql服务" aria-hidden="true">#</a> mac启动mysql服务</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> /usr/local/mysql/support-files/mysql.server start\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>非常感谢[mac怎么启动mysql服务](https://www.yisu.com/ask/864.html#:~:text=在mac中启动mysql服务的方法 1.首先，在mac桌面侧边栏中点击“应用程序”，选择“实用工具”选项； 2.在实用工具中，双击打开“终端”应用程序； 3.进入到终端应用程序后，使用以下命令启动mysql服务；,sudo %2Fusr%2F local %2Fmysql%2Fsupport-files%2Fmysql.server start)</p></blockquote>',8),n={},r=(0,a(83744).Z)(n,[["render",function(s,e){return l}]])}}]);