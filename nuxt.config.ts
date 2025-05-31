// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxt/eslint'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
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
