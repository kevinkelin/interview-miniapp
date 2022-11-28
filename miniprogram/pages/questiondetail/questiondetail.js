// pages/questiondetail/questiondetail.js
const app = getApp();
let docid
var common = require("../../common/common.js")
Page({
    /**
     * 页面的初始数据
     */
    data: {
        question: "",
        answer: "",
        answerich: "",
        ptype: "",
        tabs: [],
        questiondata: {},
        liked: false,
        skeletonload: true
    },

    getanswer(docid){
        wx.cloud.callFunction({
            name: "getAnswer",
            data: {
                id: docid
            }
        }).then(res => {
            console.log(res)
            let answermarkdown_ = ""
            let answerrich_ = ""
            // 这个是markdown的答案
            if (res.result.data.answer) {
                answermarkdown_ = app.towxml(res.result.data.answer, 'markdown', {});
            }
            if (!(res.result.data.answerrich=="<p></p>" || res.result.data.answerrich=="<p>欢迎使用富文本编辑器</p>")) {
                answerrich_ = common.replaceRichDetail(res.result.data.answerrich)
            }
            this.setData({
                questiondata: res.result.data,
                answer: answermarkdown_,
                answerich: answerrich_,
                liked: res.result.liked,
                skeletonload: false
            })
            
        }).catch(err => {
            console.error(err)
            wx.showToast({
                title: '请求数据失败',
            })
            this.setData({
                dataloading: false,
                skeletonload: false
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        docid = options.id
        this.getanswer(options.id)
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
                title: this.data.questiondata.title,
                doctype: "question"
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