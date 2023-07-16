// for Menubar (HamBurger Stack)
// const menuButton = document.getElementsByClassName('menu_btn')[0];
// const navbarLinks = document.getElementsByClassName('navbar-links')[0];

// let menuOpen = false;

// menuButton.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
//     if (!menuOpen) {
//         menuButton.classList.add('open');
//         menuOpen = true;
//         // navbarLinks.style.height = "43%";
//     } else {
//         menuButton.classList.remove('open');
//         menuOpen = false
//         // navbarLinks.style.height = "0%";
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


// For Tab Session
const tabsButton = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.content');

// const tabsButton = document.getElementsByClassName('tab-button')[0];
// const content    = document.getElementsByClassName('content')[0];

tabsButton.forEach((tabButton, index) => {
    tabButton.addEventListener('click', (e) => {
        tabsButton.forEach(tab => {
            tab.classList.remove('active')
        });
        tabButton.classList.add('active');
        // var line = document.querySelector('.tab-line');
        // line.style.width = e.target.offsetWidth + "px";
        // line.style.left = e.target.offsetLeft + "px";
        content.forEach(content=>{
            content.classList.remove('active')
        });
        content[index].classList.add('active');
    })
})
