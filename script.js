function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver no light mode, utilizar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // senão, utilizar a imagem padrão
    img.setAttribute("src", "./assets/avatar.png")
  }
}
