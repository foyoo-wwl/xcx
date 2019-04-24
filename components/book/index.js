// components/book/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bookObj:{
      type: Object,
      value: {
        img: 'http://ww2.sinaimg.cn/large/610dc034jw1f9vyl2fqi0j20u011habc.jpg',
        id: 278
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    linkPageDetail(){
      wx.navigateTo({
        url: '/pages/bookdetail/bookdetail?id=' + this.data.bookObj.id,
      })
    }
  }
})
