let ifUseMock = true
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api',
  'http://localhost:18080/api',
  'http://192.168.8.171:8080'
]
let href = hrefArr[1] //生产
let href2 = hrefArr[0] //本机

let API_LIST = {
  ifUseMock: ifUseMock,
  huijin: {
    hujinDataDate : href + '/dev/hujin/dataDate',
    hujinHeadData : href + '/dev/hujin/headData',
    hujinChartUp : href + '/dev/hujin/chartUp',
    hujinChartMid : href + '/dev/hujin/chartMid',
    hujinChartDwn : href + '/dev/hujin/chartDwn',
    hujinKehuHeadData : href + '/dev/hujin/hujinKehuHeadData',
    hujinKehuChart : href + '/dev/hujin/kehuChart',
    hujinPdf : href + '/report/pdf/hujinPdf'
  },
  dataGrid: {
    dataGridDemo : href + '/report/dataGrid/getData',
    treeGridDemo : href + '/report/treeGrid/getData',
  },
  jingpin:{
    jingpinHeadData: href2 + '/report/jingpin/headData',
    jingpinChartUp: href2 = '/report/jingpin/chartUp',
    jingpinChartMid: href2 = '/report/jingpin/chartMid',
    jingpinChartDwn: href2 = '/report/jingpin/chartDwn'
  },
  yidong: {
    yidongSummary: href2 + '/report/yidong/summary',
    yidongDataCard: href2 + '/report/yidong/dataCard',
    yidong30Data: href2 + '/report/yidong/chart30Data'
  },
  selfPro: {
    allUserPro: href + '/report/selPro/getUserPro'
  },
  yanjiuyuan: {
    chartUp: href + '/report/yanjiuyuan/getChartUp'
  }
}
export default API_LIST
