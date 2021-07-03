const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
let count = 0
//ボタンをクリックした時の処理を登録
plusButton.onclick = function() {
  //countを更新
  count += 1
  //count を表示
  display.textContent = count
}
