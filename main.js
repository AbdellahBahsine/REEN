let hamburgerMenu = document.getElementById("bars");
let mobileMenu = document.getElementById("mobile-menu");

hamburgerMenu.addEventListener("click", function() {
  mobileMenu.classList.toggle("visible");
})

