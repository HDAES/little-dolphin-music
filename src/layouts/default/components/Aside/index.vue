<template>
  <el-scrollbar class="aside">
    <Logo />
  </el-scrollbar>
</template>
<script lang="ts" setup>
import Logo from './components/Logo.vue'
</script>
<style lang="scss" scoped>
.aside {
  @apply border-default-bg dark:border-dark-50;

  width: 220px;
  height: 100%;
  border-right-width: 1px;
}
</style>
