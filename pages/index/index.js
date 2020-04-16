const app = getApp()

Page({
  data: {
    code: ''
  },
  onLoad: function () {
    let that = this
    tt.login({
      success(res) {
        that.setData({
          code: res.code
        })
        console.log(`login调用成功：${res.code}`);
      },
      fail(res) {
        tt.showToast({
          title: '登录失败' // 内容
        });
      }
    })
  },
})
