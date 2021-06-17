<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-17 17:18:59
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-17 17:45:59
 * @Description:  菜单content
-->

<template>
  <div>
    <ReadOutlined />
    {{ menu.meta.title }}
  </div>
</template>

<script lang="ts">
import { ReadOutlined } from '@ant-design/icons-vue'

export default {
  name: 'MenuItemContent',
  components: {
    ReadOutlined
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
