// Navbar Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-menu ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
  menuToggle.setAttribute('aria-expanded', navLinks.classList.contains('show'));
});

// Navbar Hide on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-100px'; // Hide navbar on scroll down
  } else {
    navbar.style.top = '0'; // Show navbar on scroll up
  }
  lastScrollTop = scrollTop;
});

// Adjust navbar for smaller screens
const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener('change', (e) => {
  if (e.matches) {
    navbar.style.top = '0'; // Ensure navbar is visible on small screens
  }
});

// Carousel Functionality
const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');

let index = 0;
let interval = 3000; // 3 seconds
let carouselInterval;


// Show next image
function showNextImage() {
  index = (index + 1) % images.length;
  updateCarousel();
}

// Show previous image
function showPrevImage() {
  index = (index - 1 + images.length) % images.length;
  updateCarousel();
}

// Update carousel position
function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Start carousel autoplay
function startCarousel() {
  carouselInterval = setInterval(showNextImage, interval);
}

// Initialize carousel
function initCarousel() {
  startCarousel();
}

// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);
