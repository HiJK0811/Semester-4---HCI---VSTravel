const heroLogo = document.getElementById('hero-logo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    heroLogo.classList.add('shrink');
  } else {
    heroLogo.classList.remove('shrink');
  }
});
