<template>
  <teleport to="body">
    <div class="dialog-com">
      <div
        :class="['dialog-mask', show ? 'dialog-show' : '']"
        @click="closeModal"
      >
        <div class="dialog-box" :style="{ top }" @click.stop="">
          <div class="dialog-title" v-if="title !== ''">{{ title }}</div>
          <div class="dialog-line"></div>
          <div class="dialog-content">
            <!-- <slot name="content"></slot> -->
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
/*
  <template>
    <div>
      <h3>Tooltips with Vue 3 Teleport</h3>
      <h4>{{ show }}</h4>
      <button @click="show = true">
        Open full screen modal!
      </button>
      <div>
        <Modal v-model:show="show" title="标题">
          <p>Here's some contact info</p>
          <!-- <template v-slot:content>
            <p>Here's some contact info</p>
          </template> -->
        </Modal>
      </div>
    </div>
  </template>

  import { reactive, toRefs } from 'vue'
  export default {
    setup () {
      const state = reactive({
        show: false
      })
      return {
        ...toRefs(state)
      }
    }
  }
*/
import { reactive, toRefs, watch } from 'vue'
export default {
  props: {
    show: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '25vh'
    },
    title: {
      type: String
    }
  },
  emits: ['update:show'],
  setup (props, context) {
    const state = reactive({
      modalOpen: props.show
    })
    function closeModal () {
      state.modalOpen = false
      context.emit('update:show', false)
    }

    watch(
      () => props.show,
      val => {
        state.modalOpen = val
      }
    )
    return {
      ...toRefs(state),
      closeModal
    }
  }
}
</script>

<style lang="scss" scoped>
.dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
  z-index: 20;
  .dialog-box {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    margin: 0 auto 50px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  .dialog-title {
    border-bottom: 1px solid #ccc;
    padding: 4px;
    color: #999;
  }
  .dialog-content {
    padding: 10px;
    font-size: 26px;
    background-color: #fff;
  }
}

.dialog-show {
  visibility: visible;
  opacity: 1;
  transition: all 0.3s;
}
</style>
