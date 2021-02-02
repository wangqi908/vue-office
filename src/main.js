import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/reset.scss'
import { components } from '@/components'
import Loading from '@/plugins/loading/index.js'

createApp(App)
  .use(router)
  .use(Loading)
  .use(components)
  .mount('#app')
