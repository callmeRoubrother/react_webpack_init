const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 设置为生产 production 模式
  // 生产模式默认会将js代码压缩
  // 如果你好奇打包后的文件长什么样子
  // 可以将mode设置为 ‘development’，将devtool设置为‘none ’
  mode: "production",
  //设置入口文件
  entry: "./src/index.js",
  output: {
    // 设置出口文件名
    filename: "main.js",
    // 设置出口文件的目录
    path: path.resolve(__dirname, "dist"),
    publicpath: "/"
  },
  resolve: {
    //设置拓展，这样导入文件时可以省去写拓展名
    extensions: [".js", ".json", ".jsx"]
  },
  modules: {
    rules: [
      {
        // 对 .js或 .jsx结尾的文件使用babel-loader进行转译
        // babel-loader的配置放到 .babelrc文件内
        test: /\.jsx?$/,
        use: "babel-loader"
      },
      {
        // 对css文件先后使用css-loader和style-loader
        // css-loader可以将导入项目的css变为js模块
        // style-loader可以让页面打开时，利用js将css模块内的样式注入到html头部的style标签内
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        // 使用file-loader来加载图片文件
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: "file-loader"
      }
    ]
  },
  plugins: [
    // 该插件能将生成的入口js文件注入到模版html内
    new HtmlWebpackPlugin({
      // 设置模版的路径
      template: "./src/template.html",
      // 设置favicon的路径
      favicon: "./src/assets/favicon.png"
    })
  ]
};
