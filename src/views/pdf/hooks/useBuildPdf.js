import axios from 'axios'

// 循环list
function getListHtml (list) {
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

// 设置模板
export function setHtml (data) {
  const { code, companyName, list } = data
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
          ${getListHtml(list)}
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
}

// 获取html后和css的str
export function getStr (targetElement) {
  const htmlStr = targetElement.getElementsByClassName('pdf-page')[0].innerHTML
  const styleStr = targetElement.getElementsByTagName('style')[0].innerHTML
  return {
    htmlStr,
    styleStr
  }
}

// 请求获取生成pdf
export async function getPdfUrl (data) {
  const res = await axios({
    method: 'post',
    url: 'http://localhost:3000/pdf',
    responseType: 'arraybuffer',
    headers: {
      Accept: 'application/pdf'
    },
    data
  })
  const blob = new Blob([res.data], { type: 'application/pdf' })
  return URL.createObjectURL(blob)
}
