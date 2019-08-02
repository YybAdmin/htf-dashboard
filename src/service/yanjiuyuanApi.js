import axios from 'axios';
import API_LIST from '../apiList';
import myUtil from '@/assets/js/com/myUtil'
export function getHeadData(pageVal,success) {
  axios.get(API_LIST.yanjiuyuan.getHeadData,{headers:{"userId": myUtil.userCode}}).then(res=>{
    success(res.data.data)
  })
}
export function getGridData(pageVal,success) {
  axios.post(API_LIST.yanjiuyuan.getGridData,{
    "chartTimeType": pageVal.dateType,
    "endTime": pageVal.e_date,
    "queryType": pageVal.zhibiaoDim,
    "startTime": pageVal.s_date
  },{headers:{"userId": myUtil.userCode}}).then(res=>{
    success(res.data.data)
  })
}
export function dataRank(pageVal,success) {
  axios.post(API_LIST.yanjiuyuan.dataRank,{
    "chartTimeType": pageVal.dateType,
    "endTime": pageVal.e_date,
    "queryType": pageVal.zhibiaoDim,
    "startTime": pageVal.s_date
  },{headers:{"userId": myUtil.userCode}}).then(res=>{
    success(res.data.data)
  })
}
export function dataChart(pageVal,success) {
  axios.post(API_LIST.yanjiuyuan.dataChart,{
    "chartTimeType": pageVal.dateType,
    "endTime": pageVal.e_date,
    "queryType": pageVal.zhibiaoDim,
    "startTime": pageVal.s_date
  },{headers:{"userId": myUtil.userCode}}).then(res=>{
    success(res.data.data)
  })
}
