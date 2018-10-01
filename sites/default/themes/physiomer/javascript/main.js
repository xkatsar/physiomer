(function($, jq, __undefined){

	var IMG_DIR = "/sites/default/themes/physiomer/img/";

    $(function(){
        initMainMenu();
        removeMessage();
        initProductCarousel();
        initProductsPage();

		if ($('#block-views-7a2beed74b6af4bd682b5c90fcc1ffe2 > .contextual-links-wrapper').length > 0) {
			$('#block-views-7a2beed74b6af4bd682b5c90fcc1ffe2 > .contextual-links-wrapper').remove();
		}

		// Rend le submit du form de recherche transparent et passant par dessus le champs de recherche pour rendre cliquable la loupe
		var $searchSubmit = $('.region-header #custom-search-blocks-form-1').find('.form-actions').find('input[type=submit]');
		if ($searchSubmit.length > 0) {
			$('.region-header #custom-search-blocks-form-1').find('#edit-custom-search-blocks-form-1--2').before($searchSubmit);
			$searchSubmit.css({
				'position': 'absolute',
				'right': '0',
				'border': 'none',
				'background': 'transparent',
				'color': 'transparent',
				'width': '50px',
				'height': '30px'
			}).attr('value', '');
		}

		// Initialize le bloc d'onglet sur la page d'un produit en bas
		$('#block-views-conseils-products .nav-tabs li a').click(function (e) {
			e.preventDefault();
			$(this).tab('show');
		});

		$('.enum-list').find('li').each(function(e){
			var text = $(this).text();
			$(this).html("<span>"+text+"</span>");
		});

		if($('.node-conseil-type-video').length > 0){
			$('body').addClass('page-conseil-video');
			//$gammeLink = $($('.breadcrumb a').get(0));
                        gammeLink="/ola-ta-videos";
                        gammeText='Επιστροφή σε όλα τα Videos';
			//$('.breadcrumb').html('<a href="'+$gammeLink.attr('href')+'" class="return-link">'+Drupal.settings.physiomer_i18n.return_page_gamme+' '+$gammeLink.text()+'</span>');
                        $('.breadcrumb').html('<a href="'+gammeLink+'" class="return-link">'+gammeText+'</span>');
		}

		if($('.background-full').length > 0){
			$('.node-content .node-header').prepend($('.background-full'));
		// 	if($('.node-content .node-header').outerHeight() > $('.background-full').outerHeight()){
		// 		var ratioSize = $('.node-content .node-header').outerHeight() / $('.background-full').attr("height");
		// 		var newWidth = ratioSize * $('.background-full').attr("height");
		// 		$('.background-full').attr('width',newWidth+20);
		// 	}
		}

		if($('#block-views-conseils-products').length > 0){
			if($('#block-views-conseils-products').find('.view-conseils').find('.views-row').length >= 2){
				if($('#block-views-conseils-products').find('.field-name-field-texte-en-videos').length > 0){
					$('#block-views-conseils-products').find('.view-conseils').css('display','inline-block');
					$('#block-views-conseils-products').find('.view-conseils').css('float','left');
					$('#block-views-conseils-products').find('.view-conseils').css('width','50%');
					$('#block-views-conseils-products').find('.view-conseils').find('.views-row').css('float','none');
				}
			}
		}

		if ($('#block-views-histoire-physiomer-frise').length > 0) {
			$('#block-views-histoire-physiomer-frise .item-list .views-row a').each(function(e){
				$(this).attr('href', '#'+$(this).html());
			});
		}

		if($('.vertical-slideshow').length > 0){
			initVerticalSlideshow();
		}

		if($('#obligatoires').length > 0){
			$('#edit-actions').append($('#obligatoires').removeClass('hide'));
		}

		// Ajout du lien vers le formulaire de contact sur le formulaire de login aux espaces privés
		if ($('#user-login').length > 0) {
			$('#user-login #edit-submit').before(
				$(document.createElement('a'))
					.addClass('offset2')
					.css({
						paddingRight: '20px'
					})
					.text(Drupal.settings.physiomer_i18n.contact_us_for_password)
					.attr('href', '/node/30')
			);
		}
		// ('.enum-list li:before').addClass('before');

	    //if($('html').hasClass('ie')){
		// 	$('.enum-list').each(function(e){
		// 		console.log('enum-list');
		// 		var enumIn = 0;
		// 		$(this).find('li.before').each(function(e){
		// 			$(this).css('color','blue');
		// 		})
		// 	})
		//}


		// Cache le block de sidebar sur les page gamme si il n'a pas de contenu dedans
		var $sidebarBlock = $('#block-block-2, #block-block-4, #block-block-5');
		if ($sidebarBlock.length > 0) {
			if ($sidebarBlock.find('.video-tips section#block-views-gamme-block-conseils-video, .video-tips section#block-views-gamme-block-conseils-video--2').length < 1) {
				$sidebarBlock.find('.video-tips').hide();
			}
			if ($sidebarBlock.find('.advice-sheets section#block-views-gamme-block-fiches-conseil, .advice-sheets section#block-views-gamme-block-fiches-conseil--2').length < 1) {
				$sidebarBlock.find('.advice-sheets').hide();
			}
			if ($sidebarBlock.find('.video-tips section#block-views-gamme-block-conseils-video, .video-tips section#block-views-gamme-block-conseils-video--2').length < 1 && $sidebarBlock.find('.advice-sheets section#block-views-gamme-block-fiches-conseil').length < 1) {
				$sidebarBlock.hide();
			}
		}


		// Cacge le lien "Voir la vidéo d'utilisation" sur la page produit si l'onglet vidéo en bas de page est vide
		var $videoTab = $('#products-in-videos');
		if ($videoTab.length == 0) {
			$('.comment-video').hide();
		}

		// Supprime le "s" de bébé dans le fil d'ariane
		$('.breadcrumb .breadcrumb-item').each(function(){
			if ($(this).text()=='Bébés') {
				$(this).text('Bébé');
			}
		});

		// ajout une ancre au sous menu
		if ($('#block-menu-block-6 ul.menu li.leaf a, #block-menu-block-10 ul.menu li.leaf a, #block-menu-block-11 ul.menu li.leaf a').length > 0) {
			$('#block-menu-block-6 ul.menu li.leaf a, #block-menu-block-10 ul.menu li.leaf a, #block-menu-block-11 ul.menu li.leaf a').each(function(){
				$(this).data('href', $(this).attr('href'));
				var classes = $(this).parent().attr('class').split(/\s+/);
				var nid = '';
				for (var i = 0; i < classes.length; i++) {
					if (classes[i].substring(0, 14) == 'menu-node-nid-') {
						nid = classes[i].split('-')[3];
					}
				}
				if (nid.length > 0) {
					var divId = '#node-gamme-content-id-'+nid;
					if ($(divId).length > 0) {
						$(this).attr('href', '#node-gamme-content-id-'+nid);
					}
				}
			});
		}
		// initFicheConseilVideoTeaser();
		//

    /* remove uppercase accents */
    (function( jQuery ) {

    jQuery.extend(jQuery.expr[":"], {
      uppercase: function( elem ) {
        var attr = jQuery( elem ).css( "text-transform" );
        return ( typeof attr !== "undefined" && attr === "uppercase" );
        },
      smallcaps: function( elem ) {
        var attr = jQuery( elem ).css( "font-variant" );
        return ( typeof attr !== "undefined" && attr === "small-caps" );
      }
    });

    jQuery.extend({
      removeAcc: function( elem ) {
        // Replace uppercase accented greek characters
        function removeAccEL( text ) {
          return typeof text !== "string" ?
            // handle cases that text is not a string
            text :
            // global replace of uppercase accented characters
            text.
              replace( /\u0386/g, "\u0391" ). // 'Ά':'Α'
              replace( /\u0388/g, "\u0395" ). // 'Έ':'Ε'
              replace( /\u0389/g, "\u0397" ). // 'Ή':'Η'
              replace( /\u038A/g, "\u0399" ). // 'Ί':'Ι'
              replace( /\u038C/g, "\u039F" ). // 'Ό':'Ο'
              replace( /\u038E/g, "\u03A5" ). // 'Ύ':'Υ'
              replace( /\u038F/g, "\u03A9" ). // 'Ώ':'Ω'
              replace( /\u0390/g, "\u03B9" ). // 'ΐ':'ι'
              replace( /\u03AA/g, "\u0399" ). // 'Ϊ':'Ι'
              replace( /\u03AB/g, "\u03A5" ). // 'Ϋ':'Υ'
              replace( /\u03AC/g, "\u03B1" ). // 'ά':'α'
              replace( /\u03AD/g, "\u03B5" ). // 'έ':'ε'
              replace( /\u03AE/g, "\u03B7" ). // 'ή':'η'
              replace( /\u03AF/g, "\u03B9" ). // 'ί':'ι'
              replace( /\u03B0/g, "\u03C5" ). // 'ΰ':'υ'
              replace( /\u03CA/g, "\u03B9" ). // 'ϊ':'ι'
              replace( /\u03CB/g, "\u03C5" ). // 'ϋ':'υ'
              replace( /\u03CC/g, "\u03BF" ). // 'ό':'ο'
              replace( /\u03CD/g, "\u03C5" ). // 'ύ':'υ'
              replace( /\u03CE/g, "\u03C9" ); // 'ώ':'ω'
        }

        jQuery( elem ).each(function() {
          this.value = removeAccEL( this.value );
        }).contents().filter(function() {
          return this.nodeType === 3; // Node.TEXT_NODE
        }).each(function() {
          this.nodeValue = removeAccEL( this.nodeValue );
        });
      }
    });

    jQuery.fn.extend({
      removeAcc: function() {
        return this.each(function() {
          jQuery.removeAcc( this );
        });
      }
    });

    })( jQuery );

    jQuery( document ).ready(function($) {
        $( ":uppercase:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
        $( ":smallcaps:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
        $( ".remove-accents, .remove-accents > *:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
        $( document ).ajaxComplete(function( event, request, settings ) {
            $( ":uppercase:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
            $( ":smallcaps:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
            $( ".remove-accents, .remove-accents > *:not(input[type!=submit], textarea, .no-remove-accents)" ).removeAcc();
        });        
    });
    
        // Back top
        $(window).scroll(function() {
            if ($(this).scrollTop() > 500) {
                $('#back-top').css('bottom', '0');
            } else {
                $('#back-top').css('bottom', '-34px');
            }
        });

        // scroll body to top on click
        $('#back-top').click(function() {
            $('body,html').animate({
                scrollTop: 0,
            }, 1300);
            return false;
        });
        //
    });

	function initVerticalSlideshow(){
		var currentPosY = 0;
		var currentSlideIndex = 0;
		var maxSlides = $('.vertical-slideshow .slideshow-container .views-row').length;

		$($('#block-views-histoire-physiomer-frise .buttons-list ul li').get(0)).addClass('active');

		$('#block-views-histoire-physiomer-frise .buttons-list ul li a').click(function(e){
			e.preventDefault();
			currentSlideIndex = $(this).parent('li').index();
			move(currentSlideIndex);
		});

		$('.vertical-slideshow .nav-top').click(function(e){
			e.preventDefault();
			if(currentSlideIndex > 0){
				currentSlideIndex --;
			}else{
				currentSlideIndex = maxSlides-1;
			}
			move(currentSlideIndex);
		});
		$('.vertical-slideshow .nav-bottom').click(function(e){
			e.preventDefault();
			if(currentSlideIndex < maxSlides-1){
				currentSlideIndex ++;
			}else{
				currentSlideIndex = 0;
			}
			move(currentSlideIndex);
		});

		function move(__currSlideIndex){
			$('.vertical-slideshow .slideshow-container #block-views-histoire-physiomer-contenus').css('left',-(__currSlideIndex*760));
			$('#block-views-histoire-physiomer-frise .buttons-list ul li.active').removeClass('active');
			$($('#block-views-histoire-physiomer-frise .buttons-list ul li').get(__currSlideIndex)).addClass('active');
		}
	}

	/**
	 * Display video in fancybox
	 */
	function initFicheConseilVideoTeaser() {
		$('.fancybox-video').each(function(){
			var that = this;
			$(this).find('a').each(function(){
				$(this)
					.data('fancybox-href', $(that).data('fancybox-href'))
					.attr('data-fancybox-href', $(that).data('fancybox-href'))
					.attr('href', $(that).data('fancybox-href'))
					.data('fancybox-title', $(that).data('fancybox-title'))
					.attr('data-fancybox-title', $(that).data('fancybox-title'))
					.data('fancybox-type', $(that).data('fancybox-type'))
					.attr('data-fancybox-type', $(that).data('fancybox-type'))
					.addClass('fancybox')
				;
			})
			$(this).css({
				cursor: 'pointer'
			});
		});
		$('.fancybox').fancybox();
	}

	function initProductCarousel() {
		if($(".view-display-id-block_products .item-list li.views-row").length > 3 ){
			$('.view-display-id-block_products .item-list').jcarousel({
		        // Configuration goes here
		    });
		}

		$('#products-search-results .fieldset-wrapper ul').remove(); // remove some admin ul to not crash chrome or firefox when admin are logged in
		// $('#products-search-results .jcarousel-list.jcarousel-list-horizontal')
		// 	.css({height: '300px'})
		// 	// .addClass('row-fluid')
		// ;
		$('#products-search-results .fieldset-wrapper').append(document.createElement('ul'));
		$('#products-search-results .fieldset-wrapper article').each(function(e){
			$(this).removeClass('span4');
			$('#products-search-results .fieldset-wrapper ul').append($(document.createElement('li')).html(this.outerHTML));
		});
		$('#products-search-results .fieldset-wrapper > article').remove();
		$('#products-search-results .fieldset-wrapper').jcarousel({
			itemFallbackDimension:265,
			scroll:1
		});
		$(document).trigger('resize');
	}

	function initMainMenu(){
		addImageMenu($('#home-menu-item'),IMG_DIR+'menuitemssprite/accueil-out.png',IMG_DIR+'menuitemssprite/accueil-hover.png');
		addImageMenu($('#baby-menu-item'),IMG_DIR+'menuitemssprite/bebe-menu.png',IMG_DIR+'menuitemssprite/bebe-menu.png');
		addImageMenu($('#child-menu-item'),IMG_DIR+'menuitemssprite/enfants-out.png',IMG_DIR+'menuitemssprite/enfants-hover.png');
		addImageMenu($('#adult-menu-item'),IMG_DIR+'menuitemssprite/adulte-out.png',IMG_DIR+'menuitemssprite/adulte-hover.png');


		var pointerURL = IMG_DIR+"menu-pointer.png";
		$('#navigation .block-menu-block').append('<img id="menu-pointer" src="'+pointerURL+'"/>');

		$currentMenuSelected = $('#navigation .block-menu-block li.active');
		if($currentMenuSelected.length > 0){
			if($('#baby-menu-item').attr('id') == $currentMenuSelected.find("a").attr('id')){
				$("#menu-pointer").hide();
			}
			$("#menu-pointer").css('left',$currentMenuSelected.position().left + $currentMenuSelected.outerWidth()/2-10);
		}else{
			$("#menu-pointer").hide();
		}
	}

	function addImageMenu(__where, __path, __pathHover){
		$(__where).prepend('<span class="icon"><img class="out" src="'+__path+'"/><img class="hover hide" src="'+__pathHover+'"/></span>');
	}

	function removeMessage(){
		$('.messages').prepend('<button type="button" class="pull-right close" data-dismiss="alert">&times;</button>')
		$(".messages .close").click(function(){
			$(this).parent().remove();
		});
	}

	function initProductsPage(){
		$($('#block-views-products-list-products .view-grouping').get(0)).attr('data-filter','nousissons');
		$($('#block-views-products-list-products .view-grouping').get(1)).attr('data-filter','jeunes');
		$($('#block-views-products-list-products .view-grouping').get(2)).attr('data-filter','adultes');

		$('#products-menu-list .list-item a').click(function(e){
			e.preventDefault();
			$('#products-menu-list .list-item.active').removeClass('active');
			$(this).parent('.list-item').addClass('active');
			if($(this).attr('href').replace('#','') == "all"){
				$('#block-views-products-list-products .view-grouping').show();
			}else{
				$('#block-views-products-list-products .view-grouping').hide();
				$('#block-views-products-list-products').find("[data-filter='" + $(this).attr('href').replace('#','') + "']").show();
			}
                        if ($(window).width() < 767){
                            scrollToAnchor('product-list-header');
                        }
			return false;
		});
	}
        
        function scrollToAnchor(aid) {
            var aTag = $("div[id='"+aid+"']");
            $('html,body').animate({scrollTop:aTag.offset().top},'slow');
        }
                        

})(window.jQuery);
