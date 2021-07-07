const bon = {
  name: "大久保友稀",
  university: "横浜国立大学",
  hobbies: ["ゲーム", "スポーツ", "カラオケ"],
  age: 18,
  families: {
    father: "泰輔",
    mather: "清美",
  },

  sayhello: function() {
    alert(`おはよう!${bon.name}です`)
  },
}
console.log(bon.hobbies[1])
bon.sayhello()

const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 15 === 0) {
      console.log("FizzBuzz")
    } else if (n % 3 === 0) {
      console.log("Fizz")
    } else if (n % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(n)
    }
  }
}
genkiFunction(100)
