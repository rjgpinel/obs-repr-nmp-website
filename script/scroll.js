$(document).ready(function() {
		$('a[href*="#"]').bind('click', function(e) {
				e.preventDefault();

				var target = $(this).attr("href");

				$('html, body').stop().animate({
						scrollTop: $(target).offset().top
				}, 600, function() {
						location.hash = target;
				});

				return false;
		});
});

$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();

    if ($('.section').first().position().top - 70 > scrollDistance){
				$('.navbar .navbar-collapse .navbar-nav > li > a.section-active').removeClass('section-active');
    }else{
		    $('.section').each(function(i) {
				    if ($(this).position().top - 70 <= scrollDistance) {
						    $('.navbar .navbar-collapse .navbar-nav > li > a.section-active').removeClass('section-active');
						    $('.navbar .navbar-collapse .navbar-nav > li > a').eq(i).addClass('section-active');
				    }
		    });
    }
}).scroll();
