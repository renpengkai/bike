Page({
  goCustomize() {
    wx.navigateTo({ url: '/pages/customize/index?mode=custom' });
  },
  goSingle() {
    wx.navigateTo({ url: '/pages/customize/index?mode=single' });
  },
  goBike() {
    wx.navigateTo({ url: '/pages/customize/index?mode=bike' });
  },
  goMessages() {
    wx.navigateTo({ url: '/pages/messages/index' });
  },
  goProfile() {
    wx.navigateTo({ url: '/pages/profile/index' });
  },
  go3d() {
    wx.navigateTo({ url: '/pages/placeholder3d/index' });
  }
});
