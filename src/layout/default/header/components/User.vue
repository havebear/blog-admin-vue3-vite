<!--
 * @Author: BGG
 * @Date: 2021-06-16 17:14:28
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-16 17:26:05
 * @Description:  用户信息&下拉
-->

<template>
  <a-dropdown>
    <div class="header-user">
      <a-avatar :size="24" :src="avatar">USER</a-avatar>
      <span class="header-user-name">Admin</span>
    </div>
    <template #overlay>
      <a-menu>
        <a-menu-item>
          <a href="javascript:;">1st menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">2nd menu item</a>
        </a-menu-item>
        <a-menu-item>
          <a href="javascript:;">3rd menu item</a>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HeaderUser',
  setup () {
    const avatar = 'https://images.pexels.com/photos/7955130/pexels-photo-7955130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'

    return { avatar }
  }
})
</script>

<style scoped lang="less">
.header-user {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  &:hover {
    background: #f3f3f3;
  }
  &-name {
    margin-left: 10px;
  }
}
</style>
