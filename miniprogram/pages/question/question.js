// pages/question/question.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        topimg: [
            "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/banner5.jpeg",
            "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/9961.jpeg"
        ],
        skeletonload:true,
        querytype: "backend",
        querysubtab: "all",
        tabActive: 0,
        questions: [],
        dataloading: false,
        popvisible: false,
        qtypes:[
            {
                title: "后端技术",
                value: "backend",
                subTabs: ["all","java", "jvm", "golang", "python", "mq", "分步式"]
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
                subTabs: []
            },
            {
                title: "网络",
                value: "network",
                subTabs: []
            },
            {
                title: "操作系统",
                value: "os",
                subTabs: []
            },
            {
                title: "设计模式",
                value: "design",
                subTabs: []
            },
        ],
    },
    handleAddClick(e){
        this.setData({
            popvisible: true
        })
    },
    onPopClose(){
        this.setData({
            popvisible: false
        })
    },
    getsubtabs(ptypes){
        // 从云端获取分类的tab
        wx.cloud.callFunction({
            name: "getTypeTabs",
            data: {
                querytypes: ptypes
            }
        }).then(res=>{
            console.log(res)
            this.setData({
                subTabs: res.result.tabs.data
            })
        }).catch(err=>{
            console.error(err)
        })
    },

    getQuestions(getmore=false){
        if(getmore){
            this.setData({
                dataloading: true,
                skeletonload: false
            })
        }else{
            this.setData({
                dataloading: false,
                skeletonload: true
            })
        }
        wx.cloud.callFunction({
            name: "getQuestions",
            data: {
                ptype: this.data.querytype,
                stab: this.data.querysubtab,
                skip: this.data.questions.length,
                dataloading: false,
                skeletonload: false
            }
        }).then(res=>{
            this.setData({
                questions: this.data.questions.concat(res.result.data),
                dataloading: false,
                skeletonload: false
            })
            
        }).catch(err=>{
            console.log(err)
            this.setData({
                skeletonload: false,
                dataloading: false
            })
        })
    },

    // 这个是上面的主tab切换
    onChangeTab(event) {
        var tabitem = this.data.qtypes[event.detail.index]
        getApp().globalData.questionPtype = tabitem.value
        this.setData({
            querytype: tabitem.value,
            querysubtab: "all",
            questions: []
        })
        this.getQuestions()
    },

    // 子标签切换事件
    onSubTabChange(event){
        this.setData({
            querysubtab: event.detail.label,
            questions:[]
        })
        this.getQuestions()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        var type = getApp().globalData.questionPtype
        if(type == undefined){
            // 如果没有选就使用第一个
            getApp().globalData.questionPtype = this.data.qtypes[0].value
            type = this.data.qtypes[0].value
        }else{
            //  切换active 
            this.setData({
                querytype: type
            })
            for(var i in this.data.qtypes){
                if(this.data.qtypes[i].value==type){
                    this.setData({
                        tabActive: i
                    })
                    break
                }
            }          
        }
        this.getQuestions() 
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
        this.getQuestions(true)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})