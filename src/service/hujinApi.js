import axios from 'axios'
import API_LIST from '../apiList'
export function getDataDate(pageVal,success) {
  axios.post(API_LIST.huijin.hujinHeadData,pageVal).then(res=>{
    success(res)
  })
}
export function getChartUpData(pageVal, success)
{
  axios.post(API_LIST.huijin.hujinChartUp,pageVal).then(res=>{
    success(res)
  })
}
export function getChartMidData(pageVal, success) {
  axios.post(API_LIST.huijin.hujinChartMid,pageVal).then(res=>{
    success(res)
  })
}
export function getChartDwnData(pageVal, success) {
  axios.post(API_LIST.huijin.hujinChartDwn,pageVal).then(res=>{
    success(res)
  })
}
export function getChartKHChartData(pageVal,success) {
  axios.post(API_LIST.huijin.hujinKehuChart,pageVal).then(res=>{
    success(res)
  })
}
