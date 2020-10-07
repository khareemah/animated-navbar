const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
navToggle.addEventListener("click", function() {
  navToggle.classList.toggle("open");
  nav.classList.toggle("open");
});
