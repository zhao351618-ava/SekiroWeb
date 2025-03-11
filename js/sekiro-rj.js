//！！！
	//燃剪————轮播视频  
	var cards = document.querySelectorAll(".card");
	var currentCardIndex = 0;
	var indicatorsBox = document.querySelector(".rj-indicators");//
	var currentVideo = null;

	function showCard() {
		for (var i = 0; i < cards.length; i++) {
			cards[i].classList.remove("current", "next", "prev");
		}

		if (currentVideo) {
			currentVideo.pause(); // 暂停当前视频
		}

		var videoCard = cards[currentCardIndex];
		var video = videoCard.querySelector('video');
		if (video) {
			video.currentTime = 0;
			video.play();
			video.onended = function() {
				switchToNextCard();
			};
			currentVideo = video; // 更新当前视频
		}

		videoCard.classList.add("current");
		cards[(currentCardIndex + 1) % cards.length].classList.add("next");
		cards[(currentCardIndex + cards.length - 1) % cards.length].classList.add("prev");

		// 更新指示器状态
		var dots = indicatorsBox.querySelectorAll(".rj-dot");
		dots.forEach(function(dot, index) {
			dot.classList.toggle("active", index === currentCardIndex);

		

			// 为指示栏按钮添加点击事件监听器
			dot.addEventListener("click", function() {
				currentCardIndex = index;
				showCard();
			});
		});
	}

	function switchToNextCard() {
		if (currentVideo) {
			currentVideo.pause(); // 暂停当前视频
		}

		currentCardIndex = (currentCardIndex + 1) % cards.length;
		showCard();
	}
	showCard(); // 初始化显示第一个卡片

