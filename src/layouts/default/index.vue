<template>
  <div class="default-layout">
    <div class="default-layout-container">
      <Header />
      <Page />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Page from '@/layouts/page/index.vue'
import Header from '@/layouts/default/components/header/index.vue'
</script>

<style lang="scss" scoped>
.default-layout {
  @apply bg-default-bg dark:bg-dark-800;

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  &-container {
    @apply bg-white container dark:bg-dark-400;

    height: 90vh;
    border-radius: 30px;
    box-shadow: 0 5px 16px #0000001a;
  }
}
</style>
