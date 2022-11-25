const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList: [
            "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/banner2.jpeg",
            "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/banner3.jpeg",
            "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/banner4.jpeg"
        ],
        middleimg:"cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/9961.jpeg",
        gridborder: {
            color: '#f6f6f6',
        },
        griddata: [{
                text: "计算机网络",
                icon: "server",
                img: "/images/gridimg/network.png",
                qtype: "network"
            },
            {
                text: "操作系统",
                icon: "server",
                img: "/images/gridimg/os.png",
                qtype: "os",
            },
            {
                text: "后端技术",
                icon: "server",
                img: "/images/gridimg/backend.png",
                qtype: "backend"
            },
            {
                text: "前端技术",
                icon: "server",
                img: "/images/gridimg/front.png",
                qtype: "frontend",
            },
            {
                text: "数据库",
                icon: "server",
                img: "/images/gridimg/database.png",
                qtype: "database"
            },
            {
                text: "设计模式",
                icon: "server",
                img: "/images/gridimg/design.png",
                qtype: "design",
            },
            {
                text: "系统架构",
                icon: "server",
                img: "/images/gridimg/jiagou.png",
                qtype: "framework",
            },
        ]
    },

    redirectoQuestion(event) {
        console.log(event.target.dataset.qtype)
        getApp().globalData.questionPtype = event.target.dataset.qtype
        wx.switchTab({
            url: '/pages/question/question',
        })
        console.log(2222)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
        this.getTabBar().init();
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