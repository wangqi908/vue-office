<template>
  <div class="demo">
    <button @click="msg">msg</button>
    <button @click="loading">loading</button>
  </div>
</template>

<script>
import { Message } from '@/plugins'
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    msg () {
      Message('aaa')
    },
    loading () {
      this.$loading.show()
      setTimeout(() => {
        this.$loading.hide()
      }, 1000)
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  position: fixed;
  top: 0;
  left: 50%;
  border: 1px solid #000;
}
.slid-enter-active,
.slid-leave-active {
  transition: opacity 0.5s ease;
}

.slid-enter-from,
.slid-leave-to {
  opacity: 0;
}
</style>
