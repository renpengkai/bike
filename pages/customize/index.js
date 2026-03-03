const { categories, bikeTypes, products, completeBikes } = require('../../utils/mock');

Page({
  data: {
    mode: 'custom',
    categories,
    bikeTypes,
    activeCategory: categories[0],
    selectedType: '',
    displayProducts: [],
    selectedMap: {},
    selectedList: [],
    showCart: false,
    totalPrice: 18888,
    showSave: false,
    saveSlots: ['方案一', '方案二', '方案三'],
    saveName: '方案一'
  },

  onLoad(query) {
    const mode = query.mode || 'custom';
    this.setData({ mode });
    this.refreshProducts();
  },

  onShow() {
    const pending = wx.getStorageSync('pendingSelection');
    if (!pending) return;
    wx.removeStorageSync('pendingSelection');
    if (pending.mode !== this.data.mode) return;
    const category = pending.type || this.data.activeCategory;
    const selectedMap = { ...this.data.selectedMap, [category]: { id: pending.id, name: pending.name, price: pending.price } };
    this.setData({ activeCategory: category });
    this.updateSelected(selectedMap);
    this.refreshProducts();
  },

  refreshProducts() {
    const { mode, activeCategory } = this.data;
    const displayProducts = mode === 'bike' ? completeBikes : products[activeCategory] || [];
    this.setData({ displayProducts });
  },

  selectType(e) {
    this.setData({ selectedType: e.currentTarget.dataset.item });
  },

  selectCategory(e) {
    if (!this.data.selectedType) {
      wx.showToast({ title: '请先选车型', icon: 'none' });
      return;
    }
    this.setData({ activeCategory: e.currentTarget.dataset.item });
    this.refreshProducts();
  },

  goDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/product-detail/index?id=${id}&mode=${this.data.mode}&type=${this.data.activeCategory}` });
  },

  handleReplace(e) {
    const type = e.currentTarget.dataset.type;
    if (this.data.mode === 'single') {
      const selectedMap = { ...this.data.selectedMap };
      delete selectedMap[type];
      this.updateSelected(selectedMap);
      return;
    }
    this.setData({ activeCategory: type });
    wx.showToast({ title: `跳转至${type}`, icon: 'none' });
    this.refreshProducts();
  },

  toggleCart() { this.setData({ showCart: !this.data.showCart }); },
  openSave() { this.setData({ showSave: true }); },
  closeSave() { this.setData({ showSave: false }); },
  pickSave(e) { this.setData({ saveName: e.currentTarget.dataset.slot }); },

  savePlan() {
    const app = getApp();
    const { saveName, selectedType, selectedMap, totalPrice } = this.data;
    app.globalData.savedPlans = app.globalData.savedPlans || [];
    app.globalData.savedPlans.push({
      name: saveName,
      bikeType: selectedType || '未选择车型',
      items: selectedMap,
      price: totalPrice
    });
    this.setData({ showSave: false });
    wx.showToast({ title: '方案已保存', icon: 'success' });
  },

  submitOrder() {
    wx.navigateTo({ url: '/pages/orders/index' });
  },

  updateSelected(selectedMap) {
    const selectedList = Object.keys(selectedMap).map((type) => ({ type, ...selectedMap[type] }));
    const totalPrice = selectedList.reduce((sum, item) => sum + item.price, 0) || 18888;
    this.setData({ selectedMap, selectedList, totalPrice });
  },

  goHome() { wx.navigateTo({ url: '/pages/home/index' }); },
  goMessages() { wx.navigateTo({ url: '/pages/messages/index' }); },
  goProfile() { wx.navigateTo({ url: '/pages/profile/index' }); },
  go3d() { wx.navigateTo({ url: '/pages/placeholder3d/index' }); }
});
