let state = 0
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api'
]
let href = hrefArr[state] + '/report'

let API_LIST = {
   state:state,
  'hujinDataDate': href + '/hujin/dataDate',
  'hujinHeadData': href + '/hujin/headData',
  'hujinChartUp': href + '/hujin/chartUp',
  'hujinChartMid': href + '/hujin/chartMid',
  'hujinChartDwn': href + '/hujin/chartDwn',
  'hujinKehuHeadData': href + '/hujin/hujinKehuHeadData',
  'hujinPdf': href + '/report/pdf/hujinPdf',
  'hujinKehuChart': href + '/hujin/kehuChart',

  'jingpinHeadData': href + '/jingpin/headData',
  'jingpinChartUp': href + '/jingpin/chartUp',
  'jingpinChartMid': href + '/jingpin/chartMid',
  'jingpinChartDwn': href + '/jingpin/chartDwn',

  'dataGridDemo': href + '/dataGrid/getData'
}
export default API_LIST
