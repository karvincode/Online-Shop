const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:8080",
      changeOrigin: true,
      buffer: {
        // Adjust the buffer size as needed
        // Default value is 'stream'
        size: 16384, // 16KB
      },
    })
  );
};