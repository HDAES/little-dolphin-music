<template>
  <div class="header">
    <div style="width: 220px">
      <div class="menu-circle"></div>
    </div>

    <div class="container">
      <el-space size="14">
        <EpIcon :auto="false">
          <i-ep-arrow-left-bold />
        </EpIcon>

        <EpIcon :auto="false">
          <i-ep-arrow-right-bold />
        </EpIcon>
      </el-space>

      <el-input placeholder="Please input" class="search-input">
        <template #append>
          <i-ep-search />
        </template>
      </el-input>

      <div class="login-btn">登录</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  @apply border-default-bg dark:border-dark-50 flex flex-row;

  height: 50px;
  padding: 0 20px;
  border-bottom-width: 1px;
  border-top-right-radius: 30px;
  border-top-left-radius: 30px;
  align-items: center;

  .menu-circle {
    width: 15px;
    height: 15px;
    background-color: #f96057;
    border-radius: 50%;
    box-shadow: 24px 0 #f8ce52, 48px 0 #5fcf65;
    flex-shrink: 0;
  }

  .container {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;

    .search-input {
      width: 500px;
      padding-left: 20px;
    }

    .login-btn {
      margin-left: auto;
      font-size: 14px;
      cursor: pointer;
    }
  }
}
</style>
