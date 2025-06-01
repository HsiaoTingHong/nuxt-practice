// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error: vite config.plugins 的類型中未定義 vuetify plugin，但實際上是有效的
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
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
