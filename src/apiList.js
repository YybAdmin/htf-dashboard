let state = 3
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api',
  'http://localhost:18080/api',
  'http://192.168.8.171:8080'
]
let href = hrefArr[state] + '/report'
let href2 = hrefArr[state] + '/dev'

let API_LIST = {
   state:state,
  'hujinDataDate': href + '/hujin/dataDate',
  'hujinHeadData': href + '/hujin/headData',
  'hujinChartUp': href + '/hujin/chartUp',
  'hujinChartMid': href + '/hujin/chartMid',
  'hujinChartDwn': href + '/hujin/chartDwn',
  'hujinKehuHeadData': href + '/hujin/hujinKehuHeadData',
  'hujinPdf': href2 + '/pdf/hujinPdf',
  'hujinKehuChart': href + '/hujin/kehuChart',

  'jingpinHeadData': href + '/jingpin/headData',
  'jingpinChartUp': href + '/jingpin/chartUp',
  'jingpinChartMid': href + '/jingpin/chartMid',
  'jingpinChartDwn': href + '/jingpin/chartDwn',

  'dataGridDemo': href + '/dataGrid/getData',
  'treeGridDemo': href + '/treeGrid/getData',

  'yidongSummary':href + '/yidong/summary',
  'yidongDataCard':href + '/yidong/dataCard',
  'yidongHead':href + '/yidong/headData',
  'yidongChart':href + '/yidong/chartData',
  'yidongGrid':href + '/yidong/chartGrid',

  'allUserPro': href + '/selPro/getUserPro'
}
export default API_LIST
