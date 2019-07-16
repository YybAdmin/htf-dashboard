import Mock from 'mockjs'
import API_LIST from  '../apiList'
//summary数据
Mock.mock(API_LIST.yidong.yidongSummary, /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{VALUE1:'3',VALUE2:'5',VALUE3:'50',VALUE4:'900'}]
  }
})
//table详情列表
Mock.mock(API_LIST.yidong.yidongDataCard, /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{
      NAME1: '腾讯',
      KKEY1: '37382',
      NAME2: '全额宝',
      KKEY2: '000332',
      VALUE1: '10',
      VALUE2: '3000',
      VALUE3: '3000',
      VALUE4: '5,000.89',
      VALUE5: '1000.90',
      VALUE6: '80'
    }, {
      NAME1: '无锡市民卡...',
      KKEY1: '2222',
      NAME2: '全额宝',
      KKEY2: '000332',
      VALUE1: '10',
      VALUE2: '10000',
      VALUE3: '23323',
      VALUE4: '3,000.89',
      VALUE5: '2200.90',
      VALUE6: '50'
    }, {
      NAME1: '蚂蚁',
      KKEY1: '3443',
      NAME2: '行业混合',
      KKEY2: '345987',
      VALUE1: '10',
      VALUE2: '6000',
      VALUE3: '8900',
      VALUE4: '1,000.89',
      VALUE5: '888.90',
      VALUE6: '30'
    }]
  }
})
