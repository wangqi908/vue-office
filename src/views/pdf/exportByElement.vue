<template>
  <div class="home">
    <button @click="addPdf">生成PDF</button>
    <div class="pdf-box">
      <div v-html="htmlStr" class="pdf-content" ref="pdfContent"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data () {
    return {
      htmlStr: '',
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
      }
    }
  },
  methods: {
    getSelfPayHtml () {
      const { code, companyName, list } = this.info
      const html = `
          <div class="pdf-page">
            <div class="info-box">
              <div>
                订单号
              ${code}
              </div>
              <div>
                公司
              ${companyName}
              </div>
              <div>
                HTML TO PDF 
              </div>
            </div>
            <div class="img-list">
              ${this.getListHtml(list)}
            </div>
          </div>
        `
      const style = `
        .info-box {
            border: 2px solid rgb(207, 59, 59);
            padding: 20px;
            // page-break-after: always;
          }
          .img-box {
            border: 2px solid rgb(110, 33, 211);
            page-break-inside: avoid;
            background-color: #fff;
            margin: 10px;
            margin-bottom: 50px;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .img-box .title {
            margin-bottom: 10px;
            font-size: 14px;
          }
          .img-box .img {
            width: 400px;
            height: auto;
          }
        `
      return `<html><head><style>${style}</style></head><body>${html}</body></html>`
    },

    addPdf () {
      const targetElement = this.$refs.pdfContent

      const htmlStr = targetElement.getElementsByClassName('pdf-page')[0]
        .innerHTML
      const styleStr = targetElement.getElementsByTagName('style')[0].innerHTML
      console.log(htmlStr, styleStr)
      axios
        .post('http://localhost:3000/pdf', {
          styleStr,
          htmlStr
        })
        .then(response => {
          console.log(response)
        })
    },
    getListHtml (list) {
      const htmlArr = list.map(item => {
        return `
            <div class="img-box">
                <div class="title">
                   ${item.name}
                </div>
                <img class="img" src="${item.url}" alt="" />
              </div>
          `
      })

      return htmlArr.join('')
    }
  },
  mounted () {
    this.htmlStr = this.getSelfPayHtml()
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
