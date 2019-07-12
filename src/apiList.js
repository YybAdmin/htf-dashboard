let state = 1
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
  'hujinDataDate': href2 + '/hujin/dataDate',
  'hujinHeadData': href2 + '/hujin/headData',
  'hujinChartUp': href2 + '/hujin/chartUp',
  'hujinChartMid': href2 + '/hujin/chartMid',
  'hujinChartDwn': href2 + '/hujin/chartDwn',
  'hujinKehuHeadData': href2 + '/hujin/hujinKehuHeadData',
  'hujinPdf': href + '/pdf/hujinPdf',
  'hujinKehuChart': href2 + '/hujin/kehuChart',


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
