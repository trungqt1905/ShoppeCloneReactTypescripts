import axios, { AxiosError, type AxiosInstance } from 'axios'
import HttpStatusCode from 'src/constants/HttpStatusCode.enum'
import { toast } from 'react-toastify'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    })
    // Add a request interceptor
    this.instance.interceptors.request.use(
      function (response) {
        return response
      },
      function (error: AxiosError) {
        // Nếu như status trả về khác với 422 thì sẽ báo lỗi ở đây (lỗi 422 sẽ báo ở dưới)
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance

export default http
