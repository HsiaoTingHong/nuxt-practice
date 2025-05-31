// eslint 設定檔
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    // 加在這裡，只影響 .vue
    files: ['**/*.vue'],
    rules: {
      // 關閉標籤時不需換行
      'vue/html-closing-bracket-newline': 'off',
      // 不限制每行屬性數，避免強制換行
      'vue/max-attributes-per-line': 'off',
    },
  },
  {
    // 加在這裡，全域生效
    rules: {
      'no-console': 'warn', // 使用 console 時顯示警告提示
      'no-var': 'error', // 禁止使用 var
      'eqeqeq': 'error', // 使用嚴格相等運算子
      'max-len': ['error', { code: 100 }], // 限制每行長度最多 100 個字元
      'nuxt/nuxt-config-keys-order': 'off', // 關閉 Nuxt 配置鍵順序檢查
      'vue/multi-word-component-names': 'off', // 關閉 Vue 組件名稱必須為多字詞的檢查
    },
  },
);
