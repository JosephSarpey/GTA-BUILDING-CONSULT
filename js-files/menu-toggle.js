// Navbar Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-menu ul");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.setAttribute("aria-expanded", navLinks.classList.contains("show"));
});

// Navbar Hide on Scroll
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px"; // Hide navbar on scroll down
  } else {
    navbar.style.top = "0"; // Show navbar on scroll up
  }
  lastScrollTop = scrollTop;
});

// Adjust navbar for smaller screens
const mediaQuery = window.matchMedia("(max-width: 768px)");
mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    navbar.style.top = "0"; // Ensure navbar is visible on small screens
  }
});

// // Smooth Scrolling for Navigation Links
// document.querySelectorAll('nav a').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop,
//         behavior: 'smooth'
//       });
//     }
//   });
// });

// // Hover Effects for Images (optional animations)
// document.querySelectorAll('.service-card img, .project-card img').forEach(img => {
//   img.addEventListener('mouseover', function () {
//     this.style.transform = 'scale(1.05)';
//     this.style.transition = 'transform 0.3s ease';
//   });
//   img.addEventListener('mouseout', function () {
//     this.style.transform = 'scale(1)';
//   });
// });