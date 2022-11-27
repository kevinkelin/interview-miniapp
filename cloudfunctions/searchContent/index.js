// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()
const _  = db.command
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let conditon = {
        title:{
            $regex:'.*' + event.q + '.*',
            $options: 'i'
        }
    }
    if(event.qtype!="all"){
        conditon.ptype = event.qtype
    }
    return await db.collection("db_questions").where(conditon).field({answer: false, answerrich: false})
    .orderBy("readcount","desc")
    .orderBy("_createTime", "desc")
    .skip(event.skip).limit(20).get()
    
}