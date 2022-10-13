<script setup lang="ts">
import zh_CN from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import { useGlobalStorage } from '@/storage'
const Storage = useGlobalStorage()

let locales = { zh_CN, en }
</script>

<template>
  <el-config-provider
    size="default"
    :zIndex="3000"
    :locale="locales[Storage.language.value]"
    :button="{ autoInsertSpace: false }"
  >
    <router-view />
  </el-config-provider>
</template>
