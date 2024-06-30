// .vuepress/enhanceApp.js

import PageEncrypt from './components/PageEncrypt.vue';

export default ({ Vue, router, siteData }) => {
  Vue.component('PageEncrypt', PageEncrypt);
}
