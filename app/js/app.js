// Import jQuery module (npm i jquery)
import $ from 'jquery'
window.jQuery = $
window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')


require('~/app/js/jquery.marquee.min.js')
document.addEventListener('DOMContentLoaded', () => {
	
	// Custom JS
//margquee
$('.marquee').marquee({
	duration: 3000,
	gap: 0,
	duplicated: true,
	startVisible: true,
	direction: 'up',
})
$('.opening-content-bottom-description-sound').on('click', function() {
    $('.opening-content-bottom-description-sound').toggleClass('active'),
	$('.opening-bgr-video').attr('muted');
})
})
