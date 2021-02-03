import req from './http.js' // 获取pdf
export const pdfReq = data => req('pdf', data, 'arraybuffer')
