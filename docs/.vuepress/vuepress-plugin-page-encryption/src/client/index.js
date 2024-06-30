import { defineClientAppEnhance } from '@vuepress/client';
import EncryptionComponent from './components/EncryptionComponent.vue';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  router.beforeEach((to, from, next) => {
    const encryptedPage = __ENCRYPTED_PAGES__.find(page => page.path === to.path);

    if (encryptedPage && !to.query.password) {
      router.replace({
        path: '/encryption',
        query: { redirect: to.fullPath },
      });
    } else {
      next();
    }
  });

  app.component('EncryptionComponent', EncryptionComponent);
});
