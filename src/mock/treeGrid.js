import Mock from 'mockjs'

Mock.mock('/report/hujin/dataDate', /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'BATCHDate': '20190101'
  }
})
Mock.mock('/report/hujin/headData', /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{ 'VALUE1': '111,11', 'VALUE2': '111,22', 'VALUE3': '111,33', 'VALUE4': '111,44', 'VALUE5': '111,55', 'VALUE6': '111,66' },
      { 'VALUE1': '211,11', 'VALUE2': '111,22', 'VALUE3': '111,33', 'VALUE4': '111,44', 'VALUE5': '111,55', 'VALUE6': '111,66' },
      { 'VALUE1': '311,11', 'VALUE2': '111,22', 'VALUE3': '111,33', 'VALUE4': '111,44', 'VALUE5': '111,55', 'VALUE6': '111,66' }]
  }
})
// 上图 分布
Mock.mock('/report/hujin/chartUp', /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if (pageVal.fbOrQs1 === 1) {
    if (pageVal.tabletr === 1) {
      if (pageVal.proType === 1) {
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '公募', 'VALUE1': '700.25', 'VALUE2': '670'},
            {'KKEY': '3', 'NAME': '专户', 'VALUE1': '300.65', 'VALUE2': '400'},
            {'KKEY': '4', 'NAME': '资管', 'VALUE1': '500.54', 'VALUE2': '600'}]
        }
      } else if (pageVal.proType === 2) { // 公募
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '100.25', 'VALUE2': '200'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '300.65', 'VALUE2': '400'},
            {'KKEY': '4', 'NAME': '债券', 'VALUE1': '500.54', 'VALUE2': '600'},
            {'KKEY': '5', 'NAME': '理财', 'VALUE1': '500.54', 'VALUE2': '600'}]
        }
      } else if (pageVal.proType === 3) { // 专户
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '100.25', 'VALUE2': '200'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '300.65', 'VALUE2': '400'}]
        }
      }
    } else if (pageVal.tabletr === 2) {
      if (pageVal.proType === 1) {
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '公募', 'VALUE1': '100.25', 'VALUE2': '-50', 'VALUE3': '60.25', 'VALUE4': '100'},
            {'KKEY': '3', 'NAME': '专户', 'VALUE1': '300.65', 'VALUE2': '-100', 'VALUE3': '230.25', 'VALUE4': '200'},
            {'KKEY': '4', 'NAME': '资管', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
        }
      } else if (pageVal.proType === 2) { // 公募
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '180.25', 'VALUE2': '-70', 'VALUE3': '110.25', 'VALUE4': '100'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '300.65', 'VALUE2': '-100', 'VALUE3': '230.25', 'VALUE4': '200'},
            {'KKEY': '4', 'NAME': '债券', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'},
            {'KKEY': '5', 'NAME': '理财', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
        }
      } else if (pageVal.proType === 3) { // 专户
        return {
          'code': '200',
          'msg': 'success',
          'list': [{'KKEY': '2', 'NAME': '货币', 'VALUE1': '100.25', 'VALUE2': '-50', 'VALUE3': '60.25', 'VALUE4': '100'},
            {'KKEY': '3', 'NAME': '权益', 'VALUE1': '500.54', 'VALUE2': '-300', 'VALUE3': '200.25', 'VALUE4': '150'}]
        }
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
