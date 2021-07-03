const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const doublebutton = document.getElementById("double-button")
const minusbutton = document.getElementById("minus-button")
let count = 0
//ボタンをクリックした時の処理を登録
plusButton.onclick = function() {
  //countを更新
  count += 1
  //count を表示
  display.textContent = count
}

doublebutton.onclick = function() {
  count *= 2
  display.textContent = count
}
minusbutton.onclick = function() {
  count -= 1
  display.textContent = count
}
