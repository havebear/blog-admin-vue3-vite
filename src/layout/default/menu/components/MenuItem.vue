<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-17 17:18:50
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-17 17:45:18
 * @Description:  
-->

<template>
  <menu-item>
    <menu-item-content :menu="menu" />
  </menu-item>
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
