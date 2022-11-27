// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const {liked, docid, title, doctype} = event
    // var liked = event.liked
    // var docid = event.docid
    // var title = event.title
    if(liked){
        // 插入一条like数据
        return await db.collection("db_likes").add({
            data: {
                openid: wxContext.OPENID,
                questionid: docid,
                title: title,
                doctype: doctype,
                _createTime: Date.now()
            }
        })
    }else{
        // 删除
        return await db.collection("db_likes").where({
            openid: wxContext.OPENID,
            questionid: docid
        }).remove()
    }
}