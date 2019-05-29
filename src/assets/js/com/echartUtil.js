var echartUtil = {
  xDate: function (dateType, dateString) {
    var retStr = dateString
    if (dateType === 1) {
      retStr = dateString.substring(4, 8)
    }
    if (dateType === 2) {
      retStr = dateString.substring(2, 6)
    }
    if (dateType === 3) {
      if (dateString.substring(4, 6) === '01' || dateString.substring(4, 6) === '02' || dateString.substring(4, 6) === '03' || dateString.substring(4, 6) === '-1') {
        retStr = dateString.substring(2, 4) + ' Q1'
      }
      if (dateString.substring(4, 6) === '04' || dateString.substring(4, 6) === '05' || dateString.substring(4, 6) === '06' || dateString.substring(4, 6) === '-2') {
        retStr = dateString.substring(2, 4) + ' Q2'
      }
      if (dateString.substring(4, 6) === '07' || dateString.substring(4, 6) === '08' || dateString.substring(4, 6) === '09' || dateString.substring(4, 6) === '-3') {
        retStr = dateString.substring(2, 4) + ' Q3'
      }
      if (dateString.substring(4, 6) === '10' || dateString.substring(4, 6) === '11' || dateString.substring(4, 6) === '12' || dateString.substring(4, 6) === '-4') {
        retStr = dateString.substring(2, 4) + ' Q4'
      }
    }
    if (dateType === 4) {
      retStr = dateString.substring(0, 4)
    }
    return retStr
  },
  xDateWeek: function (dateType, dateString) {
    var retStr = dateString
    if (dateType === 1) {
      retStr = dateString.substring(4, 8)
    }
    if (dateType === 2) {
      retStr = dateString.substring(4, 8)
    }
    if (dateType === 3) {
      retStr = dateString.substring(2, 6)
    }
    if (dateType === 4) {
      if (dateString.substring(4, 6) === '01' || dateString.substring(4, 6) === '02' || dateString.substring(4, 6) === '03') {
        retStr = dateString.substring(2, 4) + ' Q1'
      }
      if (dateString.substring(4, 6) === '04' || dateString.substring(4, 6) === '05' || dateString.substring(4, 6) === '06') {
        retStr = dateString.substring(2, 4) + ' Q2'
      }
      if (dateString.substring(4, 6) === '07' || dateString.substring(4, 6) === '08' || dateString.substring(4, 6) === '09') {
        retStr = dateString.substring(2, 4) + ' Q3'
      }
      if (dateString.substring(4, 6) === '10' || dateString.substring(4, 6) === '11' || dateString.substring(4, 6) === '12') {
        retStr = dateString.substring(2, 4) + ' Q4'
      }
    }
    if (dateType === 5) {
      retStr = dateString.substring(0, 4)
    }
    return retStr
  },
  toolTipDate: function (dateType, dateString) {
    var retStr = dateString
    return retStr
  },
  toThousands: function (valueStr) {
    return valueStr.replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
  }
}
export default echartUtil
