const { categories, products, completeBikes } = require('../../utils/mock');

Page({
  data: {
    mode: 'custom',
    type: categories[0],
    id: '',
    name: '商品',
    price: 18888,
    btnText: '加入当前方案'
  },

  onLoad(query) {
    const mode = query.mode || 'custom';
    const type = query.type || categories[0];
    const id = query.id;
    const list = mode === 'bike' ? completeBikes : (products[type] || []);
    const item = list.find((p) => p.id === id) || list[0];
    this.setData({
      mode,
      type,
      id: item.id,
      name: item.name,
      price: item.price,
      btnText: mode === 'bike' ? '立即购买' : (mode === 'single' ? '添加' : '加入当前方案')
    });
  },

  act() {
    if (this.data.mode === 'bike') {
      wx.navigateTo({ url: '/pages/orders/index' });
      return;
    }
    wx.setStorageSync('pendingSelection', {
      mode: this.data.mode,
      type: this.data.type,
      id: this.data.id,
      name: this.data.name,
      price: this.data.price
    });
    wx.navigateBack();
  }
});
