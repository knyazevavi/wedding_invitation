document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.gallery-img');
  // const image =
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  let currentImgIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      if (i === index) {
        img.style.display = 'block';
      } else {
        img.style.display = 'none';
      }
    });
  }

  showImage(currentImgIndex);

  prevBtn.addEventListener('click', function () {
    currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
    showImage(currentImgIndex);
  });

  nextBtn.addEventListener('click', function () {
    currentImgIndex = (currentImgIndex + 1) % images.length;
    showImage(currentImgIndex);
  });

  // Обработчик события для изображений
  images.forEach((img, index) => {
    img.addEventListener('click', function () {
      // Переключаем на следующее изображение
      currentImgIndex = (index + 1) % images.length;
      showImage(currentImgIndex);
    });
  });

  images.forEach((img, index) => {
    img.addEventListener('touchmove', function (event) {
      event.preventDefault(); // предотвращаем стандартное действие при проведении пальцем
      const touch = event.touches[0];
      const deltaX = startX - touch.clientX;
      const deltaY = startY - touch.clientY;
      // Проверяем направление проведения
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Горизонтальное проведение
        if (deltaX > 0) {
          // Переключаем на следующее изображение при проведении влево
          currentImgIndex = (index + 1) % images.length;
        } else {
          // Переключаем на предыдущее изображение при проведении вправо
          currentImgIndex = (index - 1 + images.length) % images.length;
        }
        showImage(currentImgIndex);
      }
    });
  });

  // Добавим обработчик события изменения ориентации экрана для пересчета размеров при повороте устройства
  window.addEventListener('orientationchange', function () {
    // Пересчитываем размеры изображений и показываем текущее изображение после поворота экрана
    showImage(currentImgIndex);
  });
});
