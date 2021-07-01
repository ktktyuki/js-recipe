// 引数 number を受け取る関数
const genkiFunction = function(number) {
  // n を 1 から、 number まで、 値を 1 ずつ増やしながら、 for の {} の中身を繰り返す
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(n + "!!!!!!!")
    } else {
      console.log(n)
    }
  }
}
genkiFunction()

//2 FizzBuzz
const genkiFunction2 = function(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i)
    }
  }
}
genkiFunction2()

//3 3が含まれているとき元気になる
const genkiFunction3 = function(number) {
  for (let l = 1; l <= number; l++) {
    const x1 = l / 10
    const x2 = l / 100
    const x3 = l / 1000
    if (
      l % 3 === 0 ||
      l % 10 === 3 ||
      x1 % 10 === 3 ||
      x2 % 10 === 3 ||
      x3 % 10 === 3
    ) {
      console.log(l + "!!!!!!")
    } else {
      console.log(l)
    }
  }
}
genkiFunction3(100)
