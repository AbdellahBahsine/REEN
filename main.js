let hamburgerMenu = document.getElementById("bars");
let mobileMenu = document.getElementById("mobile-menu");

hamburgerMenu.addEventListener("click", function() {
  mobileMenu.classList.toggle("visible");
})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 4,
    margin:10,
    nav: false,
    dotsEach: true,
    startPosition: 1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            startPosition: 0
        },
        768:{
            items:3,
            startPosition: 0
        },
        1000:{
            items:4,
        }
    }
  });
});