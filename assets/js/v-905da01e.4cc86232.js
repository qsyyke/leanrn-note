"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7697],{58921:(n,s,a)=>{a.r(s),a.d(s,{data:()=>p});const p={key:"v-905da01e",path:"/datastructure/%E6%8E%92%E5%BA%8F/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F.html",title:"希尔排序",lang:"en-US",frontmatter:{date:"2021/10/2 8:37"},excerpt:"",headers:[{level:2,title:"代码实现",slug:"代码实现",children:[{level:3,title:"希尔交换排序",slug:"希尔交换排序",children:[]},{level:3,title:"希尔移位排序",slug:"希尔移位排序",children:[]}]},{level:2,title:"算法比较",slug:"算法比较",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},13874:(n,s,a)=>{a.r(s),a.d(s,{default:()=>r});var p=a(66252);const t=(0,p.uE)('<h1 id="希尔排序" tabindex="-1"><a class="header-anchor" href="#希尔排序" aria-hidden="true">#</a> 希尔排序</h1><p>算法思想</p><blockquote><p>希尔排序是希尔（Donald Shell）于1959年提出的一种排序算法。希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序。</p></blockquote><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>希尔排序也是插入排序的算法，是直接插入排序算法的增强版，在直接插入排序中，如果一个数组为<code>int[] arr = {1,3,5,6,7,8,0}</code>，那么现在该数组0之前的元素都是有序的，如果使用直接插入排序的话，那么直接插入排序，也需要循环<code>arr.length -1</code>次才能到0位置，对这个0进行重新排序，这个也是直接插入排序的弊端，所以希尔排序就是解决这个问题，先把这数组分成<code>arr.length / 2</code>个数组(<code>[1,6,0],[3,7],[5,8]</code>)，然后对分出的数组进行直接插入排序，那么经过这一步骤之后，0就会往前，这个就是希尔排序的思想</p><blockquote><p>希尔排序是把记录按下标的一定增量分组，对每组使用直接插入排序算法排序；随着增量逐渐减少，每组包含的关键词越来越多，当增量减至1时，整个文件恰被分成一组，算法便终止</p></blockquote></div>',4),e=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211023102541881.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),o=(0,p._)("p",null,[(0,p._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211023102603244.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),c=(0,p.uE)('<h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><p>希尔排序的代码实现，有两种方式</p><ul><li>希尔交换排序</li><li>希尔移位排序</li></ul><blockquote><p>希尔交换排序花费的时间，比直接插入排序的时间还多</p></blockquote><h3 id="希尔交换排序" tabindex="-1"><a class="header-anchor" href="#希尔交换排序" aria-hidden="true">#</a> 希尔交换排序</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">shell</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">int</span> temp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> gap <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> gap <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> gap <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> i <span class="token operator">-</span> gap<span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">-=</span> gap<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> gap<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j <span class="token operator">+</span> gap<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                    arr<span class="token punctuation">[</span>j <span class="token operator">+</span> gap<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>上面已经说了，希尔交换排序的时间，比直接插入排序的时间还多，这是因为，在算法的内部中，存在冒泡排序的算法，所以他所需要的时间，也就更多</p></div><h3 id="希尔移位排序" tabindex="-1"><a class="header-anchor" href="#希尔移位排序" aria-hidden="true">#</a> 希尔移位排序</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">shellMove</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> gap <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> gap <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> gap <span class="token operator">/=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> gap<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">int</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>\n            <span class="token keyword">int</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>i <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">-</span> gap <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> temp <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>j <span class="token operator">-</span> gap<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">-</span>gap<span class="token punctuation">]</span><span class="token punctuation">;</span>\n                    j <span class="token operator">-=</span> gap<span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="算法比较" tabindex="-1"><a class="header-anchor" href="#算法比较" aria-hidden="true">#</a> 算法比较</h2><p>设置一个10万长度的随机数组，对他们进行比较</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>选择排序时间<span class="token operator">:</span> <span class="token number">3345</span>\n冒泡排序时间<span class="token operator">:</span> <span class="token number">22979</span>\n插入排序时间<span class="token operator">:</span> <span class="token number">763</span>\n希尔交换法时间<span class="token operator">:</span> <span class="token number">7185</span>\n希尔移位法时间<span class="token operator">:</span> <span class="token number">23</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',12),l={},r=(0,a(83744).Z)(l,[["render",function(n,s){return(0,p.wg)(),(0,p.iD)(p.HY,null,[t,e,o,c],64)}]])}}]);