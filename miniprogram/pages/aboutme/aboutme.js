// pages/aboutme/aboutme.js
var common = require("../../common/common.js")
Page({
    /**
     * 页面的初始数据
     */
    data: {
        aboutext: ""
    },

    getAboutContent(){
        wx.cloud.callFunction({
            name: "getAboutContent",
            data:{
                ctype: "about"
            }
        }).then(res=>{
            console.log(res)
            if(res.result.data.length==0){
                wx.showToast({
                  title: '未获取到关于内容',
                })
                return
            }
            var pagedata = res.result.data[0]
            this.setData({
                aboutext: common.replaceRichDetail(pagedata.content)
            })
        }).catch(err=>{
            console.error(err)
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getAboutContent()
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