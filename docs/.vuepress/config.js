import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
// import { path } from '@vuepress/utils';
import path from 'path';  // 正确从 node 导入 path
const encryptedPages = [
  {
    path: '/blog.html',
    content: 'This is a secret page content.',
    passwords: [
      { value: 'password1', expiry: '2024-12-31' },
      { value: 'password2', expiry: -1 },
    ],
  },
  // Add more encrypted pages as needed
];


export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  plugins: [
    ['vuepress-plugin-page-encryption', { encryptedPages }],
  ],
})