/**
 * @Desc 全局配置
 */
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          // '/api':''
        }
      }
    }
  }
};
