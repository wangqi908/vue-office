import Docxtemplater from 'docxtemplater'
import { saveAs } from 'file-saver'
import PizZip from 'pizzip'
import * as PizZipUtils from 'pizzip/utils'
import ImageModule from 'docxtemplater-image-module-free' // https://www.npmjs.com/package/docxtemplater-image-module-free

/**
 * @method 生成word文件
 * @param  Object data模板数据, fileName输出文件名, fileUrl模板路径,forceHeight 数字 图片高度固定,宽度自适应
 * @return Promise
 * @example
      const data = {
        first_name: 'John',
        last_name: 'Doe',
        phone: '0652455478',
        description: 'New Website'
        avatar: require('../static/avatar.jpg'),
        list: [
          {
            name: '张三',
            hobby: '抽烟',
            image: require('../static/aa.jpg')
          },
          {
            name: '李四',
            hobby: '喝酒',
            image: require('../static/bb.jpg')
          },
          {
            name: '王五',
            hobby: '烫头',
            image: require('../static/cc.jpg')
          }
        ],
        address: {
          city: 'London',
          postal: 24324
        }
      }
      const obj = {
        data,
        fileName: '文档',
        fileUrl: `..${location.pathname}template.docx`,
        forceHeight: 60, // 如果没传入setSize,默认图片高度60,宽度自适应
        setSize (tagName) {
          // 处理图片宽高方法
          if (tagName === 'image') {
            return [200, 300]
          }
        }
      }
      嵌套对象语法
      https://github.com/open-xml-templating/docxtemplater/issues/243
      {#address}{city}{/address}
      wordExport(obj).then(res => {
        console.log(res)
      })
 */
export function docxExport ({
  data,
  fileName,
  fileUrl,
  forceHeight = 100,
  setSize
}) {
  return new Promise((resolve, reject) => {
    PizZipUtils.getBinaryContent(fileUrl, (error, content) => {
      if (error) {
        reject(error)
      }
      const opts = {}
      opts.centered = false // Set to true to always center images

      // Pass your image loader
      opts.getImage = function (tagValue, tagName) {
        return new Promise(function (resolve, reject) {
          PizZipUtils.getBinaryContent(tagValue, function (error, content) {
            if (error) {
              return reject(error)
            }
            return resolve(content)
          })
        })
      }

      // Pass the function that return image size
      opts.getSize = function (img, tagValue, tagName) {
        return new Promise(function (resolve, reject) {
          const image = new Image()
          image.src = tagValue
          image.onload = function () {
            const sizeArr = setSize(tagName)
            if (sizeArr) {
              resolve(sizeArr)
            } else {
              const ratio = forceHeight / image.height
              const ratioWidth = Math.round(image.width * ratio)
              resolve([ratioWidth, forceHeight])
            }
          }
          image.onerror = function (e) {
            console.log('img, tagValue, tagName : ', img, tagValue, tagName)
            reject(e)
          }
        })
      }

      const imageModule = new ImageModule(opts)

      const zip = new PizZip(content)

      const doc = new Docxtemplater()
        .loadZip(zip)
        .attachModule(imageModule)
        .compile()
      doc.resolveData(data).then(function () {
        doc.render()
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        })
        saveAs(out, `${fileName}.docx`)
        resolve(true)
      })
    })
  })
}
