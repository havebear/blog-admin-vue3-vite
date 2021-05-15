/*
 * @Author: 616749285@qq.com
 * @Date: 2021-05-11 16:10:17
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-05-12 11:14:38
 * @Description:  路由
 */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/views/home/index.vue'),
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () => import('/@/views/article/index.vue')
      }
    ]
  },
  
]

export default createRouter({
  history: createWebHistory(),
  routes
})