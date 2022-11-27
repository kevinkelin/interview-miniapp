const formatTime = date => {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    return `${[year, month, day].map(formatNumber).join('/')} ${[hour, minute, second].map(formatNumber).join(':')}`
  }
  
  const formatNumber = n => {
    n = n.toString()
    return n[1] ? n : `0${n}`
  }

const replaceRichDetail = details => {
    var texts = ''; //待拼接的内容
    while (details.indexOf('<img') != -1) { //寻找img 循环
        texts += details.substring('0', details.indexOf('<img') + 4); //截取到<img前面的内容
        details = details.substring(details.indexOf('<img') + 4); //<img 后面的内容
        if (details.indexOf('style=') != -1 && details.indexOf('style=') < details.indexOf('>')) {
            texts += details.substring(0, details.indexOf('style="') + 7) + "max-width:100%;height:auto;margin:0 auto;"; //从 <img 后面的内容 截取到style= 加上自己要加的内容
            details = details.substring(details.indexOf('style="') + 7); //style后面的内容拼接
        } else {
            texts += ' style="max-width:100%;height:auto;margin:0 auto;" ';
        }
    }
    texts += details; //最后拼接的内容
    return texts
}
  
module.exports = {
    formatTime,
    replaceRichDetail
  }
  