<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-17 17:08:23
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-23 14:33:54
 * @Description:  子菜单
-->

<template>
  <a-sub-menu v-if="menu.children && menu.children.length">
    <template #title>
      <menu-item-content :menu="menu" />
    </template>
    <template v-for="children in menu.children" :key="children.name">
      <menu-item :menu="children" />
    </template>
  </a-sub-menu>
  <menu-item v-else :menu="menu"></menu-item>
</template>

<script lang="ts">
import MenuItem from './MenuItem.vue'
import MenuItemContent from './MenuItemContent.vue'

export default {
  name: 'SubMenuItem',
  components: {
    MenuItem,
    MenuItemContent
  },
  props: {
    menu: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
