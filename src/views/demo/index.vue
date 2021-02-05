<template>
  <div class="demo">
    <button @click="add">Add</button>

    <transition name="slid">
      <div class="box">aa</div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      items: []
    }
  },
  methods: {
    add () {
      console.log(11)
      axios('http://localhost:3000/').then(res => {
        console.log(res)
      })
      axios.post('http://localhost:3000/post').then(res => {
        console.log(res)
      })
      // this.items.splice(0, 0, '信息' + this.items.length)
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
