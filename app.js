//app.js
App({
  onLaunch: function () {
    // 登录

  },
  demo(){
    console.log('here')
  },
  onshow(){
    this.demo()
    this.wwl()
  },
  wwl(){
    console.log('wwl')
  },
  globalData: {
    userInfo: null,
    globalData: 'I am global data',
    loginCode:null,
    postArr:{
      loginCode:null,
      nickName:null,
      avatarUrl:null
    },
    openId:null,
    isUserSetting:false,
    list:null
  }
})