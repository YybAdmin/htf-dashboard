import axios from 'axios'
export function updateSelPro(item, flag, success) {
  axios.post('/api/report/selPro/updateUserPro', {
    'sheetName': 'test',
    'tabSel': '1',
    'userCode': '297',
    'productCode': item.kkey,
    'ifadd': flag
  }).then(res => {
    success(res)
  })
}
