"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2891],{37985:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-3210258c",path:"/vue/vue3/readmd.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"迁移",slug:"迁移",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},96580:(n,s,e)=>{e.r(s),e.d(s,{default:()=>l});const a=(0,e(66252).uE)('<h2 id="迁移" tabindex="-1"><a class="header-anchor" href="#迁移" aria-hidden="true">#</a> 迁移</h2><p>在setup中使用ref做响应式的时候，一定要有一个方法对props的值做修改，否则不会做到响应式</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;\n// This starter template is using Vue 3 &lt;script setup&gt; SFCs\n// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup\nimport HelloWorld from &#39;./components/HelloWorld.vue&#39;\n\nexport default {\n  components: {\n    HelloWorld\n  },\n  data() {\n    return {\n      auroraName: &quot;&quot;\n    }\n  }\n}\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;img alt=&quot;Vue logo&quot; src=&quot;./assets/logo.png&quot; /&gt;\n  &lt;input type=&quot;text&quot; v-model=&quot;auroraName&quot; &gt;\n  &lt;HelloWorld :user=&quot;auroraName&quot; /&gt;\n&lt;/template&gt;\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;\nimport { ref, onMounted, watch, toRefs } from &#39;vue&#39;\nexport default {\n  props: {\n    user: {\n      type: String,\n      required: true\n    }\n  },\n  setup(props) {\n    const repositories = ref([])\n    const getUserRepositories = async () =&gt; {\n      repositories.value = props.user\n    }\n\n    return {\n      repositories,\n      getUserRepositories\n    }\n  },\n}\n&lt;/script&gt;\n\n&lt;template&gt;\n  &lt;h1 class=&quot;aurora&quot;&gt;这是直接传递的{{user}}&lt;/h1&gt;\n  &lt;h2 :get=&quot;getUserRepositories()&quot;&gt;这是SetUp的值{{repositories}}&lt;/h2&gt;\n&lt;/template&gt;\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>在子组件中，如果我们只<code>{repositories}</code>，那么他不会做到响应式，我们必须要调用<code>getUserRepositories()</code>这个函数对repositories的值做修改</p>',5),r={},l=(0,e(83744).Z)(r,[["render",function(n,s){return a}]])}}]);