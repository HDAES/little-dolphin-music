<template>
  <div class="default-layout">
    <div class="default-layout-container">
      <Header />
      <el-container style="flex: 1; overflow: hidden">
        <Aside />
        <AppMain />
      </el-container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Header from '@/layouts/default/components/Header/index.vue'
import Aside from '@/layouts/default/components/Aside/index.vue'
import AppMain from '@/layouts/default/components/AppMain/index.vue'
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

    display: flex;
    height: 90vh;
    overflow: hidden;
    border-radius: 30px;
    box-shadow: 0 5px 16px #0000001a;
    flex-direction: column;
  }
}
</style>
