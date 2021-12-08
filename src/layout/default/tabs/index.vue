<!--
 * @Author: BGG
 * @Date: 2021-06-09 16:10:54
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-16 17:53:30
 * @Description:  tabs
-->

<template>
  <div class="layout-tabs">
    <a-tabs v-model:activeKey="activeKey" type="editable-card" size="small" hide-add :tab-bar-style="{ padding: '5px 0', marginBottom: 0, background: '#fff' }">
      <a-tab-pane v-for="item in 30" :key="item" :tab="`标签 ${item}`">
        <template #tab>TEST</template>
      </a-tab-pane>
      <template #tabBarExtraContent>
        <span>
          <reload-outlined spin />
        </span>
        <span>下拉菜单</span>
      </template>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { ReloadOutlined } from '@ant-design/icons-vue'

export default {
  components: {
    ReloadOutlined
  },
  data () {
    return {
      activeKey: 1
    }
  }
}
</script>

<style scoped lang="less">

</style>
