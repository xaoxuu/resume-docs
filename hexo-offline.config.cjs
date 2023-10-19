// hexo-offline v2 版写法
// https://github.com/JLHwung/hexo-offline
module.exports = {
    globPatterns: ["**/*.{js,html,css,png,jpg,gif,svg,eot,ttf,woff,woff2}"],
    globDirectory: "public",
    swDest: "public/service-worker.js",
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/,
            handler: "CacheFirst"
        },
        {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/,
            handler: "CacheFirst"
        },
    ]
}