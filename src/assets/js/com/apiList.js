let state = 1
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api'
]
let href = hrefArr[state]

let API_LIST = {
  'hujinDataDate': href + '/report/hujin/dataDate',
  'hujinHeadData': href + '/report/hujin/headData',
  'hujinChartUp': href + '/report/hujin/chartUp',
  'hujinChartMid': href + '/report/hujin/chartMid',
  'hujinChartDwn': href + '/report/hujin/chartDwn',
  'hujinKehuHeadData': href + '/report/hujin/hujinKehuHeadData',
  'hujinPdf': href + '/test/pdf',
  'hujinKehuChart': href + '/report/hujin/kehuChart',
  'jingpinHeadData': href + '/report/jingpin/headData',
  'jingpinChartUp': href + '/report/jingpin/chartUp',
  'jingpinChartMid': href + '/report/jingpin/chartMid',
  'jingpinChartDwn': href + '/report/jingpin/chartDwn'
}
export default API_LIST
