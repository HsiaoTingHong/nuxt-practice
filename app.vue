<template>
  <!-- 將 hidden 加在 <body> 層級 -->
  <div hidden master-css-hide>
    <v-app>
      <NuxtPage />
    </v-app>
  </div>
</template>

<script setup>
// 防止 MasterCSS 自動初始化
useHead({
  script: [
    { children: 'window.MasterCSSManual = true;' },
  ],
});
// plugins\mastercss.client.ts 手動初始化 MasterCSS 後，手動觸發顯示
onMounted(() => {
  document.querySelector('[master-css-hide]')?.removeAttribute('hidden');
});
</script>
