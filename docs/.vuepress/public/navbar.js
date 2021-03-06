module.exports = {
    navbar: [
        // 嵌套 Group - 最大深度为 2
        {
            iconClass: 'aurora-navbar-si-glyph-dial-number-1',
            text: '快速开始',
            link: '/aurora/README.md'
        },
        {
          text: 'spring',
          iconClass: 'aurora-navbar-si-glyph-askterisk',
          children: [
            {
                children: [
                    "/spring/springmvc/springmvc重定向和请求转发操作.md",
                    "/spring/springmvc/SSM整合开发.md",
                    "/spring/springmvc/url-pattern设置.md",
                    "/spring/springmvc/执行流程分析.md",
                    "/spring/springmvc/核心技术.md",
                    "/spring/springmvc/README.md",
                ],
                text: "springmvc",
            },
            {
                children: [
                  "/spring/spring5/aop面向切面编程.md",
                  "/spring/spring5/mybatis和spring整合.md",
                  "/spring/spring5/README.md",
                  "/spring/spring5/注解方式注入.md",
                ],
                text: "spring5",
            },
            {
                children: [
                  "/spring/springboot/web开发.md",
                  "/spring/springboot/yaml.md",
                  "/spring/springboot/单元测试.md",
                  "/spring/springboot/启动原理.md",
                  "/spring/springboot/嵌入式servlet服务器.md",
                  "/spring/springboot/指标监控.md",
                  "/spring/springboot/数据访问.md",
                  "/spring/springboot/README.md",
                  "/spring/springboot/注意.md",
                  "/spring/springboot/注解.md",
                  "/spring/springboot/高级特性.md",
                ],
                text: "springboot",
            }
          ],
        },

        {
            text: 'java相关',
            iconClass: 'aurora-navbar-si-glyph-egg',
            children: [
                {
                    text: 'duboo',
                    children: [
                        '/dubbo/readme.md'
                    ]
                },
                {
                    text: 'tomcat',
                    children: [
                        "/javaweb/ajax.md",
                        "/javaweb/jQuery.md",
                        "/javaweb/json.md",
                        "/javaweb/jsp&Session.md",
                        "/javaweb/servlet.md",
                        "/javaweb/会话技术.md",
                        "/javaweb/响应.md",
                        "/javaweb/数据库连接池.md",
                        "/javaweb/文件上传下载.md",
                        "/javaweb/案例.md",
                        "/javaweb/请求.md",
                        "/javaweb/过滤器和监听器.md",
                        "/javaweb/邮件发送实现.md",
                        "/javaweb/问题.md",
                      ]
                },
                {
                    text: 'maven',
                    children: ["/maven/README.md", "/maven/maven报错信息.md"]
                },
                {
                    text: 'git',
                    children: ["/git/git.md",'/git/issue.md','/git/gitignore.md']
                },
                {
                    text: 'python',
                    children: [
                        "/python/matplotlib.md",
                        "/python/README.md",
                        "/python/pandas.md",
                        "/python/Scipy.md",
                        "/python/问题.md",
                    ]
                }

            ]
        },
        {
            iconClass: 'aurora-navbar-si-glyph-flower',
            text: '前端',
            children: [
                {
                    children: [
                        "/vue/axios.md",
                        "/vue/Promise.md",
                        "/vue/Vue CLI.md",
                        "/vue/Vuex.md",
                        "/vue/Webpack.md",
                        "/vue/README.md",
                        "/vue/箭头函数和this.md",
                        "/vue/路由.md",
                        "/vue/问题.md",
                        "/vue/项目.md",
                      ],
                      text: "vue",
                },

            ]
        },
        {
            iconClass: 'aurora-navbar-igw-f-collection-data',
            text: '框架及数据库',
            children: [
                {
                    text: 'dubbo',
                    children: ["/dubbo/README.md"],
                },
                {
                    text: 'mybatis',
                    children: ["/mybatis/README.md", "/mybatis/问题.md"],
                },
                {
                    text: 'redis',
                    children: [
                        "/redis/Redisset集合.md",
                        "/redis/Rediszset集合.md",
                        "/redis/Redis事务.md",
                        "/redis/Redis列表.md",
                        "/redis/Redis配置文件.md",
                        "/redis/Redis集群.md",
                        "/redis/Redis5种数据结构.md",
                        "/redis/Redis哈希表结构.md",
                        "/redis/README.md",
                        "/redis/程序连接Redis.md",
                        "/redis/问题.md",
                      ]
                }
            ]
        },
        {
            iconClass: 'aurora-navbar-si-glyph-game-1',
            text: "about",
            link: "/about"
        },
        {
            iconClass: 'aurora-navbar-guide',
            text: 'friend',
            link: '/link'
        },
        {
            iconClass: 'aurora-navbar-si-glyph-load',
            text: 'tag',
            link: '/tag'
        },
        {
            iconClass: 'aurora-navbar-si-glyph-feather',
            text: "chat",
            link: '/mood'
        },
        {
            iconClass: 'aurora-navbar-weather',
            text: 'photo',
            link: '/photo'
        },
        {
            iconClass: 'aurora-navbar-github',
            text: 'Aurora',
            link: 'https://github.com/vuepress-aurora/vuepress-theme-aurora'
        }

    ]
}