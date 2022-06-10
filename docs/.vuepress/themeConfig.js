const { navbar } = require("./public/navbar");
const {friendLinks} = require('./friendLinks')
const {socials} = require('./socials')
const {about} = require("./about")
module.exports = {
    themeConfig: {
        navbar: navbar,
        darkMode: false,
        repo: "https://github.com/vuepress-aurora/vuepress-theme-aurora",
        docsRepo: 'https://github.com/qsyyke/blog-note-site/',
        githubActions: true,
        docsBranch: 'main',
        repoLabel: "Aurora",
        editLink: true,
        editLinkText: "edit",
        lastUpdated: true,
        lastUpdatedText: "lastTime",

        //下面的都是主题自己的配置文件
        //logo旁文字颜色
        logoColor: "#2c3e50",

        //样式控制面板字体占位符，如果是国内用户，请使用中文
        showFont: "程",

        //首页中间hero图片地址，默认为https://ooszy.cco.vin/img/blog-public/avatar.jpg
        heroImg: 'https://picture.xcye.xyz/Aurora.png',

        //logo图片地址，默认为https://ooszy.cco.vin/img/ico/yuan.png
        logo: "https://picture.xcye.xyz/avatar.jpg",

        //文章懒加载图片 仅限文章，首页文章占位图片并不是这个
        lazyLoadingImg: "https://picture.xcye.xyz/image-20220328221012634.png",
        homePageLazyLoadingImg: 'https://picture.xcye.xyz/image-20220328221012634.png',

        //是否启用定制首页随机一言，默认未开启，使用随机一言 接口为https://international.v1.hitokoto.cn/?c=b&max_length=45
        customRandomSay: false,

        //定制首页随机一言文字
        customRandomValue: 'Vuepress-theme-Aurora',

        //社交信息，首页PC端至多显示19个，手机端至多显示7个，侧边栏不影响
        socials: socials,

        // cancelIcoHref: "https://ooszy.cco.vin/img/ico/quxiao.svg", 在v1.3.2中移除

        //logo旁文字 默认值为Aurora
        logoTitle: "qsyyke",

        headTitle: "this is headTitle",

        //站点描述
        description: "vuepress-theme-Aurora是一款简洁，美观，功能强大的静态主题",

        //站点关键词，在后续版本中，还需优化 请使用英文状态下的逗号','隔开
        keyword: "vuepress主题,vuepress theme,二次元博客,简约博客,博客主题,静态主题,vuepress-theme,好看博客,动漫博客",

        //样式控制面板打开之后，休眠多长时间自动关闭面板，单位毫秒
        slideTime: 3000,

        //随机一言接口
        randomSaw: "https://international.v1.hitokoto.cn/?c=b&max_length=45",
        //关于页面
        about,

        //拿取对象 在后续版本中，会对此项进行优化
        randomSawQuery: "hitokoto",
        method: "get",

        //这是配置随机背景；颜色 可以不设置，有默认值
        randomColor: [
            "#ffcad4", "#d8e2dc", "#8d99ae", "#b8f2e6", "#84c7d0", "#aed9e0", "#00b4d8",
            "#caf0f8", "#fbc4ab", "#fdc5f5", "#84dcc6", "#a9def9", "#fcf6bd", "#f0a6ca",
            "#b9faf8", "#42a5f5", "#ff9800", "#b39ddb", "#6d45bb", "#b388ff", "#1565c0",
            "#26c6da", "#5e548e", "#90f1ef", "#5b5f97", "#bbe6e4", "#42bfdd", "#72ddf7",
            "#8093f1", "#9ed8d8", "#7ea8be", "#ef90b3", "#b892ef", "#c0b9dd", "#c0d9dd",
            "#75c9c8", "#ded9e2", "#b5e2fa", "#62b6cb", "#5fa8d3", "#0fa3b1", "#b5e2fa",
            "#5fa8d3", "#62b6cb", "#b892ff",
        ],

        //样式控制面板至多显示多少个字体和字体颜色，推荐不超过8个
        maxFontColorArr: 8,

        //在样式控制面板中，显示的字体颜色集合
        fontColor: [
            "#2c3e50", "#42a5f5", "#8093f1", "#FF6EC7", "#FF7F00", "#8FBC8F", "#EAADEA",
            "#3299CC", "#CDCDCD", "#CC3299", "#FF7F00", "#2F4F4F",
        ],
        friendLinks: friendLinks,
        //自己的站点信息 我自己的站点描述 会显示在友情链接的底部
        siteInformation: {
            //站点标题
            title: "qsyyke",

            //自己站点链接
            url: "https://www.xcye.xyz/",

            //自己站点logo
            logo: "https://picture.xcye.xyz/avatar.jpg",

            //自己站点描述
            describe: "Aurora主题作者",
            cover: 'https://picture.xcye.xyz/image-20211112175421304.png?x-oss-process=style/pictureProcess1',

            //自己的头像
            contact: "如果你已经添加我站点，我很长时间还未添加，请联系我QQ: 2291308094,或者在说说处告诉我(先注册用户https://xcye.xyz/register，在发布说说/mood)，别评论",
            otherDescribe: [
                '申请友链请按照下面格式，在此页面评论或者先<a href="/register">注册</a>，再到<a href="/mood">说说</a>处留下你站点，我看到就会进行添加',
                '<label class="about-version friend-tag">博客名称</label><label class="about-version friend-tag">博客地址</label><label class="about-version friend-tag">博客描述</label><label class="about-version friend-tag">博客logo</label><label class="about-version friend-tag">博客封面</label>',
                '友链申请要求',
                '<label class="about-version about-goal about-fail">拒绝涉政/涉黄/太多广告/盈利性站点</label>',
                '<label class="about-version">站点能正常访问</label>',
            ]
        },

        //需要排除的标签，自动生成的标签中，不会有这个标签，这是一个数组
        excludeTag: [],

        //样式控制面板显示的字体，有默认值
        fontFamily: [
            "-apple-system", "hlt", "tzt", "sst", "lf", "xsf", "lsf", "cgt",
        ],

        //页脚信息，支持HTML，这是一个数组
        footer: [
            "Copyright © by qsyyke All Rights Reserved.",
            "<a target='_blank' href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=53060202000142' style='display:inline-block;text-decoration:none;height:20px;line-height:20px;'><img src='' style='float:left;'/><p style='float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px;'>滇公网安备 53060202000142号</p></a>",
        ],

        //是否显示页脚，控制全局
        isShowFooter: true,

        //是否显示主题信息在页脚，为false关闭
        isShowThemeCopyright: true,

        //是否展示运行时间
        isShowRunTime: true,

        //网站开始时间，请按照以下格式进行
        startRunTime: "8/7/2021 12:22:00",

        //网站运行时间前缀
        prefixRuntime: "小破站已运行",

        //公告，是一个数组，支持图片，HTML
        message: [
            '<a href="https://github.com/vuepress-aurora/vuepress-theme-aurora/releases/" target="_blank"><label class="about-version">Aurora V1.9.6</label></a>已经发布，欢迎各位尝鲜',
            '博客已开放说说功能,请先进行<a href="/register">注册</a>,然后在<a href="/mood">说说页面</a>点击点赞旁的那个编写，登录成功后，就可以发布说说啦╮(￣▽￣)╭',
            '评论和留言推荐在编写<a href="/mood">说说</a>，直接在页面底部评论我可能会看不到，username: <label class="about-version">user</label>,&nbsp;&nbsp;password: <label class="about-version">user123456</label>，禁止发布不正常言论(●￣(ｴ)￣●)',
            '<img src="https://ooszy.cco.vin/img/blog-note/image-20211015134525708.png"/>'
        ],

        //文章底部最大推荐文章数 默认值为30
        recommendPageLength: 30,

        //推荐列表标题为空时，就会使用这个进行代替，默认是`╮(￣▽￣)╭`
        recommendNoTitle: "╮(￣▽￣)╭",

        //tag页，没有标题时，代替文字 默认是下面这个
        tagNoTitle: "暂时还没有标题哟",

        //默认打开网站时的毛玻璃状态，TRUE表示默认开启毛玻璃效果
        isFitter: true,

        //tag页面，标签分割符 请不要传入一个空字符串，默认值就是' ' 一个空格
        split: "~",

        //赞赏信息
        donate: {

            //赞赏页面，支付二维码，推荐放置两张图片链接
            donateImg: [
                "https://ooszy.cco.vin/img/blog-public/wxpay.png",
                "https://ooszy.cco.vin/img/blog-public/zfbpay.jpg",
            ],

            //是否在文章页面显示赞赏 默认显示
            articlePage: true,

            //是否在关于页面显示 默认显示
            aboutPage: true,

            //显示在赞赏页面的信息
            donateProduct: [
                {
                    //名字
                    name: "古茗",

                    //图片地址
                    img: "https://ooszy.cco.vin/img/blog-note/image-20211112154421146.png?x-oss-process=style/pictureProcess1",

                    //价格
                    price: 10,

                    //前缀
                    prefix: "￥",
                },
                {
                    name: "烧奶珍珠奶茶",
                    img: "https://ooszy.cco.vin/img/blog-note/image-20211112154955370.png?x-oss-process=style/pictureProcess1",
                    price: 9,
                    prefix: "￥",
                },
                {
                    name: "酸奶",
                    img: "https://ooszy.cco.vin/img/blog-note/image-20211112155844042.png?x-oss-process=style/pictureProcess1",
                    price: 4,
                    prefix: "￥",
                },
                {
                    name: "其他",
                    img: "https://ooszy.cco.vin/img/blog-note/image-20211112160135405.png?x-oss-process=style/pictureProcess1",
                    price: '自定义',
                    prefix: "￥",
                },
            ],

            //是否显示在线支付的订单信息，如果需要开启，请自己写支付接口，自己修改源码，默认关闭
            onlineList: true,

            //用户赞赏列表数组
            donateList: [
                {
                    name: "冰糖指蜂蜜",
                    msg: "",
                    img: "https://ooszy.cco.vin/img/blog-note/image-20211112163454335.png?x-oss-process=style/pictureProcess1",
                    price: 10,
                    prefix: "￥",
                },
            ],
        },

        //评论配置 请自己查看文档配置 https://aurora.cco.vin/config/comment/
        comment: {
            //是否显示评论
            showComment: true,
            serverURL: 'https://qsyyke-aurora.vercel.app/',
            emojis: [
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
                'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili'
            ],
            avatar: 'monsterid'
        },

        //海报分享配置
        poster: {
            //博客描述
            description: "I do not follow,i lives is always all you want",

            //作者
            author: "シャオチェン",

            //博客前缀
            preBlog: "qsyyke",

            //海报博客名称后缀
            suffixBlog: " space",

            //头像，请放置在docs/public目录下，或者请保证此图片链接能够跨域访问，否则头像不能正常显示
            avatar: "/avatar.jpg",
        },

        //是否展示从网络上请求回来的说说 如果启用，请自己写后台服务，修改源码，目前暂未在主题中加入，期望在将来能够实现，组件位置docs/.vuepress/theme/lib/client/components/Mood.vue
        showOnlineMood: true,

        //自定义顶部图片
        customTopImg: {
            //是否启用定制顶部图片，控制全局，如果关闭，那么将使用随机图片，随机图片接口可以自己设置
            custom: false,

            //文章顶部图片，数组，每次从数组中随机选择一张
            page: [
                "https://picoss.cco.vin/animate/wall/555260.png",
                'https://picoss.cco.vin/animate/wall/404901.png',
                'https://picoss.cco.vin/animate/wall/734386.png'
            ],
            //友情链接页面
            friend: [
                "https://picoss.cco.vin/animate/wall/669.png",
                'https://picoss.cco.vin/animate/wall/5332.png'
            ],
            //标签页面
            tag: [
                "https://picoss.cco.vin/animate/wall/763311.png"
            ],
            //心情页面
            mood: [
                "https://picoss.cco.vin/animate/wall/5849.png"
            ],
        },

        //首页背景图片数组，考虑到使用随机图片，打开网站速度变慢，所以移除随机图片，使用自己设置的图片链接
        homeWps: [
            "/animate/1.jpg",
            "/animate/6.jpg",
            "/animate/7.jpg",
            "/animate/8.jpg",
            "/animate/10.jpg",
            "/animate/13.jpg",
            "/animate/14.jpg",
            "/animate/17.jpg",
            "/animate/18.jpg",
            "/animate/22.jpg",
        ],

        //手机端首页背景图片
        homeWpsMobile: [
            "/animate/8.jpg",
            "/animate/10.jpg",
            "/animate/13.jpg",
            "/animate/14.jpg",
            "/animate/17.jpg",
            "/animate/18.jpg",
            "/animate/22.jpg",
        ],
        //首页文章显示条数，默认为4，此值不推荐设置太大
        pageSize: 8,

        //侧边栏配置
        //github地址
        githubUrl: "https://github.com/qsyyke/vuepress-theme-aurora",

        //最新文章数量，默认为6
        latestPageSize: 6,

        //首页是否显示文章图片，默认关闭，如果显示的话，首页加载会非常慢 已弃用，从v1.3.2开始，直接移除首页文章内容图片
        showHomePageImg: false,

        //文章侧边栏自动获取的层次 默认为1，也就是http://localhost:8080/config/feature/donate.html,只会自动生成feature目录下的文件
        sidebarCatalogLevel: 1,

        //首页文章列表封面图api接口
        homePageImgApi: "https://pic-tool.xcye.xyz/pic/rmimg",

        //手机端侧边栏横线分割文字，默认为Aurora
        mobileCutText: "シャオチェン",

        //侧边栏标签处显示还是分类还是标签，，只有两个值，默认为分类，如果为tag，那么就显示为分类，否则显示为标签
        sidebarTag: "tag",

        //额外的功能，也就是样式控制面板上面那个，默认是关闭的
        showAddMood: false,
        //生成海报的顶部图片api接口，请注意，该接口需要直接返回图片地址，不能有跨域问题，设置之前，可以先使用ajax看是否存在跨域
        postImgApi: 'https://pic-tool.xcye.xyz/pic/rmimg?type=bing',
        sidebarAvatar: 'https://picture.xcye.xyz/avatar.jpg',
        categoriesIncludeFolderName: true,

        //首页波浪效果设置
        wave: {
            showWave: true
        },

        //顶部图片的气泡控制
        bubble: {
            show: true,

            //气泡数量 推荐0(不包括)到1之前的小数，
            bubbleNumber: 0.14,

            //气泡透明度 0到1之间的小数
            bubbleAlpha: 0.6,

            //透明度变化速度，越接近于0越好
            alphaChangeSpeed: 0.00001,

            //气泡大小，推荐0到1之间的值
            size: 0.4,

            //气泡大小变化速度 越小越好
            sizeChangeSpeed: 0.0002,

            //气泡上升速度
            riseSpeed: 0.4,

            //气泡颜色，白色rgb(255,255,255) 请传入255,255,255
            color: '255,255,255'
        },

        /**
         * 这里是配置统计阅读量的leanCloud配置，从1.9.0开始，将不再需要依赖waline的阅读统计,这里配置的appId,appKey,masterKey可以
         * 和vuepress-plugin-coze插件使用同一个应用
         * */
        leanCloud: {
            appId: '2A2Dyd2AffrnldhwftlEddVn-MdYXbMMI',
            appKey: 'qHYTbb91iOPLelyC9lpbXxLH',
            masterKey: 'eUwfvS3luIPnPiHS5SpEhDYr',
        },


        //这是v1.9.0新增加的功能 是否在文章页底部显示最后更新时间，贡献者，点击编辑,默认显示
        showPageMeta: true,

        /*
        * 以下是1.11.0版本新增的配置项
        * */

        //随机一言接口，请注意，一定要保证该接口直接返回Text文本，一定要保证该接口直接返回Text文本，而不是返回json
        randomSayApi: {
            method: 'GET',
            urlApi: 'https://v1.hitokoto.cn/?encode=text&c=a'
        },

        /*
        * 一下是v1.11.1版本增加的配置
        * */
        afDianUrl: 'https://afdian.net/@qsyyke',//你的爱发电个人页面地址

        /*
        * 下面这些是v1.12.0版本新增的配置项
        * */

        // 首页置顶文字
        homeTopText: '置顶',

        //侧边栏一句话描述
        sidebarDesc: '喜欢动漫，Coding目前是一名大三学生,CS专业,坐标西南边陲',

        /*
        * 下面的是v1.13.0版本的配置
        * */

        /*
        * 如果你以前使用的是其他的主题或者工具，比如hexo的主题，reco主题等等，发现frontmatter中的标签并不是使用tag字段设置，而是使用比如tags进行设置的
        * 那么你可以像customTagName: 'tags'自定义标签的字段，此配置仅仅针对于md文件设置的标签并不是使用tag字段，请注意，谨慎使用
        * */
        //customTagName: 'tags',

        /*
       * 如果你以前使用的是其他的主题，比如hexo，reco等等，发现frontmatter中的类别并不是使用categories字段，而是使用比如category进行设置的
       * 那么你可以像customCategoriesName: "category"这样自定义类别的字段，此配置仅仅针对于md文件设置的类别并不是使用categories字段，请注意，谨慎使用
       * */
        //customCategoriesName: "category",

        /*
        * 下面这个是v1.13版本新增的配置项
        * */

        //是否显示关于页面气泡效果 默认开启
        showAboutPageBubble: true,
    }
}