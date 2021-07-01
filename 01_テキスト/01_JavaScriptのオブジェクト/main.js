const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function() {
    console.log("ブンブンハロー YouTube")
  },
}

// アクセスの仕方
hikakin["name"] // "ヒカキン
hikakin["age"] // 24
//以下の方法がしゅりゅう
hikakin.name // "ヒカキン"
hikakin.age // 24
// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()

console.dir(document)
console.dir(window)
