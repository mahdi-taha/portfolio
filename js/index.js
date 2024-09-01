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
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    console.log(sections);
    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 85;
            sectionId = current.getAttribute("id");
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }
});

const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});