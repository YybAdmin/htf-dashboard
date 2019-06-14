let state = 1
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api'
]
let href = hrefArr[state]

let API_LIST = {
  'hujinDataDate': href + '/dev/hujin/dataDate',
  'hujinHeadData': href + '/dev/hujin/headData',
  'hujinChartUp': href + '/dev/hujin/chartUp',
  'hujinChartMid': href + '/dev/hujin/chartMid',
  'hujinChartDwn': href + '/dev/hujin/chartDwn',
  'hujinKehuHeadData': href + '/dev/hujin/hujinKehuHeadData',
  'hujinPdf': href + '/report/pdf/hujinPdf',
  'hujinKehuChart': href + '/dev/hujin/kehuChart',
  'jingpinHeadData': href + '/report/jingpin/headData',
  'jingpinChartUp': href + '/report/jingpin/chartUp',
  'jingpinChartMid': href + '/report/jingpin/chartMid',
  'jingpinChartDwn': href + '/report/jingpin/chartDwn'
}
export default API_LIST
