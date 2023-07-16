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
// Modal Box 
const openModalButton = document.querySelectorAll('[data-modal-target]');
const closeModalButton = document.querySelectorAll('[data-close-button]');
const modalOverLay = document.getElementById('modal-overlay');

openModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});
// Model Overlay
modalOverLay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modals.forEach(modal => {
        closeModal(modal);
    });
});
closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
});
function openModal(modal){
    if (modal == null) return
    modal.classList.add('active')
    modalOverLay.classList.add('active')
}
function closeModal(modal){
    if (modal == null) return
    modal.classList.remove('active')
    modalOverLay.classList.remove('active')
}
// The End of Modal Box
// Product Card
// Product - 01 
document.querySelectorAll('.product-card-image-small-1').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-1').src = src;
    });
});
// Product - 02
document.querySelectorAll('.product-card-image-small-2').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-2').src = src;
    });
});
// Product - 03
document.querySelectorAll('.product-card-image-small-3').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-3').src = src;
    });
});
// Product - 04
document.querySelectorAll('.product-card-image-small-4').forEach(image =>{
    image.addEventListener('click', () => {
        var src = image.getAttribute('src');
        document.querySelector('.product-card-image-big-4').src = src;
    });
});
