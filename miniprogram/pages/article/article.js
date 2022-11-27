// pages/article/article.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        headerimg: "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/article1.jpeg",
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
        category: "backend",
        tab: "all",
        articles: [],
        skeletonload: false,
        dataloading:false,
    },
    // 这个是上面的主tab切换
    onChangeTab(event) {
        var tabitem = this.data.categories[event.detail.index]
        this.setData({
            category: tabitem.value,
            tab: "all",
            articles: []
        })
        this.getArticle()
    },
    // 子标签切换事件
    onSubTabChange(event){
        this.setData({
            tab: event.detail.label,
            articles:[]
        })
        this.getArticle()
    },

    getArticle(getmore=false){
        if(getmore){
            this.setData({
                skeletonload: false,
                dataloading: true
            })
        }else{
            this.setData({
                skeletonload: true,
                dataloading: false
            }) 
        }
        
        wx.cloud.callFunction({
            name: "getArticles",
            data:{
                category: this.data.category,
                tab:this.data.tab,
                skip: this.data.articles.length
            }
        }).then(res=>{
            console.log(res)
            this.setData({
                articles: this.data.articles.concat(res.result.data),
                skeletonload: false,
                dataloading: false
            })
        }).catch(err=>{
            this.setData({
                skeletonload: false,
                dataloading: false
            })
            wx.showToast({
              title: '请求数据失败，请稍后再试',
              icon: "error",
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getArticle()
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
        this.getArticle(true)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})