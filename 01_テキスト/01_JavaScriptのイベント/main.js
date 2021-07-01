//button 要素と click イベント
const alertMessage = function() {
  alert("クリックしたね")
}

alertMessage()

//イベントが発生する要素を取得する
const button = document.getElementById("button")

const alertMessage2 = function() {
  alert("クリックしたね")
}
// 関数を登録
button.onclick = alertMessage2

// input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const logValue = function(e) {
  console.log(e.target.value)
}

inputText.oninput = logValue
inputDate.oninput = logValue
