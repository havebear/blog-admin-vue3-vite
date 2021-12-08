<!--
 * @Author: BGG
 * @Date: 2021-06-17 17:18:50
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-23 14:44:32
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
