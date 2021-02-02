<template>
  <div class="loading-mask" v-if="isShow">
    <div class="loading-box">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'loading',
  setup () {
    const isShow = ref(false)

    const show = () => {
      isShow.value = true
    }

    const hide = () => {
      isShow.value = false
    }

    return {
      isShow,
      show,
      hide
    }
  }
}
</script>

<style scoped>
.loading-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
}
.loading-box {
  width: 80px;
  height: 40px;
  margin: 0 auto;
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading-box span {
  display: inline-block;
  width: 8px;
  height: 100%;
  border-radius: 4px;
  background: lightgreen;
  animation: load 1s ease infinite;
}
@keyframes load {
  0%,
  100% {
    height: 40px;
    background: lightgreen;
  }
  50% {
    height: 70px;
    margin: -15px 0;
    background: lightblue;
  }
}
.loading-box span:nth-child(2) {
  animation-delay: 0.2s;
}
.loading-box span:nth-child(3) {
  animation-delay: 0.4s;
}
.loading-box span:nth-child(4) {
  animation-delay: 0.6s;
}
.loading-box span:nth-child(5) {
  animation-delay: 0.8s;
}
</style>
