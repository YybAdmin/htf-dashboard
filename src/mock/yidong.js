import Mock from 'mockjs'
import API_LIST from  '../apiList'
//summary数据
Mock.mock(API_LIST.yidong.yidongSummary, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if(pageVal.search == '00'){
    return {
      'code': '200',
      'msg': 'success',
      'list': [{VALUE1:'1',VALUE2:'2',VALUE3:'20',VALUE4:'100'}]
    }
  }else{
    return {
      'code': '200',
      'msg': 'success',
      'list': [{VALUE1:'3',VALUE2:'5',VALUE3:'50',VALUE4:'900'}]
    }
  }

})
//table详情列表
Mock.mock(API_LIST.yidong.yidongDataCard, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  if(pageVal.search == '00'){
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
      }]
    }
  }else{
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
  }
})
// 30天ji
Mock.mock(API_LIST.yidong.yidong30Data, /post/i, function (req) {
  let pageVal = JSON.parse(req.body)
  return {
    'code': '200',
    'msg': 'success',
                              //当前份额       近7天均值      30天均值      方差
    'list': [{NAME:'2019-03-01',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-02',VALUE1:'3100',VALUE2:'3000',VALUE3:'3020',VALUE4:'100'},
            {NAME:'2019-03-03',VALUE1:'3200',VALUE2:'3000',VALUE3:'3030',VALUE4:'100'},
            {NAME:'2019-03-04',VALUE1:'3300',VALUE2:'3000',VALUE3:'3010',VALUE4:'100'},
            {NAME:'2019-03-05',VALUE1:'3400',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-06',VALUE1:'3200',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-07',VALUE1:'3300',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-08',VALUE1:'3200',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-09',VALUE1:'3300',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-10',VALUE1:'3200',VALUE2:'3000',VALUE3:'3050',VALUE4:'100'},
            {NAME:'2019-03-11',VALUE1:'3300',VALUE2:'3000',VALUE3:'3040',VALUE4:'100'},
            {NAME:'2019-03-12',VALUE1:'3200',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-13',VALUE1:'3300',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-14',VALUE1:'3200',VALUE2:'3000',VALUE3:'3030',VALUE4:'110'},
            {NAME:'2019-03-15',VALUE1:'3300',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-16',VALUE1:'3300',VALUE2:'3000',VALUE3:'3020',VALUE4:'110'},
            {NAME:'2019-03-17',VALUE1:'3000',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-18',VALUE1:'3100',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-19',VALUE1:'3200',VALUE2:'3000',VALUE3:'3040',VALUE4:'100'},
            {NAME:'2019-03-20',VALUE1:'3100',VALUE2:'3000',VALUE3:'3020',VALUE4:'110'},
            {NAME:'2019-03-22',VALUE1:'3200',VALUE2:'3000',VALUE3:'3020',VALUE4:'100'},
            {NAME:'2019-03-23',VALUE1:'3300',VALUE2:'3000',VALUE3:'3030',VALUE4:'120'},
            {NAME:'2019-03-24',VALUE1:'3200',VALUE2:'3000',VALUE3:'3050',VALUE4:'100'},
            {NAME:'2019-03-25',VALUE1:'3300',VALUE2:'3000',VALUE3:'3040',VALUE4:'100'},
            {NAME:'2019-03-26',VALUE1:'3200',VALUE2:'3000',VALUE3:'3030',VALUE4:'120'},
            {NAME:'2019-03-27',VALUE1:'3300',VALUE2:'3000',VALUE3:'3020',VALUE4:'110'},
            {NAME:'2019-03-28',VALUE1:'3200',VALUE2:'3000',VALUE3:'3030',VALUE4:'100'},
            {NAME:'2019-03-29',VALUE1:'3300',VALUE2:'3000',VALUE3:'3000',VALUE4:'100'},
            {NAME:'2019-03-30',VALUE1:'3900',VALUE2:'3000',VALUE3:'3010',VALUE4:'100'}]
  }
})
