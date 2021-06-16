<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-06-16 16:36:15
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-16 17:13:49
 * @Description:  Slider切换
-->

<template>
  <div class="sider-trigger" @click.stop="appStore.targetCollapsed">
    <double-right-outlined v-if="appStore.collapsed" />
    <double-left-outlined v-else />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { DoubleRightOutlined, DoubleLeftOutlined } from '@ant-design/icons-vue'
import { useAppStore } from '/@/store/modules/app'

export default defineComponent({
  name: 'SiderTrigger',
  components: { DoubleRightOutlined, DoubleLeftOutlined },
  setup () {
    const appStore = useAppStore()

    return { appStore }
  }
})
</script>

<style scoped lang="less">
.sider-trigger {
  // padding: 0 15px;
}
</style>
