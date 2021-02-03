import { createApp } from 'vue'
import LoadingComponent from '@/plugins/loading/LoadingComponent.vue'
const instance = createApp(LoadingComponent).mount(
  document.createElement('div')
)
document.body.appendChild(instance.$el)
export default instance
