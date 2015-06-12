$(document).ready(function() {

	// click
	$('body').on('click', function() {
		$(this).removeClass('is-open-menu');
	});

	// menu
	$('.js-btn-menu').on('click', function(event) {
		event.stopPropagation();
		var body = $('body');
		if (body.hasClass('is-open-menu')) {
			body.removeClass('is-open-menu');
		}
		else {
			body.addClass('is-open-menu');
		}
	});
	
});