import axios from 'axios'

const http = axios.create({
  baseURL: 'http://200.194.176.205:8080',
  
  headers: {
    authorization: 'Bearer 123'
  }
})

export default http
