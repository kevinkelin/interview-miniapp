// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
    var ptype = event.ptype
    var stab = event.stab
    var skip = event.skip
    var condition = {
        ptype: ptype
    }
    if(stab!="all"){
        condition["tabs"] = stab
    }
    data = await db.collection("db_questions")
    .orderBy("_createTime", "desc")
    .field({answer: false, answerrich: false})
    .where(condition)
    .skip(skip).limit(20).get()
    return data
}