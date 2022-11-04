export const data = {
  "key": "v-652c9652",
  "path": "/javascript/production.html",
  "title": "生产模式介绍",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "生产模式准备",
      "slug": "生产模式准备",
      "children": [
        {
          "level": 3,
          "title": "1. 文件目录",
          "slug": "_1-文件目录",
          "children": []
        },
        {
          "level": 3,
          "title": "2. 修改 webpack.dev.js",
          "slug": "_2-修改-webpack-dev-js",
          "children": []
        },
        {
          "level": 3,
          "title": "3. 修改 webpack.prod.js",
          "slug": "_3-修改-webpack-prod-js",
          "children": []
        },
        {
          "level": 3,
          "title": "4. 配置运行指令",
          "slug": "_4-配置运行指令",
          "children": []
        }
      ]
    }
  ],
  "git": {},
  "filePathRelative": "javascript/production.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}