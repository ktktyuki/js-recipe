const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure instanceof square) {
    figure.classList.remove("square")
    figure.classList.add("circle")
  } else if (figure instanceof "circle") {
    figure.classList.remove("circle")
    figure.classList.add("triangle")
  } else {
    figure.classList.remove("triangle")
    figure.classList.add("square")
  }
}
