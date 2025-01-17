// Инициализация AOS
AOS.init({
  duration: 800,
  once: true
});

// Инициализация Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Анимация кнопок
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.transform = 'scale(1.05)';
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'scale(1)';
  });
});

// Плавный скролл
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Анимация карточек
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-10px)';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});

// Инициализация Chart.js
const ctx = document.getElementById('chart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Кэшбэк', 'Снятие', 'Переводы'],
    datasets: [{
      label: 'Операции',
      data: [45, 30, 25],
      backgroundColor: [
        'rgba(106, 17, 203, 0.8)',
        'rgba(37, 117, 252, 0.8)',
        'rgba(255, 99, 132, 0.8)'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      }
    }
  }
});
