// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database()
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()

    // 添加阅读次数
    await db.collection("db_articles").doc(event.id).update({
        data:{
            readcount:_.inc(1)
        }
    })
    data =  await db.collection("db_articles").doc(event.id).get()
    // 获取用户是否点赞过
    liked = await db.collection("db_likes").where({
        openid: wxContext.OPENID,
        questionid: event.id
    }).count()
    if(liked.total!=0){
        data.liked = true
    }else{
        data.liked = false
    }  
    return data
}