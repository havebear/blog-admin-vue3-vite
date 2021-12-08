/*
 * @Author: BGG
 * @Date: 2021-06-17 16:59:53
 * @LastEditors: BGG
 * @LastEditTime: 2021-06-23 14:31:21
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
        meta: { title: '文章管理' },
        children: [
          {
            path: '/add',
            name: 'AddArticle',
            component: () => import('/@/views/article/index.vue'),
            meta: { title: '添加' }
          }
        ]
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
