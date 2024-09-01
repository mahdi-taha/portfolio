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

const images = [
    { src: 'images/my-shop-images/shop1.png', title: 'Image 1 Description' },
    { src: 'images/my-shop-images/adm2.webp', title: 'Image 2 Description' },
    { src: 'images/my-shop-images/shop3.png', title: 'Image 1 Description' },
    { src: 'images/my-shop-images/shop4.png', title: 'Image 2 Description' },
    { src: 'images/my-shop-images/shop5.png', title: 'Image 1 Description' },
    { src: 'images/my-shop-images/shop6.png', title: 'Image 2 Description' },
    { src: 'images/my-shop-images/adm1.png', title: 'Image 1 Description' },
    { src: 'images/my-shop-images/adm2.webp', title: 'Image 2 Description' },
    { src: 'images/my-shop-images/adm3.png', title: 'Image 1 Description' },
    { src: 'images/my-shop-images/adm4.png', title: 'Image 2 Description' },
    { src: 'images/my-shop-images/adm5.png', title: 'Image 1 Description' },
    { src: 'images/my-shop-images/adm6.png', title: 'Image 2 Description' },
    { src: 'images/my-shop-images/adm7.png', title: 'Image 2 Description' },
];

let currentIndex = 0;

function openModal(imageSrc, imageTitle) {
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalImage').alt = imageTitle;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
    currentIndex = images.findIndex(img => img.src === imageSrc);
}

function updateModal() {
    document.getElementById('modalImage').src = images[currentIndex].src;
    document.getElementById('modalImage').alt = images[currentIndex].title;
}

function prevImage() {
    if (currentIndex > 0) {
        currentIndex--;
        updateModal();
    }
}

function nextImage() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateModal();
    }
}
