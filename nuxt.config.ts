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
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [
      vuetify({
        autoImport: true,
      }),
    ],
  },
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
