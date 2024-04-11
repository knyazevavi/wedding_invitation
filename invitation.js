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

  // Добавляем обработчик события touchstart для начала касания
  images.forEach((img, index) => {
    img.addEventListener('touchstart', function (event) {
      event.preventDefault(); // предотвращаем стандартное действие при касании
      currentImgIndex = index;
      showImage(currentImgIndex);
    });
  });

  // Добавляем обработчик события touchend для завершения касания
  images.forEach((img, index) => {
    img.addEventListener('touchend', function (event) {
      event.preventDefault(); // предотвращаем стандартное действие при завершении касания
      // Дополнительные действия, если нужно
    });
  });

  // Добавим обработчик события изменения ориентации экрана для пересчета размеров при повороте устройства
  window.addEventListener('orientationchange', function () {
    // Пересчитываем размеры изображений и показываем текущее изображение после поворота экрана
    showImage(currentImgIndex);
  });
});
