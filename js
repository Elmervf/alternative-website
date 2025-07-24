// Theme Toggle
const themeButton = document.getElementById('theme-button');
themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  themeButton.classList.toggle('uil-sun');
});

// Animate Skill Bars on Scroll
const skillBars = document.querySelectorAll('.skill__level');
window.addEventListener('scroll', () => {
  skillBars.forEach(bar => {
    if (bar.getBoundingClientRect().top < window.innerHeight) {
      bar.style.width = bar.getAttribute('data-level');
    }
  });
});
