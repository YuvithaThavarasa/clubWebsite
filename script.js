window.addEventListener("scroll", function() {
    const welcomeContainer = document.querySelector(".welcome-container");
    const windowHeight = window.innerHeight;
    const elementTop = welcomeContainer.getBoundingClientRect().top;
    
    if (elementTop < windowHeight) {
        welcomeContainer.style.opacity = 1;
    }
});

function validateForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
  
    const nameRegex = /^[a-zA-Z\s]+$/; // Only letters and spaces allowed in the name
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format validation
  
    if (!nameRegex.test(nameInput.value)) {
      alert('Please enter a valid name (letters and spaces only).');
      nameInput.focus();
      return false;
    }
  
  
    if (!emailRegex.test(emailInput.value)) {
      alert('Please enter a valid email address.');
      emailInput.focus();
      return false;
    }
  
    // If all validations pass, the form will be submitted
    alert('Form submitted successfully!');
    return true;
  }

// Add a submit event listener to the form
contactForm.addEventListener("submit", function(event) {
    // Prevent the form from submitting if it's not valid
    if (!validateForm()) {
        event.preventDefault();
    }
});
