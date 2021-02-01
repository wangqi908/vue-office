import req from './http.js'
export const pdfReq = data => req('pdf', data, 'arraybuffer') // 获取pdf
