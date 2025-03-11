
	//！！！
	//剧情—————视频播放
	const storyContainer = document.querySelector('.story_container');
	const overlay1 = document.getElementById('overlay1');
	const videoPlayerContainer = document.getElementById('video-player-container');
	const videoPlayer = document.getElementById('video-player1');
	const closeIcon = document.getElementById('close-button');

	storyContainer.addEventListener('click', function(event) {
	const storyBox = event.target.closest('.story-box');
	if (!storyBox) return; // 确保点击的是故事盒子

	const video = storyBox.querySelector('video');
	const videoSrc = video.src;
	const videoPoster = video.poster;

	// 设置遮罩层和播放器的显示状态
	overlay1.style.display = 'block';
	videoPlayer.src = videoSrc;
	videoPlayer.poster = videoPoster;
	videoPlayer.play();
	});
	overlay1.addEventListener('click', function(event) {
	event.stopPropagation();
	});
	closeIcon.addEventListener('click', function(event) {
	event.preventDefault();
	hideOverlay();
	});
	function hideOverlay() {
	overlay1.style.display = 'none';
	videoPlayer.pause();
	videoPlayer.src = '';
	}

	//！！！
	//剧情————按钮高亮
	var storyBoxes = document.querySelectorAll('.story-box');
	storyBoxes.forEach(function(storyBox) {
		var playButton = storyBox.querySelector('.play-button');

		storyBox.addEventListener('mouseenter', function() {
			playButton.style.boxShadow = '0 0 10px 5px rgba(27, 203, 185, 0.9)';
		});

		storyBox.addEventListener('mouseleave', function() {
			playButton.style.boxShadow = 'none'; // 将阴影样式设置为 "none"
		});
	});



	//！！！
	//剧情————下部滑动条
	var container = document.querySelector(".story_container");
	var scrollbar = document.querySelector(".scrollbar");
	var handle = document.querySelector(".scrollbar-handle");

	handle.addEventListener("mousedown", function (event) {
	var initialX = event.clientX;
	var initialLeft = handle.offsetLeft;

	document.addEventListener("mousemove", moveHandle);
	document.addEventListener("mouseup", stopMovingHandle);

	function moveHandle(event) {
		var deltaX = event.clientX - initialX;
		var newLeft = initialLeft + deltaX;

		var minLeft = 0;
		var maxLeft = scrollbar.offsetWidth - handle.offsetWidth;

		if (newLeft < minLeft) {
		newLeft = minLeft;
		} else if (newLeft > maxLeft) {
		newLeft = maxLeft;
		}

		handle.style.left = newLeft + "px";

		var scrollPercentage = newLeft / maxLeft;
		var maxScrollLeft = container.scrollWidth - container.clientWidth;
		container.scrollLeft = scrollPercentage * maxScrollLeft;
	}

	function stopMovingHandle() {
		document.removeEventListener("mousemove", moveHandle);
		document.removeEventListener("mouseup", stopMovingHandle);
	}
	});

		

