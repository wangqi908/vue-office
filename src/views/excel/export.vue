<template>
  <div>
    <button @click="exportExcel">导出</button>
    <button @click="exportExcelWithStyle">导出(带样式)</button>
  </div>
</template>

<script>
import { useExportExcel, useExportExcelWithStyle } from './hooks'
export default {
  setup () {
    const { list } = require('@/assets/page.json')
    function exportExcel () {
      useExportExcel(list)
    }
    function exportExcelWithStyle () {
      useExportExcelWithStyle(list)
    }
    return {
      exportExcel,
      exportExcelWithStyle
    }
  }
}
</script>
