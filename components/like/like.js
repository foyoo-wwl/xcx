// components/like/like.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      likeFlag:{
        type:Boolean
      },
      count:{ 
        type:Number,
        value:123
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
    handleLike(){
      if(this.properties.likeFlag){
        this.setData({
          likeFlag: false,
          count: this.properties.count-1
        })
      }else{
        this.setData({
          likeFlag: true,
          count: this.properties.count+1
        })        
      }
    }
  }
})
