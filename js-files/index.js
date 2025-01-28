// Collapsible Navbar
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-menu ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Navbar Hide on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-100px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

// Media query for smaller screens
const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addListener((e) => {
  if (e.matches) {
    navbar.style.top = '0';
  }
});

// Hero Section Carousel
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let index = 0;

function showNextImage() {
  index = (index + 1) % images.length;
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
