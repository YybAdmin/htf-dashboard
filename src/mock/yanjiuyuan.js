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
