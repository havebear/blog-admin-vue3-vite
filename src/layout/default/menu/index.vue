<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-09 16:09:26
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-23 14:47:36
 * @Description:  菜单
-->

<template>
  <a-layout-sider :collapsed="collapsed" collapsible :trigger="null">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :sub-menu-open-delay="0.2"
      @click="handleMenuClick">
      <sub-menu-item v-for="item in asyncRoutes[0].children" :key="item.name" :menu="item" />
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import router from '/@/router'
import SubMenuItem from './components/SubMenuItem.vue'
import { defineComponent, ref } from 'vue'
import { PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined } from '@ant-design/icons-vue'
import { mapState } from 'pinia'
import { useAppStore } from '/@/store/modules/app'
import { asyncRoutes } from '/@/config/router'

export default defineComponent({
  components: {
    SubMenuItem,
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    // Editor
  },
  computed: {
    ...mapState(useAppStore, ["collapsed"]),
  },
  setup() {
    const appStore = useAppStore()
    const selectedKeys = ref<string[]>(["1"])

    /** 点击菜单 */
    function handleMenuClick ({ key: name }) {
      router.push({ name })
    } 

    return {
      appStore,
      selectedKeys,
      asyncRoutes,
      handleMenuClick
    }
  }
})
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #141414;
}
</style>
