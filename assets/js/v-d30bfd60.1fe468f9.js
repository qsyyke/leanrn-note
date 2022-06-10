"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6658],{79004:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-d30bfd60",path:"/datastructure/search/binary.html",title:"二分查找",lang:"en-US",frontmatter:{date:"2021/10/23 17:09",keyword:"二分查找,Java二分查找,Java差值查找,Java数据结构,数据结构,差值查找,Java二分查找实现",description:"插值查找算法类似于二分查找，不同的是插值查找每次从自适应mid处开始查找。将折半查找中的求mid 索引的公式 , low 表示左边索引left, high表示右边索引right.key 就是前面我们讲的  findVal差值查找，其就是解决二分法，对于数组元素比较均匀，如1到100的元素，其可以很快的找到(`经过测试，一次就可以找打这个位置`)"},excerpt:"",headers:[{level:2,title:"思想",slug:"思想",children:[]},{level:2,title:"代码",slug:"代码",children:[]},{level:2,title:"问题",slug:"问题",children:[]},{level:2,title:"差值查找",slug:"差值查找",children:[{level:3,title:"代码实现",slug:"代码实现",children:[]}]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},96753:(n,s,a)=>{a.r(s),a.d(s,{default:()=>e});const p=(0,a(66252).uE)('<h1 id="二分查找" tabindex="-1"><a class="header-anchor" href="#二分查找" aria-hidden="true">#</a> 二分查找</h1><p>在使用二分查找的时候，一定要保证数组是一个有序的，无论是正序还是倒叙都行，否则的话，就不能使用二分查找</p><h2 id="思想" tabindex="-1"><a class="header-anchor" href="#思想" aria-hidden="true">#</a> 思想</h2><p>假设一个有序数组</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>查找的值为<code>60</code>，那么其执行的过程就是</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><ol><li>先找出该有序数组的中间值<code>56</code></li><li>使用查找值<code>60</code>和中间值<code>56</code>进行比较，如果查找值比中间值大，那么使用递归，向右进行查找，这个时候的中间值就为<code>87</code></li><li>使用查找值<code>60</code>和中间值<code>56</code>进行比较，如果查找值比中间值小，那么使用递归，向左进行查找，这个时候的中间值就为<code>10</code></li><li>以此类推，使用递归</li></ol></div><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span><span class="token number">56</span><span class="token punctuation">,</span><span class="token number">60</span><span class="token punctuation">,</span><span class="token number">87</span><span class="token punctuation">,</span><span class="token number">89</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> binarySearch <span class="token operator">=</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> middleIndex <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> middle <span class="token operator">=</span> arr<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//在右边进行查找</span>\n        <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> middleIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>right<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> left<span class="token punctuation">,</span>middleIndex <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> middleIndex<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><blockquote><p>因为使用的是递归，所以需要设置退出的条件，可以分为两种</p><ul><li>查找到值，直接返回middle</li><li>没有查找到值</li></ul><p><code>如果我们需要查找的值，在该数组中，并不存在，那么就会使用递归，递归一遍该数组中的元素，所以这个的判断条件就是 left &gt; right</code></p><blockquote><p>如果查找值，比中间值大，那么left值，就会一直 <code>+ 1</code>，如果比中间值小，那么<code>right</code>值，就会一直<code> - 1</code>，所以当<code>left &gt; right</code>的时候，表示已经查找完整个数组了</p></blockquote></blockquote><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><p>使用这个二分查找，如果对于一个连续的数组，比如一个从1到100的数组，我们需要查找的值，是100，或者是1，那么使用二分查找，其需要执行几次，第一次找到55，第二次在找到中间值，然后...</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>所以对于这种数据量较大，关键字(<code>数组内的元素</code>)分布比较均匀的查找表来说，采用插值查找, 速度较快.</p><blockquote><p><code>关键字分布不均匀的情况下，该方法不一定比折半查找要好</code></p></blockquote></div><h2 id="差值查找" tabindex="-1"><a class="header-anchor" href="#差值查找" aria-hidden="true">#</a> 差值查找</h2><p>差值查找，其就是解决二分法，对于数组元素比较均匀，如1到100的元素，其可以很快的找到(<code>经过测试，一次就可以找打这个位置</code>)</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>差值查找每次从<code>自适应</code>middleIndex处开始查找，能够很快就找到</p></div><blockquote><ul><li>重新定义中间值下标公式 <ul><li>二分法 <code>(left + right) /2</code></li><li>差值查找<code>left + (right - left) * (value - arr[left]) / (arr[right] - arr[left])</code></li></ul></li></ul></blockquote><h3 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">insertSearch</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">,</span> <span class="token keyword">int</span> left<span class="token punctuation">,</span> <span class="token keyword">int</span> right<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;----差值查找----&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;</span> right <span class="token operator">||</span> value <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">||</span> value <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//如果需要查找的值，比最小还小或者是比最大还大，那么直接返回</span>\n        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n\n    <span class="token comment">//这是获取下标</span>\n    <span class="token keyword">int</span> middleIndex <span class="token operator">=</span> left <span class="token operator">+</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>value <span class="token operator">-</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">-</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">int</span> middleValue <span class="token operator">=</span> arr<span class="token punctuation">[</span>middleIndex<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&gt;</span> middleValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//往右边进行查找</span>\n        <span class="token keyword">return</span> <span class="token function">insertSearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>right<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">&lt;</span> middleValue<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">//往左边进行查找</span>\n        <span class="token keyword">return</span> <span class="token function">insertSearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>left<span class="token punctuation">,</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>\n        <span class="token comment">//查找到这个值</span>\n        <span class="token keyword">return</span> middleIndex<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>',19),t={},e=(0,a(83744).Z)(t,[["render",function(n,s){return p}]])}}]);