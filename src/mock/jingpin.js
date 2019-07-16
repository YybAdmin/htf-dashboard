import Mock from 'mockjs'
import API_LIST from  '../apiList'
Mock.mock(API_LIST.jingpin.jingpinHeadData, /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{VALUE1: '3643', VALUE2: '26'},
      {VALUE1: '330', VALUE2: '-3'},
      {VALUE1: '26', VALUE2: '--'},
      {VALUE1: '-1.4', VALUE2: '--'}]
  }
})
// 上图 分布
Mock.mock(API_LIST.jingpin.jingpinChartUp, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if (pageVal.fbOrQs1 === 1) {
    if (pageVal.tabletr === 1) {
      return {
        'code': '200',
        'msg': 'success',
        'list': [{'KKEY': '1', 'NAME': '拍拍贷借款', 'VALUE1': '12.2', 'VALUE2': '17.8'},
          {'KKEY': '2', 'NAME': '你我贷借款', 'VALUE1': '10.2', 'VALUE2': '-0.8'},
          {'KKEY': '3', 'NAME': '爱钱进', 'VALUE1': '7.8', 'VALUE2': '17.8'},
          {'KKEY': '4', 'NAME': '快贷', 'VALUE1': '12.2', 'VALUE2': '0.8'},
          {'KKEY': '5', 'NAME': '51人品贷', 'VALUE1': '9.2', 'VALUE2': '17.8'},
          {'KKEY': '6', 'NAME': '现金宝', 'VALUE1': '12.2', 'VALUE2': '-2.8'},
          {'KKEY': '7', 'NAME': '宜人贷借款', 'VALUE1': '14.2', 'VALUE2': '17.8'},
          {'KKEY': '8', 'NAME': '团贷网', 'VALUE1': '12.2', 'VALUE2': '17.8'},
          {'KKEY': '9', 'NAME': '去哪借', 'VALUE1': '6.2', 'VALUE2': '17.8'}]
      }
    } else if (pageVal.tabletr === 2) {
      return {
        'code': '200',
        'msg': 'success',
        'list': [{'KKEY': '1', 'NAME': '公募', 'VALUE1': '100.25', 'VALUE2': '-50', 'VALUE3': '60.25', 'VALUE4': '100'},
          {'KKEY': '2', 'NAME': '资管', 'VALUE1': '300.65', 'VALUE2': '-100', 'VALUE3': '230.25', 'VALUE4': '200'},
          {'KKEY': '3', 'NAME': '专户', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
      }
    } else if (pageVal.tabletr === 3) {
      return {
        'code': '200',
        'msg': 'success',
        'list': [{'KKEY': '1', 'NAME': '公募', 'VALUE1': '100.25', 'VALUE2': '200'},
          {'KKEY': '2', 'NAME': '资管', 'VALUE1': '300.65', 'VALUE2': '400'},
          {'KKEY': '3', 'NAME': '专户', 'VALUE1': '500.54', 'VALUE2': '600'}]
      }
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
Mock.mock(API_LIST.jingpin.jingpinChartMid, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  console.log(pageVal)
  return {
    'code': '200',
    'msg': 'success',
    'list': [
      {VALUE: 1548, NAME: 'TOP10', GROUP: 1},
      {VALUE: 310, NAME: 'NO.11-100', GROUP: 1},
      {VALUE: 234, NAME: 'NO.101-200', GROUP: 1},
      {VALUE: 135, NAME: 'NO.201-300', GROUP: 1},
      {VALUE: 335, NAME: '其他', GROUP: 1},
      {VALUE: 30, NAME: '现金宝', GROUP: 2},
      {VALUE: 280, NAME: '其他', GROUP: 2}
    ]
  }
})
Mock.mock(API_LIST.jingpin.jingpinChartDwn, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  console.log(pageVal)
  return {
    'code': '200',
    'msg': 'success',
    'list': [{'NAME': '2018-03', 'VALUE1': '2321.54', 'VALUE2': '1.2', 'VALUE3': '2001', 'VALUE4': '5.5'},
      {'NAME': '2018-04', 'VALUE1': '2541.25', 'VALUE2': '1.2', 'VALUE3': '2001', 'VALUE4': '5.5'},
      {'NAME': '2018-05', 'VALUE1': '2541', 'VALUE2': '2.3', 'VALUE3': '2050', 'VALUE4': '5.5'},
      {'NAME': '2018-06', 'VALUE1': '2501', 'VALUE2': '5.2', 'VALUE3': '2021', 'VALUE4': '5.5'},
      {'NAME': '2018-07', 'VALUE1': '2532', 'VALUE2': '1.3', 'VALUE3': '2030', 'VALUE4': '5.5'},
      {'NAME': '2018-08', 'VALUE1': '2544', 'VALUE2': '1', 'VALUE3': '2023.23', 'VALUE4': '5.5'},
      {'NAME': '2018-09', 'VALUE1': '2547', 'VALUE2': '1', 'VALUE3': '2053.32', 'VALUE4': '5.5'},
      {'NAME': '2018-10', 'VALUE1': '2455', 'VALUE2': '2.5', 'VALUE3': '2040', 'VALUE4': '5.5'},
      {'NAME': '2018-12', 'VALUE1': '2541', 'VALUE2': '0.1', 'VALUE3': '2014', 'VALUE4': '5.5'},
      {'NAME': '2019-01', 'VALUE1': '2541', 'VALUE2': '0.1', 'VALUE3': '2014', 'VALUE4': '5.5'},
      {'NAME': '2019-02', 'VALUE1': '2541', 'VALUE2': '0.1', 'VALUE3': '2014', 'VALUE4': '5.5'},
      {'NAME': '2019-03', 'VALUE1': '2541', 'VALUE2': '0.1', 'VALUE3': '2014', 'VALUE4': '5.5'}]
  }
})
