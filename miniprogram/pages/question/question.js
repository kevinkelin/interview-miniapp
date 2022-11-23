// pages/question/question.js
import Notify from '../../miniprogram_npm/vant-weapp/notify/notify';
Page({

    /**
     * 页面的初始数据
     */
    data: {
        topimg: [
            "cloud://miniapp-interview-4emkbr37f050a5.6d69-miniapp-interview-4emkbr37f050a5-1315236622/banner5.jpeg",
        ],
        querytype: "",
        querysubtab: "all",
        tabActive: 0,
        questions: [],
        qtypes:[
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
                title: "计算机网络",
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
            {
                title: "系统架构",
                value: "framework",
                subTabs: []
            },
        ],
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

    getQuestions(){
        wx.cloud.callFunction({
            name: "getQuestions",
            data: {
                ptype: this.data.querytype,
                stab: this.data.querysubtab,
                skip: this.data.questions.length
            }
        }).then(res=>{
            this.setData({
                questions: this.data.questions.concat(res.result.data)
            })
        }).catch(err=>{
            console.log(err, 2222)
        })
    },

    // 这个是上面的主tab切换
    onChangeTab(event) {
        var tabitem = this.data.qtypes[event.detail.index]
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
        var type = options["type"]
        if(type == undefined){
            Notify({
                text: '未正确选择分类',
                duration: 1000,
              });
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
            this.getQuestions()            
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