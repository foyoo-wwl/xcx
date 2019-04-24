import {config} from './../config.js'
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const axios =(params)=>{
  return new Promise((resolve,rejevt)=>{
    wx.request({
      url: config.baseUrl + params.url,
      data: params.data ? params.data:{},
      method:'get',
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        resolve(res)
      }
    })
  })
}

export {axios}