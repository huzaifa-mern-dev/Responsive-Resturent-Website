const navToggle = document.querySelector(".nav_toggle");
const navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show-menu");
  navToggle.classList.toggle("active");
})

const top_btn = document.querySelector(".back-top_btn");

window.addEventListener("scroll", () => {
  if(window.scrollY >= 50){
    top_btn.classList.add("active")
  }
  else{
    top_btn.classList.remove("active")
  }
})