<!--
 * @Author: 616749285@qq.com
 * @Date: 2021-05-11 16:08:22
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-05-12 21:26:58
 * @Description:  首页
-->

<template>
  <div>
    首页<router-link to="/article">文章</router-link>
    <router-view />
    <relationship-map />
  </div>
</template>

<script>
import RelationshipMap from '/@/components/relationship-map'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    RelationshipMap
  },
  data () {
    return {
      treeData: [
        {
          id: 'a',
          title: 'A',
          children: [
            {
              id: 'a-1',
              title: 'A-1'
            },
            {
              id: 'a-2',
              title: 'A-2'
            }
          ]
        }
      ]
    }
  }
})
</script>

<style>

</style>
