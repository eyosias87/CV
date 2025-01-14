// This file contains the JavaScript code for the website.

document.addEventListener('DOMContentLoaded', () => {
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