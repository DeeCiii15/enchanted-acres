(function () {
  const header = document.getElementById('header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const slides = document.querySelectorAll('.hero-slide');
  const reveals = document.querySelectorAll('.reveal');

  let currentSlide = 0;

  function updateHeader() {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function initReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }

  function initNav() {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  if (slides.length > 1) {
    setInterval(nextSlide, 5500);
  }

  initReveal();
  initNav();
})();
