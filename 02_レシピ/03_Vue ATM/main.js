const now = new Date().toLocaleString({ timeZone: "Asia/Tokyo" })
// "3/19/2019, 3:29:58 PM"
new Vue({
  el: "#inputDiv",
  data: {
    inputMoney: 0,
    zandakaMoney: 0,
    kirokus: [
      {
        日にち: now,
        タイプ: "入金",
        金額: 1000,
      },
      {
        日にち: now,
        タイプ: "出金",
        金額: 1000,
      },
    ],
    log: "",
  },
  methods: {
    nyukin: function() {
      this.zandakaMoney += Number(this.inputMoney)
      //   this.kirokus.splice(0, 0, "日にち：" + now)
      this.kirokus.push(this.kirokus[0])
      console.log(this.kirokus)
    },
    shukkin: function() {
      this.zandakaMoney -= Number(this.inputMoney)
    },
  },
})
