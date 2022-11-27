// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境

const db = cloud.database()
const _ = db.command

// 获取文章列表函数

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    const {category, tab, skip} = event
    var condition = {
        categories: category
    }
    if(tab!="all"){
        condition["tabs"] = tab
    }
    data = await db.collection("db_articles").orderBy("_createTime", "desc")
    .field({content: false, contentrich:false})
    .where(condition)
    .skip(skip).limit(20).get()
    return data
}