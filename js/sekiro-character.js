 // 获取轮播图元素
    const carouselImages = document.querySelector('.c-carousel-images');
    const prevButton = document.querySelector('.c-prev');
    const nextButton = document.querySelector('.c-next');

    let index = 0; // 当前显示的图片索引
    const totalImages = document.querySelectorAll('.c-carousel-images img').length;

    // 下一张图片
    nextButton.addEventListener('click', () => {
      index = (index + 1) % totalImages;
      updateCarousel();
    });

    // 上一张图片
    prevButton.addEventListener('click', () => {
      index = (index - 1 + totalImages) % totalImages;
      updateCarousel();
    });

    // 更新轮播图的位置
    function updateCarousel() {
      const offset = -index * 100; // 每次移动100%的宽度
      carouselImages.style.transform = `translateX(${offset}%)`;
    }