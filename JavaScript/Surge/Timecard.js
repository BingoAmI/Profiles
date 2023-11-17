/*

申明：部分函数方法来源于TimeCard.js，其原始作者@smartmimi
原脚本：https://raw.githubusercontent.com/smartmimi/conf/master/surge/timecard.js
原脚本作者：@smartmimi 
GitHub：https://github.com/smartmimi/conf/tree/master

修改：TributePaulWalker
Surge：

[Panel]
节假提醒 = script-name=节假提醒,update-interval=3600

[Script]
节假提醒 = type=generic,timeout=10,script-path=https://raw.githubusercontent.com/TributePaulWalker/Profiles/main/JavaScript/Surge/Timecard.js
 
 */
var tlist = {
  
  1: ["老爸生日", "2023-02-12"],
  2: ["情人节", "2023-02-14"],
  3: ["龙抬头", "2023-02-21"],
  4: ["惊蛰", "2023-03-06"],
  5: ["妇女节", "2023-03-08"],
  6: ["植树节", "2023-03-12"],
  7: ["消费者维权日", "2023-03-15"],
  8: ["春分", "2023-03-21"],
  9: ["结婚纪念日3周年", "2023-03-27"],
  10: ["愚人节", "2023-04-01"],
  11: ["清明", "2023-04-05"],
  12: ["谷雨", "2023-04-20"],
  13: ["劳动", "2023-05-01"],
  14: ["青年节", "2023-05-04"],
  15: ["立夏", "2023-05-06"],
  16: ["生日", "2023-05-09"],
  17: ["母亲节", "2023-05-14"],
  18: ["520", "2023-05-20"],
  19: ["小满", "2023-05-21"], 
  20: ["奶奶生日", "2023-05-22"],
  21: ["楠楠生日", "2023-05-31"],
  22: ["儿童节", "2023-06-01"],
  23: ["芒种", "2023-06-06"],
  24: ["父亲节", "2023-06-18"],
  25: ["夏至", "2023-06-21"],
  26: ["端午", "2023-06-22"],
  27: ["建党节", "2023-07-01"],
  28: ["小暑", "2023-07-07"],
  29: ["老婆生日", "2023-07-22"],
  30: ["大暑", "2023-07-23"],
  31: ["建军节", "2023-08-01"],
  32: ["立秋", "2023-08-08"],
  33: ["七夕", "2023-08-22"],
  34: ["处暑", "2023-08-23"],
  35: ["多多生日", "2023-09-07"],
  36: ["白露", "2023-09-08"],
  37: ["教师节", "2023-09-10"],
  38: ["秋分", "2023-09-23"],
  39: ["中秋", "2023-09-29"],
  40: ["国庆", "2023-10-01"],
  41: ["寒露", "2023-10-08"],
  42: ["重阳节", "2023-10-23"],
  43: ["霜降", "2023-10-24"],
  44: ["万圣节前夜", "2023-10-31"],
  45: ["万圣节", "2023-11-01"],
  46: ["立冬", "2023-11-08"],
  47: ["妹妹生日", "2023-11-15"],
  48: ["XL生日", "2023-11-19"],
  49: ["小雪", "2023-11-22"],
  50: ["感恩节", "2023-11-23"],
  51: ["大雪", "2023-12-07"],
  52: ["冬至", "2023-12-22"],
  53: ["平安夜", "2023-12-24"],
  54: ["圣诞节", "2023-12-25"],
  55: ["元旦", "2024-01-01"],
  56: ["小寒", "2024-01-06"],
  57: ["腊八", "2024-01-18"],
  58: ["大寒", "2024-01-20"],
  59: ["小年", "2024-02-02"],
  60: ["立春", "2022-02-04"],
  61: ["除夕", "2024-02-09"],
  62: ["春节", "2024-02-10"],
  63: ["情人节", "2024-02-14"],
  64: ["雨水", "2024-02-19"],
  65: ["元宵节", "2024-02-24"],
  66: ["老爸生日", "2024-03-02"],
  67: ["惊蛰", "2024-03-05"],
  68: ["妇女节", "2024-03-08"],
  69: ["龙抬头", "2024-03-11"],
  70: ["植树节", "2024-03-12"],
  71: ["消费者权益日", "2024-03-15"],
  72: ["春分", "2024-03-20"],
  73: ["结婚纪念日4周年", "2024-03-27"],
  74: ["爸爸生日", "2024-03-29"],
  75: ["愚人节", "2024-04-01"],
  76: ["清明节", "2024-04-04"],
  77: ["谷雨", "2024-04-19"],
  78: ["生日", "2024-04-28"]
};
let tnow = new Date();
let tnowf =
  tnow.getFullYear() + "-" + (tnow.getMonth() + 1) + "-" + tnow.getDate();

/* 计算2个日期相差的天数，不包含今天，如：2016-12-13到2016-12-15，相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */
function dateDiff(startDateString, endDateString) {
  var separator = "-"; //日期分隔符
  var startDates = startDateString.split(separator);
  var endDates = endDateString.split(separator);
  var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
  var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
  return parseInt(
    (endDate - startDate) / 1000 / 60 / 60 / 24
  ).toString();
}

//计算输入序号对应的时间与现在的天数间隔
function tnumcount(num) {
  let dnum = num;
  return dateDiff(tnowf, tlist[dnum][1]);
}

//获取最接近的日期
function now() {
  for (var i = 1; i <= Object.getOwnPropertyNames(tlist).length; i++) {
    if (Number(dateDiff(tnowf, tlist[i.toString()][1])) >= 0) {
      //console.log("最近的日期是:" + tlist[i.toString()][0]);
      //console.log("列表长度:" + Object.getOwnPropertyNames(tlist).length);
      //console.log("时间差距:" + Number(dateDiff(tnowf, tlist[i.toString()][1])));
      return i;
    }
  }
}

//如果是0天，发送emoji;
let nowlist = now();
function today(day) {
  let daythis = day;
  if (daythis == "0") {
    datenotice();
    return "🎉";
  } else {
    return daythis;
  }
}

//提醒日当天发送通知
function datenotice() {
  if ($persistentStore.read("timecardpushed") != tlist[nowlist][1] && tnow.getHours() >= 6) {
    $persistentStore.write(tlist[nowlist][1], "timecardpushed");
    $notification.post("假日祝福","", "今天是" + tlist[nowlist][1] + "日 " + tlist[nowlist][0] + "   🎉")
  } else if ($persistentStore.read("timecardpushed") == tlist[nowlist][1]) {
    //console.log("当日已通知");
  }
}
$done({
title:"节假提醒",
icon:"list.dash.header.rectangle",
'icon-color': "#5AC8FA",
content:tlist[nowlist][0]+"  :  "+today(tnumcount(nowlist))+"天\n"+tlist[Number(nowlist) + Number(1)][0] +"  :  "+ tnumcount(Number(nowlist) + Number(1))+ "天\n"+tlist[Number(nowlist) + Number(2)][0]+"  :  "+tnumcount(Number(nowlist) + Number(2))+"天"
})
