import { createApp } from 'vue'
import { setupStore } from '/@/store'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const app = createApp(App)

setupStore(app)
app.use(router)
app.use(Antd)
app.mount('#app')
