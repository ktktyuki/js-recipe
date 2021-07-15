const inputElement = document.getElementById("input-todo")
const inputElement2 = document.getElementById("input-todo2")
const inputElement3 = document.getElementById("input-todo3")
const container = document.getElementById("cards-container")
const container2 = document.getElementById("cards-container2")
const container3 = document.getElementById("cards-container3")
const addButton = document.getElementById("add-button")
const addButton2 = document.getElementById("add-button2")
const addButton3 = document.getElementById("add-button3")
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

addButton.onclick = function() {
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
inputElement.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard(inputElement.value)
    container.append(card)
    inputElement.value = ""
  }
}

addButton2.onclick = function() {
  //カードを作成
  const card = createCard2(inputElement2.value)
  container2.append(card)
  //入力欄を空にする
  inputElement2.value = ""
}
//共通の処理：テキストからカードを作成する
const createCard2 = function(text) {
  //カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"
  //テキストを表示するところを作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタンを作る
  const deleteButton2 = document.createElement("div")
  deleteButton2.className = "delete"

  //削除ボタン押した時の処理を登録
  deleteButton2.onclick = function() {
    card.remove()
  }
  card.append(deleteButton2)
  return card
}
inputElement2.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard2(inputElement2.value)
    container2.append(card)
    inputElement2.value = ""
  }
}

addButton3.onclick = function() {
  //カードを作成
  const card = createCard3(inputElement3.value)
  container3.append(card)
  //入力欄を空にする
  inputElement3.value = ""
}
//共通の処理：テキストからカードを作成する
const createCard3 = function(text) {
  //カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"
  //テキストを表示するところを作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  //削除ボタンを作る
  const deleteButton3 = document.createElement("div")
  deleteButton3.className = "delete"

  //削除ボタン押した時の処理を登録
  deleteButton3.onclick = function() {
    card.remove()
  }
  card.append(deleteButton3)
  return card
}
inputElement3.onkeypress = function(e) {
  if (e.keyCode === 13) {
    const card = createCard2(inputElement3.value)
    container3.append(card)
    inputElement3.value = ""
  }
}
