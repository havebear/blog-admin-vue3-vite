/*
 * @Author: 616749285@qq.com
 * @Date: 2021-06-16 16:03:45
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-16 16:30:46
 * @Description:  
 */

import { defineStore } from 'pinia'

export const useAppStore = defineStore({
  id: 'app',
  state () {
    return {
      collapsed: false
    }
  },
  getters: {},
  actions: {
    targetCollapsed () {
      this.collapsed = !this.collapsed
    }
  }
})
