import {config} from './../config.js'
class Axios{
  getNavi(params){
      return new Promise((resolve, rejevt) => {
        wx.request({
          url: config.baseUrl + params.url,
          data: params.data ? params.data : {},
          method: 'get',
          header: {
            'content-type': 'application/json'
          },
          success(res) {
            if(res.data.code === 0){
              resolve(res.data.data)
            }       
          }
        })
      })
  }
}
export default Axios