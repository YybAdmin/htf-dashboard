import axios from 'axios';
import API_LIST from '../apiList';
export function getHead2Data(pageVal,success) {
  axios.get(API_LIST.jingpin.jingpinHeadData,pageVal).then(res=>{
    success(res.data.data)
  })
}

