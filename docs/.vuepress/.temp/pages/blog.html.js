import comp from "/Users/huangjiabao/GitHub/WebSite/vpn/docs/.vuepress/.temp/pages/blog.html.vue"
const data = JSON.parse("{\"path\":\"/blog.html\",\"title\":\"Secret Page\",\"lang\":\"en-US\",\"frontmatter\":{\"layout\":\"Layout\"},\"headers\":[],\"git\":{\"updatedTime\":1719727011000,\"contributors\":[{\"name\":\"AndersonHJB\",\"email\":\"aiyuechuang@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"blog.md\"}")
export { comp, data }

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
