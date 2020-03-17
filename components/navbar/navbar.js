const navBarHeight = wx.getSystemInfoSync().statusBarHeight + 44

Component({

  properties: {
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: 'Wechat'
    },
    titleColor: {
      type: String,
      value: '#ffffff'
    },
    background: {
      type: String,
      value: '#2f2f2f'
    }
  },

  data: {
    navBarHeight
  },

  methods: {
    home() {
      this.triggerEvent('home')
      wx.reLaunch({
        url: '/index/index'
      })
    },

    back() {
      this.triggerEvent('back')
      if (getCurrentPages().length === 1) {
        wx.redirectTo({
          url: '/index/index'
        })
      } else {
        wx.navigateBack()
      }
    }
  }
})
