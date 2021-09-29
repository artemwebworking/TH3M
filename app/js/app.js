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


	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	
	function validate(input) {
		const email = input
	}

	//form subscribe to Quickstart
	let form = document.getElementById('subscribe-form');
	let inputWrapper = document.querySelector('.opening-content-bottom-subscribe-left-form-email')
	let successSpan = document.querySelector('.footer-form-answer');
	let formAnswer = document.querySelector('.form-answer')
	
	$('#subscribe-form').submit(function (event) {
		event.preventDefault();
		let emailInputValue = document.getElementById('email-input').value
		if (validateEmail(emailInputValue)) {
			//success validate
			var form_data = $(this).serialize();
			$.ajax({
				type: 'POST',
				url: 'send.php',
				data: form_data,
				success: function (data) {
					//success send
					formAnswer.innerHTML = 'success'
					inputWrapper.classList.add('success')
					setTimeout(() => {
						inputWrapper.classList.remove('success')
					}, 3000);
				},
				error: function (data) {
					// error send
					formAnswer.innerHTML = 'error'
					inputWrapper.classList.add('global-error')
					setTimeout(() => {
						inputWrapper.classList.remove('success')
					}, 3000);
				}
			});
		} else {
			//validation error
			console.log('error validation')
			inputWrapper.classList.add('error')
			formAnswer.innerHTML = 'please enter a valid email address'
		}
	});

	inputWrapper.addEventListener('input', () => {
		inputWrapper.classList.remove('error')
	})
	// $('#subscribe-form').submit(function (event) { 
	// 	event.preventDefault();
	// 	let emailInputValue = document.getElementById('email-input').value
	// 	if (validateEmail(emailInputValue)) {
	// 		successSpan.innerHTML = 'success'
	// 		gsap.to(successSpan, {
	// 			opacity: 1,
	// 			y: 0,
	// 			duration: .3
	// 		})
	// 		gsap.to(successSpan, {
	// 			opacity: 0,
	// 			y: '.1rem',
	// 			duration: .3,
	// 			delay: 2
	// 		})
	// 		analytics.identify(emailInputValue);
	// 		analytics.track("Subscribed to Email List", { email: emailInputValue});
	// 		document.getElementById('email-input').value = ''
	// 	} else {
	// 		successSpan.innerHTML = 'please enter a valid email address'
	// 		gsap.to(successSpan, {
	// 			opacity: 1,
	// 			y: 0,
	// 			duration: .3
	// 		})
	// 		gsap.to(successSpan, {
	// 			opacity: 0,
	// 			y: '.1rem',
	// 			duration: .3,
	// 			delay: 2
	// 		})
	// 	}
		
	// })

})
