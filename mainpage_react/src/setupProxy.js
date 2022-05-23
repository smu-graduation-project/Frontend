const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/users',
        createProxyMiddleware({
            target: "http://220.149.31.104:9090",
            secure: false,
            changeOrigin: true,
        })
    );
};