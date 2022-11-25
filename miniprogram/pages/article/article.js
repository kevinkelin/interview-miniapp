// pages/article/article.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headerimg: "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/article1.jpeg",
        categories:[
            {
                title: "后端技术",
                value: "backend",
                subTabs: ["all","java", "golang", "python"]
            },
            {
                title: "前端技术",
                value: "frontend",
                subTabs: ["all","vue", "react"]
            },
            {
                title: "数据库",
                value: "database",
                subTabs: ["all", "MySQL", "redis", "mongo","elasticSearch"]
            },
            {
                title: "系统架构",
                value: "framework",
                subTabs: ["all"]
            },
        ],
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