import Mock from 'mockjs'
//summary数据
Mock.mock('/report/yidong/summary', /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{VALUE1:'3',VALUE2:'5',VALUE3:'50',VALUE4:'900'}]
  }
})
//table详情列表
Mock.mock('/report/yidong/dataCard', /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{
      name1: '腾讯',
      name2: '全额宝',
      value1: '10',
      value2: '3000',
      value3: '3000',
      value4: '5,000.89',
      value5: '1000.90',
      value6: '80'
    }, {
      name1: '无锡市民卡...',
      name2: '全额宝',
      value1: '10',
      value2: '20000',
      value3: '23000',
      value4: '5,000.89',
      value5: '1000.90',
      value6: '80'
    }, {
      name1: '蚂蚁',
      name2: '行业混合',
      value1: '10',
      value2: '3000',
      value3: '3000',
      value4: '5,000.89',
      value5: '1000.90',
      value6: '80'
    }]
  }
})
