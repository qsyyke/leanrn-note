"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4917],{20324:(n,a,s)=>{s.r(a),s.d(a,{data:()=>e});const e={key:"v-54debf04",path:"/datastructure/%E6%8E%92%E5%BA%8F/READMD.html",title:"排序",lang:"en-US",frontmatter:{date:"2021/10/18",description:"排序也称排序算法(Sort Algorithm)，排序是将一组数据，依指定的顺序进行排列的过程。内部排序指将需要处理的所有数据都加到内部存储器中进行排序。外部排序法：数据量过大，无法全部加载到内存中，需要借助外部存储进行排序"},excerpt:"",headers:[{level:2,title:"时间复杂度",slug:"时间复杂度",children:[{level:3,title:"时间复杂度注意",slug:"时间复杂度注意",children:[]},{level:3,title:"时间复杂度概述",slug:"时间复杂度概述",children:[]},{level:3,title:"平均时间复杂度和最坏时间复杂度",slug:"平均时间复杂度和最坏时间复杂度",children:[]}]},{level:2,title:"算法的空间复杂度",slug:"算法的空间复杂度",children:[]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},89529:(n,a,s)=>{s.r(a),s.d(a,{default:()=>S});var e=s(66252);const o=(0,e.uE)('<h1 id="排序" tabindex="-1"><a class="header-anchor" href="#排序" aria-hidden="true">#</a> 排序</h1><p>排序也称排序算法(Sort Algorithm)，排序是将一组数据，依指定的顺序进行排列的过程。</p><p>排序可以分为两类</p><ul><li>内部排序: 指将需要处理的所有数据都加载\v到内部存储器中进行排序。</li><li>外部排序法： 数据量过大，无法全部加载到内\v存中，需要借助外部存储进行 排序。</li></ul><p>内部排序可以分为8大类，分别是</p><ul><li>插入排序 <ul><li>直接插入排序</li><li>希尔排序</li></ul></li><li>选择排序 <ul><li>简单选择排序</li><li>堆排序</li></ul></li><li>交换排序 <ul><li>冒泡排序</li><li>快速排序</li></ul></li><li>归并排序</li><li>基数排序</li></ul>',6),t=(0,e._)("details",{class:"custom-container details"},[(0,e._)("summary",null,"view"),(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211018220557729.png?x-oss-process=style/pictureProcess1",data:"aurora"})])],-1),l=(0,e._)("h2",{id:"时间复杂度",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#时间复杂度","aria-hidden":"true"},"#"),(0,e.Uk)(" 时间复杂度")],-1),p=(0,e._)("p",null,"一个算法花费的时候和他执行的次数成正比，执行的次数多，所花费的时间就多",-1),c=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"TIP"),(0,e._)("p",null,[(0,e.Uk)("一个算法中的语句执行次数称为语句频度或时间频度，记为"),(0,e._)("code",null,"T(n)")])],-1),i=(0,e._)("p",null,"比如下面的两个程序，他们之间的结果是一样的，但是他们的时间频度是完全不一样的",-1),r=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211018223626997.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),u=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("计算从1加到100，因为最终for循环会执行101此，所以时间频度"),(0,e._)("code",null,"T(n) = 101")])],-1),d=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211018223729486.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),k=(0,e._)("blockquote",null,[(0,e._)("p",null,[(0,e.Uk)("这个的时间频度"),(0,e._)("code",null,"T(n) = 1"),(0,e.Uk)("，因为只需要执行一次，就可以得出最终结果")])],-1),b=(0,e._)("h3",{id:"时间复杂度注意",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#时间复杂度注意","aria-hidden":"true"},"#"),(0,e.Uk)(" 时间复杂度注意")],-1),m=(0,e._)("h4",{id:"忽略常数项",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#忽略常数项","aria-hidden":"true"},"#"),(0,e.Uk)(" 忽略常数项")],-1),h=(0,e._)("blockquote",null,[(0,e._)("ol",null,[(0,e._)("li",null,"忽略常数项")])],-1),g=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211018225238212.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),v=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"TIP"),(0,e._)("p",null,"2n+20 和 2n 随着n 变大，执行曲线无限接近, 20可以忽略 3n+10 和 3n 随着n 变大，执行曲线无限接近, 10可以忽略"),(0,e._)("p",null,[(0,e._)("code",null,"如果有常数项的话，那么在计算时间复杂度的时候，我们可以忽略")])],-1),y=(0,e._)("blockquote",null,[(0,e._)("ol",{start:"2"},[(0,e._)("li",null,"忽略低次项")])],-1),x=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211018230214316.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),_=(0,e._)("div",{class:"custom-container tip"},[(0,e._)("p",{class:"custom-container-title"},"TIP"),(0,e._)("p",null,"2n^2+3n+10 和 2n^2 随着n 变大, 执行曲线无限接近, 可以忽略 3n+10 n^2+5n+20 和 n^2 随着n 变大,执行曲线无限接近, 可以忽略 5n+20"),(0,e._)("p",null,[(0,e._)("code",null,"这里的忽略低次项，是指通过+号链接的算式，如果是*，是不能被忽略的")])],-1),f=(0,e._)("blockquote",null,[(0,e._)("ol",{start:"3"},[(0,e._)("li",null,"忽略系数")])],-1),q=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211018230443859.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),j=(0,e.uE)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>随着n值变大，5n^2+7n 和 3n^2 + 2n ，执行曲线重合, 说明 这种情况下, 5和3可以忽略。 而n^3+5n 和 6n^3+4n ，执行曲线分离，说明多少次方式关键</p></div><h3 id="时间复杂度概述" tabindex="-1"><a class="header-anchor" href="#时间复杂度概述" aria-hidden="true">#</a> 时间复杂度概述</h3><p>一般情况下，算法中的基本操作语句的重复执行次数是问题规模n的某个函数，用<code>T(n)</code>表示，若有某个辅助函数f(n)，使得当n趋近于无穷大时，<code>T(n) / f(n)</code> 的极限值为不等于零的常数，则称f(n)是T(n)的同数量级函数。记作<code>T(n)=Ｏ( f(n))</code>，称<code>Ｏ( f(n))</code>为算法的<code>渐进时间复杂度</code>，简称<code>时间复杂度</code>。</p><p><code>T(n)</code>不同，但时间复杂度可能相同。 如：<code>T(n)=n²+7n+6</code>与<code>T(n)=3n²+2n+2</code>它们的T(n) 不同，但时间复杂度相同，都为O(n²)。</p><blockquote><p>因为这里忽略系数和常数项，低次项，所以他们最终都为<code>T(n) =n^2 </code></p></blockquote><h4 id="计算时间复杂度的方法" tabindex="-1"><a class="header-anchor" href="#计算时间复杂度的方法" aria-hidden="true">#</a> 计算时间复杂度的方法</h4><div class="custom-container tip"><p class="custom-container-title">TIP</p><ul><li><p>用常数1代替运行时间中的所有加法常数</p><blockquote><p>T(n)=n²+7n+6 =&gt; T(n)=n²+7n+1</p></blockquote></li><li><p>修改后的运行次数函数中，只保留最高阶项</p><blockquote><p>T(n)=n²+7n+1 =&gt; T(n) = n²</p></blockquote></li><li><p>去除最高阶项的系数</p><blockquote><p>T(n) = n² =&gt; T(n) = n² =&gt; O(n²)</p></blockquote></li></ul></div><h4 id="常见的时间复杂度" tabindex="-1"><a class="header-anchor" href="#常见的时间复杂度" aria-hidden="true">#</a> 常见的时间复杂度</h4><h5 id="常数阶o-1" tabindex="-1"><a class="header-anchor" href="#常数阶o-1" aria-hidden="true">#</a> 常数阶O(1)</h5><blockquote><p>无论代码执行了多少行，只要是<code>没有循环等复杂结构</code>，那这个代码的时间复杂度就都是O(1)</p></blockquote><details class="custom-container details"><summary>view</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token operator">++</span> i<span class="token punctuation">;</span>\nj<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token keyword">int</span> m <span class="token operator">=</span> i <span class="token operator">+</span> j<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></details><blockquote><p>无论代码有多长，只要他们中没有循环等操作，尽管代码有几十万行，那么他们的时间复杂度最终也是<code>O(1)</code></p></blockquote><h5 id="对数阶o-log2n" tabindex="-1"><a class="header-anchor" href="#对数阶o-log2n" aria-hidden="true">#</a> 对数阶O(log2n)</h5><details class="custom-container details"><summary>view</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n<span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\ti <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><p>在while循环里面，每次都将 i 乘以 2，乘完之后，i 距离 n 就越来越近了。</p><p>假设循环x次之后，i就大于2了，此时这个循环就退出了，也就是说 2 的x次方等于n，那么 <code>x = log2n</code>也就是说当循环<code>log2n</code>次以后，这个代码就结束了。因此这个代码的时间复杂度为：<code>O(log2n)</code> 。<code>O(log2n)</code>的这个2 时间上是根据代码变化的，<code>i = i * 3</code> ，则是<code>O(log3n)</code></p><blockquote><p>计算此类时间复杂度的时候，log函数的底数可以看做是 <code>* n</code>的n值</p></blockquote>',17),O=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211019085109841.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),z=(0,e.uE)('<h5 id="线性阶o-n" tabindex="-1"><a class="header-anchor" href="#线性阶o-n" aria-hidden="true">#</a> 线性阶O(n)</h5><details class="custom-container details"><summary>view</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    j <span class="token operator">=</span> i<span class="token punctuation">;</span>\n    j<span class="token operator">++</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></details><blockquote><p>这段代码，for循环里面的代码会执行n遍，因此它消耗的时间是随着n的变化而变化的，因此这类代码都可以用<code>O(n)</code>来表示它的时间复杂度</p></blockquote><h5 id="线性对数阶o-nlog2n" tabindex="-1"><a class="header-anchor" href="#线性对数阶o-nlog2n" aria-hidden="true">#</a> 线性对数阶O(nlog2n)</h5><details class="custom-container details"><summary>view</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>m <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>m <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> m<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>\n    <span class="token keyword">while</span><span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        i <span class="token operator">=</span> i <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><blockquote><p>线性对数阶<code>O(nlog2n)</code>其实非常容易理解，将时间复杂度为<code>O(log2n)</code>的代码循环n遍的话，那么它的时间复杂度就是 <code>n * O(log2n)</code>，也就是了<code>O(nlog2n)</code></p><p>因为while循环里面是一个对数阶</p><p>for循环是一个线性阶，他们相乘也就是一个线性对数阶</p></blockquote><h5 id="平方阶o-n-2" tabindex="-1"><a class="header-anchor" href="#平方阶o-n-2" aria-hidden="true">#</a> 平方阶O(n^2)</h5><details class="custom-container details"><summary>view</summary><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">for</span><span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span> n<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        j <span class="token operator">=</span> i<span class="token punctuation">;</span>\n        j<span class="token operator">++</span>l\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></details><blockquote><p>平方阶<code>O(n²)</code> 就更容易理解了，如果把 O(n) 的代码再嵌套循环一遍，它的时间复杂度就是 O(n²)，这段代码其实就是嵌套了2层n循环，它的时间复杂度就是 O(n<em>n)，即 O(n²) 如果将其中一层循环的n改成m，那它的时间复杂度就变成了 O(m</em>n)</p><p><code>如果全部都是一个for循环的嵌套的话，有几层for循环，那么就把for循环的跳出条件相乘，就可以了</code></p></blockquote><h5 id="立方阶o-n-3" tabindex="-1"><a class="header-anchor" href="#立方阶o-n-3" aria-hidden="true">#</a> 立方阶O(n^3)</h5><blockquote><p>参考上面的O(n²) 去理解就好了，O(n³)相当于三层n循环，其它的类似</p></blockquote><h5 id="k次方阶o-n-k" tabindex="-1"><a class="header-anchor" href="#k次方阶o-n-k" aria-hidden="true">#</a> k次方阶O(n^k)</h5><blockquote><p>参考上面的O(n²) 去理解就好了，O(n³)相当于三层n循环，其它的类似</p></blockquote><h5 id="指数阶o-2-n" tabindex="-1"><a class="header-anchor" href="#指数阶o-2-n" aria-hidden="true">#</a> 指数阶O(2^n)</h5><p>他们之间的图关系为</p>',15),T=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20211019084036464.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),w=(0,e.uE)('<h5 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h5><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>常见的算法时间复杂度由小到大依次为：</p><blockquote><p>Ο(1)＜Ο(log2n)＜Ο(n)＜Ο(nlog2n)＜Ο(n2)＜Ο(n3)＜ Ο(nk) ＜Ο(2n)</p></blockquote><p>随着问题规模n的不断增大，上述时间复杂度不断增大，算法的执行效率越低 <code>应该尽可能避免使用指数阶的算法</code></p></div><h3 id="平均时间复杂度和最坏时间复杂度" tabindex="-1"><a class="header-anchor" href="#平均时间复杂度和最坏时间复杂度" aria-hidden="true">#</a> 平均时间复杂度和最坏时间复杂度</h3><ol><li><p>平均时间复杂度</p><blockquote><p>指所有可能的输入实例均以等概率出现的情况下，该算法的运行时间。</p></blockquote></li><li><p>最坏情况下的时间复杂度称最坏时间复杂度</p><blockquote><p><strong>一般讨论的时间复杂度均是最坏情况下的时间复杂度</strong>。这样做的原因是：最坏情况下的时间复杂度是算法在任何输入实例上运行时间的界限，这就保证了算法的运行时间不会比最坏情况更长</p></blockquote></li></ol><div class="custom-container tip"><p class="custom-container-title">TIP</p><p><code>平均时间复杂度和最坏时间复杂度是否一致，和算法有关</code></p></div><img src="https://ooszy.cco.vin/img/blog-note/image-20211019130244872.png?x-oss-process=style/pictureProcess1" alt="image-20211019130244872" style="zoom:50%;"><h2 id="算法的空间复杂度" tabindex="-1"><a class="header-anchor" href="#算法的空间复杂度" aria-hidden="true">#</a> 算法的空间复杂度</h2><ul><li><p>类似于时间复杂度的讨论，一个算法的空间复杂度(Space Complexity)定义为该算法所耗费的存储空间，它也是问题规模n的函数。</p></li><li><p>空间复杂度(Space Complexity)是对一个算法在运行过程中临时占用存储空间大小的量度。有的算法需要占用的临时工作单元数与解决问题的规模n有关，它随着n的增大而增大，当n较大时，将占用较多的存储单元，例如快速排序和<strong>归并排序算法</strong>,<strong>基数排序</strong>就属于这种情况</p></li><li><p>在做算法分析时，主要讨论的是时间复杂度。<strong>从用户使用体验上看</strong>，<strong>更看重的程序执行的速度</strong>。一些缓存产品(redis, memcache)和算法(基数排序)<strong>本质就是用空间换时间</strong>.</p></li></ul>',8),P={},S=(0,s(83744).Z)(P,[["render",function(n,a){return(0,e.wg)(),(0,e.iD)(e.HY,null,[o,t,l,p,c,i,r,u,d,k,b,m,h,g,v,y,x,_,f,q,j,O,z,T,w],64)}]])}}]);