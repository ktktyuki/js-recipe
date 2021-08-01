// "3/19/2019, 3:29:58 PM"
new Vue({
  el: "#inputDiv",
  data: {
    inputMoney: 0,
    zandakaMoney: 0,
    logs: [],
  },
  methods: {
    nyukin: function() {
      this.zandakaMoney += Number(this.inputMoney)
      const now = new Date()
      this.logs.push({
        date: now,
        type: "入金",
        money: this.inputMoney,
      })
      console.log(this.kirokus)
    },
    shukkin: function() {
      this.zandakaMoney -= Number(this.inputMoney)
      const now = new Date()
      this.logs.push({
        date: now,
        type: "出金",
        money: this.inputMoney,
      })
    },
  },
})
