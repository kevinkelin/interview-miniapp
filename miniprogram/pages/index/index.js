const db = wx.cloud.database()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // swiperList: [
        //     "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/banner2.jpeg",
        //     "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/banner3.jpeg",
        //     "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/banner4.jpeg"
        // ],
        swiperList:[
            "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/banner2.jpeg",
            "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/banner6.jpeg",
            "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/banner4.jpeg"
        ],
        // middleimg:"cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/9961.jpeg",
        middleimg: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/indexmain.jpeg",
        gridborder: {
            color: '#f6f6f6',
        },
        griddata: [
            {
                text: "后端技术",
                icon: "server",
                img: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/backend.png",
                qtype: "backend"
            },
            {
                text: "前端技术",
                icon: "server",
                img: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/front.png",
                qtype: "frontend",
            },
            {
                text: "数据库",
                icon: "server",
                img: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/database.png",
                qtype: "database"
            },
            {
                text: "系统架构",
                icon: "server",
                img: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/jiagou.png",
                qtype: "framework",
            },
            {
                text: "操作系统",
                icon: "server",
                img: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/os.png",
                qtype: "os",
            },
            {
                text: "计算机网络",
                icon: "server",
                img: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/network.png",
                qtype: "network"
            },
            // {
            //     text: "设计模式",
            //     icon: "server",
            //     img: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/design.png",
            //     qtype: "design",
            // },  
        ],
        hotContent: {},
        skeletonload: true
    },

    redirectoQuestion(event) {
        console.log(event.target.dataset.qtype)
        getApp().globalData.questionPtype = event.target.dataset.qtype
        wx.switchTab({
            url: '/pages/question/question',
        })
    },

    getHotContent(){
        wx.cloud.callFunction({
            name: "getHotContent"
        }).then(res=>{
            this.setData({
                hotContent: res.result,
                skeletonload: false
            })
        }).catch(err=>{
            console.error(err)
            this.setData({
                skeletonload: false
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getHotContent()
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