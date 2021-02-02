import { createApp } from 'vue'
import LoadingComponent from './LoadingComponent.vue'

/*
  import { getCurrentInstance } from 'vue'
  setup () {
    const instance = getCurrentInstance()
    function test () {
      instance.proxy.$loading.show()
      setTimeout(() => {
        instance.proxy.$loading.hide()
      }, 1000)
    }
    return {
      test
    }
  }
*/

export default {
  install: app => {
    const instance = createApp(LoadingComponent).mount(
      document.createElement('div')
    )
    document.body.appendChild(instance.$el)
    const loading = {
      show () {
        instance.show()
      },
      hide () {
        instance.hide()
      }
    }
    app.config.globalProperties.$loading = loading
  }
}
