let state = 0
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api',
  'http://localhost:18080/api',
  'http://192.168.8.171:8080'
]
let href = hrefArr[state] + '/report'
let href2 = hrefArr[state] + '/dev'

let API_LIST = {
  state: state,
  huijin: {
    'hujinDataDate': href + '/hujin/dataDate',
    'hujinHeadData': href + '/hujin/headData',
    'hujinChartUp': href + '/hujin/chartUp',
    'hujinChartMid': href + '/hujin/chartMid',
    'hujinChartDwn': href + '/hujin/chartDwn',
    'hujinKehuHeadData': href + '/hujin/hujinKehuHeadData',
    'hujinPdf': href + '/pdf/hujinPdf',
    'hujinKehuChart': href + '/hujin/kehuChart',
  },
  dataGrid: {
    'dataGridDemo': href + '/dataGrid/getData',
    'treeGridDemo': href + '/treeGrid/getData',
  },
  yidong: {
    'yidongSummary': href + '/yidong/summary',
    'yidongDataCard': href + '/yidong/dataCard',
    'yidongHead': href + '/yidong/headData',
    'yidongChart': href + '/yidong/chartData',
    'yidongGrid': href + '/yidong/chartGrid',
  },
  selfPro: {
    'allUserPro': href + '/selPro/getUserPro'
  }
}
export default API_LIST
