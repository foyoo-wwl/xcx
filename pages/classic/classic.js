// pages/classic/classic.js
import {axios} from './../../utils/util.js'
import Axios from './../../modules/axios.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    demoList:[1,2,3],
    currentTime:null,
    naviList:[],
    currentIndex:0,
    totalLength:null
  },
  getTime(){
    setInterval(()=>{
      var time = new Date()
      this.setData({
        currentTime: time.toLocaleTimeString()
      })      
    },1000)
  },
  imgNext(event){
    if (this.data.currentIndex == this.data.totalLength-1) {
    }else{
      this.setData({
        currentIndex: this.data.currentIndex + 1
      })
    }

  },
  imgPrev(event){
    if (this.data.currentIndex==0){
    }else{
      this.setData({
        currentIndex: this.data.currentIndex - 1
      })    
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getTime()
    var _axios = new Axios()
    _axios.getNavi({
      url:"/navi"
    }).then((res)=>{
      this.setData({
        naviList: res.list,
        totalLength:res.list.length
      })
    })
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