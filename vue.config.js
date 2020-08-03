const proxy = require('http-proxy-middleware');
module.exports = {
  devServer: {
    port: 3333
    , proxy: {
      "/api": {
        target: "https://www.mjtweb.xyz", // 需要跨域的目标url，我这里用到的是豆瓣API
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
        ws: true,
        pathRewrite: {
          "^/api": ''
        }
      }
    }
  }
}