class Http{
  request({url,data={},method}){
    return new Promise((resolve,reject)=>{
      this._request(url, resolve,reject,data,method)
    })
  }
  _request(url,resolve,reject,data = {}, method='GET'){
    wx.request({
      url:url,
      method,
      data,
      success:function(res){
        resolve(res)
      },
      fail:function(err){
        reject(err)
      }
    })
  }
}
export default Http