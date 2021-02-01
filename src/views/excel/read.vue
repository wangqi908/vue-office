<template>
  <div>
    <input type="file" @change="inpChange" />
    <div>{{ list }}</div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { readExcel } from '@/utils/excel'
export default {
  setup () {
    const state = reactive({
      list: []
    })
    async function inpChange (e) {
      const { files } = e.target
      const list = await readExcel(files[0])
      state.list = list
    }

    return {
      inpChange,
      ...toRefs(state)
    }
  }
}
</script>
