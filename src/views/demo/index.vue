<template>
  <!-- <div class="loading"></div> -->
  <button @click="test">test</button>
</template>

<script>
import { reactive, toRefs, getCurrentInstance } from 'vue'
export default {
  setup () {
    const instance = getCurrentInstance()
    const state = reactive({
      show: false
    })
    function test () {
      instance.proxy.$loading.show()

      setTimeout(() => {
        instance.proxy.$loading.hide()
      }, 1000)
    }
    return {
      ...toRefs(state),
      test
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  width: 50px;
  height: 50px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-left-color: rgb(137, 227, 243);
  animation: loading 1s infinite linear;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
