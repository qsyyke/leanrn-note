"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7964],{53108:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-d991d4fa",path:"/issue/jackJson.html",title:"JackJson",lang:"en-US",frontmatter:{},excerpt:"",headers:[],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},45662:(n,s,a)=>{a.r(s),a.d(s,{default:()=>l});const e=(0,a(66252).uE)('<h1 id="jackjson" tabindex="-1"><a class="header-anchor" href="#jackjson" aria-hidden="true">#</a> JackJson</h1><p>自定义过滤字段，如果需要某个字段不展示，则在该字段上，添加<code>@JsonIgnore</code>注解</p><p>但是使用上面这种方式的话，如果我们使用<code>openFeign</code>远程调用服务，就会出现一个错误</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token class-name">No</span> fallback setter<span class="token operator">/</span>field defined <span class="token keyword">for</span> creator property &#39;&#39;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>可以使用另一个注解</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>@JsonIgnoreProperties(value = {&quot;code&quot;,&quot;message&quot;})\n@Data\n@Builder\npublic class ModifyResult {\n    /**\n     * 影响的行数\n     */\n    private int affectedRows;\n\n    /**\n     * 是否成功\n     */\n    private boolean success;\n\n    /**\n     * 成功或者失败的消息\n     */\n    //@JsonIgnore\n    private String message;\n\n    /**\n     * 响应码\n     */\n    private int code;\n\n    /**\n     * 主键uid\n     */\n    private long uid;\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><p>使用此注解之后，在<code>value</code>中配置我们需要过滤的字段，远程调用的时候，也不会出错</p>',7),r={},l=(0,a(83744).Z)(r,[["render",function(n,s){return e}]])}}]);