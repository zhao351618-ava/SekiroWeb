
	//！！！
	// 首页————轮播图
	var slides = document.getElementsByClassName('slide');
	var currentSlideIndex = 0;
	var slideInterval;

	function showSlide() {
		for (var i = 0; i < slides.length; i++) {
			slides[i].classList.remove('current'); // 首先移除所有图片的 'current' 类
		}
		slides[currentSlideIndex].classList.add('current'); // 添加 'current' 类到当前索引的图片
		slides[currentSlideIndex].offsetWidth;
	}

	function showNextSlide() {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
		showSlide();
	}

	function showPrevSlide() {
		currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
		showSlide();
	}

	function initSlider() {
		slideInterval = setInterval(showNextSlide, 3000); // 自动轮播，间隔为 3 秒

		// 当鼠标移入轮播图时停止自动播放
		for (var i = 0; i < slides.length; i++) {
			slides[i].addEventListener('mouseenter', pauseSlider);
			slides[i].addEventListener('mouseleave', initSlider);
		}
	}

	function pauseSlider() {
		clearInterval(slideInterval);
	}

	var prevBtn = document.querySelector('.prev-btn');
	var nextBtn = document.querySelector('.next-btn');

	prevBtn.addEventListener('click', function () {
		pauseSlider();
		showPrevSlide();
	});

	nextBtn.addEventListener('click', function () {
		pauseSlider();
		showNextSlide();
	});

	showSlide();
	initSlider();


