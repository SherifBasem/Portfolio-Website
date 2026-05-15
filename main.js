// Scroll reveal — fade-in elements as they enter the viewport
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Immediately reveal hero section elements on page load
setTimeout(() => {
  document.querySelectorAll('#about .reveal').forEach(el => el.classList.add('visible'));
}, 100);
