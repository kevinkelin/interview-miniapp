// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const {skip, doctype} = event
    // skip 为跳过， optype 为类型 ,目前支持questiion, article
    return await db.collection("db_likes").where({
        doctype: doctype,
        openid: wxContext.OPENID
    }).orderBy("_createTime", "desc").skip(skip).limit(20).get()
    
}