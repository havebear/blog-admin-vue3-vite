<!--
 * @Author: BGG
 * @Date: 2021-06-16 16:36:15
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-17 11:16:15
 * @Description:  Slider切换
-->

<template>
  <div class="sider-trigger" @click.stop="targetCollapsed">
    <double-right-outlined v-if="collapsed" />
    <double-left-outlined v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons-vue'
import { mapState, mapActions  } from 'pinia'
import { useAppStore } from '/@/store/modules/app'

export default defineComponent({
  name: 'SiderTrigger',
  components: { DoubleRightOutlined, DoubleLeftOutlined },
  computed: {
    ...mapState(useAppStore, ['collapsed'])
  },
  methods: {
    ...mapActions(useAppStore, ['targetCollapsed'])
  }
  // setup () {
  //   const appStore = useAppStore()

  //   return { appStore }
  // }
})
</script>

<style scoped lang="less">
.sider-trigger {
  // padding: 0 15px;
}
</style>
