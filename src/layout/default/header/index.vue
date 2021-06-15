<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-09 16:08:37
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-11 16:12:21
 * @Description:  默认布局header
-->

<template>
  <a-layout-header class="header" style="background: #fff; padding: 0; margin-bottom: 1px;">
    <div class="header-left">
      <span>收起</span>
      <span>面包屑导航栏</span>
    </div>
    <div class="header-action">
      <div class="header-action-item">
        <a-avatar>USER</a-avatar>
        <span>Admin</span>
      </div>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped="less">
.header {
  display: flex;
  justify-content: space-between;
}
</style>
