const display = document.getElementById("display")
const plusButton = document.getElementById("button-plus")
const minusButton = document.getElementById("button-minus")
const waruButton = document.getElementById("button-waru")
const baiButton = document.getElementById("button-bai")
const equalButton = document.getElementById("equal-button")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const button0 = document.getElementById("button0")
const buttonClear = document.getElementById("button-clear")
let count = ""

//ボタンをクリックした時の処理を登録
equalButton.onclick = function(count) {
  if (String(count).includes("+")) {
    const plus = count.sprit("+")
    let count = 0
    for (let i = 0; i < plus.length; i++) {
      count += Number(plus[i])
    }
    display.textContent = count
  } else if (String(count).includes("-")) {
    const minus = count.sprit("-")
    let count = 0
    for (let i = 0; i < minus.length; i++) {
      count -= Number(minus[i])
    }
    display.textContent = count
  } else if (String(count).includes("*")) {
    const bai = count.sprit("*")
    let count = 0
    for (let i = 0; i < bai.length; i++) {
      count *= Number(bai[i])
    }
    display.textContent = count
  } else if (String(count).includes("÷")) {
    const waru = count.sprit("÷")
    let count = 0
    for (let i = 0; i < waru.length; i++) {
      count += Number(waru[i])
    }
    display.textContent = count
  }
}
buttonClear.onclick = function() {
  count = "0"
  display.textContent = count
  count = ""
}

button1.onclick = function() {
  count += "1"
  display.textContent = count
}
button2.onclick = function() {
  count += "2"
  display.textContent = count
}
button3.onclick = function() {
  count += "3"
  display.textContent = count
}
button4.onclick = function() {
  count += "4"
  display.textContent = count
}
button5.onclick = function() {
  count += "5"
  display.textContent = count
}
button6.onclick = function() {
  count += "6"
  display.textContent = count
}
button7.onclick = function() {
  count += "7"
  display.textContent = count
}
button8.onclick = function() {
  count += "8"
  display.textContent = count
}
button9.onclick = function() {
  count += "+"
  display.textContent = count
}
button0.onclick = function() {
  count += "0"
  display.textContent = count
}
plusButton.onclick = function() {
  count += "+"
  display.textContent = count
}
minusButton.onclick = function() {
  count += "-"
  display.textContent = count
}
baiButton.onclick = function() {
  count += "*"
  display.textContent = count
}
waruButton.onclick = function() {
  count += "÷"
  display.textContent = count
}
