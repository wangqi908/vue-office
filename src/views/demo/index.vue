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

<script>
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
</script>

<style lang="scss" scoped></style>
