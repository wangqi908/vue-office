<template>
  <div class="home">
    <button @click="buildPdf">生成PDF</button>
    <div class="pdf-box">
      <div v-html="htmlStr" class="pdf-content" ref="pdfContent"></div>
    </div>
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
import { reactive, toRefs, onMounted } from 'vue'
import { setHtml, getStr, getPdfUrl } from './hooks/useBuildPdf'
export default {
  setup () {
    const state = reactive({
      info: {
        code: '111',
        companyName: '上海海骄',
        list: [
          {
            name: 'zs',
            url:
              'http://p1.music.126.net/ZcmEqGGeKPuguGEzf1oU-w==/17990209253940562.jpg',
            id: 1
          },
          {
            name: 'ls',
            url:
              'http://p1.music.126.net/HIvYLxhz-t28kjeG8pVwqA==/109951165342855986.jpg',
            id: 2
          },
          {
            name: 'wu',
            url:
              'http://p1.music.126.net/7Icb_OAEhFNlUZ9vjG8S7w==/109951165460466338.jpg',
            id: 3
          }
        ]
      },
      pdfContent: null, // pdfContent dom元素
      htmlStr: '', // html结构字符串
      pdfUrl: '' // pdf地址
    })

    async function buildPdf () {
      const { htmlStr, styleStr } = getStr(state.pdfContent)
      state.pdfUrl = await getPdfUrl({ htmlStr, styleStr })
    }

    onMounted(() => {
      state.htmlStr = setHtml(state.info)
    })

    return {
      ...toRefs(state),
      buildPdf
    }
  }
}
</script>

<style lang="scss" scoped>
.pdf-box {
  border: 2px solid #ccc;
  margin: 10px;
  padding: 10px;
}
</style>
