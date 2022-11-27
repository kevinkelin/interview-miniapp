// pages/mylike/mylike.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperList: [
            "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/9962.jpeg",
            "https://miniappbagu.oss-cn-hangzhou.aliyuncs.com/miniapp-bagu/banner3.jpeg"
        ],
        skeletonload:false,
        myLikeQuestion: [],
        myLikeArticle: [],
        currentTab: "question",
        dataloading: false
    },

    onTabsChange(e){
        var tabname = e.detail.value
        this.setData({
            currentTab: tabname
        })
        // 如果内容长度是0的话重新请求一下数据
        let getdata = false
        if(tabname=="question"){
            if(this.data.myLikeQuestion.length==0){
                getdata = true
            }
        }else if(tabname=="article"){
            if(this.data.myLikeArticle.length==0){
                getdata = true
            }
        }
        if(getdata){
            this.getlikeContents()
        }   
    },


    getlikeContents(getmore=false){
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
        
        let skip = 0
        if(this.data.currentTab=="question"){
            skip = this.data.myLikeQuestion.length
        }else if(this.data.currentTab == "article"){
            skip = this.data.myLikeArticle.length
        }
        wx.cloud.callFunction({
            name: "getMyLike",
            data:{
                doctype: this.data.currentTab,
                skip: skip
            }
        }).then(res=>{
            if(this.data.currentTab=="question"){
                this.setData({
                    myLikeQuestion: this.data.myLikeQuestion.concat(res.result.data),
                    skeletonload: false,
                    dataloading: false
                })
            }else if(this.data.currentTab == "article"){
                this.setData({
                    myLikeArticle: this.data.myLikeArticle.concat(res.result.data),
                    skeletonload:false,
                    dataloading: false
                })
            }
        }).catch(err=>{
            console.error(err)
            this.setData({
                skeletonload: false,
                dataloading: false,
            })
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.getlikeContents()
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
        this.getlikeContents(true)
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})