// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境


// 获取热门内容
const db = cloud.database()
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    // 获取热门八股文
    hotquestion = await db.collection("db_questions")
                .orderBy("readcount", "desc")
                .orderBy("_createTime", "desc")
                .field({answer: false, answerrich: false})
                .limit(5).get()
    hotArticle = await db.collection("db_articles")
                .orderBy("readcount", "desc")
                .orderBy("_createTime", "desc")
                .field({content: false, contentrich:false})
                .limit(5).get()
    return {
        hotquestion, hotArticle
    }
}