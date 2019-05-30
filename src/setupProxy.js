const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://devfintech.cgws.com:8443',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  );
};
