"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[234],{60936:(n,s,e)=>{e.r(s),e.d(s,{data:()=>a});const a={key:"v-6ed24077",path:"/nginx/nginx%E9%85%8D%E7%BD%AEhttps%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html",title:"nginx配置SSL，并配置负载均衡",lang:"en-US",frontmatter:{date:"2022/1/14 21:22"},excerpt:"",headers:[],git:{updatedTime:1654857597e3,contributors:[{name:"qsyyke",email:"2291308094@qq.com",commits:1}]}}},83317:(n,s,e)=>{e.r(s),e.d(s,{default:()=>p});const a=(0,e(66252).uE)('<h1 id="nginx配置ssl-并配置负载均衡" tabindex="-1"><a class="header-anchor" href="#nginx配置ssl-并配置负载均衡" aria-hidden="true">#</a> nginx配置SSL，并配置负载均衡</h1><p>这两天在弄nginx，想将picture.cco.vin这个域名的ssl证书给配置上，这个可以直接看官网的demo就可以实现，但是在配置负载均衡的时候，一直遇到问题</p><div class="language-conf ext-conf line-numbers-mode"><pre class="language-conf"><code>http {\nupstream myapp1 {\n        least_conn;\n        server localhost:8900;\n        server localhost:8901;\n    }\n    # 这里配置域名指向:8900这个端口\n    server {\n        listen 80;\n        \n        server_name picture.cco.vin;\n        location / {\n\t\t\t\t#http自动重定向到https\n                rewrite ^(.*)$ https://picture.cco.vin;\n        }\n    }\n\n    # 这里为picture.cco.vin配置ssl证书 \n    server {\n        listen 443 ssl;\n        server_name picture.cco.vin;\n\n        ssl_certificate      cert/picture_cco_vin/6270676_picture.cco.vin.pem;\n        ssl_certificate_key  cert/picture_cco_vin/6270676_picture.cco.vin.key;\n\n        ssl_session_timeout  5m;\n        ssl_ciphers  ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;\n        ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n        ssl_prefer_server_ciphers  on;\n\n        location / {\n        \t\t#proxy_pass不能是https://myapp1;否则会报错\n                proxy_pass http://myapp1;\n                index index.html;\n        }\n    }\n}\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div>',3),r={},p=(0,e(83744).Z)(r,[["render",function(n,s){return a}]])}}]);