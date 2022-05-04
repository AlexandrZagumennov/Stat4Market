/* Изменение контента в заголовке секции в зависимости от ширины экрана */

const howWorkTite = document.querySelector('.how-work__title');


const changeContent = () => {
	const width = window.innerWidth;

	if (width > 1280) {
		howWorkTite.textContent = 'Небольшая предыстория о том, почему нам можно доверять'
	} else {
		howWorkTite.textContent = 'Как работает модуль Аналитика по API для Wildberries?'
	}
}

// Выполняем заново при изменении размера окна
window.addEventListener('resize', () => {
	changeContent();
});

/* Плавный скролл */
const anchors = document.querySelectorAll('a[href*="#"]');

	for (let anchor of anchors) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			const blockID = anchor.getAttribute('href').substr(1);

			document.getElementById(blockID).scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		});
	};