let ifUseMock = true
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api',
  'http://localhost:18080/api',
  'http://192.168.8.171:8080'
]
let href = hrefArr[1] //生产
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
    jingpinHeadData: href + '/report/jingpin/headData',
    jingpinChartUp: href = '/report/jingpin/chartUp',
    jingpinChartMid: href = '/report/jingpin/chartMid',
    jingpinChartDwn: href = '/report/jingpin/chartDwn'
  },
  yidong: {
    yidongSummary: href + '/report/yidong/summary',
    yidongDataCard: href + '/report/yidong/dataCard',
    yidong30Data: href + '/report/yidong/chart30Data'
  },
  selfPro: {
    allUserPro: href + '/report/selPro/getUserPro'
  },
  yanjiuyuan: {
    chartUp: href + '/report/yanjiuyuan/getChartUp',
    getGridData: href + '/report/yanjiuyuan/getGridData'
  }
}
export default API_LIST
