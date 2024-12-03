// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Contact Form Validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.querySelector('input[name="name"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // Validate inputs
    if (!name || !email || !message) {
      alert('All fields are required!');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address!');
      return;
    }

    // Simulate form submission
    alert(`Thank you, ${name}! Your message has been sent.`);
    contactForm.reset(); // Clear the form after submission
  });
}

// Email Validation Helper Function
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Hover Effects for Images (optional animations)
document.querySelectorAll('.service-card img, .project-card img').forEach(img => {
  img.addEventListener('mouseover', function () {
    this.style.transform = 'scale(1.05)';
    this.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseout', function () {
    this.style.transform = 'scale(1)';
  });
});

// Ensure the script runs after the DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Initialize EmailJS
  emailjs.init("kV6PGPuwnTGUt4CQq"); // Replace with your EmailJS User ID

  // Handle form submission
  document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form behavior

    // Use EmailJS to send form data
    emailjs.sendForm("service_wshsc3q", "template_8itgg0i", this)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent successfully!");
        document.getElementById("contact-form").reset();
      })
      .catch(function (error) {
        console.error("FAILED...", error);
        alert("There was an error sending your message. Please try again.");
      });
  });
});
