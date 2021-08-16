
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/anandtyagi/Desktop/music_dash/.cache/dev-404-page.js")),
  "component---src-pages-blog-index-js": preferDefault(require("/Users/anandtyagi/Desktop/music_dash/src/pages/blog/index.js")),
  "component---src-pages-blog-mdx-slug-js": preferDefault(require("/Users/anandtyagi/Desktop/music_dash/src/pages/blog/{mdx.slug}.js")),
  "component---src-pages-dashboard-js": preferDefault(require("/Users/anandtyagi/Desktop/music_dash/src/pages/dashboard.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/anandtyagi/Desktop/music_dash/src/pages/index.js")),
  "component---src-pages-login-js": preferDefault(require("/Users/anandtyagi/Desktop/music_dash/src/pages/login.js"))
}

