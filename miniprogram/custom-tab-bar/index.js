// custom-tab-bar/index.js
Component({
    /**
     * 页面的初始数据
     */
    data: {
        active: 0,
        list: [{
                text: "首页",
                icon: "home-o",
                url: "/pages/index/index"
            },
            {
                text: "八股文",
                icon: "notes-o",
                url: "/pages/question/question"
            },
            {
                text: "文章",
                icon: "orders-o",
                url: "/pages/article/article"
            },
            {
                text: "我的",
                icon: "user-o",
                url: "/pages/myhome/myhome"
            },
        ]
    },

    methods: {
        // 切换tabBar时的操作
        onChange(e){
          var i = e.detail;
          wx.switchTab({
            url: this.data.list[i].url,
          })
          this.setData({
            active : i
          })
        },
        init() {
          const page = getCurrentPages().pop();
          this.setData({
         　  active: this.data.list.findIndex(item => item.url === `/${page.route}`)
          });
         }
      },

    
    
})