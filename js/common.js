$(document).ready(function() {

	// click
	function bClick() {
		if ($(window).width() > 768) {
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
		} else {
			$('body').on('touchstart', function() {
				$(this).removeClass('is-open-menu');
				$('.drop').removeClass('is-open');
			});
			// menu
			$('.js-btn-menu').on('touchstart', function(event) {
				event.stopPropagation();
				var body = $('body');
				if (body.hasClass('is-open-menu')) {
					body.removeClass('is-open-menu');
				}
				else {
					body.addClass('is-open-menu');
				}
			});
		}
	}
	bClick();

	function lMenu() {
		var menu = $('.l_menu'),
			active = $('.l_menu').find('a.ac').eq(0).text();

		if ($(window).width() < 960) {
			menu.wrapAll("<div class='drop'></div>");
			$('.drop').append('<div class="drop__text">'+' '+active+' '+' </div>');
		}
		$('.drop__text').on('click, touchstart', function(event) {
			event.stopPropagation();
			$('.drop').toggleClass('is-open');
		});
	}
	lMenu();
	
	$('.l_menu a').on('click, touchstart', function(){
		var text = $(this).text();
		$('.drop__text').text(text);
	});

	$('.drop').each(function () {
	    if ($(this).find('.l_menu a').text().length === 0) {
	        $(this).addClass("mob-hide");
	    }
	});
	$('.l_menu').each(function() {
		if ($(window).width() < 960) {
			var ul = $(this).find('ul');
			ul.addClass('mob-nav');
			ul.clone(ul).prependTo('.center_col');
		}
	});
		

});