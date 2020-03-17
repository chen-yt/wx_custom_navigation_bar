const navigationBarHeight = (getApp().statusBarHeight + 44) + 'px'

Page({
  data: {
    isShowBack: true,
    isShowHome: true,
    title: '小程序自定义导航栏',
    titleColor: '#ffffff',
    background: 'linear-gradient(135deg, #33B3F3 0%, #2070DC 100%)'
  },
  
  onBack() {
    console.log('导航栏被点击返回')
  },

  onHome() {
    console.log('导航栏被点击首页')
  },

  changeTitle() {
    this.setData({
      title: '标题很长，溢出自动隐藏～'
    })
  },

  changeBackground() {
    this.setData({
      background: '#2f2f2f'
    })
  },

  changeColor() {
    this.setData({
      titleColor: 'blue'
    })
  },

  changeBackBtn() {
    this.setData({
      isShowBack: !this.data.isShowBack
    })
  },

  changeHomeBtn() {
    this.setData({
      isShowHome: !this.data.isShowHome
    })
  }
})
