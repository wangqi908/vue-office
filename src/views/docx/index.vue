<template>
  <div>
    <button @click="down">下载</button>
  </div>
</template>

<script>
import { docxExport } from '@/utils/docx'
export default {
  setup () {
    function down () {
      const data = {
        firstName: 'John',
        lastName: 'Doe',
        phone: '0652455478',
        description: 'New Website',
        avatar: require('@/assets/img/avatar.jpg'),
        list: [
          {
            name: '张三',
            hobby: '抽烟',
            image: require('@/assets/img/aa.jpg')
          },
          {
            name: '李四',
            hobby: '喝酒',
            image: require('@/assets/img/bb.jpg')
          },
          {
            name: '王五',
            hobby: '烫头',
            image: require('@/assets/img/cc.jpg')
          }
        ],
        /*
        嵌套对象语法
        https://github.com/open-xml-templating/docxtemplater/issues/243
        {#address}{city}{/address}
       */
        address: {
          city: 'London',
          postal: 24324
        }
      }
      const obj = {
        data,
        fileName: '文档',
        fileUrl: `..${location.pathname}template.docx`,
        forceHeight: 100, // 如果没传入setSize,默认图片高度60,宽度自适应
        setSize (tagName) {
          // 处理图片宽高方法
          if (tagName === 'image') {
            return [60, 60]
          }
        }
      }
      docxExport(obj)
    }
    return {
      down
    }
  }
}
</script>
