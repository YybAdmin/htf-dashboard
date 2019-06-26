var myUtil = {
  theme: true, // 主题  true 金色 false咖啡色
  ifReady:false,
  mark:'mark 0000',
  watermark: function (settings) {
    // 默认设置
    var defaultSettings = {
      watermark_txt0: '',
      watermark_txt2: '',
      watermark_txt1: '', // 根据本业务需求 有三行 换行显示 创建三个节点
      watermark_x: 30, // 水印起始位置x轴坐标
      watermark_y: 30, // 水印起始位置Y轴坐标
      watermark_rows: 0, // 水印行数
      watermark_cols: 0, // 水印列数
      watermark_x_space: 50, // 水印x轴间隔
      watermark_y_space: 70, // 水印y轴间隔
      watermark_color: '#aaa', // 水印字体颜色
      watermark_alpha: 0.3, // 水印透明度
      watermark_fontsize: '9px', // 水印字体大小
      watermark_font: '微软雅黑', // 水印字体
      watermark_width: 60, // 水印宽度
      watermark_height: 20, // 水印长度
      watermark_angle: 30,
      watermark_jo: 50
      // 水印倾斜度数
    }
    // 采用配置项替换默认值，作用类似jquery.extend
    if (arguments.length === 1 && typeof arguments[0] === 'object') {
      var src = arguments[0] || {}
      for (let key in src) {
        if (src[key] && defaultSettings[key] &&
          src[key] === defaultSettings[key]) { continue } else if (src[key]) { defaultSettings[key] = src[key] }
      }
    }

    var oTemp = document.createDocumentFragment()

    // 获取页面最大宽度
    var pageWidth = Math.max(document.body.scrollWidth, document.body.clientWidth) - 60.0
    var cutWidth = pageWidth * 0.0150
    pageWidth = pageWidth - cutWidth
    // 获取页面最大高度
    // var pageHeight = Math.max(document.body.scrollHeight, document.body.clientHeight)
    var pageHeight = document.getElementById('app').scrollHeight
    // 如果将水印列数设置为0，或水印列数设置过大，超过页面最大宽度，则重新计算水印列数和水印x轴间隔
    if (defaultSettings.watermark_cols === 0 ||
      (parseInt(defaultSettings.watermark_x +
        defaultSettings.watermark_width *
        defaultSettings.watermark_cols +
        defaultSettings.watermark_x_space *
        (defaultSettings.watermark_cols - 1)) > pageWidth)) {
      defaultSettings.watermark_cols = parseInt((pageWidth -
        defaultSettings.watermark_x + defaultSettings.watermark_x_space) /
        (defaultSettings.watermark_width + defaultSettings.watermark_x_space))
      defaultSettings.watermark_x_space = parseInt((pageWidth -
        defaultSettings.watermark_x - defaultSettings.watermark_width *
        defaultSettings.watermark_cols) /
        (defaultSettings.watermark_cols - 1))
    }
    // 如果将水印行数设置为0，或水印行数设置过大，超过页面最大长度，则重新计算水印行数和水印y轴间隔
    if (defaultSettings.watermark_rows === 0 ||
      (parseInt(defaultSettings.watermark_y + defaultSettings.watermark_height * defaultSettings.watermark_rows +
        defaultSettings.watermark_y_space *
        (defaultSettings.watermark_rows - 1)) > pageHeight)) {
      defaultSettings.watermark_rows = parseInt((defaultSettings.watermark_y_space +
        pageHeight - defaultSettings.watermark_y) /
        (defaultSettings.watermark_height + defaultSettings.watermark_y_space))
      defaultSettings.watermark_y_space = parseInt(((pageHeight - defaultSettings.watermark_y) - defaultSettings.watermark_height *
        defaultSettings.watermark_rows) /
        (defaultSettings.watermark_rows - 1))
    }
    var x
    var y
    for (var i = 0; i < defaultSettings.watermark_rows; i++) {
      y = defaultSettings.watermark_y +
        (defaultSettings.watermark_y_space + defaultSettings.watermark_height) *
        i
      for (var j = 0; j < defaultSettings.watermark_cols; j++) {
        if (i % 2 === 1) {
          x = defaultSettings.watermark_x +
            defaultSettings.watermark_jo +
            (defaultSettings.watermark_width + defaultSettings.watermark_x_space) *
            j
        } else {
          x = defaultSettings.watermark_x +
            (defaultSettings.watermark_width + defaultSettings.watermark_x_space) *
            j
        }
        var maskDiv = document.createElement('div')
        maskDiv.id = 'maskDiv' + i + j
        maskDiv.className = 'maskDiv'
        // /三个节点
        var span0 = document.createElement('div')
        span0.appendChild(document
          .createTextNode(defaultSettings.watermark_txt0))
        var span1 = document.createElement('div')
        span1.appendChild(document
          .createTextNode(defaultSettings.watermark_txt1))
        var span2 = document.createElement('div')
        span2.appendChild(document
          .createTextNode(defaultSettings.watermark_txt2))
        maskDiv.appendChild(span0)
        maskDiv.appendChild(span1)
        maskDiv.appendChild(span2)
        // 设置水印div倾斜显示
        maskDiv.style.webkitTransform = 'rotate(-' +
          defaultSettings.watermark_angle + 'deg)'
        maskDiv.style.MozTransform = 'rotate(-' +
          defaultSettings.watermark_angle + 'deg)'
        maskDiv.style.msTransform = 'rotate(-' +
          defaultSettings.watermark_angle + 'deg)'
        maskDiv.style.OTransform = 'rotate(-' +
          defaultSettings.watermark_angle + 'deg)'
        maskDiv.style.transform = 'rotate(-' +
          defaultSettings.watermark_angle + 'deg)'
        maskDiv.style.visibility = ''
        maskDiv.style.position = 'absolute'
        maskDiv.style.left = x + 'px'
        maskDiv.style.top = y + 'px'
        maskDiv.style.overflow = 'hidden'
        maskDiv.style.zIndex = '9999'
        maskDiv.style.pointerEvents = 'none'// pointer-events:none
        // 让水印不遮挡页面的点击事件
        // maskDiv.style.border="solid #eee 1px";
        maskDiv.style.opacity = defaultSettings.watermark_alpha
        maskDiv.style.fontSize = defaultSettings.watermark_fontsize
        maskDiv.style.fontFamily = defaultSettings.watermark_font
        maskDiv.style.color = defaultSettings.watermark_color
        maskDiv.style.textAlign = 'center'
        maskDiv.style.width = defaultSettings.watermark_width + 'px'
        maskDiv.style.height = defaultSettings.watermark_height + 'px'
        maskDiv.style.display = 'block'
        oTemp.appendChild(maskDiv)
      }
      ;
    }
    ;
    myUtil.watermarkClear()
    document.body.appendChild(oTemp)
  },
  watermarkClear: function () {
    var list = document.getElementsByClassName('maskDiv')
    var p = document.body
    for (var i = list.length - 1; i > 0; i--) {
      p.removeChild(list[i])
    }
  },
  // 集成APP用户数据获取
  getAppUserInfo: function (pageVal) {
    let u = navigator.userAgent
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
    let userInfo = '{}'
    try {
      if (isAndroid && window.AndroidHtfPortal) {
        userInfo = window.AndroidHtfPortal.GetSysInfo()
        // 水印
        let UserInfoJson = JSON.parse(userInfo)
        let name = UserInfoJson.accountNameCN + ' ' + UserInfoJson.mobilePhone.substring(7, 11)
        myUtil.mark = name
        // 主题   1 咖色   2 金色
        if (UserInfoJson.theme === 1) { myUtil.theme = false } else { myUtil.theme = true }
        // 判断是否为函数
        try {
          // chartPermit(UserInfoJson.userCode)
        } catch (e) {
          console.log(e)
        }
      }
      if (isiOS) {
        window.iosAcceptUserInfo = function (userInfo) {
          // 水印
          var UserInfoJson = JSON.parse(userInfo)
          var name = UserInfoJson.accountNameCN + ' ' + UserInfoJson.mobilePhone.substring(7, 11)
          myUtil.mark = name
          // 主题   1 咖色   2 金色
          if (UserInfoJson.theme === 1) { myUtil.theme = false } else {  myUtil.theme = true }
          try {
          //  chartPermit(UserInfoJson.userCode)
          } catch (e) {
            console.log(e)
          }
        }
        window.webkit.messageHandlers.iosGetUserInfo.postMessage(null)
      }
    } catch (e) {
      console.log(e)
    }
  },
  getDeviceWidth: function () {
    return document.body.clientWidth
  }
}
export default myUtil
