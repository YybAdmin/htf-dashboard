let ifUseMock = false
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api'
]
let hrefDev = hrefArr[0] //开发
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
    dataGridDemo : hrefDev + '/report/dataGrid/getData',
    treeGridDemo : hrefDev + '/report/treeGrid/getData',
  },
  jingpin:{
    jingpinHeadData: hrefDev + '/report/jingpin/headData',
    jingpinChartUp: hrefDev + '/report/jingpin/chartUp',
    jingpinChartMid: hrefDev + '/report/jingpin/chartMid',
    jingpinChartDwn: hrefDev + '/report/jingpin/chartDwn'
  },
  yidong: {
    yidongSummary: hrefDev + '/report/yidong/summary',
    yidongDataCard: hrefDev + '/report/yidong/dataCard',
    yidong30Data: hrefDev + '/report/yidong/chart30Data'
  },
  selfPro: {
    allUserPro: hrefDev + '/report/selPro/getUserPro'
  },
  yanjiuyuan: {
    getGridData:  hrefDev + '/monitor/getAnalystUsing',
    dataRank: hrefDev + '/monitor/getCommentOrder',
    getHeadData: hrefDev + '/monitor/getIndicatorUsing',
    dataChart: hrefDev + '/monitor/getIndicatorCountChart'
  }
}
export default API_LIST
