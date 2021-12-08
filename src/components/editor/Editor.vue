<!--
 * @Author: BGG
 * @Date: 2021-05-15 20:34:51
 * @LastEditors: BGG
 * @LastEditTime: 2021-05-15 22:01:45
 * @Description:  富文本编辑器
-->

<template>
  <div ref='editor'>TEST</div>
</template>

<script lang="ts">
import WangEditor from 'wangeditor'
import { defineComponent, onMounted, onBeforeUnmount, ref, reactive } from 'vue'

export default defineComponent({
  name: 'Editor',
  step () {
    const editor = ref()
    let instance = null

    onMounted(() => {
      console.log('创建')
      // console.log(ref())
      // console.log(editor)
      instance = new WangEditor(editor.value)
      console.log(instance)
      Object.assign(instance.config, {
        onchange() {
          console.log('change')
        } 
      })
      instance.create()
    })

    onBeforeUnmount(() => {
      instance.destroy()
      instance = null
    })

    return { editor }
  }
})
</script>

<style>

</style>
