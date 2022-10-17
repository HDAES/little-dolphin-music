<template>
  <el-color-picker v-model="color" show-alpha :predefine="predefineColors" @change="handleThemeChange" />
</template>

<script lang="ts" setup>
import { getOpacityColor } from '@/utils'
import { useAppStore } from '@/store/modules/app'
const { setPrimary, getPrimary } = useAppStore()

const color = ref(getPrimary)
const el = ref()
const predefineColors = ['#ff4500', '#ff8c00', '#ffd700', '#90ee90', '#00ced1', '#1e90ff', '#c71585']

onMounted(() => {
  el.value = document.documentElement
  el.value.style.setProperty(`--el-color-primary`, getPrimary)
  el.value.style.setProperty(`--el-color-info`, getPrimary)

  for (let i = 1; i < 10; i++) {
    el.value.style.setProperty(`--el-color-primary-light-${i}`, getOpacityColor(getPrimary, 1 - i / 10))
    el.value.style.setProperty(`--el-color-primary-dark-${i}`, getOpacityColor(getPrimary, 1 - i / 10))
  }
})

/**
 * 切换主题
 */
const handleThemeChange = (color: string | null): void => {
  if (!color) return
  setPrimary(color)
  el.value.style.setProperty(`--el-color-primary`, color)
  el.value.style.setProperty(`--el-color-info`, color)
  for (let i = 1; i < 10; i++) {
    el.value.style.setProperty(`--el-color-primary-light-${i}`, getOpacityColor(color, 1 - i / 10))
    el.value.style.setProperty(`--el-color-primary-dark-${i}`, getOpacityColor(color, 1 - i / 10))
  }
}
</script>
