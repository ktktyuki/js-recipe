const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

// addButton.onclick = function() {
//   const text = inputElement.value
//   const card = document.createElement("div")
//   card.className = "card"
//   const todo = document.createElement("div")
//   todo.className = "todo"
//   todo.textContent = text
//   card.append(todo)
//   container.append(card)
//   inputElement.value = ""
//   //削除ボタン

//   const deleteButton = document.createElement("div")
//   deleteButton.className = "delete"

//   deleteButton.onclick = function() {
//     card.remove()
//   }
//   card.append(deleteButton)
// }

addButton.onkeypressed(KeyEvent.) = function() {
  //カードを作成
  const card = createCard(inputElement.value)
  container.append(card)
  //入力欄を空にする
  inputElement.value = ""
}
//共通の処理：テキストからカードを作成する
const createCard = function(text) {
  //カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"
  //テキストを表示するところを作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  //削除ボタン押した時の処理を登録
  deleteButton.onclick = function() {
    card.remove()
  }
  card.append(deleteButton)
  return card
}
