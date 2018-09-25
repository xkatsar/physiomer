(function($, __undefined){
    $(function(){
        if (!$.jCookies({get: 'hide_popin_lang'})) {
            $('.popin-lang').removeClass('hide');
            $('.popin-lang').bPopup();
            $.jCookies({name: 'hide_popin_lang', value: true});
        }
        if($('.fake-select').length > 0){
            $('.fake-select').on('click','.list-selected',function(e){
                if($(this).parents('.fake-select').hasClass('opened')){
                    $(this).parents('.fake-select').removeClass('opened');
                    $(this).parents('.fake-select').find('.list-container').hide();
                }else{
                    $(this).parents('.fake-select').addClass('opened');
                    $(this).parents('.fake-select').find('.list-container').show();
                    if(!$(this).parents('.fake-select').find('.scroll-container').hasClass('mCustomScrollbar')){
                        $(this).parents('.fake-select').find('.scroll-container').mCustomScrollbar({
                            set_height:200
                        });
                    }
                }
            });

            $('.fake-select').find('.list-container ul').on('click', 'li', function(e){
                $(this).parents('ul').find('.active').removeClass('active');
                $(this).addClass('active');
                $(this).parents('.fake-select').find('.list-selected').find('.selection').text($(this).text());
                $(this).parents('.fake-select').find('.list-container').hide();
                $(this).parents('.fake-select').removeClass('opened');
                $(this).parents('.fake-select').data('value', $(this).data('value'));
            });
            $('#validate-popin-lang').click(function(){
                document.location.href = $('.fake-select').data('value')+"?nsp";
            });
        }
    });

})(window.jq19);
