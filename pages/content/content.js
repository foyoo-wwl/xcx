// pages/content/content.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    mapId:null,
    imgUrl:null,
    imgSaveFlag:false,
    contentArr:{}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const app = getApp()
    app.globalData.list.map((item)=>{
      if(item.id == options.id){
        this.setData({
          contentArr: item
        })
      }
    })


  },
  loadImg() {
    var vm = this
    wx.chooseImage({
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
        vm.setData({
          imgUrl: tempFilePaths
        })
      }
    })
  },
  submitArr(){
    wx.request({
      url: 'https://whzqd.scimall.org/index.php/index/index/to_assign',
      method:'get',
      data:{
        openid:'oFasN5Flk45a860Ms6M7e6cX7pOI',
        pcode:1,
        txt:'测试测试测试',
        pic: this.data.imgUrl[0]
      },
      formData:{
        'user':'test'
      },  
      success:(res)=>{
        console.log(res)
      }
    })
    // this.setData({
    //   imgSaveFlag:true
    // })
  },
  saveimg() {
    wx.downloadFile({
      url:'https://whzqd.scimall.org/static/index/img/demo.jpg',
      success: function (res) {
        if (res.statusCode === 200) {
          let img = res.tempFilePath;
          wx.saveImageToPhotosAlbum({
            filePath: img,
            success(res) {
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000,
                success:function(){
                  setTimeout(()=>{
                    wx.navigateBack()
                  },2000)         
                }
              })

            },
            fail(res) {
              console.log("失败")
            }
          });
        }
      }
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})