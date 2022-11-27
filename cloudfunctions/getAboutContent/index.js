// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
// 返回一些特殊页面的函数
db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    ctype = event.ctype
    return await db.collection("db_pages").where({
        type: ctype
    }).limit(1).get()
    
}