// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    naviTxt:{
      type:String
    },
    isFirst:{
      type:Boolean,
      value:true
    },
    isLast:{
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    jay:'chou'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    naviLeft(){
      this.triggerEvent('leftHandle', {}, {})
    },
    naviRight() {
      this.triggerEvent('rightHandle', {}, {})
    }
  }
})
