<template>
  <el-icon :color="auto ? color : ''" :size="props.size">
    <slot></slot>
  </el-icon>
</template>

<script setup lang="ts">
import { ComputedRef } from 'vue'
import { useAppStore } from '@/store/modules/app'
const store = useAppStore()
const props = defineProps({
  size: {
    type: [Number, String],
    default: 16
  },
  /**
   * 自动适应 主体颜色
   */
  auto: {
    type: Boolean,
    default: true
  }
})

const color: ComputedRef<string> = computed((): string => store.getPrimary)
</script>
