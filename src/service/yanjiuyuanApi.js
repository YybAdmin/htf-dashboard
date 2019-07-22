import axios from 'axios';
import API_LIST from '../apiList';

export function getChartUpData(pageVal, success)
{
  axios.post(API_LIST.yanjiuyuan.chartUp,pageVal).then(res=>{
    success(res)
  })
}
