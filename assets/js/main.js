// ===== LACOQUE — Kit Toda Prontha — main.js =====

document.addEventListener('DOMContentLoaded', () => {
  // Icons
  if (window.lucide) lucide.createIcons();

  // Navbar scroll state
  const navbar = document.getElementById('navbar');
  const onScroll = () => {
    if (window.scrollY > 40) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Mobile menu
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });
  }

  // GSAP reveal animations
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);

    const setups = [
      { sel: '.reveal', from: { y: 32, opacity: 0 }, to: { y: 0, opacity: 1 } },
      { sel: '.reveal-left', from: { x: -36, opacity: 0 }, to: { x: 0, opacity: 1 } },
      { sel: '.reveal-right', from: { x: 36, opacity: 0 }, to: { x: 0, opacity: 1 } },
      { sel: '.reveal-scale', from: { scale: 0.92, opacity: 0 }, to: { scale: 1, opacity: 1 } },
    ];

    setups.forEach(({ sel, to }) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        gsap.to(el, {
          ...to,
          duration: 0.9,
          ease: 'power3.out',
          delay: (i % 3) * 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    });
  } else {
    // Fallback: just show everything if GSAP fails to load
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(o => o.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Hero particles
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 28; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 22 + 8;
      p.style.width = size + 'px';
      p.style.height = size + 'px';
      p.style.left = Math.random() * 100 + 'vw';
      p.style.animationDelay = (Math.random() * 22) + 's';
      p.style.animationDuration = (Math.random() * 12 + 14) + 's';
      particlesContainer.appendChild(p);
    }
  }
});
