<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-09 16:09:26
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-16 16:58:30
 * @Description:  菜单
-->

<template>
  <a-layout-sider :collapsed="collapsed" collapsible :trigger="null">
    <a-menu theme="dark" v-model:selectedKeys="selectedKeys" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>User</span>
            </span>
          </template>
          <a-menu-item key="3">Tom</a-menu-item>
          <a-menu-item key="4">Bill</a-menu-item>
          <a-menu-item key="5">Alex</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>Team</span>
            </span>
          </template>
          <a-menu-item key="6">Team 1</a-menu-item>
          <a-menu-item key="8">Team 2</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>File</span>
        </a-menu-item>
      </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  PieChartOutlined,
  DesktopOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons-vue'
import { mapState } from 'pinia'
import { useAppStore } from '/@/store/modules/app'

export default defineComponent({
  components: {
    PieChartOutlined,
    DesktopOutlined,
    UserOutlined,
    TeamOutlined,
    FileOutlined,
    // Editor
  },
  computed: {
    ...mapState(useAppStore, [ 'collapsed' ])
  },
  setup () {
    const appStore = useAppStore()
    const selectedKeys = ref<string[]>(['1'])

    return { appStore, selectedKeys }
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
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
