	//！！！
	// 标题栏固定页面上方
	const title = document.getElementById('title');
	window.addEventListener('scroll', function () {
		if (window.scrollY > 0) {
			title.classList.add('scrolled');
		} else {
			title.classList.remove('scrolled');
		}
	});

	// 二级标题按钮跳转
	document.getElementById("title2_1").addEventListener("click", function() {
    var targetElement = document.getElementById("introTitle");
    introTitle.scrollIntoView({ behavior: 'smooth' });
	});
	document.getElementById("title2_2").addEventListener("click", function() {
    var targetElement = document.getElementById("rjTitle");
    rjTitle.scrollIntoView({ behavior: 'smooth' });
	});
	document.getElementById("title2_3").addEventListener("click", function() {
    var targetElement = document.getElementById("storyTitle");
    storyTitle.scrollIntoView({ behavior: 'smooth' });
	});
	document.getElementById("title2_4").addEventListener("click", function() {
    var targetElement = document.getElementById("characterTitle");
    characterTitle.scrollIntoView({ behavior: 'smooth' });
	});
	document.getElementById("title2_5").addEventListener("click", function() {
    var targetElement = document.getElementById("introTitle");
    introTitle.scrollIntoView({ behavior: 'smooth' });
	});
	document.getElementById("title2_6").addEventListener("click", function() {
    var targetElement = document.getElementById("endingTitle");
    endingTitle.scrollIntoView({ behavior: 'smooth' });
	});
