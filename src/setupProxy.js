const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://s3.amazonaws.com',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
      onProxyReq: (proxyReq, req, res) => {
        console.log('Proxy Request:', req.url); // Log the request URL
      },
      onProxyRes: (proxyRes, req, res) => {
        console.log('Proxy Response Status:', proxyRes.statusCode); // Log the response status
      },
    })
  );
};