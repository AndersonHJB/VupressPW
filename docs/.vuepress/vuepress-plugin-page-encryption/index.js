const { path } = require('@vuepress/utils');
const { createPage } = require('@vuepress/core');

module.exports = (options, app) => {
  return {
    name: 'vuepress-plugin-page-encryption',

    async onInitialized(app) {
      const { encryptedPages } = options;

      for (const page of encryptedPages) {
        const encryptedPage = await createPage(app, {
          path: page.path,
          frontmatter: {
            ...page.frontmatter,
            encrypted: true,
          },
          content: page.content,
        });
        app.pages.push(encryptedPage);
      }
    },

    clientAppEnhanceFiles: path.resolve(__dirname, 'src/client/index.js'),

    define: {
      __ENCRYPTED_PAGES__: options.encryptedPages,
    },
  };
};
