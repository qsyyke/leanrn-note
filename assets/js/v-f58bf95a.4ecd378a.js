"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1966],{14416:(e,n,o)=>{o.r(n),o.d(n,{data:()=>c});const c={key:"v-f58bf95a",path:"/nginx/nginx%E5%91%BD%E4%BB%A4%E8%A1%8C%E5%8F%82%E6%95%B0.html",title:"nginx中的命令行参数",lang:"en-US",frontmatter:{date:"2022/1/24 12:20",tag:["nginx"]},excerpt:"",headers:[],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},19943:(e,n,o)=>{o.r(n),o.d(n,{default:()=>i});const c=(0,o(66252).uE)('<h1 id="nginx中的命令行参数" tabindex="-1"><a class="header-anchor" href="#nginx中的命令行参数" aria-hidden="true">#</a> nginx中的命令行参数</h1><p>我们常用的参数有<code>-t -s</code>等</p><p>但是除此以外，还有其他的命令行参数</p><ul><li><p>-c file</p><blockquote><p>使用某个文件，替换默认配置文件</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@qsyyke-host conf<span class="token punctuation">]</span><span class="token comment"># ../sbin/nginx -c /usr/local/nginx/conf/nginx_fuben2.conf</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></blockquote></li><li><p><code>-p prefix</code></p><blockquote><p>设置nginx路径前缀，即保存服务器文件的目录（默认值为<code>/usr/local/nginx</code>）</p></blockquote></li><li><p><code>-q</code></p><blockquote><p>在配置测试期间抑制非错误消息。</p></blockquote></li><li><p><code>-t</code></p><blockquote><p>测试配置文件：nginx检查配置的语法是否正确，然后尝试打开配置中引用的文件。</p></blockquote></li><li><p><code>-T</code></p><blockquote><p>与 相同<code>-t</code>，但另外将配置文件转储到标准输出 (1.9.2)。</p></blockquote></li><li></li></ul>',4),l={},i=(0,o(83744).Z)(l,[["render",function(e,n){return c}]])}}]);