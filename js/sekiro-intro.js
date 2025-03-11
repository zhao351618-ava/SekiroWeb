	//！！！
	//简介——按钮弹出新界面
	const intro = document.querySelector('#intro');
	const button = document.querySelector('.btn');
	const overlay = document.querySelector('.overlay');
	const newContent = document.querySelector('.new_content');

	button.addEventListener('click', () => {
	button.style.opacity = 0; // 淡化消失按钮
	overlay.style.opacity = 1; // 淡化显示遮罩层
	overlay.style.visibility = 'visible'; // 显示遮罩层
	newContent.classList.add('visible'); // 显示新界面
	newContent.style.visibility = 'visible'; // 显示新界面
	});

	overlay.addEventListener('click', () => {
	button.style.opacity = 1; // 按钮重新出现
	overlay.style.opacity = 0; // 淡化隐藏遮罩层
	overlay.style.visibility = 'hidden'; // 隐藏遮罩层
	newContent.classList.remove('visible'); // 隐藏新界面
	newContent.style.visibility = 'hidden'; // 隐藏新界面
	});




