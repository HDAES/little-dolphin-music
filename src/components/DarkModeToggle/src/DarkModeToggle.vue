<template>
  <div class="dark:bg-black bg-dark-700 dark-model" @click="toggleDark()">
    <div class="slider" :style="cls"></div>
    <SvgIcon size="14" name="sun" />
    <SvgIcon size="14" name="moon" />
  </div>
</template>

<script lang="ts" setup>
const isDark = useDark()
const toggleDark = useToggle(isDark)

const cls = ref()

watchEffect(() => {
  cls.value = {
    left: (isDark.value ? 25 : 3) + 'px'
  }
})
</script>

<style lang="scss" scoped>
.dark-model {
  position: relative;
  display: flex;
  width: 50px;
  height: 26px;
  cursor: pointer;
  border: 1px solid var(--el-text-color-regular);
  border-radius: 30px;
  justify-content: space-around;
  align-items: center;

  .slider {
    position: absolute;
    left: 5px;
    width: 20px;
    height: 20px;
    background-color: #f3f4f6;
    border-radius: 50%;
    transition: all 0.5s;
  }
}
</style>
