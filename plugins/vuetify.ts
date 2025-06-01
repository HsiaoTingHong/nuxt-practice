import { createVuetify } from 'vuetify';

// 元件與指令
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true, // SSR 支援
    components,
    directives,
    // 自訂顏色
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1976D2',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify); // 在 Nuxt 中真正掛載 Vuetify
});
