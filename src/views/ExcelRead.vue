<template>
  <div>
    <input type="file" @change="inpChange" />
  </div>

  <div>{{ list }}</div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { readExcel } from '@/utils/excel'
export default {
  name: 'ExcelRead',
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
