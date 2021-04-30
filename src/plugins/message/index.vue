<template>
  <teleport to="body">
    <transition name="msg" mode="out-in" appear @after-leave="$emit('destroy')">
      <div class="message-mask" v-if="visible" @click.self="close">
        <div class="content">
          <div class="smg">
            <div>{{ msg }}</div>
          </div>
          <div class="btn" @click="close">
            <span>{{ btnValue }}</span>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  emits: ['destroy'],
  props: {
    message: {
      default: ''
    },
    btnValue: {
      type: String,
      default: '知道了'
    }
  },
  setup (props) {
    const msg = ref(props.message)
    const visible = ref(true)
    function close () {
      visible.value = false
    }
    return { msg, visible, close }
  }
})
</script>

<style lang="scss" scoped>
.message-mask {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  z-index: 10;
}
.content {
  position: absolute;
  top: 30%;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 8px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  flex-direction: column;
  min-width: 160px;
  max-width: 280px;
  .smg {
    font-size: 16px;
    padding: 8px 10px;
    border-bottom: 1px solid #dbdbdb;
    text-align: center;
  }
  .btn {
    height: 44px;
    min-height: 44px;
    line-height: 44px;
    color: #0076ff;
    font-size: 17px;
    text-align: center;
  }
}
</style>
