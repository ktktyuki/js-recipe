const imageElement = document.getElementById("dog-image")

//指定のサーバーにデータを取りに行く
fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    return res.json() //結果をjsonとして読み込んで、次のthenに渡す。
  })
  .then((data) => {
    imageElement.src = data.message //画像を保存する
  })
