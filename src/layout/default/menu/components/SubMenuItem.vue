<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-17 17:08:23
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-17 17:35:37
 * @Description:  子菜单
-->

<template>
  <a-sub-menu v-if="menu.children">
    <template #title>
      <menu-item-content :menu="menu" />
      <template v-for="childrenItem in item.children" :key="childrenItem.path">
        <menu-item :menu="childrenItem" />
      </template>
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
