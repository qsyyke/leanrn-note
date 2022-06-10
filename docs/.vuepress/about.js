module.exports = {
    about: [
        {
            bar: false,
            title: "我?",
            describe: [
                "<a style='color: #00cfc8;' href=\"https://github.com/vuepress-aurora/vuepress-theme-aurora\" target=\"_blank\">Aurora</a>主题作者",
                "目前是一名大三学生,CS专业,坐标西南边陲",
                "喜欢安静,不喜社交",
                "喜欢听音乐,什么类型都可",
                "喜欢技术,coding",
                "目前正在学习java后端",
                '最喜欢的电影是"忠犬八公的故事",梦想以后独居也能有一只"Hachi"',
                "主题是我自己开发的，前端太菜了，如果有bug，希望大家多多包涵`Σ(￣□￣||)` ",
                "有点懒",
                "目前除了编程没有什么兴趣爱好",
                "正在追的番有《百妖谱》,《致不灭的你》,《少年歌行》,《鬼灭之刃》,《关于我转生变成史莱姆这档事》，《国王排名》，《多罗罗》，《世界顶尖的暗杀者,转生为异世界贵族》...",
                "喜欢小说，喜欢的作者是--十月流年，最喜欢的小说《至尊修罗》,《一念永恒》,《星辰变》",
            ],
            tag: [
                "coding",
                "社恐",
                "番剧",
                "电影",
                "安静",
                "音乐",
                "小说",
                "宅",
                "懒",
            ],
            showTag: true,
        },
        {
            bar: false,
            title: "大三规划",
            describe: [
                "做项目",
                "软考二级",
                "英语四级",
                "想找实习",
                "复习数据结构",
                "驾照",
                "做点什么有意义的事",
            ],
            tag: ["大家加油呀`Σ(￣□￣||)` ..."],
            showTag: true,
        },
        {
            bar: false,
            title: "未来规划",
            describe: ["后端工程师", "..."],
            tag: ["忘记过去，展望未来"],
            showTag: true,
        },
        {
            bar: true,
            title: "技  能",
            describe: [
                {
                    name: "java",
                    score: 70,
                },
                {
                    name: "HTML5",
                    score: 87,
                },
                {
                    name: "javascript",
                    score: 82,
                },
                {
                    name: "css",
                    score: 73,
                },
                {
                    name: "python",
                    score: 20,
                },
                {
                    name: "redis",
                    score: 41,
                },
                {
                    name: "mysql",
                    score: 71,
                },
                {
                    name: "vue",
                    score: 60,
                },
                {
                    name: "spring",
                    score: 61,
                },
                {
                    name: "springMVC",
                    score: 62,
                },
                {
                    name: "springBoot",
                    score: 68,
                },
            ],
            showTag: false,
        },

        {
            showTag: false,
            bar: true,
            title: "掌握框架",
            describe: [
                {
                    name: "spring",
                    score: 65,
                },
                {
                    name: "springMVC",
                    score: 61,
                },
                {
                    name: "springBoot",
                    score: 70,
                },
                {
                    name: "mybatis",
                    score: 67,
                },
                {
                    name: "vue",
                    score: 60,
                },
                {
                    name: "dubbo",
                    score: 30,
                },
            ],
        },
        {
            bar: true,
            showTag: false,
            title: "掌握技能",
            describe: [
                {
                    name: "jetbrains",
                    score: 85,
                },
                {
                    name: "linux",
                    score: 38,
                },
                {
                    name: "git",
                    score: 81,
                },
                {
                    name: "CtrlCV",
                    score: 100,
                },
            ],
        },
        {
            title: "关于主题",
            describe: [
                "vuepress-theme-aurora主题是对vuepress官方默认主题进行大量修改，历时一个多月时间，最终改成了现在这个样子，" +
                "该主题某些页面借鉴于其他大佬的主题，现在这个版本，自己也是很满意，虽然还存在部分bug，但是会在后续版本中解决" +
                "也会加入一些新的功能，因为我主要学习Java，对于前端的技术不太熟悉，如果有不好的地方，请各位大佬多多包涵，" +
                "如果你也喜欢这款主题，想要鼓励我的话，可以通过以下方式`(｀・ω・´)` ",
                "帮忙在Github点个<a href='https://github.com/vuepress-aurora/vuepress-theme-aurora' target='_blank'>star</a>",
                "可以在本页底部请我喝杯奶茶(支持在线支付)",
                "将该主题分享给更多需要的人",
                "保留页脚主题信息",
                "为此主题提建议",
                "你的鼓励和建议是我不断开发的动力"
            ],
            tag: ['想求个star`(⌒▽⌒)`'],
            showTag: true,
        },
        {
            bar: false,
            title: "更新日志",
            describe: [
                '<label class="about-version">v1.7.0</label> 1.修复coze插件build错误问题 2.修复首页手机端社交图标太靠底部问题 3.修复导航栏下拉框数组间隔太大问题' +
                '4.Coze插件:用户注册成功，撒花效果 5.将侧边栏的头像和首页中间的头像分开，可以进行单独配置',
                '<label class="about-version">v1.6.2</label>1.修复首页文章列表一级标题，二级标题，三级标题等，出现#符号问题 2.修复友情链接页面图片和描述不匹配问题' +
                '3.修复关于页面，社交图片中，需要展示二维码等图片，部分被隐藏的问题 4.主题不再提供/photo路由，改由coze插件提供，该/photo使用说说的图片数据 ' +
                '5.主题所有的文本配置，比如公告，友情链接的message，都支持html，高度自定义 6.主题支持自定义导航图标，详细看文档aurora.xcye.xyz',
                '<label class="about-version">v1.6.1</label> 1.修复coze插件默认注册界面，输入框不对齐情况 2.修复leanCloud中有Talk类，但是没有数据情况下，不能编写说说问题 3.修复快速点赞，数据加减错误问题' +
                '4.修复侧边栏目录，不能获取到标题url问题 5.修复文章链接在在新标签中打开，图片失效问题 6.把主题文件夹移到docs同级，原来的docs/.vuepress/theme还存在，但是代码不在改变' + 
                '7.使用coze插件可以自定义注册，登录，登出等，除了默认提供的插件，额外提供的一个全局组件 8.其他用户也可以在你博客发布说说，但需要允许，默认关闭 ' + 
                '9.说说功能使用插件实现 10.BREAKING CHANGES: 主题的目录被改变，如果你是以前克隆仓库的，需要克隆最新版，并且主题github仓库移到vuepress-aurora组织下',   
                '<label class="about-version">v1.5.4</label> 1.修复页脚版权信息 2.修复文章链接从外部打开，图片失效问题，3.修复搜索样式' + 
                '4.自定义导航栏图标 5.自定义h标签图标',
                '<label class="about-version">v1.5.3</label> 1.修复全局组件auroraglobal导航栏没有动画问题 2.修复友情链接logo与url不匹配问题 3.修复Safari浏览器侧边栏模糊问题',
                '<label class="about-version">v1.5.2</label> 解决部署后，刷新404问题',
                '<label class="about-version">v1.5.1</label> 增加自定义海报图片api接口',
                '<label class="about-version">v1.5.0</label> 1.修改了手机端侧边栏，优化顶部导航样式 2.解决在docs下，md文件不显示问题 3.修改分页组件，使用element-plus 4.新功能，增加自定义首页文章列表懒加载图片',
                '<label class="about-version">v1.4.2</label> 支持自定义页面',
                '<label class="about-version">v1.4.1</label> 修复侧边栏目录bug，修复首页侧边栏友情链接logo和url不匹配问题',
                '<label class="about-version">v1.4.0</label> 1.主题支持修改css样式，支持修改icon图标，使用方法 2.不在需要新增docs/.vuepress/readme.md文件 3.解决新增页面路由刷新404问题' + 
                '4.优化页面样式 5.首页文章列表，增加两个选择，背景色时候跟随样式面板改变还是使用存白色 6.手机端，页面侧边栏是否显示(并不是左上角点开的侧边栏) 7.优化tag页面 8.站点全局圆角，透明度，模糊度增加默认值',
                '<label class="about-version">v1.3.6</label> 修复手机端侧边栏和说说页面',
                '<label class="about-version">v1.3.5</label> 修复tag页面的内容重复问题',
                '<label class="about-version">v1.3.4</label> 1.解决上一版本，获取所有文章时，忘记对photos下的md文件，过滤的问题 2.修改默认主题的edit链接问题',
                '<label class="about-version">v1.3.3</label> 1.解决npm run build命令build成功后，无法自动退出问题 2.解决iPad或者部分设备，站点logo和标题重合情况 3.修复首页文章列表图片和页面顶部图片，在部分iPad和电脑上，显示不美观问题' + 
                '4.添加浏览器兼容设置(火狐浏览器首页出现滚动条，暂未解决) 5.为文章增加发布时间 6.收集站点所有文章数据时，自动过滤掉moods文件夹内的md文件(photos文件夹，忘记了，下一个版本增加)',
                '<label class="about-version">v1.3.2</label> 1.增加侧边栏功能 2.首页增加文章列表 3.修改首页社交图标 4.标签页面增加两种选择 5.修改友情链接列表展示效果 6.修改主题评论框架 7.文章页面增加上一篇，下一篇文章功能 ' + 
                '8.首页移除原来的页脚效果 9.修改默认主题404页面 10.修改文章页面顶部标题，浏览量等样式',
                '<label class="about-version">v1.2.10</label> 修改tag标签的内容显示，解决从tag页进入文章，页脚重复标签bug',
                '<label class="about-version">v1.2.9</label>.为说说页面增加在线添加功能，及修改相册的路由',
                '<label class="about-version">v1.2.8</label> 修改友情链接的列表排序，使用随机排序，修改页脚部分样式',
                '<label class="about-version">v1.2.7</label> 修改百度统计报错',
                '<label class="about-version">v1.2.6</label> 修改海报，标签归档页面样式样式',
                '<label class="about-version">v1.2.2</label> 修改readme.md，以及部分文档',
                '<label class="about-version">v1.2.1</label> 新增相册功能，并解决海报一个bug',
                '<label class="about-version">v1.2.0</label> 为文章，心情增加海报分享功能',
                '<label class="about-version">v1.1.0</label> 重新修改description和keyword的配置，主题内部集成了search功能',
                '<label class="about-version">v1.0.1</label> 修改从tag页面进入文章页面，懒加载无效bug',
                '<label class="about-version">v1.0.0 考古</label> 大概从2021/8/20多号开始写这个博客'
            ],
            tag: ['开发永不止步......'],
            showTag: true,
        },
        {
            title: "主题后续计划及闲话",
            bar: false,
            tag: [],
            showTag: false,
            describe: [
                "<label class='about-version about-goal about-fail'>未完成</label> 时间轴",
                '<label class="about-version about-goal about-success">已完成</label> 优化SEO',
                '<label class="about-version about-goal about-fail">未完成</label> 优化海报分享功能，目前海报分享功能，对于一些文章，海报的宽度和高度会发生变化，并将海报分享制作成一个插件',
                '<label class="about-version about-goal about-fail">未完成</label> 广告，其实在最初的版本中，就已经实现了广告功能，只是不太理想，就移除了，后续会重新开发',
                '<label class="about-version about-goal about-success">已完成</label> 页面交互动画，我并不擅长写前端，所以此主题的页面动画只是简单的做了一下，会在后续版本中进行优化',
                '<label class="about-version about-goal about-success">已完成</label> 希望将所有的样式配置都进行抽离，比如菜单栏的ico图标等等，可以自己配置，虽然目前也可以更改，但是需要在' +
                '源码中进行简单的Unicode替换，其实如果改源码的话，也是非常简单的，只是我想在配置文件中，就可以进行修改',
                '<label class="about-version about-goal about-success">已完成</label> 说说功能感觉在本地编写，然后再进行上传发布的话，并不是很方便，说说应该是一个随时能发布，修改的功能，所以在后续版本中，会加入(目前也实现了这个功能，' +
                '只是后端api是我自己写的，目前只能我自己使用，在后续版本中，希望能够找到解决办法),该功能已开发为<a target="_blank" href="https://www.npmjs.com/package/vuepress-plugin-coze">vuepress-plugin-coze插件</a>',
                '<label class="about-version about-goal about-fail">未完成</label> 暗夜模式，最初在修改默认主题的时候，就被我移除了，但是一些用户可能还会使用到，所以也会在后续版本中，添加此功能',
                '<label class="about-version about-goal about-success">已完成</label> 优化首页文章列表',
                '<label class="about-version about-goal">hope</label> 同时如果你们想要新的功能或者建议，可以到github提交一个issue'
            ],
        },
    ],

}