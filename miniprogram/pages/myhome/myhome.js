// pages/myhome/myhome.js
const app = getApp();
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        avatarurl: "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
        nickName: "微信用户",
        formNickName: "",
        hasUserInfo: false,
        debugtext: ""
    },
    syncUserProfile(){
        if (app.hasUserInfo()){
            this.setData({
                avatarurl: app.globalData.userInfo.avatarUrl,
                nickName: app.globalData.userInfo.nickName,
                hasUserInfo: true,
            })
        }else{
            this.getuserinfo()
        }
    },

    logout(){
        app.globalData.userInfo = {}
        wx.clearStorageSync("userinfo")
        this.setData({
            hasUserInfo: false,
            avatarurl: "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
            nickName: "微信用户",
        })
    },
    getuserinfo(){
        // 先判断本地是否有用户信息记录
        wx.cloud.callFunction({
            name:"getUserInfo",
        }).then(res=>{
            if(res.result.data.length > 0){
                var userinfo = res.result.data[0]
                app.globalData.userInfo = userinfo
                wx.setStorageSync('userinfo', userinfo)
                this.setData({
                    hasUserInfo: true,
                    avatarurl: userinfo.avatarUrl,
                    nickName: userinfo.nickName,
                })
            }else{
                // 没有获取到用户数据
                Dialog.alert({
                    title: '未获取到用户昵称信息',
                    message: '由于微信小程序的限制，未能正常获取您的昵称信息，您可以自行的设置头像与昵称信息，如果不设置也不影响你正常使用本小程序'
                  }).then(() => {
                    // on close
                  });
                
            }
        }).catch(err=>{
            console.error(err, 222)
        }) 
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        
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
        this.getTabBar().init();
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