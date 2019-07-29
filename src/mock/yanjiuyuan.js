import Mock from "mockjs";
import API_LIST from "../apiList";

Mock.mock(API_LIST.yanjiuyuan.chartUp, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if (pageVal.tabTop === 1) {
    return {
      'code': '200',
      'msg': 'success',
      'list': [{'KKEY': '1', 'NAME': '01-14', 'VALUE1': '1100.25', 'VALUE2': '1000', 'RATE1': '2.3', 'RATE2': '1.5'},
        {'KKEY': '2', 'NAME': '01-15', 'VALUE1': '700.65', 'VALUE2': '620', 'RATE1': '2.3', 'RATE2': '-0.5'},
        {'KKEY': '3', 'NAME': '01-16', 'VALUE1': '700.54', 'VALUE2': '600', 'RATE1': '-1.3', 'RATE2': '0.5'},
        {'KKEY': '4', 'NAME': '01-17', 'VALUE1': '500.54', 'VALUE2': '400', 'RATE1': '2.3', 'RATE2': '1.5'},
        {'KKEY': '5', 'NAME': '01-18', 'VALUE1': '200.54', 'VALUE2': '200', 'RATE1': '-0.3', 'RATE2': '1.5'},
        {'KKEY': '6', 'NAME': '01-19', 'VALUE1': '200.54', 'VALUE2': '100', 'RATE1': '2.3', 'RATE2': '1.5'},
        {'KKEY': '7', 'NAME': '01-20', 'VALUE1': '100.54', 'VALUE2': '100', 'RATE1': '-0.3', 'RATE2': '1.5'}]
    }
  } else {
    return {
      'code': '200',
      'msg': 'success',
      'list': [{'NAME': '20180101', 'VALUE1': '2321.54', 'RATE1': '5.6', 'VALUE2': '2000', 'RATE2': '5.5'},
        {'NAME': '20180102', 'VALUE1': '2541.25', 'RATE1': '-1.2', 'VALUE2': '2001', 'RATE2': '5.5'},
        {'NAME': '20180103', 'VALUE1': '2541', 'RATE1': '2.3', 'VALUE2': '2050', 'RATE2': '5.5'},
        {'NAME': '20180104', 'VALUE1': '2501', 'RATE1': '5.2', 'VALUE2': '2021', 'RATE2': '5.5'},
        {'NAME': '20180105', 'VALUE1': '2532', 'RATE1': '1.3', 'VALUE2': '2030', 'RATE2': '5.5'},
        {'NAME': '20180106', 'VALUE1': '2544', 'RATE1': '1', 'VALUE2': '2023.23', 'RATE2': '5.5'},
        {'NAME': '20180107', 'VALUE1': '2547', 'RATE1': '-1', 'VALUE2': '2053.32', 'RATE2': '5.5'},
        {'NAME': '20180108', 'VALUE1': '2455', 'RATE1': '2.5', 'VALUE2': '2040', 'RATE2': '5.5'},
        {'NAME': '20180109', 'VALUE1': '2541', 'RATE1': '0.1', 'VALUE2': '2014', 'RATE2': '5.5'}]
    }
  }
})
Mock.mock(API_LIST.yanjiuyuan.getGridData, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  return {
    'code': '200',
    'msg': 'success',
    //研究员姓名       行业      指标总数      未确认指标数      未更新指标数    指标点评量     点评被回复次数
    'list': [{NAME:'蔡志文',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000',VALUE4:'100',VALUE5:'100',VALUE6:'344'},
      {NAME:'卞正',VALUE1:'3100',VALUE2:'3000',VALUE3:'3020',VALUE4:'100',VALUE5:'300',VALUE6:'344'},
      {NAME:'陈潇杨',VALUE1:'3200',VALUE2:'3000',VALUE3:'3030',VALUE4:'100',VALUE5:'200',VALUE6:'344'},
      {NAME:'崔文琦',VALUE1:'3300',VALUE2:'3000',VALUE3:'3010',VALUE4:'100',VALUE5:'400',VALUE6:'344'},
      {NAME:'董超',VALUE1:'3400',VALUE2:'3000',VALUE3:'3000',VALUE4:'100',VALUE5:'200',VALUE6:'344'},
      {NAME:'付鹏飞',VALUE1:'3200',VALUE2:'3000',VALUE3:'3000',VALUE4:'100',VALUE5:'100',VALUE6:'344'},
      {NAME:'韩超',VALUE1:'3300',VALUE2:'3000',VALUE3:'3000',VALUE4:'100',VALUE5:'300',VALUE6:'344'},
      {NAME:'何往',VALUE1:'3200',VALUE2:'3000',VALUE3:'3000',VALUE4:'100',VALUE5:'500',VALUE6:'344'},
      {NAME:'黄耀锋',VALUE1:'3300',VALUE2:'3000',VALUE3:'3000',VALUE4:'100',VALUE5:'200',VALUE6:'344'},
      {NAME:'劳杰男',VALUE1:'3200',VALUE2:'3000',VALUE3:'3050',VALUE4:'100',VALUE5:'210',VALUE6:'344'}]
  }
})

Mock.mock(API_LIST.yanjiuyuan.dataRank, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  // if (pageVal.zhibiaoDim === 1) {
    return {
      'code': '200',
      'msg': 'success',
      'list': [
        {RANK: '1', PHOTO: '', NAME: '蔡志文', VALUE: '1'},
        {RANK: '2', PHOTO: '', NAME: '卞正', VALUE: '22'},
        {RANK: '3', PHOTO: '', NAME: '陈潇杨', VALUE: '333'},
        {RANK: '4', PHOTO: '', NAME: '崔文琦', VALUE: '4444'},
        {RANK: '5', PHOTO: '', NAME: '董超', VALUE: '55555'},
        {RANK: '6', PHOTO: '', NAME: '付鹏飞', VALUE: '666666'},
        {RANK: '7', PHOTO: '', NAME: '韩超', VALUE: '7777777'},
        {RANK: '8', PHOTO: '', NAME: '何往', VALUE: '88888888'},
        {RANK: '9', PHOTO: '', NAME: '黄耀锋', VALUE: '999999999'},
        {RANK: '10', PHOTO: '', NAME: '劳杰男', VALUE: '100000000'}
      ]
    }
  // }else if (pageVal.zhibiaoDim === 2) {
  //   return {
  //     'code': '200',
  //     'msg': 'success',
  //     'list': [
  //       {RANK: '1', PHOTO: '', NAME: '蔡志文2', VALUE: '1'},
  //       {RANK: '2', PHOTO: '', NAME: '卞正2', VALUE: '22'},
  //       {RANK: '3', PHOTO: '', NAME: '陈潇杨2', VALUE: '333'},
  //       {RANK: '4', PHOTO: '', NAME: '崔文琦2', VALUE: '4444'},
  //       {RANK: '5', PHOTO: '', NAME: '董超2', VALUE: '55555'},
  //       {RANK: '6', PHOTO: '', NAME: '付鹏飞2', VALUE: '666666'},
  //       {RANK: '7', PHOTO: '', NAME: '韩超2', VALUE: '7777777'},
  //       {RANK: '8', PHOTO: '', NAME: '何往2', VALUE: '88888888'},
  //       {RANK: '9', PHOTO: '', NAME: '黄耀锋2', VALUE: '999999999'},
  //       {RANK: '10', PHOTO: '', NAME: '劳杰男2', VALUE: '100000000'}
  //     ]
  //   }
  // }else if (pageVal.zhibiaoDim === 3) {
  //   return {
  //     'code': '200',
  //     'msg': 'success',
  //     'list': [
  //       {RANK: '1', PHOTO: '', NAME: '蔡志文3', VALUE: '1'},
  //       {RANK: '2', PHOTO: '', NAME: '卞正3', VALUE: '22'},
  //       {RANK: '3', PHOTO: '', NAME: '陈潇杨3', VALUE: '333'},
  //       {RANK: '4', PHOTO: '', NAME: '崔文琦3', VALUE: '4444'},
  //       {RANK: '5', PHOTO: '', NAME: '董超3', VALUE: '55555'},
  //       {RANK: '6', PHOTO: '', NAME: '付鹏飞3', VALUE: '666666'},
  //       {RANK: '7', PHOTO: '', NAME: '韩超3', VALUE: '7777777'},
  //       {RANK: '8', PHOTO: '', NAME: '何往3', VALUE: '88888888'},
  //       {RANK: '9', PHOTO: '', NAME: '黄耀锋3', VALUE: '999999999'},
  //       {RANK: '10', PHOTO: '', NAME: '劳杰男3', VALUE: '100000000'}
  //     ]
  //   }
  // }
})

