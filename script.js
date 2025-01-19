// This file contains the JavaScript code for the website.

document.addEventListener('DOMContentLoaded', () => {
  // Login Form Logic
  const loginForm = document.getElementById('login-form');
  const navLinks = document.getElementById('nav-links');
  const logoutButton = document.getElementById('logout-button');

  // Hide navigation links initially
  if (navLinks) {
    navLinks.style.display = 'none';
  }

  // Check if user is already logged in
  if (localStorage.getItem('isLoggedIn') === 'true') {
    if (navLinks) {
      navLinks.style.display = 'flex';
    }
  }

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      const hCaptchaResponse = loginForm.querySelector('textarea[name=h-captcha-response]').value;

      if (!hCaptchaResponse) {
        event.preventDefault();
        alert("Please complete the hCaptcha");
        return;
      }

      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const cvType = document.getElementById('cv-type').value;
      const language = document.getElementById('language').value;

      // Allow any email and password combination
      if (email && password) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', 'true'); // Set login status in local storage
        localStorage.setItem('cvType', cvType); // Store selected CV type
        localStorage.setItem('language', language); // Store selected language
        if (navLinks) {
          navLinks.style.display = 'flex';
        }
        window.location.href = `cv_${cvType}_${language}.html`; // Redirect to the selected CV page
      } else {
        alert('Invalid email or password');
      }
    });
  }

  // Logout Logic
  if (logoutButton) {
    logoutButton.addEventListener('click', () => {
      localStorage.removeItem('isLoggedIn'); // Remove login status from local storage
      localStorage.removeItem('cvType'); // Remove CV type from local storage
      localStorage.removeItem('language'); // Remove language from local storage
      alert('You have been logged out.');
      window.location.href = 'login.html'; // Redirect to login page
    });
  }

  // Function to show the Learn More section and hide the Contact Me section
  function showLearnMore() {
    document.getElementById('learn-more').style.display = 'block';
    document.getElementById('contact-me').style.display = 'none';
  }

  // Function to show the Contact Me section and hide the Learn More section
  function showContactSection() {
    document.getElementById('contact-me').style.display = 'block';
    document.getElementById('learn-more').style.display = 'none';
  }

  // Assign functions to the global window object
  window.showLearnMore = showLearnMore;
  window.showContactSection = showContactSection;

  // Modal Logic
  const modalTriggers = document.querySelectorAll('.modal-trigger');
  const modals = document.querySelectorAll('.modal');
  const closeButtons = document.querySelectorAll('.close-modal');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const modalId = trigger.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'flex';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modalId = button.getAttribute('data-modal');
      document.getElementById(modalId).style.display = 'none';
    });
  });

  window.addEventListener('click', event => {
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Easter Egg 1: Background Change
  document.body.addEventListener('click', event => {
    if (event.target.tagName !== 'NAV' && event.target.tagName !== 'UL') {
      document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
  });

  // Easter Egg 2: Key Sequence Trigger
  let keySequence = '';
  const easterEggCode = '1337';

  document.addEventListener('keydown', event => {
    keySequence += event.key;
    if (keySequence.endsWith(easterEggCode)) {
      alert('Easter Egg Activated! You are awesome!');
      keySequence = '';
    }
  });
});