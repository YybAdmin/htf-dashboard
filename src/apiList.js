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
    hujinDataDate : href + '/hujin/dataDate',
    hujinHeadData : href + '/hujin/headData',
    hujinChartUp : href + '/hujin/chartUp',
    hujinChartMid : href + '/hujin/chartMid',
    hujinChartDwn : href + '/hujin/chartDwn',
    hujinKehuHeadData : href + '/hujin/hujinKehuHeadData',
    hujinPdf : href + '/pdf/hujinPdf',
    hujinKehuChart : href + '/hujin/kehuChart',
  },
  dataGrid: {
    dataGridDemo : href + '/dataGrid/getData',
    treeGridDemo : href + '/treeGrid/getData',
  },
  jingpin:{
    jingpinHeadData: href + '/jingpin/headData',
    jingpinChartUp: href = '/jingpin/chartUp',
    jingpinChartMid: href = '/jingpin/chartMid',
    jingpinChartDwn: href = '/jingpin/chartDwn'
  },
  yidong: {
    yidongSummary: href + '/yidong/summary',
    yidongDataCard: href + '/yidong/dataCard',
    yidong30Data: href + '/yidong/chart30Data'
  },
  selfPro: {
    allUserPro: href + '/selPro/getUserPro'
  }
}
export default API_LIST
