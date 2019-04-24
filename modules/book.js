import Http from '../utils/http.js'

class BookModel extends Http{
  getHotList(){
    return this.request({
      url:"https://api.apiopen.top/getImages",
      method:"post"
    })
  }
}
export default BookModel
