// for sticky navigation bar 
// window.onscroll = function(){myFunction()};

// const navbar = document.getElementsByClassName('navbar')[0];
// const sticky = navbar.offsetTop;

// function myFunction(){
//     if (window.pageYOffset >= sticky) {
//         navbar.classList.add('sticky');
//     }else{
//         navbar.classList.remove('sticky');
//     }
// }

// for Menubar (HamBurger Stack)
// const menuButton = document.getElementsByClassName('menu_btn')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// let menuOpen = false;

// menuButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
//     if (!menuOpen) {
//         menuButton.classList.add('open');
//         menuOpen = true;
//     } else {
//         menuButton.classList.remove('open');
//         menuOpen = false
//     }
// });

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


// The Contact Form Animation For Input Box Container

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});