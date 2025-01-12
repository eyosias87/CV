// This file contains the JavaScript code for the website.
  // Step 4: Easter Eggs
  document.addEventListener('DOMContentLoaded', () => {
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

