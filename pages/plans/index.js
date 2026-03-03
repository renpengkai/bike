Page({
  data: { plans: [] },
  onShow() {
    const app = getApp();
    const plans = (app.globalData.savedPlans || []).map((p) => ({
      ...p,
      rows: Object.keys(p.items || {}).map((type) => ({ type, ...p.items[type] }))
    }));
    this.setData({ plans });
  },
  remove(e) {
    const app = getApp();
    const i = e.currentTarget.dataset.index;
    app.globalData.savedPlans.splice(i, 1);
    this.onShow();
  }
});
