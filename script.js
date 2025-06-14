// script.js
// Responsive navbar toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Clear previous message
    formMessage.textContent = '';
    let valid = true;
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    // Simple validation
    if (!name.value.trim()) {
        valid = false;
        name.style.borderColor = '#b71c1c';
    } else {
        name.style.borderColor = '#bca18d';
    }
    if (!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)) {
        valid = false;
        email.style.borderColor = '#b71c1c';
    } else {
        email.style.borderColor = '#bca18d';
    }
    if (!message.value.trim()) {
        valid = false;
        message.style.borderColor = '#b71c1c';
    } else {
        message.style.borderColor = '#bca18d';
    }
    if (!valid) {
        formMessage.textContent = 'Please fill in all fields correctly.';
        return;
    }
    // Simulate successful submission
    formMessage.style.color = '#388e3c';
    formMessage.textContent = 'Thank you for contacting us! We will get back to you soon.';
    contactForm.reset();
});
