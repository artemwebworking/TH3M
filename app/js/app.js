// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')


require('~/app/js/jquery.marquee.min.js')
document.addEventListener('DOMContentLoaded', () => {
	let isMobile = false
	let isDesctop = true

	if (window.innerWidth <= 480) {
		isMobile = true
		isDesctop = false
	}
	// Custom JS
	//margquee
	if (isDesctop) {
		$('.marquee').marquee({
			duration: 50000,
			gap: 0,
			duplicated: true,
			startVisible: true,
			direction: 'up',
		})
	}

	if (isMobile) {
		$('.marquee').marquee({
			duration: 20000,
			gap: 0,
			duplicated: true,
			startVisible: true,
			direction: 'right',
		})
	}

	let cursor = document.querySelector('.cursor');
	let curosOn = document.querySelectorAll('.cursor-on');
	let cursorHover = document.querySelectorAll('.cursor-hover')

	document.addEventListener('mousemove', function (e) {
		let x = e.clientX;
		let y = e.clientY;
		cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
	});


	curosOn.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('worked');
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('worked');
		});
	})

	cursorHover.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('hovered');
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('hovered');
		});
	})

	let soundButton = document.querySelector('.opening-content-bottom-description-sound')
	let openingVideo = document.querySelector('.opening-bgr-video')

	soundButton.addEventListener('click', () => {
		if (!soundButton.classList.contains('active')) {
			openingVideo.muted = true
		} else {
			openingVideo.muted = false
		}
		soundButton.classList.toggle('active')
	})


})
