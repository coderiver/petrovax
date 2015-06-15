$(document).ready(function() {

	// click
	$('body').on('click', function() {
		$(this).removeClass('is-open-menu');
		$('.drop').removeClass('is-open');
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

	function lMenu() {
		var menu = $('.l_menu'),
			active = $('.l_menu').find('a.ac').eq(0).text();

		if ($(window).width() < 960) {
			menu.wrapAll("<div class='drop'></div>");
			$('.drop').append('<div class="drop__text">'+' '+active+' '+' </div>');
		}
		$('.drop__text').on('click', function(event) {
			event.stopPropagation();
			$('.drop').addClass('is-open');
		});
	}
	lMenu();
	
	$('.l_menu a').on('click', function(){
		var text = $(this).text();
		$('.drop__text').text(text);
	});

});