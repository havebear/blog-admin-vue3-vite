/*
 * @Author: 616749285@qq.com
 * @Date: 2021-05-11 16:10:17
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-05-11 16:32:25
 * @Description:  路由
 */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/setting',
    name: 'Article',
    component: () => import('../views/article/index.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
