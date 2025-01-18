// Инициализация Rellax для параллакс эффектов
const rellax = new Rellax('.rellax', {
  speed: -2,
  center: true,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false
});

// Инициализация AOS для анимаций при скролле
AOS.init({
  duration: 800,
  once: true
});

// Настройка плавной прокрутки
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация карты в hero секции
const cardAnimation = anime({
  targets: '#card-animation',
  translateY: [50, 0],
  opacity: [0, 1],
  duration: 1200,
  easing: 'easeOutExpo',
  delay: 300
});

// Инициализация Lottie анимации
const lottiePlayer = document.createElement('lottie-player');
lottiePlayer.setAttribute('src', 'https://assets10.lottiefiles.com/packages/lf20_3rwasyjy.json');
lottiePlayer.setAttribute('background', 'transparent');
lottiePlayer.setAttribute('speed', '1');
lottiePlayer.setAttribute('style', 'width: 100%; height: 100%');
lottiePlayer.setAttribute('loop', '');
lottiePlayer.setAttribute('autoplay', '');
document.getElementById('card-animation').appendChild(lottiePlayer);

// Инициализация ScrollReveal
ScrollReveal().reveal('.feature-card', {
  delay: 200,
  distance: '50px',
  origin: 'bottom',
  interval: 100
});

// Инициализация Tippy.js
tippy('[data-tippy-content]', {
  theme: 'light',
  animation: 'scale',
  duration: 200,
  arrow: true
});

// Анимация кнопки CTA
gsap.from('.btn-primary', {
  duration: 1,
  y: 50,
  opacity: 0,
  ease: 'power3.out',
  delay: 0.8
});

// Обработчик для фиксированной навигации
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('navbar-scrolled');
  } else {
    navbar.classList.remove('navbar-scrolled');
  }
});

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

// Анимация иконок преимуществ
anime({
  targets: '.feature-card .icon',
  scale: [0, 1],
  opacity: [0, 1],
  duration: 800,
  delay: anime.stagger(200),
  easing: 'easeOutElastic'
});
