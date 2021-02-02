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
// import {  getCurrentInstance } from 'vue'
import { getPdfUrl } from './hooks/useBuildPdf'
export default {
  setup () {
    // const instance = getCurrentInstance()
    const state = reactive({
      url: '',
      pdfUrl: ''
    })

    async function buildPdf () {
      if (state.url === '') {
        return
      }
      // instance.proxy.$loading.show()
      state.pdfUrl = await getPdfUrl({ url: state.url })
      // instance.proxy.$loading.hide()
    }

    return {
      ...toRefs(state),
      buildPdf
    }
  }
}
</script>
