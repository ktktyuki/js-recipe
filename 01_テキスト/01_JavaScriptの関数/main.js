// 練習問題 １
const plus1 = function(x) {
  return x + 1
}
// 関数名:  plas1
// 引数:x
// 返り値:x+1

// 練習問題 ２
// f1: 1, 4, 7, 10, 13, 16, ...
const f1 = function(x) {
  return x + 3
}
console.log(f1(4))

// f2: 1, 10, 100, 1000, 10000, ...
const f2 = function(x) {
  return 10 ** n
}

// f3: 2, 14, 107, 1010, 10013, ...
const f3 = function(x) {
  return f1(x) + f2(x)
}

// 練習問題３
// ① ２つの引数を受け取り、それらをかけ合わせた値を返す関数 multiply
const multiply = function(n, m) {
  return n * m
}

// ② ２つの引数を受け取り、それらを足し合わせた結果を四捨五入した値を返す関数 plusRound
const plusRound = function(n, m) {
  return Math.round(n + m)
}
const sayHelloto = function(name) {
  alert("Hello" + name + "!")
}
sayHelloto("Taro")

const alerttime = function() {
  return alert(new Date().toLocaleString())
}
alerttime()
let count = 0

const countUp = function() {
  count += 1
}

countUp()
console.log(count) // 1

countUp()
countUp()
console.log(count) // 3
