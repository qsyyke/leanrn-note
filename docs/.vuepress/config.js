const { themeConfig } = require("./themeConfig");
const { path } = require("@vuepress/utils");
module.exports = {
    bundler: '@vuepress/bundler-webpack',
    //设置head 一定要加入<script src="https://at.alicdn.com/t/font_2849934_v6y652peian.js"></script>项配置，否则一些图标不能正常显示
    head: [
        [
            'link',
            {
                rel: 'icon',
                type: 'image/png',
                href: 'https://ooszy.cco.vin/img/blog-public/avatar.jpg'
            }
        ],
        [
            "script",
            {
                src: "https://at.alicdn.com/t/font_2849934_v6y652peian.js",
            },
        ],
        ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
        [
            "link",
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: '//at.alicdn.com/t/font_2932340_r7zitafg82.css'
            }
        ]
    ],
    plugins: [
        [
          '@vuepress/plugin-search',
          {
            locales: {
              '/': {
                placeholder: 'Search',
              },
              '/zh/': {
                placeholder: '搜索',
              },
            },
          },
        ],
        // [
        //     '@vuepress/plugin-google-analytics',
        //     {
        //       id: 'G-K9JPQX63G6',
        //     },
        // ],
        // ['@vuepress/plugin-pwa'],
        // [
        //   '@vuepress/plugin-pwa-popup',
        //   {
        //     locales: {
        //       '/': {
        //         message: 'New content is available.',
        //         buttonText: 'Refresh',
        //       },
        //       '/zh/': {
        //         message: '发现新内容可用',
        //         buttonText: '刷新',
        //       },
        //     },
        //   },
        // ],
        [
          'vuepress-plugin-coze',
          {
              appId: 'pgOPlNNdMBjb8EfGSrI3S8pG-MdYXbMMI',
              appKey: 'CNUsYlbxSzyyvUrHeJzPAR6D',
              masterKey: 'sEP8cvkDARKgQD2WWDEOtirT',
              //下面这些是可选的
              avatarPath: 'https://pciture.xcye.xyz/avatar-aurora.png',//说说头像url
              registerPath: '/register', //自定义插件默认提供的注册页面路由，请在前面加上/
              onlyAdministrator: false //是否运行其他注册的用户发布说说，true表示只有管理员可以发布
          }
        ],
        [
          'player',
          {
              //网易云单个歌单id
              songIds: ['29723011','1887893189','1421069053'],
              //网易云歌单
              playlist: '2158538331',
              showPlaylist: false,
              //是否禁用网易云音乐，如果你选择禁用，那么就将使用本地的歌曲，请传入链接
              disabledNetEaseMusic: true,

              //请求接口的baseURL
              serverUrl: 'https://netease-cloud-music-api-aurora.vercel.app/',

              //本地歌曲
              localSongs: {
                  coverUrl: 'https://ooszy.cco.vin/img/blog-public/avatar.jpg',
                  songs: [
                      {
                          path: 'https://ooszy.cco.vin/music/Love%20Story.mp3',
                          //     http://m7.music.126.net/20211122125449/21a6c99de4d0329ee6df753bcda3c007/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/2987355982/92c3/233a/d483/f901cdf76a32c8b912e80c093cc71cdc.mp3
                          songName: 'Love Story',
                          cover: 'https://p1.music.126.net/JoVareIX82eEzbrYtJLAPA==/109951165084884378.jpg'
                      },
                      {
                          path: '/song/1.mp3',
                          songName: '歌曲1',
                          cover: 'https://p1.music.126.net/Rg1x9LeUacIDqtvUzL35Cw==/109951163688517312.jpg'
                      },
                      {
                          path: '/song/2.mp3',
                          songName: '歌曲2',
                          cover: 'https://p2.music.126.net/8mnn6YiQldsRIHe_nER8wg==/109951162894925733.jpg'
                      },
                      {
                          path: '/song/3.mp3',
                          songName: '歌曲3'
                      },
                      // {
                      //     path: "http://m7.music.126.net/20211122092052/e6d52978be8f3002441302937b7ecd4b/ymusic/0f0f/075f/0509/8e8b7515950561ea4ab02cba20d24ce9.flac",
                      //     songName: "初恋",
                      //     cover: "https://p2.music.126.net/5GPFbTQU-kW57PGv_7LeBw==/109951164440649436.jpg"
                      // },
                      // {
                      //     path: "http://m8.music.126.net/20211122092052/c965ca78d8c69804e49d562e5af95b17/ymusic/045d/525a/0009/3791f4c4f1e0fa437e257cf89e237b64.flac",
                      //     //     http://m7.music.126.net/20211122125827/b19be18343d63f7f91bcb71820981f62/ymusic/045d/525a/0009/3791f4c4f1e0fa437e257cf89e237b64.flac
                      //     songName: "暗恋是一个人的事",
                      //     cover: "https://p1.music.126.net/1VyUObcNZ1skcN5zavYqSg==/109951164238719593.jpg"
                      // }
                  ]
              }
          }
      ],
      [
          'bubble',
          {
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
              color: '255,255,255',

              zIndex: -2
          }
      ],
      [
          'archive',
          {
              //需要排除的页面url， 在该数组里面的路径，都不会被统计
              excludes: ['/404.html','/about/','/mood/','/link/','/tag/','/photo/'],
              //当某篇文章没有标题时，将使用下面值进行替换
              noTitle: '暂时没有标题配置'
          }
      ],
    ],
    theme: 'aurora',
    // theme: path.resolve(__dirname, "../../Aurora-theme/lib/node/index.js"),
    themeConfig
};
