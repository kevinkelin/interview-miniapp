// pages/questiondetail/questiondetail.js
const app = getApp();
let docid
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
        // docid = options.id
        // wx.showLoading({
        //     title: '数据加载中。。。',
        // })
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
            if (res.result.data.answerrich) {
                answerrich_ = this.replaceDetail(res.result.data.answerrich)
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

    replaceDetail(details) {
        var texts = ''; //待拼接的内容
        while (details.indexOf('<img') != -1) { //寻找img 循环
            texts += details.substring('0', details.indexOf('<img') + 4); //截取到<img前面的内容
            details = details.substring(details.indexOf('<img') + 4); //<img 后面的内容
            if (details.indexOf('style=') != -1 && details.indexOf('style=') < details.indexOf('>')) {
                texts += details.substring(0, details.indexOf('style="') + 7) + "max-width:100%;height:auto;margin:0 auto;"; //从 <img 后面的内容 截取到style= 加上自己要加的内容
                details = details.substring(details.indexOf('style="') + 7); //style后面的内容拼接
            } else {
                texts += ' style="max-width:100%;height:auto;margin:0 auto;" ';
            }
        }
        texts += details; //最后拼接的内容
        return texts
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
                title: this.data.questiondata.title
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
    // 点击点赞按钮 作废
    clicklike() {
        this.postlike()
        // 点赞与取消点赞是同一个操作，依赖于liked值
        // 只有登录的用户才可以
        var that = this
        if (!app.hasUserInfo()) {
            // 没有登录，要先登录
            wx.getUserProfile({
                desc: '只有登录用户才可以查看哦',
                success: res => {
                    console.log(res)
                    wx.setStorageSync('userinfo', res.userInfo)
                    app.globalData.userInfo = res.userInfo
                    that.postlike()
                },
                fail: err => {
                    wx.showToast({
                        title: '用户取消登录',
                    })
                    console.error(err)
                    return
                }
            })
        }else{
            this.postlike()
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