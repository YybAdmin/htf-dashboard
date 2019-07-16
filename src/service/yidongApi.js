import axios from 'axios'
import API_LIST from '../apiList'
export function getSummary(pageVal,success) {
  axios.post(API_LIST.yidong.yidongSummary,pageVal).then(res=>{
    success(res.data.list)
  })
}
export function getDataCard(pageVal,success) {
  axios.post(API_LIST.yidong.yidongDataCard,pageVal).then(res=>{
    success(res.data.list)
  })
}
export function get30Data(pageVal,success) {
  axios.post(API_LIST.yidong.yidong30Data,pageVal).then(res=>{
    success(res.data.list)
  })
}
