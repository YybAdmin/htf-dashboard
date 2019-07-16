import axios from 'axios'
import API_LIST from '../apiList'
export function getDataDate(pageVal,success) {
  axios.post(API_LIST.hujinDataDate,pageVal).then(res=>{
    success(res)
  })
}
