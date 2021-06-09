<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-09 16:05:56
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-09 17:40:57
 * @Description:  默认布局
-->

<template>
  <layout class="default-layout">
    <layout-menu />
    <layout>
      <layout-header />
      <layout>
        <layout-tabs/>
        <layout-content />
      </layout>
    </layout>
  </layout>
</template>

<script lang="ts">
import { Layout } from 'ant-design-vue'

import LayoutMenu from './menu/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutTabs from './tabs/index.vue'
import LayoutContent from './content/index.vue'

export default {
  components: {
    Layout,
    LayoutMenu,
    LayoutHeader,
    LayoutTabs,
    LayoutContent
  }
}
</script>

<style scoped lang="less">
.default-layout {
  height: 100vh;
}
</style>