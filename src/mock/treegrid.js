import Mock from 'mockjs'

Mock.mock('/report/treeGrid/getData', /post/i, function () {
  return {
    'code': '200',
    'msg': 'success',
    'list': [{
      'NUM': '1',
      'ID': '111',
      'STATE':'closed',
      'NAME': '测试11',
      'VALUE1': '232,32.23',
      'VALUE2': '231,243.23',
      'VALUE3': '232,32.23',
      'VALUE4': '231,243.23'
    },
    {
      'NUM': '2',
      'ID': '222',
      'STATE':'closed',
      'NAME': '测试22',
      'VALUE1': '132,32.23',
      'VALUE2': '231,243.23',
      'VALUE3': '232,32.23',
      'VALUE4': '231,243.23'
    },
    {
      'NUM':'3',
      'ID': '333',
      'STATE':'closed',
      'NAME': '测试33',
      'VALUE1': '32,32.23',
      'VALUE2': '231,243.23',
      'VALUE3': '232,32.23',
      'VALUE4': '231,243.23'
    },
    {
      'NUM':'4',
      'ID': '444',
      'STATE':'closed',
      'NAME': '测试44',
      'VALUE1': '2,32.23',
      'VALUE2': '231,243.23',
      'VALUE3': '232,32.23',
      'VALUE4': '231,243.23'
    }]
  }
})
