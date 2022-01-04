const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/contact/send', {
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};