const app = getApp()

Page({
  data: {
    code: ''
  },
  onLoad: function () {
    // tt.getSetting({
    //   success: function(res) {
    //     if (res.authSetting.)
    //   }
    // })
    tt.login({
      success(res) {
        this.setData({
          code: res.code
        })
        console.log(`login调用成功${res.code} ${res.anonymousCode}`);
      },
      fail(res) {
        console.log(`login调用失败`);
      }
    })
  },
})
