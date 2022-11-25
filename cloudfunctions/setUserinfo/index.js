// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV }) // 使用当前云环境
db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    // 采用修改的方式
    // event.avatarUrl
    var returndata = {}

    var updates = {
        openid: wxContext.OPENID,
        nickName: event.nickName,
        avatarUrl: event.avatarUrl,
        _updateTime: Date.now()
    }
    result = await db.collection("db_users").where({
        openid: wxContext.OPENID
    }).update({
        data: updates
    })
    if(result.stats.updated==0){
        updates["_createTime"] = Date.now()
        var data = await db.collection("db_users").add({
            data: updates
        })
        if(data._id){
            data.success = true
        }else{
            data.success = false
        }
        return data
    }else{
        // 更新成功
        updates.success = true
        return updates
    }
    
}