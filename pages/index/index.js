import request from "../../service/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    bannerList: [],
    // 推荐数据
    recommendList: [],
    // 热歌榜
    topList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    // 获取轮播图数据
    const bannerData = await request('/banner', { type: 2 })
    // 设置数据
    this.setData({
      bannerList: bannerData.banners
    })

    // 获取推荐数据
    const recommendData = await request('/personalized', { limit: 10 })
    this.setData({
      recommendList: recommendData.result
    })

    // 获取热门数据
    let index = 0
    let resultArr = []
    //  发送五次请求
    while (index < 5) {
      // 发送请求
      let topListData = await request('/top/list', { idx: index++ })
      // 接口复杂，简化数据
      let topListItem = {name:topListData.playlist.name,tracks:topListData.playlist.tracks.slice(0,3)}
      // 加入数组
      resultArr.push(topListItem)

      this.setData({
        topList: resultArr
      })
    }

    


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