(function($, __undefined){

	$(function(){
		var items = $('[data-country-limit]')
		for (k in items) {
			var item = items[k];
			var limitTo = $(item).data('country-limit');
			if (limitTo) {
				limitTo = limitTo.split(/ +/);
				var show = false;
				for (i in limitTo) {
					var code = limitTo[i];
					if (code == '') continue;
					if (geoip_country_code() == code) {
						show = true;
					}
				}
				if (limitTo.length > 0 && !show) $(item).parent().remove();
			}
		};
		initSlideshow($('#highlighted .view-slideshow-homepage .item-list'));

	});

	function initSlideshow($__slideshow){

		// $nav = $("<div style='display:none;' id='slideshow-navigation'></div>");
		var $navControls = $(document.createElement('div'))
			.attr('id', 'slideshow-nav-controls')
		;
		$navControls.append(
			$(document.createElement('a'))
				.attr('id', "control-prev")
		);
		$navControls.append(
			$(document.createElement('a'))
				.attr('id', "control-next")
		);
		var $backslide = $(document.createElement('div'))
			.attr('id', 'slideshow-background')
		;

		// $navControls = $("<div id='slideshow-nav-controls'><a id='control-prev'></a><a id='control-next'></a></div>");
		// $backslide = $("<div id='slideshow-background'></div>");

		_totalSlide = $__slideshow.find('ul li.views-row').length;

		$__slideshow.find('ul li.views-row').each(function(index){
			$(this)
				.find('.field-name-field-image-premier-plan')
					.addClass('slideshow-slide-'+index)
					.addClass('slideshow-slide')
			;

			$backgroundSlide = $(this)
				.find('.field-name-field-image-de-fond-de-site')
					.addClass('slideshow-background-slide-'+index)
					.addClass('slideshow-background-slide')
			;
			$backgroundSlideUrl = $backgroundSlide.find('img').attr('src');
			$backgroundSlide
				.html('')
				.css('background-image','url("'+$backgroundSlideUrl+'")')
			;


			var $linkWrapper = $(document.createElement('a'))
				.attr('href', $(this).find('.field-name-field-url-associ-e .field-item').text())
				.attr('title', '')
				.attr('alt', '')
			;

			// $linkWrapper = $("<a href='"+$(this).find('.field-name-field-url-associ-e .field-item').text()+"' title='' alt=''></a>");
			$(this).find('.field-name-field-image-premier-plan .field-item img').wrap($linkWrapper);

			$backslide.append($backgroundSlide);
		});

		$('body').append($backslide);

		// Si une seule slide, on dégage sans afficher les liens suivant / précédent
		if (_totalSlide == 1) return start();

		$__slideshow.append($navControls);

		$(document).on('click','#control-prev', function(){
			setSlide('prev');
		});

		$(document).on('click','#control-next', function(){
			setSlide('next');
		});

		start();
	}

	function start(){
		$('#highlighted').addClass('enabled');
		setSlide();
	}

	var _currentSlideIndex 	= 0;
	var _totalSlide 		= 0;

	function setSlide(__move){

		if(__move == "prev") {
			_currentSlideIndex--;
		}
		else if(__move == "next") {
			_currentSlideIndex++;
		}

		if (_currentSlideIndex < 0 || _currentSlideIndex >= _totalSlide) _currentSlideIndex = 0;


		if($('html').hasClass('ie')){
			$('#highlighted .slideshow-slide.active')
				.hide()
				.removeClass("active")
			;
			$('body .slideshow-background-slide.active')
				.hide()
				.removeClass("active")
			;
			$('#highlighted .slideshow-slide-'+_currentSlideIndex).addClass('active').show();
			$('body .slideshow-background-slide-'+_currentSlideIndex).addClass('active').show();
		}else{
			$('#highlighted .slideshow-slide.active').fadeOut();
			$('body .slideshow-background-slide.active').fadeOut();
			$('#highlighted .slideshow-slide.active').removeClass("active");
			$('body .slideshow-background-slide.active').removeClass("active");
			setTimeout(function(){
				$('#highlighted .slideshow-slide-'+_currentSlideIndex).addClass('active').fadeIn();
				$('body .slideshow-background-slide-'+_currentSlideIndex).addClass('active').fadeIn();
			},500);
		}



	}

})(jQuery);
