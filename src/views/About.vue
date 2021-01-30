<template>
  <div class="test">
    <button @click="toggle">toggle</button>
      <div class="num" v-if="show">55</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup () {
    const state = reactive({
      show: true
    })
    function toggle () {
      state.show = !state.show
    }
    return {
      toggle,
      ...toRefs(state)
    }
  }
}
</script>

<style lang="scss" scoped>
// .fade-enter-active,
// .fade-leave-active {
//   transition: all 0.3s ease-out;
// }

// .fade-enter-from,
// .fade-leave-to {
//   transform: translateX(20px);
//   opacity: 0;
// }
</style>
