/*
 * @Author: 616749285@qq.com
 * @Date: 2021-06-16 15:43:20
 * @LastEditors: 616749285@qq.com
 * @LastEditTime: 2021-06-16 15:43:20
 * @Description:  
 */


import type { App } from 'vue'
import { createPinia } from 'pinia'
const store = createPinia()

export function setupStore(app: App<Element>) {
  app.use(store)
}

export { store }