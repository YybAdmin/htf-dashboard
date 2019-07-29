import axios from 'axios';
import API_LIST from '../apiList';

export function getChartUpData(pageVal, success)
{
  axios.post(API_LIST.yanjiuyuan.chartUp,pageVal).then(res=>{
    success(res)
  })
}

export function getGridData(pageVal,success) {
  axios.post(API_LIST.yanjiuyuan.getGridData,pageVal).then(res=>{
    success(res.data.list)
  })
}

export function dataRank(pageVal,success) {
  axios.post(API_LIST.yanjiuyuan.dataRank,pageVal).then(res=>{
    success(res.data.list)
  })
}
