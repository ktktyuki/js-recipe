const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function() {
  count += 0.01
  display.textContent = count
}
let id = null
button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
//発展２ボタンを押してからromを通って実行されるまでのラグが生じるから
//発展３わからない
