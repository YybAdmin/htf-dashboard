import axios from 'axios'
import API_LIST from '../apiList'
export function getDataDate(pageVal,success) {
  axios.post(API_LIST.hujinDataDate,pageVal).then(res=>{
    success(res)
  })
}
export function getChartUpData(pageVal, success)
{
  axios.post(API_LIST.hujinChartUp,pageVal).then(res=>{
    success(res)
  })
}
export function getChartMidData(pageVal, success) {
  axios.post(API_LIST.hujinChartMid,pageVal).then(res=>{
    success(res)
  })
}
export function getChartDwnData(pageVal, success) {
  axios.post(API_LIST.hujinChartDwn,pageVal).then(res=>{
    success(res)
  })
}
export function getChartKHChartData(pageVal,success) {
  axios.post(API_LIST.hujinKehuChart,pageVal).then(res=>{
    success(res)
  })
}
