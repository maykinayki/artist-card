const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(proxy("/api", {
        target: "https://rest.bandsintown.com",
        pathRewrite: {"^/api": ""},
        changeOrigin: true
    }));
};