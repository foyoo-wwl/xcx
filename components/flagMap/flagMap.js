// components/flagMap/flagMap.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mapArr:{
      type:Object
    },
    like:{
        type:Number,
        value:123
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    
  },
  created() {
  },
  /**
   * 组件的方法列表
   */
  methods: {
    jumpPost(){
      wx.navigateTo({
        url: '/pages/content/content?id=' + this.properties.mapArr.id,
      })
    }
  }
})
