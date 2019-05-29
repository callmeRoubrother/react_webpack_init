const path = require("path");

module.exports = {
  // 入口文件改为 .jsx 文件
  entry: "./src/index.jsx",
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        // include告诉wepback只对src下的js ，jsx文件进行babel转译，加快webpack的打包速度
        include: path.resolve(__dirname, "src"),
        use: "babel-loader"
      }
    ]
  }
};
