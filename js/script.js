new Swiper( '.slider', {
	// direction: 'vertical', // - сделать вертикальную прокрутку!

	// 🔧 ОСНОВНЫЕ НАСТРОЙКИ:
	speed: 2400,
	spaceBetween: 18,
	parallax: true,

	// 🖱️ НАСТРОЙКИ КОЛЕСА МЫШИ:
	mousewheel: {
		enabled: true,
		sensitivity: 2.4
	},

	// 🧭 НАВИГАЦИЯ:
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// 🔘 ПАГИНАЦИЯ:
	pagination: {
		el: '.swiper-pagination',
		clickable: true,

		// Адаптивность для пагинации - ПЕРЕНЕСЕНО В BREAKPOINTS
		// dynamicBullets: window.innerWidth < 768 ? true : false,
		// dynamicMainBullets: window.innerWidth < 480 ? 1 : 3,
		// type: 'bullets' // Упрощено - всегда bullets
	},

	// 📱 АДАПТИВНЫЕ НАСТРОЙКИ:
	breakpoints: {
		// Когда ширина окна >= 320px
		320: {
			speed: 1200,
			spaceBetween: 8,
			mousewheel: {
				sensitivity: 1.2
			},
			pagination: {
				dynamicBullets: true,
				dynamicMainBullets: 1
			}
		},
		// Когда ширина окна >= 768px
		768: {
			speed: 1600,
			spaceBetween: 12,
			mousewheel: {
				sensitivity: 1.8
			},
			pagination: {
				dynamicBullets: false,
				dynamicMainBullets: 2
			}
		},
		// Когда ширина окна >= 1024px
		1024: {
			speed: 2000,
			spaceBetween: 16,
			mousewheel: {
				sensitivity: 2.2
			},
			pagination: {
				dynamicBullets: false,
				dynamicMainBullets: 3
			}
		},
		// Когда ширина окна >= 1440px
		1440: {
			speed: 2400,
			spaceBetween: 18,
			mousewheel: {
				sensitivity: 2.4
			},
			pagination: {
				dynamicBullets: false
			}
		}
	},

	// 📱 ДОПОЛНИТЕЛЬНЫЕ АДАПТИВНЫЕ НАСТРОЙКИ:
	resizeObserver: true,

	// 🎯 ОПТИМИЗАЦИЯ ДЛЯ МОБИЛЬНЫХ:
	touchRatio: 1, // Изменил на 1 для лучшей чувствительности на мобильных
	touchAngle: 45,
	simulateTouch: true, // Отключил для мобильных
	shortSwipes: true,
	longSwipes: true, // Включил для лучшего UX на мобильных
	longSwipesRatio: 0.5,
	longSwipesMs: 300,

	// 📦 ДОПОЛНИТЕЛЬНЫЕ ОПЦИИ ДЛЯ ПЛАВНОСТИ:
	grabCursor: false,
	watchSlidesProgress: true,

	// 🎪 ДОПОЛНИТЕЛЬНЫЕ НАСТРОЙКИ ДЛЯ СЛАЙДЕРА:
	loop: false, // Если нужно бесконечное пролистывание
	effect: 'slide', // Базовый эффект
	direction: 'horizontal', // Явно указываем горизонтальное направление

	// 📐 НАСТРОЙКИ ВЫСОТЫ:
	autoHeight: false, // Отключаем авто-высоту
	slidesPerView: 1, // Всегда один слайд в viewport
	slidesPerGroup: 1, // Группируем по одному слайду

	// ⚡ ОПТИМИЗАЦИЯ ПРОИЗВОДИТЕЛЬНОСТИ:
	observer: true, // Наблюдатель за изменениями DOM
	observeParents: true, // Наблюдатель за родительскими элементами
	preloadImages: true, // Предзагрузка изображений
	updateOnWindowResize: true // Обновление при ресайзе окна
} );





// direction: 'vertical', - сделать вертикальную прокрутку!
// 🔄 ЕСЛИ ЗАХОТИТЕ ВКЛЮЧИТЬ СВОБОДНЫЙ РЕЖИМ С АДАПТИВНОСТЬЮ:
// freeMode: {
// 	enabled: true,
// 	sticky: true, // Слайды "прилипают" в конечных позициях
// 	momentum: true, // Инерция
// 	momentumBounce: true, // Отскок
// 	momentumRatio: 1, // Соотношение инерции
// 	momentumVelocityRatio: 1 // Соотношение скорости
// }