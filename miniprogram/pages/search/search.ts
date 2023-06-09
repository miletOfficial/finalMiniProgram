// pages/search/search.ts


import {getHotSongs,getTopSongs} from "../../api/index"

Page({

  /**
   * 页面的初始数据
   */


  data: {
    "hotSongs":[] as Array<Object>,
    "keyWords":'' as string,
    "isGoSearch": false as boolean

  },

  initData(){
    getHotSongs().then((res:any)=>{
        this.setData({
          hotSongs:res.data.data
        })
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
      this.initData()
  },
  goSearch(e:any){
    console.log(e.detail.value)
    this.setData({
      isGoSearch:true
    })
    getTopSongs(e.detail.value).then((res:any)=>{
        console.log(res.data.result.songs)
        this.setData({
          hotSongs:res.data.result.songs
        })
    })
  },

  goPlay(event:any){
    if(this.data.isGoSearch){
      wx.navigateTo({
        url:"../palyer/player?id=" + event.currentTarget.dataset.id 
      })
    }


},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})