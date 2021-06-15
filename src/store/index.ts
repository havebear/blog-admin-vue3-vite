/*
 * @Author: 616749285@qq.com
 * @Date: 2021-05-11 16:16:23
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-15 15:39:36
 * @Description:  store
 */

import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
  },
  actions: {
    increment(context) {
      context.commit('increment')
    }
  }
})
