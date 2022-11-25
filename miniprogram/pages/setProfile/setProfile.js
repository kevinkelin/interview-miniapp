// pages/setProfile/setProfile.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarUrl: "",
        nickName: "微信用户",
    },

    onChooseAvatar(e){
        var tempPath = e.detail.avatarUrl
        var patharray = tempPath.split("/")
        // 将头像文件上传到云存储中
        wx.showLoading({
            title: '头像上传中。。。',
        })
        wx.cloud.uploadFile({
            cloudPath: patharray.pop(),
            filePath: e.detail.avatarUrl  
        }).then(res=>{
            this.setData({
                avatarUrl: res.fileID
            })
            wx.hideLoading()
        })
    },

    submitprofile(){
        wx.showLoading({
            title: '个人信息修改中。。。',
        })
        wx.cloud.callFunction({
            name: "setUserinfo",
            data:{
                avatarUrl: this.data.avatarUrl,
                nickName: this.data.nickName
            }
        }).then(res=>{
            console.log(res, 111)
            if(res.result.success){
                var userinfo = {
                    avatarUrl: this.data.avatarUrl,
                    nickName: this.data.formNickName
                }
                wx.showToast({
                  title: '设置成功',
                })
                // 设置缓存与全局变量
                wx.setStorageSync('userinfo', userinfo)
                app.globalData.userInfo = userinfo
            } 
            wx.hideLoading()  
        }).catch(err=>{
            console.error(err)
            wx.hideLoading()
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({
            avatarUrl: options.avatarUrl,
            nickName: options.nickName
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