<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-09 16:10:54
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-09 17:53:00
 * @Description:  tabs
-->

<template>
  <div class="layout-tabs">
    <a-tabs type="card" v-model:activeKey="activeKey">
      <a-tab-pane v-for="item in 30" :key="item" :tab="`标签 ${item}`">
        <template #tab>TEST</template>
      </a-tab-pane>
      <template #tabBarExtraContent>
        <span>刷新</span>
        <span>下拉菜单</span>
      </template>
    </a-tabs>
  </div>
</template>

<script lang="ts">

export default {
  components: {},
  data () {
    return {
      activeKey: 1
    }
  }
}
</script>

<style>

</style>
