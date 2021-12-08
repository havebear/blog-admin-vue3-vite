/*
 * @Author: BGG
 * @Date: 2021-05-11 16:10:17
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-17 17:00:27
 * @Description:  路由
 */

import { createRouter, createWebHistory } from 'vue-router'
import { asyncRoutes as routes } from '/@/config/router'

export default createRouter({
  history: createWebHistory(),
  routes
})
