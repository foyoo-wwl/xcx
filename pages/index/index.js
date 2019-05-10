//index.js
//获取应用实例d
const app = getApp()
const common = require('mudule.js')
Page({
  data: {
    text:'demo',
    openId:'',
    isUserSetting:true,
    postArr:{},
    ruleFlag:false
  },
  //事件处理函数
  onLoad: function (options) {
    console.log(options)
    this.ifGetSetting()
  },
  bindGetUserInfo(e){
    let postArr = this.data.postArr
    this.getOpenId(postArr)
    this.setData({
      isUserSetting: false
    })    
  },
  goRule(){
    this.setData({
      ruleFlag:true
    })
  },
  ifGetSetting(){
    let postArr = {}
    wx.login({
      success: res => {
        postArr.loginCode = res.code
        this.setData({
          postArr:{
            loginCode:res.code
          }
        })
        wx.getSetting({
          success: res => {
            if (res.authSetting['scope.userInfo']) {
              this.setData({
                isUserSetting:false
              }, this.getOpenId(postArr))
            }
          }
        })
      }
    })
  }, 
  getOpenId(arr){
    const app = getApp();
    wx.getUserInfo({
      success: res => {
        // 可以将 res 发送给后台解码出 unionId
        arr.nickName = res.userInfo.nickName
        arr.avatarUrl = res.userInfo.avatarUrl
        // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
        // 所以此处加入 callback 以防止这种情况
        wx.request({
          url: 'https://whzqd.scimall.org',
          data: arr,
          success(res) {
            app.globalData.openId = res.data.openid
          }
        })
      }
    })
  },
  jumpPost(e){
    wx.navigateTo({
      url: "/pages/content/content?id=" + e.target.dataset.id
    })
  }
})
