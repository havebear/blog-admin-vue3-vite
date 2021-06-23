<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-17 17:18:50
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-23 14:34:21
 * @Description:  
-->

<template>
  <a-menu-item :key="menu.name">
    <menu-item-content :menu="menu" />
  </a-menu-item>
</template>

<script lang="ts">
import MenuItemContent from './MenuItemContent.vue'

export default {
  name: 'MenuItem',
  components: {
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
