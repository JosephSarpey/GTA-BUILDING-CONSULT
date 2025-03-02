// // Contact Form Validation
// const contactForm = document.querySelector('#contact-form');
// if (contactForm) {
//   contactForm.addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Collect form data
//     const name = document.querySelector('input[name="name"]').value.trim();
//     const email = document.querySelector('input[name="email"]').value.trim();
//     const message = document.querySelector('textarea[name="message"]').value.trim();

//     // Validate inputs
//     if (!name || !email || !message) {
//       alert('All fields are required!');
//       return;
//     }

//     if (!validateEmail(email)) {
//       alert('Please enter a valid email address!');
//       return;
//     }

//     // Simulate form submission
//     alert(`Thank you, ${name}! Your message has been sent.`);
//     contactForm.reset(); // Clear the form after submission
//   });
// }

// // Email Validation Helper Function
// function validateEmail(email) {
//   const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return re.test(email);
// }



// // Ensure the script runs after the DOM loads
// document.addEventListener("DOMContentLoaded", () => {
//   // Initialize EmailJS
//   emailjs.init("kV6PGPuwnTGUt4CQq"); // Replace with your EmailJS User ID

//   // Handle form submission
//   document.getElementById("contact-form").addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent default form behavior

//     // Use EmailJS to send form data
//     emailjs.sendForm("service_wshsc3q", "template_8itgg0i", this)
//       .then(function (response) {
//         console.log("SUCCESS!", response.status, response.text);
//         alert("Your message has been sent successfully!");
//         document.getElementById("contact-form").reset();
//       })
//       .catch(function (error) {
//         console.error("FAILED...", error);
//         alert("There was an error sending your message. Please try again.");
//       });
//   });
// });


// Contact Form Validation & Submission
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  if (!form) return;

  // Dynamic feedback elementy
  const feedback = document.createElement('div');
  feedback.className = 'form-feedback';
  feedback.setAttribute('role', 'alert');
  feedback.setAttribute('aria-live', 'polite');
  form.parentNode.insertBefore(feedback, form);

  // Initialize EmailJS (SECURITY NOTE: Move User ID to config)
  emailjs.init("kV6PGPuwnTGUt4CQq"); // Replace with env variable in production

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    feedback.textContent = '';
    feedback.style.display = 'none';

    // Get form values
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Validation checks
    if (!validateForm(name, email, subject, message)) return;

    try {
      // Show loading state
      toggleLoadingState(true);
      
      // Send form using EmailJS
      const response = await emailjs.sendForm(
        "service_wshsc3q", // Replace with your service ID
        "template_8itgg0i", // Replace with your template ID
        form
      );

      // Success handling
      showFeedback("Message sent successfully!", "success");
      form.reset();
    } catch (error) {
      // Error handling
      showFeedback("Failed to send message. Please try again.", "error");
      console.error("EmailJS Error:", error);
    } finally {
      toggleLoadingState(false);
    }
  });

  // Validation function
  function validateForm(name, email, subject, message) {
    // Check empty fields
    if (!name || !email || !subject || !message) {
      showFeedback("All fields are required!", "error");
      return false;
    }

    // Validate email format
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showFeedback("Please enter a valid email address", "error");
      return false;
    }

    // Validate message length
    if (message.length < 20) {
      showFeedback("Message must be at least 20 characters", "error");
      return false;
    }

    return true;
  }

  // Loading state manager
  function toggleLoadingState(isLoading) {
    const submitBtn = form.querySelector('button[type="submit"]');
    if (isLoading) {
      submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> Sending...';
      submitBtn.disabled = true;
    } else {
      submitBtn.innerHTML = '<i class="fa fa-paper-plane"></i> Send Message';
      submitBtn.disabled = false;
    }
  }

  // Feedback display
  function showFeedback(text, type = "info") {
    feedback.textContent = text;
    feedback.style.display = 'block';
    feedback.className = `form-feedback ${type}`;
  }
});
