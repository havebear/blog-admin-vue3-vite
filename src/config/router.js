/*
 * @Author: 616749285@qq.com
 * @Date: 2021-06-17 16:59:53
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-17 17:00:02
 * @Description:  路由配置
 */

export const asyncRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/@/layout/default/index.vue'),
    children: [
      {
        path: 'article',
        name: 'Article',
        component: () => import('/@/views/article/index.vue'),
        meta: { title: '文章管理' }
      },
      {
        path: 'list',
        name: 'List',
        component: () => import('/@/views/list/index.vue'),
        meta: { title: '列表' }
      }
    ]
  },
  
]
