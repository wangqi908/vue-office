<template>
  <div class="home">
    <input v-model.trim="url" />
    <button @click="buildPdf">打印指定页面</button>
    <div>
      <object
        type="application/pdf"
        :data="pdfUrl"
        width="100%"
        height="800px"
      ></object>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { getPdfUrl } from './hooks/useBuildPdf'
export default {
  setup () {
    const state = reactive({
      url: '',
      pdfUrl: ''
    })

    async function buildPdf () {
      if (state.url === '') {
        return
      }
      state.pdfUrl = await getPdfUrl({ url: state.url })
    }

    return {
      ...toRefs(state),
      buildPdf
    }
  }
}
</script>
