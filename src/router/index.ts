/*
 * @Author: 616749285@qq.com
 * @Date: 2021-05-11 16:10:17
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-09 17:39:07
 * @Description:  路由
 */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/layout/default/index.vue'),
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
