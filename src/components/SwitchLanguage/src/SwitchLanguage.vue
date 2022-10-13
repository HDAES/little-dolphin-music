<template>
  <el-dropdown @command="handleCommand">
    <SvgIcon size="24" name="yuyan" />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="zh_CN">简体中文</el-dropdown-item>
        <el-dropdown-item command="en">English</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useLocale } from '@/locales/useLocale'

import { useGlobalStorage } from '@/storage'

const Storage = useGlobalStorage()

const { changeLocale } = useLocale()

const handleCommand = (locale: LocaleType) => {
  changeLocale(locale)

  Storage.language.value = locale
}
</script>
