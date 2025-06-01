// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@pinia/nuxt',
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      // 編譯階段處理 Vuetify 樣式與自動引入
      vuetify({
        autoImport: true, // 自動引入元件
        // 客製 Sass 變數（grid、間距等)，需要時再加 assets/css/vuetify.scss
        // styles: { configFile: 'assets/css/vuetify.scss' },
      }),
    ],
    define: {
      'process.env.DEBUG': false, // 關閉 Vuetify 的 debug log
    },
  },
  // 註冊 plugins
  plugins: [
    '~/plugins/vuetify.ts', // 通知 Nuxt 使用這個 plugin
  ],
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  eslint: {
    checker: true,
    config: {
      stylistic: {
        indent: 2, // 使用 2 個空格縮排
        semi: true, // 強制使用分號
        quotes: 'single', // 強制使用單引號
        commaDangle: 'always-multiline', // 多行時最後一個元素後有逗號
      },
    },
  },
});
