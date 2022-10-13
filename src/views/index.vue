<template>
  <div class="container mx-auto">
    <el-button type="primary">Primary1</el-button>
    <DarkModeToggle />
    <SwitchTheme />
    <SvgIcon size="14" name="quanxian" />
    <SwitchLanguage />
    <p>12312</p>
    <p>{{ $t('sys.hello') }}</p>
  </div>
</template>

<script setup lang="ts"></script>

<style>
a {
  width: 100%;
  font-weight: bold;
  background-color: #f0f2f5;
}
</style>
