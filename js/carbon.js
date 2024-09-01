AOS.init();

document.addEventListener("DOMContentLoaded", function () {
    var navbarToggler = document.querySelector(".navbar-toggler");
    var navbarCustom = document.querySelector(".navbar-custom");

    navbarToggler.addEventListener("click", function () {
        if (navbarToggler.classList.contains("collapsed")) {
            navbarCustom.classList.remove("navbar-expanded");
        } else {
            navbarCustom.classList.add("navbar-expanded");
        }
    });
});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) { // Adjust the scroll value as needed
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});