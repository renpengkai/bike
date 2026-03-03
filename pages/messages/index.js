Page({
  data: {
    tabs: ['订单消息', '客服消息', '质保回馈'],
    active: '订单消息',
    dataMap: {
      订单消息: ['订单001 已发货', '订单002 处理中'],
      客服消息: ['客服: 您好，请问需要帮助吗？', '客服: 已为您记录反馈'],
      质保回馈: ['质保申请已受理', '请上传故障照片']
    },
    list: []
  },

  onLoad() { this.refresh(); },
  switchTab(e) { this.setData({ active: e.currentTarget.dataset.item }); this.refresh(); },
  refresh() { this.setData({ list: this.data.dataMap[this.data.active] || [] }); },
  goHome() { wx.navigateTo({ url: '/pages/home/index' }); },
  goCustomize() { wx.navigateTo({ url: '/pages/customize/index?mode=custom' }); },
  goProfile() { wx.navigateTo({ url: '/pages/profile/index' }); },
  go3d() { wx.navigateTo({ url: '/pages/placeholder3d/index' }); }
});
