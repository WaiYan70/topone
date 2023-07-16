const menuButton = (toggleId, navbarMenu, menuOverlay,dropdown, navbardropdown) =>{
  const toggle = document.getElementById(toggleId);
  const navbar = document.getElementById(navbarMenu);
  const menuoverlay = document.getElementById(menuOverlay);

  const navbarLinkDropdown = document.getElementById(navbardropdown);
  const dropDown = document.getElementsByClassName(dropdown)[0];
  let dropDownOpen = false;

  toggle.addEventListener('click', () =>{
      // Add show-menu class to navbar menu
      navbar.classList.toggle('show-menu');
      navbar.classList.toggle('active');
      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon');
      menuoverlay.classList.toggle('active');
      
      if(toggle.classList.toggle('.navbar-menu-btn-open')) {
          dropDown.classList.remove('active');
          dropDownOpen = false;
          // console.log("toggle : " + dropDownOpen);
      }
  });
  menuoverlay.addEventListener('click', () => {
      navbar.classList.remove('show-menu');
      navbar.classList.remove('active');
      toggle.classList.remove('show-icon');
      menuoverlay.classList.remove('active');

      if(dropDown.classList.contains('active')){
          dropDown.classList.remove('active');
          dropDownOpen = false;
          // console.log("menuoverlay : " + dropDownOpen);
      }
  });
  navbarLinkDropdown.addEventListener('click', (event) => {
      event.preventDefault();
      if(!dropDownOpen){
          dropDown.classList.toggle('active');
          dropDownOpen = true;
          // console.log("dropdown : " + dropDownOpen);
      } else {
          dropDown.classList.remove('active');
          dropDownOpen = false;
          // console.log("dropdown : " + dropDownOpen);
      }
  });
};
menuButton('navbar-toggle','navbar-menu','menu-overlay','dropdown','navbar-link-dropdown');

// Blur Effect for "Main-Image-Advertisment" and "Brand Products"
const blurImage = document.querySelectorAll(".blurred-image");
blurImage.forEach(div => {
  const img = div.querySelector("img");
  function loaded(){
    // show image
    div.classList.add("loaded");
  }
  if (img.complete) {
    loaded();
  } else {
    img.addEventListener("load",loaded);
  }
});
// The End of Blur Effect for "Main-Image-Advertisement" and "Brand Products"

// Swiper for Image Slider with Auto Play Progress
// Main Slide Image (advertisement)
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".main-image-container-swiper", {
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    grabCursor: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-main",
      clickable: true,
      // dynamicBullets: true,
    },
    navigation: {
      nextEl: ".main-image-next",
      prevEl: ".main-image-prev",
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
});

// 400px x 736px is iphone 7+ size
// 375px x 667px is iphone SE size

// Swiper for card slider with infinite loop
// Brand Products

var swiper = new Swiper(".slide-content", {
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination-card",
    clickable: true,
    disableOnInteraction: false,
    // dynamicBullets: true,
  },
  navigation: {
    nextEl: ".brand-product-card-next",
    prevEl: ".brand-product-card-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 25,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 25,
    },
    1120: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 65,
    },
    1600: {
      slidesPerView: 3,
      spaceBetween: 85,
    },
  },
});
// The End of Brand Products