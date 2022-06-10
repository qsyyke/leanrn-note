"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1869],{48663:(a,n,s)=>{s.r(n),s.d(n,{data:()=>e});const e={key:"v-68f1d2e9",path:"/spring/springcloud/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4/nacos%E9%9B%86%E7%BE%A4%E5%92%8C%E6%8C%81%E4%B9%85%E5%8C%96%E9%85%8D%E7%BD%AE.html",title:"nacos集群和持久化配置",lang:"en-US",frontmatter:{date:"2022/2/18 23:28",title:"nacos集群和持久化配置"},excerpt:"",headers:[{level:2,title:"三种模式",slug:"三种模式",children:[]},{level:2,title:"演示集群模式",slug:"演示集群模式",children:[{level:3,title:"1.执行sql",slug:"_1-执行sql",children:[]},{level:3,title:"2.编辑application.properties",slug:"_2-编辑application-properties",children:[]},{level:3,title:"3.修改cluster.conf",slug:"_3-修改cluster-conf",children:[]},{level:3,title:"4.编辑startup.sh",slug:"_4-编辑startup-sh",children:[]},{level:3,title:"5.配置Nginx",slug:"_5-配置nginx",children:[]}]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},25470:(a,n,s)=>{s.r(n),s.d(n,{default:()=>U});var e=s(66252);const t=(0,e.Uk)("我们不仅可以在服务器上运行一个nacos，还可以运行多个nacos，在服务器上搭建nacos集群环境，可以查看"),l={href:"https://nacos.io/zh-cn/docs/cluster-mode-quick-start.html",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("官方说明"),c=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20220218233051767.png",data:"aurora"})],-1),i=(0,e._)("p",null,"上图中下面部分的Nacos比便是三个nacos集群，SLB这里是内网，我们可以想成是Nginx",-1),o=(0,e._)("p",null,"默认Nacos使用嵌入式数据库实现数据的存储。所以，如果启动多个默认配置下的Nacos节点，数据存储是存在一致性问题的。",-1),p=(0,e._)("p",null,"为了解决这个问题，Nacos采用了集中式存储的方式来支持集群化部署，目前只支持MySQL的存储。",-1),u=(0,e._)("h2",{id:"三种模式",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#三种模式","aria-hidden":"true"},"#"),(0,e.Uk)(" 三种模式")],-1),h=(0,e.Uk)("nacos支持三种模式，详细"),d={href:"https://nacos.io/zh-cn/docs/deployment.html",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("请看"),m=(0,e.uE)('<ul><li>单机模式 - 用于测试和单机试用。</li><li>集群模式 - 用于生产环境，确保高可用。</li><li>多集群模式 - 用于多数据中心场景。</li></ul><h2 id="演示集群模式" tabindex="-1"><a class="header-anchor" href="#演示集群模式" aria-hidden="true">#</a> 演示集群模式</h2><p>这里使用一个Nginx，一个MySQL，三个nacos搭建一个nacos集群</p><h3 id="_1-执行sql" tabindex="-1"><a class="header-anchor" href="#_1-执行sql" aria-hidden="true">#</a> 1.执行sql</h3><p>因为这里我们的数据，存储在MySQL中的，所以我们需要在MySQL中，创建所需的库和表，但是sql语句官方已经提供了，默认在<code>nacos/conf/</code>目录中</p>',5),_=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20220218233758803.png",data:"aurora"})],-1),b=(0,e.uE)('<h3 id="_2-编辑application-properties" tabindex="-1"><a class="header-anchor" href="#_2-编辑application-properties" aria-hidden="true">#</a> 2.编辑application.properties</h3><p>此文件也是在conf目录，在该文件中，加入下面内容</p><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token attr-name">spring.datasource.platform</span><span class="token punctuation">=</span><span class="token attr-value">mysql</span>\n \n<span class="token attr-name">db.num</span><span class="token punctuation">=</span><span class="token attr-value">1</span>\n<span class="token attr-name">db.url.0</span><span class="token punctuation">=</span><span class="token attr-value">jdbc:mysql://127.0.0.1:3306/nacos_config?characterEncoding=utf8&amp;connectTimeout=1000&amp;socketTimeout=3000&amp;autoReconnect=true</span>\n<span class="token attr-name">db.user</span><span class="token punctuation">=</span><span class="token attr-value">root</span>\n<span class="token attr-name">db.password</span><span class="token punctuation">=</span><span class="token attr-value">123456</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="_3-修改cluster-conf" tabindex="-1"><a class="header-anchor" href="#_3-修改cluster-conf" aria-hidden="true">#</a> 3.修改cluster.conf</h3>',4),k=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20220218234040484.png",data:"aurora"})],-1),f=(0,e._)("p",null,"在该文件中，增加以下内容，这里演示三台nacos",-1),x=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20220218234149361.png",data:"aurora"})],-1),y=(0,e._)("p",null,"这个需要搭建几个nacos就写几个，注意这里得host不能使用localhost，上面的配置，也就是部署三台nacos机器，分别运行在3333,4444,5555这三个端口上",-1),v=(0,e._)("h3",{id:"_4-编辑startup-sh",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_4-编辑startup-sh","aria-hidden":"true"},"#"),(0,e.Uk)(" 4.编辑startup.sh")],-1),z=(0,e._)("p",null,[(0,e.Uk)("编辑Nacos的启动脚本startup.sh，使它能够接受不同的启动端口，我们编辑的目的就是为了在执行"),(0,e._)("code",null,"startup.sh"),(0,e.Uk)("的时候，我们能够传入额外的参数，从而在不同端口启动")],-1),E=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20220218234513113.png",data:"aurora"})],-1),q=(0,e._)("p",null,[(0,e._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"",originSrc:"https://picture.xcye.xyz/image-20220218234535755.png",data:"aurora"})],-1),S=(0,e._)("h3",{id:"_5-配置nginx",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#_5-配置nginx","aria-hidden":"true"},"#"),(0,e.Uk)(" 5.配置Nginx")],-1),B=(0,e._)("p",null,"配置Nginx的话，自行解决，也就是配置负载均衡，然后就可以了，这个就是搭建nacos集群模式的步骤",-1),N={},U=(0,s(83744).Z)(N,[["render",function(a,n){const s=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("p",null,[t,(0,e._)("a",l,[r,(0,e.Wm)(s)])]),c,i,o,p,u,(0,e._)("p",null,[h,(0,e._)("a",d,[g,(0,e.Wm)(s)])]),m,_,b,k,f,x,y,v,z,E,q,S,B],64)}]])}}]);