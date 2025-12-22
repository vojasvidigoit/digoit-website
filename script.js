document.addEventListener('DOMContentLoaded', () => {
  // Button Interaction
  const ctaBtn = document.getElementById('cta-btn');
  ctaBtn.addEventListener('click', () => {
    alert('You clicked the Call-to-Action button!');
  });

  // Simple Contact Form Handler
  const form = document.getElementById('contact-form');
  const formMsg = document.getElementById('form-msg');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    formMsg.textContent = "Thank you for contacting us!";
    form.reset();
    setTimeout(() => formMsg.textContent = '', 4000);
  });
});

let lastScrollY = window.scrollY;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY < 10) {
    navbar.classList.remove('hide');
    lastScrollY = window.scrollY;
    return;
  }
  if (window.scrollY < lastScrollY) {
    // Scrolling up: hide navbar
    navbar.classList.add('hide');
  } else {
    // Scrolling down: show navbar
    navbar.classList.remove('hide');
  }
  lastScrollY = window.scrollY;
});

// Optional: minimal IntersectionObserver to pause the scroll when About is off-screen.
// Append this to your script.js (inside DOMContentLoaded or at bottom of file).

document.addEventListener('DOMContentLoaded', () => {
  const about = document.querySelector('#about');
  const track = document.querySelector('.scroll-track');

  if (about && track && 'IntersectionObserver' in window) {
    // default paused until visible
    track.style.animationPlayState = 'paused';

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        track.style.animationPlayState = e.isIntersecting ? 'running' : 'paused';
      });
    }, { threshold: 0.12 });

    io.observe(about);
  } else if (track) {
    // fallback for older browsers: ensure it runs
    track.style.animationPlayState = 'running';
  }
});






