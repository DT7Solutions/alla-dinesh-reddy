
$(document).ready(function(){
  $("#certificatesCarousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 3,
    responsive: {
        0: {
          items: 1 
        },
        600: {
          items: 2 
        },
        1000: {
          items: 3
        }
      }
  });
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 3,
    responsive: {
        0: {
          items: 1 
        },
        600: {
          items: 2 
        },
        1000: {
          items: 3
        }
      }
  });
});



