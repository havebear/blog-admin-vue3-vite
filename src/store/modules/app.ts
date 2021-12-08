/*
 * @Author: BGG
 * @Date: 2021-06-16 16:03:45
 * @LastEditors: BGG
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
