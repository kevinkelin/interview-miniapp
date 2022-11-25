// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
    // 获取用户的信息，由于微信小程序禁掉了getUserProfile获取用户头像与昵称的能力，所以需要用户小程序自己来维护
    const wxContext = cloud.getWXContext()
    const openid = wxContext.OPENID
    return await db.collection("db_users").limit(1).where({
        openid: openid
    }).get()
    
}