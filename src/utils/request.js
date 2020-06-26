import axios from 'axios'

export function request(config) {
  const instance = new axios.create({
    baseURL: 'http://localhost:8381',
    withCredentials: true,
    timeout: 5000
  });

  // 请求拦截器
  instance.interceptors.request.use(config => {
    //在请求头中加token
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }
    //拦截后需要将拦截下来的请求数据返回发送
    return config;
  }, err => {
    return Promise.reject(error);
  });

  // 相应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  });

  return instance(config)
}
