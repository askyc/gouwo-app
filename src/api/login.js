import {request} from '../utils/request'

export function login(model) {
  return request({
    url: '/gouwo-people/user/login',
    method: 'post',
    data: model
  })
}
