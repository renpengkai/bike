Page({
  goPlans() { wx.navigateTo({ url: '/pages/plans/index' }); },
  goAddresses() { wx.navigateTo({ url: '/pages/addresses/index' }); },
  goOrders() { wx.navigateTo({ url: '/pages/orders/index' }); },
  goHome() { wx.navigateTo({ url: '/pages/home/index' }); },
  goCustomize() { wx.navigateTo({ url: '/pages/customize/index?mode=custom' }); },
  goMessages() { wx.navigateTo({ url: '/pages/messages/index' }); },
  go3d() { wx.navigateTo({ url: '/pages/placeholder3d/index' }); }
});
