let ifUseMock = false
let hrefArr = [
  '',
  'https://iapp.htffund.com/microservice/iapp-dashboard/api'
]

let href = hrefArr[1]

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
    jingpinChartUp: href + '/report/jingpin/chartUp',
    jingpinChartMid: href + '/report/jingpin/chartMid',
    jingpinChartDwn: href + '/report/jingpin/chartDwn',
    jingpinHeadData2: href + '/report/jingpin/headData2',
    jingpinChartMid2: href + '/report/jingpin/chartMid2',
    jingpinChartDwn2: href + '/report/jingpin/chartDwn2',
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
    getGridData:  href + '/indicator/monitor/getAnalystUsing',
    dataRank: href + '/indicator/monitor/getCommentOrder',
    getHeadData: href + '/indicator/monitor/getIndicatorUsing',
    dataChart: href + '/indicator/monitor/getIndicatorCountChart'
  }
}
export default API_LIST
