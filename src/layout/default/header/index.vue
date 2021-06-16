<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-09 16:08:37
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-16 17:27:06
 * @Description:  默认布局header
-->

<template>
  <a-layout-header class="header" style="background: #fff; padding: 0; margin-bottom: 1px;">
    <div class="header-left">
      <sider-trigger class="header-action-item" />
      <breadcrumb />
    </div>
    <div class="header-right">
      <user />
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import Breadcrumb from '/@/components/breadcrumb'
import SiderTrigger from '../trigger/SiderTrigger.vue'
import User from './components/User.vue'

export default {
  components: {
    Breadcrumb,
    SiderTrigger,
    User
  }
}
</script>

<style scoped lang="less">
.header {
  height: 50px;
  display: flex;
  justify-content: space-between;
  line-height: 50px;
  &-left, &-right {
    display: flex;
    align-items: center;
  }
  &-action-item {
    padding: 0 10px;
    cursor: pointer;
    &:hover {
      background: #f3f3f3;
    }
  }
}
</style>
