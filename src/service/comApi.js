import axios from 'axios'
export function updateSelPro(sheetName, tabSel,userCode,productCode,flag,success) {
  axios.post('/api/report/selPro/updateUserPro', {
    'sheetName': sheetName,
    'tabSel': tabSel,
    'userCode': userCode,
    'productCode': productCode,
    'ifadd': flag
  }).then(res => {
    success(res)
  })
}
export function getUserPro(sheetName,tabSel,userCode,success) {
  axios.post('/api/report/selPro/getUserPro',{
    'sheetName':sheetName,
    'tabSel':tabSel,
    'userCode':userCode
  }).then(res=>{
    success(res)
  })
}
