import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/style/reset.scss'
import { components } from '@/components'

createApp(App)
  .use(router)
  .use(components)
  .mount('#app')
