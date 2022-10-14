<template>
  <svg :class="[$attrs.class, spin && 'svg-icon-spin']" :style="getStyle" aria-hidden="true">
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script setup lang="ts">
import type { ComputedRef, CSSProperties } from 'vue'

import { useAppStore } from '@/store/modules/app'
const store = useAppStore()
const props = defineProps({
  prefix: {
    type: String,
    default: 'icon'
  },
  name: {
    type: String,
    required: true
  },
  size: {
    type: [Number, String],
    default: 16
  },
  spin: {
    type: Boolean,
    default: false
  }
})

const color: ComputedRef<string> = computed((): string => store.getPrimary)

const symbolId = computed(() => `#${props.prefix}-${props.name}`)

const getStyle = computed((): CSSProperties => {
  const { size } = props
  let s = `${size}`
  s = `${s.replace('px', '')}px`
  return {
    width: s,
    height: s
  }
})
</script>
