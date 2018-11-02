App({
  onLaunch: function () {
    wx.getSystemInfo({
      success: res => {
        this.statusBarHeight = res.statusBarHeight
      }
    })
  },
  statusBarHeight: 0
})
