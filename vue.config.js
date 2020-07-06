const path = require('path');
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  // 输出文件目录
  outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  /**
   * webpack配置,see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
   **/
  chainWebpack: (config) => {
  },
  configureWebpack: (config) => {
    // config.resolve = { // 配置解析别名
    //   extensions: ['.js', '.json', '.vue'],
    //   alias: {
    //     '@': path.resolve(__dirname, './src'),
    //     'public': path.resolve(__dirname, './public'),
    //     'components': path.resolve(__dirname, './src/components'),
    //     'common': path.resolve(__dirname, './src/common'),
    //     'api': path.resolve(__dirname, './src/api'),
    //     'views': path.resolve(__dirname, './src/views'),
    //     'data': path.resolve(__dirname, './src/data')
    //   }
    // }
  },
  // 生产环境是否生成 sourceMap 文件
  productionSourceMap: false,
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      // 如发现 css.modules 报错，请查看这里：http://www.web-jshtml.cn/#/detailed?id=12
      sass: { 
        prependData: `@import "./src/styles/main.scss";`
      }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  /**
   *  PWA 插件相关配置,see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
   */
  pwa: {},
  // webpack-dev-server 相关配置
  devServer: {
    open: false, // 编译完成是否打开网页
    host: '0.0.0.0', // 指定使用地址，默认localhost,0.0.0.0代表可以被外界访问
    port: 8080, // 访问端口
    https: false, // 编译失败时刷新页面
    hot: true, // 开启热加载
    hotOnly: false,
    proxy: null, // 设置代理
    overlay: { // 全屏模式下是否显示脚本错误
      warnings: true,
      errors: true
    },
    before: app => {
    }
  },
  /**
   * 第三方插件配置
   */
  pluginOptions: {}
}


//另一个

// module.exports = {
//     /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
//     /* baseUrl: process.env.NODE_ENV === 'production' ? './' : '/' */
//     publicPath: process.env.NODE_ENV === 'production' ? '/public/' : './',
//     /* 输出文件目录：在npm run build时，生成文件的目录名称 */
//     outputDir: 'dist',
//     /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
//     assetsDir: "assets",
//     /* 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度 */
//     productionSourceMap: false,
//     /* 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。(false的时候就是让原来的文件名不改变) */
//     filenameHashing: false,
//     /* 代码保存时进行eslint检测 */
//     lintOnSave: true,
//     /* webpack-dev-server 相关配置 */
//     devServer: {
//         /* 自动打开浏览器 */
//         open: true,
//         /* 设置为0.0.0.0则所有的地址均能访问 */
//         host: '0.0.0.0',
//         port: 8066,
//         https: false,
//         hotOnly: false,
//         /* 使用代理 */
//         proxy: {
//             '/api': {
//                 /* 目标代理服务器地址 */
//                 target: 'http://47.100.47.3/',
//                 /* 允许跨域 */
//                 changeOrigin: true,
//             },
//         },
//     },
// }

//

// // Vue.config.js 配置选项

// module.exports = {
//   // 选项

//   //  基本路径

//   publicPath: "./", //  构建时的输出目录

//   outputDir: "dist", //  放置静态资源的目录

//   assetsDir: "static", //  html 的输出路径

//   indexPath: "index.html", //文件名哈希

//   filenameHashing: true, //用于多页配置，默认是 undefined

//   pages: {
//     index: {
//       // page 的入口文件

//       entry: "src/index/main.js", // 模板文件

//       template: "public/index.html", // 在 dist/index.html 的输出文件

//       filename: "index.html", // 当使用页面 title 选项时， // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>

//       title: "Index Page", // 在这个页面中包含的块，默认情况下会包含 // 提取出来的通用 chunk 和 vendor chunk。

//       chunks: ["chunk-vendors", "chunk-common", "index"],
//     }, // 当使用只有入口的字符串格式时， // 模板文件默认是 `public/subpage.html` // 如果不存在，就回退到 `public/index.html`。 // 输出文件默认是 `subpage.html`。

//     subpage: "src/subpage/main.js",
//   }, //  是否在保存的时候使用 `eslint-loader` 进行检查。

//   lintOnSave: true, //  是否使用带有浏览器内编译器的完整构建版本

//   runtimeCompiler: false, //  babel-loader 默认会跳过 node_modules 依赖。

//   transpileDependencies: [
//     /* string or regex */
//   ], //  是否为生产环境构建生成 source map？

//   productionSourceMap: true, //  设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。

//   crossorigin: "", //  在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。

//   integrity: false, //  调整内部的 webpack 配置

//   configureWebpack: () => {}, //(Object | Function)

//   chainWebpack: () => {}, // 配置 webpack-dev-server 行为。

//   devServer: {
//     open: process.platform === "darwin",

//     host: "0.0.0.0",

//     port: 8080,

//     https: false,

//     hotOnly: false, // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理

//     proxy: {
//       "/api": {
//         target: "http://app.rmsdmedia.com",

//         changeOrigin: true,

//         secure: false,

//         pathRewrite: {
//           "^/api": "",
//         },
//       },

//       "/foo": {
//         target: "<other_url>",
//       },
//     }, // string | Object

//     before: (app) => {},
//   }, // CSS 相关选项

//   css: {
//     // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)

//     // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象

//     extract: true, // 是否开启 CSS source map？

//     sourceMap: false, // 为预处理器的 loader 传递自定义选项。比如传递给 // Css-loader 时，使用 `{ Css: { ... } }`。

//     loaderOptions: {
//       css: {
//         // 这里的选项会传递给 css-loader
//       },

//       postcss: {
//         // 这里的选项会传递给 postcss-loader
//       },
//     }, // 为所有的 CSS 及其预处理文件开启 CSS Modules。 // 这个选项不会影响 `*.vue` 文件。

//     modules: false,
//   }, // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader` // 在多核机器下会默认开启。

//   parallel: require("os").cpus().length > 1, // PWA 插件的选项。 // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md

//   pwa: {}, // 三方插件的选项

//   pluginOptions: {
//     // ...
//   },
// };
