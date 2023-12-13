
$(window).load(function(){
  $(".preloader").fadeOut();
})



$(document).ready(function(){



  
   
// main Swiper 
const mainSwiper = new Swiper('.mainBanner .swiper', {
  loop: true,
  autoplay: true,
  draggable: true,
  navigation: {
    nextEl: ' .mainBanner .swiper-button-next',
    prevEl: '.mainBanner .swiper-button-prev',
  },

  pagination: {
    el: '.mainBanner .swiper-pagination',
    clickable: true,
  },
  
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0
    },
  }
});

//  bestseller swiper

const bestsellerSwiper = new Swiper(' .bestseller .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.bestseller .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.bestseller .swiper-button-next ',
    prevEl: '.bestseller .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

//  special offers swiper

const specialOfferSwiper = new Swiper(' .special-offers .swiper', {
  loop: true,
  // autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.special-offers .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.special-offers .swiper-button-next ',
    prevEl: '.special-offers .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    770: {
      slidesPerView: 3,
      spaceBetween: 20
    } , 
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});


//  clients Reviews swiper

const  clientsReview = new Swiper(' .clients-reviews  .swiper', {
  loop: true,
   autoplay: true,
  draggable: true,
 
  pagination: {
    el: '.clients-reviews .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-reviews .swiper-button-next ',
    prevEl: '.clients-reviews .swiper-button-prev',
  },
  breakpoints: {
  
    350: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    } 
  }
});

// brands swiper
const brandsSwiper = new Swiper('.brands .swiper', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: ' .brands  .swiper-button-next ',
    prevEl: '.brands .swiper-button-prev',
  },
  pagination: {
    el: '.brands .swiper-pagination',
    clickable: true,
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween:10,
    },
    400: {
      slidesPerView: 3,
      spaceBetween:20,
    },
    530: {
      slidesPerView: 4,
      spaceBetween:10,
    },
    992: {
      slidesPerView:5,
      spaceBetween:20,
    },
    1200: {
      slidesPerView:7,
      spaceBetween:10,
    },
  },
});


// **************************************************************************************************


// open language in mobile 

if($(window).width()  < 992 ) {
  $(".lang-close-holder-mob .img-text").click(function(){
    $(".lang-details").slideToggle(300)
    $(".lang-text .icon").toggleClass("rotate-icon")
  })
}


// **************************************************************************************************


// mobile nav nested menus 

if($(window).width() <= 992) {  
  $(".li-drop").click(function () {
    $(this).children(".ul-drop").slideToggle(300) ;
    $(this).children(".nav-ancor").toggleClass("nav-arrow-rotate");
    $(".li-drop").not($(this)).children(".ul-drop").slideUp(300);
    $(".li-drop").not($(this)).children(".nav-ancor").removeClass("nav-arrow-rotate");
    })
    $(".li-drop .nav-ancor").removeAttr("href")
  }

// **************************************************************************************************


// open and close nav

let closeBtn = document.querySelector(".closeBtn"); 
let openBtn = document.querySelector(".bars"); 

closeBtn.addEventListener("click" , function(){
  $("nav").removeClass("open-nav");
  $("body").removeClass("overflow-hidden") ;
})

openBtn.addEventListener("click" , function(){
  $("nav").addClass("open-nav");  
  $("body").addClass("overflow-hidden") ;
})

// **************************************************************************************************


// to top button

$(window).scroll(function(){
  if($(window).scrollTop() > 150){
    $(".toTop").addClass("showToTop")
  }else{
    $(".toTop").removeClass("showToTop")
  }
})

$(".toTop").click(function(){
  $('html, body').animate({scrollTop:0}, 400);
}) 


// **************************************************************************************************

//  nested menus in footer


if($(window).width() < 768){
$(".footer-title").click(function(){
  $(this).next().slideToggle(300) ; 
  $(this).toggleClass("arrow-rotate");
  $(".footer-title").not($(this)).next().slideUp(300);
  $(".footer-title").not($(this)).removeClass("arrow-rotate");
})
}


// **************************************************************************************************




  let myHeader = document.querySelector("header"),
  prevScrollposition = $(window).scrollTop();

  $(window).on("scroll", function () {
     if ($(window).scrollTop() > 150) {
         $(myHeader).addClass("fixed");
         if($(window).width() < 992){
          $(".open-search-btn").show()
          $(".search").hide()
         }
     } else {
         $(myHeader).removeClass("fixed");
         $(".search").show()
         $(".open-search-btn").hide()

     }
     var scrollTop = $(window).scrollTop();
     prevScrollposition < scrollTop && prevScrollposition > 0 ? myHeader.classList.add("stayTop") : myHeader.classList.remove("stayTop"), (prevScrollposition = scrollTop);
   });

    


// **************************************************************************************************

// open search 


$(".open-search-btn").click(function(){
  $(".search").slideToggle(300);
  $(this).children().toggleClass("la-times");
})


// *************************************************************************************************

})