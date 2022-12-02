
const openMenuBtn = document.querySelector(".open-menu-toggle")
const closeMenuBtn = document.querySelector(".close-menu-toggle")
const myMainNav = document.querySelector(".primary-nav")

const mask = document.querySelector("#mask")

openMenuBtn.addEventListener("click", function() {
  myMainNav.classList.add("active-nav")
  mask.classList.add("active")
})

closeMenuBtn.addEventListener("click", () => {
  myMainNav.classList.remove("active-nav")
  mask.classList.remove("active")
})


