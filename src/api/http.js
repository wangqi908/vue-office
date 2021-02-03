import axios from 'axios'
import loading from '@/plugins/loading/instance'

const BASE_URL = 'http://localhost:3000/'
axios.defaults.baseURL = BASE_URL

// 添加请求拦截器
axios.interceptors.request.use(
  config => {
    console.log('request')
    loading.show()
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
axios.interceptors.response.use(
  response => {
    console.log('response')
    loading.hide()
    return response
  },
  error => {
    loading.hide()
    return Promise.reject(error)
  }
)

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
