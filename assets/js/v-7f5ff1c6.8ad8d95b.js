"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[933],{92686:(n,s,a)=>{a.r(s),a.d(s,{data:()=>e});const e={key:"v-7f5ff1c6",path:"/spring/springcloud/zookeeper.html",title:"zookeeper服务注册与发现",lang:"en-US",frontmatter:{date:"2022/1/17 15:21",tag:["spring boot","spring cloud","zookeeper"]},excerpt:"",headers:[{level:2,title:"安装zookeeper",slug:"安装zookeeper",children:[]},{level:2,title:"依赖以及配置文件",slug:"依赖以及配置文件",children:[{level:3,title:"服务提供者",slug:"服务提供者",children:[]},{level:3,title:"服务消费者",slug:"服务消费者",children:[]}]}],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},41216:(n,s,a)=>{a.r(s),a.d(s,{default:()=>k});var e=a(66252);const p=(0,e._)("h1",{id:"zookeeper服务注册与发现",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#zookeeper服务注册与发现","aria-hidden":"true"},"#"),(0,e.Uk)(" zookeeper服务注册与发现")],-1),t=(0,e.Uk)("因为"),o=(0,e._)("code",null,"Eureka",-1),l=(0,e.Uk)("在2版本应为某些原因停止更新了，所以我们不能够继续使用，"),c={href:"https://github.com/Netflix/eureka/wiki",target:"_blank",rel:"noopener noreferrer"},u=(0,e.Uk)("停更说明"),r=(0,e.uE)('<p>我们可以使用<code>zookeeper</code>作为服务注册中心，使用zookeeper也是一样的方法，我们只需要将服务提供者注册到服务注册中心中，然后服务消费者直接去调这个服务就行了</p><ul><li>zookeeper是一个分布式协调工具，可以实现注册中心功能</li><li>需要在Linux中安装zookeeper</li><li>并且查看注册中心中，有哪些服务，都是通过Linux命令进行查看</li></ul><h2 id="安装zookeeper" tabindex="-1"><a class="header-anchor" href="#安装zookeeper" aria-hidden="true">#</a> 安装zookeeper</h2><ol><li><p>下载Linux包</p></li><li><p>解压</p></li><li><p>将<code>conf/zoo_sample.cfg</code>文件更名为<code>zoo.cfg</code></p></li><li><p>新建一个文件夹data，修改<code>conf/zoo.cfg</code>中的<code>dataDir=./data</code>项</p></li><li><p>启动zookeeper服务端，<code>./bin/zkServer.sh</code></p></li><li><p>写代码，将服务提供者注册到注册中心中</p></li><li><p>服务消费者通过路径<code>http://服务提供者注册到zookeeper注册中心的服务名</code>调用服务提供者</p></li><li><p>启动zookeeper客户端，可以查看注册中心中，都有哪些注册的服务</p><p><code>bin/zkCli.sh</code>启动zookeeper客户端</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>WatchedEvent state:SyncConnected type:None path:null\n<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token function">ls</span>\n<span class="token function">ls</span> <span class="token punctuation">[</span>-s<span class="token punctuation">]</span> <span class="token punctuation">[</span>-w<span class="token punctuation">]</span> <span class="token punctuation">[</span>-R<span class="token punctuation">]</span> path\n<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token function">ls</span> /\n<span class="token punctuation">[</span>zookeeper<span class="token punctuation">]</span>\n<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token function">ls</span> /zookeeper \n<span class="token punctuation">[</span>config, quota<span class="token punctuation">]</span>\n<span class="token punctuation">[</span>zk: localhost:2181<span class="token punctuation">(</span>CONNECTED<span class="token punctuation">)</span> <span class="token number">3</span><span class="token punctuation">]</span> \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p><code>ls /</code>是查看所有的内容</p><p><code>ls /services</code>查看所有服务</p><p><code>get /services/服务名/流水号</code>得到某个服务的json字符串信息</p></li><li><p>完成</p></li></ol><h2 id="依赖以及配置文件" tabindex="-1"><a class="header-anchor" href="#依赖以及配置文件" aria-hidden="true">#</a> 依赖以及配置文件</h2><h3 id="服务提供者" tabindex="-1"><a class="header-anchor" href="#服务提供者" aria-hidden="true">#</a> 服务提供者</h3><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zookeeper-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#8004表示注册到zookeeper服务器的支付服务提供者端口号</span>\n<span class="token key atrule">server</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8004</span>\n<span class="token comment">#服务别名----注册zookeeper到注册中心名称</span>\n<span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">application</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> cloud<span class="token punctuation">-</span>provider<span class="token punctuation">-</span>payment\n  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>\n    <span class="token key atrule">zookeeper</span><span class="token punctuation">:</span>\n      <span class="token key atrule">connect-string</span><span class="token punctuation">:</span> 192.168.111.144<span class="token punctuation">:</span><span class="token number">2181</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>如果我们需要搭建集群，那么<code>connect-string</code>使用逗号分割开，和<code>eureka</code>类似</p></blockquote><ul><li><p>主启动类</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootApplication</span>\n<span class="token annotation punctuation">@EnableDiscoveryClient</span> <span class="token comment">//该注解用于向使用consul或者zookeeper作为注册中心时注册服务</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>主启动类上，需要加上<code>EnableDiscoveryClient</code>注解</p></li></ul><h3 id="服务消费者" tabindex="-1"><a class="header-anchor" href="#服务消费者" aria-hidden="true">#</a> 服务消费者</h3><ul><li><p>依赖</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.cloud<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-cloud-starter-zookeeper-discovery<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token comment">&lt;!--先排除自带的zookeeper--&gt;</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusions</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exclusion</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusion</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exclusions</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n<span class="token comment">&lt;!--添加zookeeper3.4.9版本--&gt;</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>zookeeper<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>3.4.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><blockquote><p>因为在<code>spring-cloud-starter-zookeeper-discovery</code>中，就有<code>zookeeper</code>依赖，如果再次引入的话，会存在依赖冲突，所以这里需要使用<code>exclusions</code>排除</p></blockquote></li><li><p>配置</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">server</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">80</span>\n\n<span class="token key atrule">spring</span><span class="token punctuation">:</span>\n  <span class="token key atrule">application</span><span class="token punctuation">:</span>\n    <span class="token key atrule">name</span><span class="token punctuation">:</span> cloud<span class="token punctuation">-</span>consumer<span class="token punctuation">-</span>order\n  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>\n  <span class="token comment">#注册到zookeeper地址</span>\n    <span class="token key atrule">zookeeper</span><span class="token punctuation">:</span>\n      <span class="token key atrule">connect-string</span><span class="token punctuation">:</span> 192.168.111.144<span class="token punctuation">:</span><span class="token number">2181</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><blockquote><p>这里我们也是将这个消费者注册到zookeeper注册中心中，注册到哪个注册中心，只需要填写<code>connect-string</code>项就行</p></blockquote></li><li><p>启动类</p><p>消费者主启动类上，我们可以不用添加<code>EnableDiscoveryClient</code>注解</p></li><li><p>配置<code>RestTemplate</code>Bean</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ApplicationContextBean</span><span class="token punctuation">{</span>\n    <span class="token annotation punctuation">@Bean</span>\n    <span class="token annotation punctuation">@LoadBalanced</span>\n    <span class="token keyword">public</span> <span class="token class-name">RestTemplate</span> <span class="token function">getRestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">RestTemplate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><blockquote><p>如果这里没有<code>LoadBalanced</code>注解的话，那么就会存在Unknown Host错误，这个注解也就是消费者调用服务提供者时使用负载均衡</p></blockquote></li><li><p>controller</p><p>调用<code>restTemplate.getForObject()</code>方法，访问<code>http://zookeeper注册中心中的服务提供者名字</code>便可以</p></li><li><p>完成</p></li></ul><p>上面这个就是使用zookeeper作为注册中心的过程，其实和eureka的使用是一样的，只是他们的底层逻辑不一样</p><p>都是通过将服务提供者注册到注册中心中，服务消费者根据自己的情况，然后服务消费者通过<code>http://服务提供者名字</code>便可以调用服务提供者的接口，如果是搭建集群，那么就将多个服务提供者注册到注册中心中，便可以</p><p>只是zookeeper和eureka有一点不同，zookeeper的服务端是需要在Linux中启动，而eureka需要我们自己写代码，在配置中，通过下面方式进行设置</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment">#eureka</span>\n<span class="token key atrule">server</span><span class="token punctuation">:</span>\n  <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">7001</span>\n\n<span class="token key atrule">eureka</span><span class="token punctuation">:</span>\n  <span class="token key atrule">instance</span><span class="token punctuation">:</span>\n    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> eureka7001.com <span class="token comment">#eureka服务端的实例名称</span>\n  <span class="token key atrule">client</span><span class="token punctuation">:</span>\n    <span class="token comment">#false表示不向注册中心注册自己。</span>\n    <span class="token key atrule">register-with-eureka</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token comment">#false表示自己端就是注册中心，我的职责就是维护服务实例，并不需要去检索服务</span>\n    <span class="token key atrule">fetch-registry</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>\n    <span class="token key atrule">service-url</span><span class="token punctuation">:</span>\n      <span class="token comment">#设置与Eureka Server交互的地址查询服务和注册服务都需要依赖这个地址。</span>\n      <span class="token key atrule">defaultZone</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//eureka7001.com<span class="token punctuation">:</span>7001/eureka/\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div>',16),i={},k=(0,a(83744).Z)(i,[["render",function(n,s){const a=(0,e.up)("ExternalLinkIcon");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[t,o,l,(0,e._)("a",c,[u,(0,e.Wm)(a)])]),r],64)}]])}}]);