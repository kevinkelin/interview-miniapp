// pages/articledetail/articledetail.js
const app = getApp();
let docid
var common = require("../../common/common.js")
Page({

    /**
     * 页面的初始数据
     */
    data: {
        articledata: "",
        content: "",
        contentrich: "",
        liked: false,
        skeletonload: true
    },
    postlike(){
        wx.showLoading({
          title: '数据提交中。。。',
        })
        wx.cloud.callFunction({
            name: "setUserLike",
            data: {
                liked: !this.data.liked,
                docid: docid,
                title: this.data.articledata.title,
                doctype: "article"
            }
        }).then(res => {
            console.log(res)
            this.setData({
                liked: !this.data.liked
            })
            wx.hideLoading()
        }).catch(err => {
            console.error(err)
            wx.hideLoading()
        })
    },

    getArticleContent(docid){
        wx.cloud.callFunction({
            name: "getArticleContent",
            data: {
                id: docid
            }
        }).then(res => {
            console.log(res)
            let contentmarkdown_ = ""
            let contentrich_ = ""
            // 这个是markdown的
            if (res.result.data.content) {
                contentmarkdown_ = app.towxml(res.result.data.content, 'markdown', {});
            }
            // 这个是富文本的
            if (!(res.result.data.contentrich=="<p></p>" || res.result.data.contentrich=="<p>欢迎使用富文本编辑器</p>")) {
                contentrich_ = common.replaceRichDetail(res.result.data.contentrich)
            }
            this.setData({
                articledata: res.result.data,
                content: contentmarkdown_,
                contentrich: contentrich_,
                liked: res.result.liked,
                skeletonload: false
            })
            
        }).catch(err => {
            console.error(err)
            wx.showToast({
                title: '请求数据失败',
            })
            this.setData({
                skeletonload: false
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        docid = options.id
        this.getArticleContent(options.id)
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