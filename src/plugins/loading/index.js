import instance from '@/plugins/loading/instance'
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
