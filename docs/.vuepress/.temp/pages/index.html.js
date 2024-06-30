import comp from "/Users/huangjiabao/GitHub/WebSite/vpn/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"一个受保护的页面\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"一个受保护的页面\",\"passwordProtected\":true,\"passwords\":[{\"password\":\"secret\",\"expiry\":\"2025-01-01\"},{\"password\":\"forever\",\"expiry\":\"-1\"}]},\"headers\":[],\"git\":{\"updatedTime\":1719727011000,\"contributors\":[{\"name\":\"AndersonHJB\",\"email\":\"aiyuechuang@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")
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
