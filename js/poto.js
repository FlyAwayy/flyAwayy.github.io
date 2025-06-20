 const images = [
    'url(https://nkarner.github.io/images/photo_9_2025-06-20_22-16-10.jpg)',  // Фото 1
    'url(https://nkarner.github.io/images/photo_10_2025-06-20_22-16-10.jpg)',  // Фото 2
    'url(https://nkarner.github.io/images/photo_8_2025-06-20_22-16-10.jpg)',  // Фото 3
    'url(https://nkarner.github.io/images/photo_7_2025-06-20_22-16-10.jpg)',  // Фото 4
    'url(https://nkarner.github.io/images/photo_5_2025-06-20_22-16-10.jpg)',  // Фото 5
    'url(https://nkarner.github.io/images/photo_4_2025-06-20_22-16-10.jpg)',  // Фото 6
    'url(https://nkarner.github.io/images/photo_3_2025-06-20_22-16-10.jpg)',  // Фото 7
    'url(https://nkarner.github.io/images/photo_2_2025-06-20_22-16-10.jpg',  // Фото 8
    'url(https://nkarner.github.io/images/photo_1_2025-06-20_22-16-10.jpg)',  // Фото 9
  ];
  

  let index = 0;
  const carousel = document.getElementById('carousel');

  function changeBackground() {
    carousel.style.backgroundImage = images[index];
    index = (index + 1) % images.length;
  }

  // Первая загрузка
  changeBackground();

  // Смена каждые 5 секунд
  setInterval(changeBackground, 5000);