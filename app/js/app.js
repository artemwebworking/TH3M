// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')


require('~/app/js/jquery.marquee.min.js')
require('~/app/js/jquery.magnific-popup.min.js')
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

	//custom cursor
	let cursor = document.querySelector('.cursor');
	let curosOn = document.querySelectorAll('.cursor-on');
	let cursorHover = document.querySelectorAll('.cursor-hover')
	let preloaderButtons = document.querySelectorAll('.preloader_cursor_button')

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

	preloaderButtons.forEach(item => {
		item.addEventListener('mouseover', () => {
			cursor.classList.add('preloader_cursor');
		});
		item.addEventListener('mouseleave', () => {
			cursor.classList.remove('preloader_cursor');
		});
	})


	//video
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
	//video unmuted here via click
	let preloader = document.querySelector('.preloader')
	let openingVideoUnmuted = document.querySelector('.preloader-buttons-yes')
	let openingVideoMuted = document.querySelector('.preloader-buttons-no')

	openingVideo.pause()

	openingVideoUnmuted.addEventListener('click', () => {
		openingVideo.muted = false;
		// openingVideo.autoplay = true;
		// openingVideo.loop = true;
		preloader.classList.add('hidden');
		openingVideo.play()
	})

	openingVideoMuted.addEventListener('click', () => {
		preloader.classList.add('hidden')
		openingVideo.play();
		soundButton.classList.toggle('active')
		// openingVideo.autoplay = true;
		// openingVideo.loop = true
	})



	let inputs = document.querySelectorAll('.input-js')

	for(let i = 0 ; i < inputs.length; i++) {
		inputs[i].addEventListener('focusin', () => {
			inputs[i].classList.add('focus')
		})
	}

	for(let i = 0 ; i < inputs.length; i++) {
		inputs[i].addEventListener('focusout', () => {
			inputs[i].classList.remove('focus')
		})
	}



	//form subscribe to Quickstart

	let inputWrapper = document.querySelector('.email-wrapper')
	let successSpan = document.querySelector('.footer-form-answer');
	let formAnswer = document.querySelector('.form-answer')
	
	$('#form').submit(function (event) {
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
					formAnswer.innerHTML = 'Sending successful'
					formAnswer.classList.add('success')
					setTimeout(() => {
						formAnswer.classList.remove('success')
					}, 3000);
				},
				error: function (data) {
					// error send
					formAnswer.classList.add('active')
					formAnswer.innerHTML = 'Error'
				}
			});
		} else {
			//validation error
			console.log('error validation')
			inputWrapper.classList.add('error')
			formAnswer.classList.add('active')
			formAnswer.innerHTML = 'Please enter a valid email address'
		}
	});

	let emailInput = document.getElementById('email-input')
	emailInput.addEventListener('input', () => {
		formAnswer.classList.remove('active')
		inputWrapper.classList.remove('error')		
	})

	function validateEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	}
	





// popup
	$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
})
