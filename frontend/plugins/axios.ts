import axios from 'axios'

export default function ({ $axios }) {
  // $axios.onRequest((config) => {
  //   config.headers['accessToken'] = window.localStorage.getItem('JWT')
  //   config.headers['token-type'] = window.localStorage.getItem('token-type')
  //   config.headers['Authorization'] = window.localStorage.getItem('accessToken')
  // })
  // $axios.onResponse((response) => {
  //   if (response.headers.client) {
  //     localStorage.setItem('accessToken', response.headers['JWT'])
  //     localStorage.setItem('token-type', response.headers['token-type'])
  //     localStorage.setItem('Authorization', response.headers['JWT'])
  //   }
  // })
}
