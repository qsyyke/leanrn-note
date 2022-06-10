"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5975],{5109:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-e28feddc",path:"/linux/RPM%E5%8C%85%E7%AE%A1%E7%90%86.html",title:"Linux的rpm包管理和yum使用",lang:"en-US",frontmatter:{date:"2021/12/20 15:05",tag:["linux","rpm","yum"],title:"Linux的rpm包管理和yum使用",categories:["rpm","linux"]},excerpt:"",headers:[{level:2,title:"rpm",slug:"rpm",children:[{level:3,title:"常用命令",slug:"常用命令",children:[]},{level:3,title:"卸载rpm程序",slug:"卸载rpm程序",children:[]},{level:3,title:"安装rpm包",slug:"安装rpm包",children:[]}]},{level:2,title:"yum",slug:"yum",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},24640:(s,n,a)=>{a.r(n),a.d(n,{default:()=>p});const e=(0,a(66252).uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>rpm</code>用于互联网下载包的打包及安装工具，它包含在某些 Linux 分发版中。它生成具有.RPM 扩展名的文件。RPM是RedHat Package Manager（RedHat 软件包管理工具）的缩写，类似 windows 的 setup.exe，这一文件格式名称虽然打上了RedHat 的标志，但理念是通用的。</p><p>Linux 的分发版本都有采用（suse,redhat, centos 等等），可以算是公认的行业标准了</p></div><h2 id="rpm" tabindex="-1"><a class="header-anchor" href="#rpm" aria-hidden="true">#</a> rpm</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> –qa <span class="token punctuation">[</span> <span class="token operator">|</span> <span class="token function">grep</span> xxx<span class="token punctuation">]</span> <span class="token comment"># 查询已安装程序列表</span>\n\n<span class="token punctuation">[</span>root@qsyyke ~<span class="token punctuation">]</span><span class="token comment"># rpm -qa | grep firefox</span>\nfirefox-60.2.2-1.el7.centos.x86_64\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><blockquote><p>安装包分析</p><p>firefox-60.2.2-1.el7.centos.x86_64</p><p><code>firefox</code> : 安装程序的名字</p><p><code>60.2.2-1</code> : 安装的firefox的版本号</p><p><code>el7.centos.x86_64</code> : 使用的操作系统，如果是通用，也就是32位和64位都可以使用的话，那这里就是<code>noarch</code></p></blockquote><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令" aria-hidden="true">#</a> 常用命令</h3><ul><li><p>rpm -qa</p><p>查询所有的安装程序</p></li><li><p>rpm -q</p><p>查询软件包是否安装</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -q firefox <span class="token comment"># 如果以及安装，会返回此安装程序信息</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>rpm -qi</p><p>查询软件包信息</p><details class="custom-container details"><summary>点击查看</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@qsyyke ~<span class="token punctuation">]</span><span class="token comment"># rpm -qi firefox</span>\nName        <span class="token builtin class-name">:</span> firefox\nVersion     <span class="token builtin class-name">:</span> <span class="token number">60.2</span>.2\nRelease     <span class="token builtin class-name">:</span> <span class="token number">1</span>.el7.centos\nArchitecture: x86_64\nInstall Date: <span class="token number">2021</span>年12月16日 星期四 <span class="token number">15</span>时25分58秒\nGroup       <span class="token builtin class-name">:</span> Unspecified\nSize        <span class="token builtin class-name">:</span> <span class="token number">216144933</span>\nLicense     <span class="token builtin class-name">:</span> MPLv1.1 or GPLv2+ or LGPLv2+\nSignature   <span class="token builtin class-name">:</span> RSA/SHA256, <span class="token number">2018</span>年10月09日 星期二 <span class="token number">20</span>时51分59秒, Key ID 24c6a8a7f4a80eb5\nSource RPM  <span class="token builtin class-name">:</span> firefox-60.2.2-1.el7.centos.src.rpm\nBuild Date  <span class="token builtin class-name">:</span> <span class="token number">2018</span>年10月09日 星期二 08时33分46秒\nBuild Host  <span class="token builtin class-name">:</span> x86-01.bsys.centos.org\nRelocations <span class="token builtin class-name">:</span> <span class="token punctuation">(</span>not relocatable<span class="token punctuation">)</span>\nPackager    <span class="token builtin class-name">:</span> CentOS BuildSystem <span class="token operator">&lt;</span>http://bugs.centos.org<span class="token operator">&gt;</span>\nVendor      <span class="token builtin class-name">:</span> CentOS\nURL         <span class="token builtin class-name">:</span> https://www.mozilla.org/firefox/\nSummary     <span class="token builtin class-name">:</span> Mozilla Firefox Web browser\nDescription <span class="token builtin class-name">:</span>\nMozilla Firefox is an open-source web browser, designed <span class="token keyword">for</span> standards\ncompliance, performance and portability.\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div></details></li><li><p>rpm -ql</p><p>查询软件包中的文件</p><details class="custom-container details"><summary>点击查看</summary><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@qsyyke ~<span class="token punctuation">]</span><span class="token comment"># rpm -ql firefox</span>\n/etc/firefox\n/etc/firefox/pref\n/usr/bin/firefox\n/usr/lib64/firefox\n/usr/lib64/firefox/LICENSE\n/usr/lib64/firefox/application.ini\n/usr/lib64/firefox/browser/blocklist.xml\n/usr/lib64/firefox/browser/chrome\n/usr/lib64/firefox/browser/chrome.manifest\n/usr/lib64/firefox/browser/chrome/icons\n/usr/lib64/firefox/browser/chrome/icons/default\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>在这里面我们可以看到此<code>firefox</code>程序的一些配置文件等路径</p></details></li><li><p>rpm -qf</p><p>查询某个文件属于那个安装程序的</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@qsyyke ~<span class="token punctuation">]</span><span class="token comment"># rpm -qf /etc/passwd</span>\nsetup-2.8.71-10.el7.noarch\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h3 id="卸载rpm程序" tabindex="-1"><a class="header-anchor" href="#卸载rpm程序" aria-hidden="true">#</a> 卸载rpm程序</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -e RPM 包的名称\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>因为可能我们要删除的这个rpm包是另一个rpm包的依赖，所以我们卸载的时候，可能会报错，这个时候，可以增加<code>--nodeps</code>选项，就可以强制卸载某个rpm包</p></div><h3 id="安装rpm包" tabindex="-1"><a class="header-anchor" href="#安装rpm包" aria-hidden="true">#</a> 安装rpm包</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">rpm</span> -ivh RPM包全路径名称\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><blockquote><p>参数说明</p><p><code>i</code>: install 安装</p><p><code>v</code>: verbose 提示</p><p><code>h</code>: hash 进度条</p></blockquote><h2 id="yum" tabindex="-1"><a class="header-anchor" href="#yum" aria-hidden="true">#</a> yum</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>Yum</code>是一个 Shell 前端软件包管理器。基于 RPM 包管理，能够从指定的服务器自动下载 RPM 包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包。</p></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>yum list<span class="token operator">|</span><span class="token function">grep</span> xx 软件列表 <span class="token comment">#查询 yum 服务器是否有需要安装的软件</span>\n\nyum <span class="token function">install</span> xxx <span class="token comment"># 下载安装</span>\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',15),l={},p=(0,a(83744).Z)(l,[["render",function(s,n){return e}]])}}]);