"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3508],{89063:(n,e,s)=>{s.r(e),s.d(e,{data:()=>a});const a={key:"v-70412eb7",path:"/issue/utils.html",title:"好用工具",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"下划线转驼峰",slug:"下划线转驼峰",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},90750:(n,e,s)=>{s.r(e),s.d(e,{default:()=>t});const a=(0,s(66252).uE)('<h1 id="好用工具" tabindex="-1"><a class="header-anchor" href="#好用工具" aria-hidden="true">#</a> 好用工具</h1><h2 id="下划线转驼峰" tabindex="-1"><a class="header-anchor" href="#下划线转驼峰" aria-hidden="true">#</a> 下划线转驼峰</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>public static void main(String[] args) {\n    String s = &quot;show_comment&quot;;\n    String prefixStr = &quot;is_&quot;;\n\n    // 先去除is_\n    if (s.startsWith(prefixStr)) {\n        s = s.substring(prefixStr.length());\n    }\n    s = s.toLowerCase();\n    Pattern compile = Pattern.compile(&quot;_[a-z]&quot;);\n    Matcher matcher = compile.matcher(s);\n    StringBuffer sb = new StringBuffer();\n    while(matcher.find()) {\n        matcher.appendReplacement(sb,  matcher.group(0).toUpperCase().replace(&quot;_&quot;,&quot;&quot;));\n    }\n    matcher.appendTail(sb);\n\n    System.out.println(sb.toString());\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>',3),r={},t=(0,s(83744).Z)(r,[["render",function(n,e){return a}]])}}]);