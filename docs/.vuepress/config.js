import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'



export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme(),
  passwords: {
    '/blog.html': [
      { password: '123456', expiry: '2024-12-31' },
      { password: 'abcdef', expiry: -1 }  // 永久有效
    ]
  }
})