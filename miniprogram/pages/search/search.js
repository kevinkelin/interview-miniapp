// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchText: "",
        articles:[], // 这个最终展示在页面上的
        articleRes: [], // 这里记录所有的结果
        tabs:[
            {
                name:"all",
                label:"全部"
            },
            {
                name: "backend",
                label: "后端",
            },
            {
                name: "frontend",
                label: "前端",
            },
            {
                label: "数据库",
                name: "database",
            },
            {
                label: "系统架构",
                name: "framework",
            },
            {
                label: "操作系统",
                name: "database",
            },
            {
                name: "network",
                label: "计算机网络",
            },
            {
                name: "framework",
                label: "设计模式",
            },
        ],
        tabActive: "all",
        dataloading: false
    },

    getsearchdata(){
        let skip = 0
        if(this.data.tabActive=="all"){
            skip = this.data.articleRes.length
        }else{
            skip = this.data.articles.length
        }
        this.setData({
            dataloading: true
        })
        wx.cloud.callFunction({
            name: "searchContent",
            data:{
                q: this.data.searchText,
                qtype: this.data.tabActive,
                skip: skip
            }
        }).then(res=>{
            if(res.result.data.length==0 && this.data.articleRes.length==0){
                wx.showToast({
                  title: '未搜索到任何数据',
                  icon:"error"
                })
            }
            this.setData({
                articleRes: this.data.articleRes.concat(res.result.data),
                articles: this.data.articles.concat(res.result.data),
                dataloading: false
            })
        }).catch(err=>{
            this.setData({
                dataloading: false
            })
            console.error(err)
        })
    },

    onSearch(e){ 
        this.setData({
            articles:[],
            articleRes:[],
            searchText: e.detail
        })
        this.getsearchdata()
    },

    onCancel(e){
        this.setData({
            articles:[]
        })
    },

    onTabChange(e){
        let newlist = this.data.articleRes.filter((el)=>{
            if(e.detail.value=="all"){
                return true
            }
            return el.ptype==e.detail.value
        })
        this.setData({
            tabActive: e.detail.value,
            articles: newlist
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
        this.getsearchdata()
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})