import axios from 'axios'
const BASE_URL = 'http://localhost:3000/'
axios.defaults.baseURL = BASE_URL
export default function (url, data = {}, method = 'GET') {
  method = method.toLowerCase()
  if (method === 'post') {
    return axios.post(url, data)
  } else if (method === 'get') {
    return axios.get(url, {
      data
    })
  } else if (method === 'delete') {
    return axios.delete(url, data)
  } else if (method === 'put') {
    return axios.put(url, data)
  } else if (method === 'arraybuffer') {
    // 文件流
    return axios({
      method: 'post',
      url,
      data,
      responseType: 'arraybuffer',
      headers: {
        Accept: 'application/pdf'
      }
    })
  } else {
    console.error('未知的method' + method)
    return false
  }
}
