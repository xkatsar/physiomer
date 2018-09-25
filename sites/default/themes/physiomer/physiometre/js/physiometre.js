var stepValues = {};
(function($, __undefined){
    var lang = Drupal.settings.current_language.language;
    $(function(){
        // $('physiometre-step').click(function(){
        //     var step = parseInt($(this).attr('id').substr(16));
        //     console.log(step);
        //     console.log('START!');
        //     goto(step+1)
        // });
        $('#physiometre-step-header h2 a, #physiometre-step0 a').click(function(e){
            e.preventDefault();
            if (!$(this).hasClass('disabled')) {
                var step = parseInt($(this).attr('href').substr(17));
                // console.log(step);
                if (step > 0) {
                    goto(step);
                }
            }
        });
        $('.prev-step').click(function(e){
            goto(getCurrentStep()-1);
            e.preventDefault();
        });
        $('.next-step').click(function(e){
            goto(getCurrentStep()+1);
            e.preventDefault();
        });
        goto(0);
        $('.physiometre-step *').mouseup(function(){
            var div = $(this).parents('.physiometre-step');
            var stepValue = $(div).data('value');
        });
        $('.reset-step').click(function(e){
            $('#physiometre-step-header h2 a').removeClass('disabled');
            stepValues = {};
            physiometre_resetStep1();
            physiometre_resetStep2();
            physiometre_resetStep3();
            physiometre_resetStep4();
            goto(1);
        });
        $('#physiometre-step0 a').mouseover(function(){
            $('#physiometre-step0 a #physiometre-start-off').hide();
            $('#physiometre-step0 a #physiometre-start-on').show();
        });
        $('#physiometre-step0 a').mouseout(function(){
            $('#physiometre-step0 a #physiometre-start-off').show();
            $('#physiometre-step0 a #physiometre-start-on').hide();
        });

        $('.validate-step').click(function(){

            var age = '';
            switch(stepValues[1]) {
                case '1-1':
                    age = '<1 mois';
                    break;
                case '1-2':
                    age = '1/24 mois';
                    break;
                case '2-1':
                    age = '2/6 ans';
                    break;
                case '2-2':
                    age = '6/10 ans';
                    break;
                case '2-3':
                    age = '> à 10 ans';
                    break;
                case '3-1':
                    age = 'Homme';
                    break;
                case '3-2':
                    age = 'Femme';
                    break;
                default:
                    age = '';
                    break;
            }


            var allergie = '';
            switch(stepValues[3].left) {
                case '1-1':
                    allergie = 'oui';
                    break;
                case '1-2':
                    allergie = 'non';
                    break;
                default:
                    allergie = '';
                    break;
            }

            var enceinte = '';
            switch(stepValues[3].right) {
                case '2-1':
                    enceinte = 'oui';
                    break;
                case '2-2':
                    enceinte = 'non';
                    break;
                default:
                    enceinte = '';
                    break;
            }

            var rhume = '';
            switch(stepValues[4]) {
                case '1':
                    rhume = '1 à 2';
                    break;
                case '2':
                    rhume = '2 à 5';
                    break;
                case '3':
                    rhume = '> à 5';
                    break;
                default:
                    rhume = '';
                    break;
            }

            var symptomes = trim(stepValues[2], ' |').split('|');
            // console.log(symptomes);
            for (var i in symptomes) {
                var symptome = symptomes[i];
                switch(symptome) {
                    case 1:
                    case '1':
                        symptomes[i] = 'Nez qui coule';
                        break;
                    case 2:
                    case '2':
                        symptomes[i] = 'Nez bouché';
                        break;
                    case 3:
                    case '3':
                        symptomes[i] = 'Nez sec';
                        break;
                    case 4:
                    case '4':
                        symptomes[i] = 'Nez qui picote';
                        break;
                    case 5:
                    case '5':
                        symptomes[i] = 'Nez qui éternue';
                        break;
                    default:
                        symptomes[i] = '';
                        break;
                }
                if (symptomes[i].length == 0) {
                    delete(symptomes[i]);
                }
            }
            if (symptomes.length == 1) {
                // symptomes = symptomes.join(' ; ') + ' ';
            }
            else if (symptomes.length > 1) {
                // symptomes = '"' + symptomes.join(' ; ') + '"';
            }
            else {
                symptomes = [];
            }

            var product = getProduct(age, symptomes, rhume, allergie, enceinte);
            // console.log(age, symptomes, rhume, allergie, enceinte);

            $('.physiometre-step').hide().removeClass('active');
            $('#physiometre-step-header h2 a').parent().addClass('passed');
            $('#physiometre-step-header h2 a').addClass('disabled');
            $('#physiometre-results')
                .show()
                .html(product.produit1 + ', ' + product.produit2)
            ;
            $('.prev-step').hide();
            $('.next-step').hide();
            $('.validate-step').hide();
            $('.reset-step').show();


            var results = [];
            if (product.produit1 != '' && product.produit2 == '') {
                var nid = getProductNid(product.produit1);
                results += $('#block-views-physiometre-solo article.node-'+nid).outerHTML();
                if($('html').hasClass('ie')){
                    $('.node-produt.multi .btn-physiomer').addClass('pull-left');
                }
            }

            if (product.produit1 != '' && product.produit2 != '') {
                var nid1 = getProductNid(product.produit1);
                var nid2 = getProductNid(product.produit2);
                if (lang == 'el') {
                  results = '<div id="physiometre-result-title"><span class="phsbsmall">PHYSIOMER</span><br/><span class="phsb">ΤΟ PHYSIOMER ΠΡΟΤΕΙΝΕΙ</span></div>';
                }
                else {
                  results = '<div id="physiometre-result-title"><span class="phsbsmall">PHYSIOMER</span><br/><span class="phsb">'+(lang == 'en' ? 'RECOMMENDS' : 'VOUS RECOMMANDE 2 PRODUITS' )+'</span></div>';
                }
                results += '<div class="row-fluid">' +
                    '<div class="span6 vsepH"><div class="vSep"></div>' + $('#block-views-physiometre-multi article.node-'+nid1).outerHTML() + '</div>'
                    +
                    '<div class="span6">' + $('#block-views-physiometre-multi article.node-'+nid2).outerHTML() + '</div>'
                    + '</div>'
                ;
                if($('html').hasClass('ie')){
                    $('.node-produt.multi .btn-physiomer').addClass('pull-left');
                }
            }

            $('#physiometre-step-header h2 a[href="#physiometre-step'+1+'"]').parent().removeClass('active').addClass('passed');
            $('#physiometre-step-header h2 a[href="#physiometre-step'+2+'"]').parent().removeClass('active').addClass('passed');
            $('#physiometre-step-header h2 a[href="#physiometre-step'+3+'"]').parent().addClass('active').addClass('passed');
            $('#physiometre-results').html(results);
        });
    });

    $.fn.outerHTML = function(s) {
        return s
            ? this.before(s).remove()
            : $("<p>").append(this.eq(0).clone()).html();
    };

    function getProductNid(__productName) {
        var nid = 0;
        switch(__productName) {
            case 'Eucalyptus':
                if (lang == 'en') {
                  nid = 158;
                }
                else if (lang == 'el') {
                  nid = 201;
                }
                else {
                  nid = 60;
                }
                break;
            case 'Hypertonique':
                if (lang == 'en') {
                  nid = 155;
                }
                else if (lang == 'el') {
                  nid = 198;
                }
                else {
                  nid = 59;
                }
                break;
            case 'Jet Normal':
                if (lang == 'en') {
                  nid = 156;
                }
                else if (lang == 'el') {
                  nid = 199;
                }
                else {
                  nid = 9;
                }
                break;
            case 'Jet Fort':
                if (lang == 'en') {
                  nid = 157;
                }
                else if (lang == 'el') {
                  nid = 200;
                }
                else {
                  nid = 58;
                }
                break;
            case 'Kids':
                if (lang == 'en') {
                  nid = 154;
                }
                else if (lang == 'el') {
                  nid = 197;
                }
                else {
                  nid = 57;
                }
                break;
            case 'Vapo-douceur':
                if (lang == 'en') {
                  nid = 174;
                }
                else if (lang == 'el') {
                  nid = 194;
                }
                else {
                  nid = 11;
                }
                break;
            case 'Mouche-bébé':
                if (lang == 'en') {
                  nid = 153;
                }
                else if (lang == 'el') {
                  nid = 196;
                }
                else {
                  nid = 56;
                }
                break;
        }
        return nid;
    }

    function getProduct(__age, __symptomes, __rhume, __allergie, __enceinte) {
        __symptomes.sort();
        for(var i in Drupal.settings.physiometre) {
            var row = Drupal.settings.physiometre[i];
            row.symptomes.sort();
            if (
                row.age == __age &&
                row.allergie == __allergie &&
                row.rhumes == __rhume &&
                row.enceinte == __enceinte
            ) {
                if (__symptomes.join('|') == row.symptomes.join('|')) {
                    return row;
                }
            }
        }
        alert('Παρουσιάστηκε σφάλμα, δοκιμάστε ξανά.');
        $('.reset-step').trigger('click');
    }

    function getCurrentStep() {
        if ($('.physiometre-step.active').length > 0) {
            var $div = $('.physiometre-step.active');
            var step = parseInt($div.attr('id').substring(16));
            return step;
        }
        return 0;
    }
    function goto(__step) {
        var currentStep = getCurrentStep();
        if (__step > getCurrentStep()) {
            if (getCurrentStep() == 0) currentStep = 1;

            if (__step > 1) {
                if (stepValues[currentStep] == '' || stepValues[currentStep] == undefined) {
                    return;
                }
            }

        }

        if (__step >= 0 && __step <= $('.physiometre-step').length-1) {
            $('.reset-step').hide();
            $('.prev-step').show();
            $('.next-step').show();
            $('.validate-step').hide();
        }

        if (__step <= 0) {
            __step = 0;
            $('.reset-step').hide();
            $('.prev-step').hide();
            $('.next-step').show();
            $('.validate-step').hide();
        }

        if (__step >= $('.physiometre-step').length-1) {
            __step = $('.physiometre-step').length-1;
            $('.reset-step').hide();
            $('.prev-step').show();
            $('.next-step').hide();
            $('.validate-step').show();
        }

        $('#physiometre-results').hide();

        // Masque la question "êtes vous enceinte" pour tout le monde sauf les hommes
        if (__step == 3) {
            if (stepValues[1]) {
                if (stepValues[1] == '3-2') {
                    $('#canvasRight').show();
                }
                else {
                    $('#canvasRight').hide();
                }
            }
        }

        if (__step == 3 && (
            stepValues[1] == '2-2' || 
            stepValues[1] == '2-3' ||
            stepValues[1] == '3-1' ||
            stepValues[1] == '3-2'
        )) {
            $('.reset-step').hide();
            $('.prev-step').show();
            $('.next-step').hide();
            $('.validate-step').show();
        }


        // if( __step == 4 && getCurrentStep() == 3 && (
        //     stepValues[1] == '2-2' || 
        //     stepValues[1] == '2-3' ||
        //     stepValues[1] == '3-1' ||
        //     stepValues[1] == '3-2'
        // )) {
        //     $('.prev-step').show();
        //     $('.next-step').hide();
        //     $('.validate-step').show();
        //     __step = getCurrentStep();
        // }
        if (__step == 3) {
            if (stepValues[1]) {
                if (stepValues[1] == '1-1' || stepValues[1] == '1-2' || stepValues[1] == '2-1') {
                    $('.reset-step').hide();
                    $('.prev-step').show();
                    $('.next-step').hide();
                    $('.validate-step').show();
                }
            }
        }


        if (getCurrentStep() == 4 && __step == 3) {
            if (stepValues[1]) {
                if (stepValues[1] == '1-1' || stepValues[1] == '1-2' || stepValues[1] == '2-1') {
                    __step = 2;
                }
            }
        }
        if (getCurrentStep() == 2 && __step == 3) {
            if (stepValues[1]) {
                if (stepValues[1] == '1-1' || stepValues[1] == '1-2' || stepValues[1] == '2-1') {
                    __step = 4;
                }
            }
        }

        if (__step == 0) {
            $('.next-step').html(lang == 'en' ? '<i class="icon-fleche-bleue">&nbsp;</i> Start' : '<i class="icon-fleche-bleue">&nbsp;</i> Εκκίνηση');
            $('.prev-step').hide();
        }
        else {
            $('.next-step').html(lang == 'en' ? '<i class="icon-fleche-bleue">&nbsp;</i> Next step' : '<i class="icon-fleche-bleue">&nbsp;</i> Επόμενο Βήμα');
        }

        if (__step > 1) {
            $('.prev-step').show();
        }
        else {
            $('.prev-step').hide();
        }

        $('.physiometre-step').removeClass('hide');
        $('.physiometre-step').hide();
        $('.physiometre-step').removeClass('active');

        $('#physiometre-step-header h2').removeClass('passed');
        $('#physiometre-step-header h2').removeClass('active');
        for (var i = __step; i>0; i--) {
            if (i < __step) {
                if (__step == 4 && i == 3) {
                    // $('#physiometre-step-header h2 a[href="#physiometre-step'+i+'"]').addClass('passed');
                }
                else {
                    $('#physiometre-step-header h2 a[href="#physiometre-step'+i+'"]').parent().addClass('passed');
                }
            }
        }
        $('#physiometre-step'+__step).show();
        if (__step == 4) __step = 3;
        $('#physiometre-step'+__step).addClass('active');
        $('#physiometre-step-header h2 a[href="#physiometre-step'+__step+'"]').parent().addClass('active');


    }

    function trim (str, charlist) {
      // http://kevin.vanzonneveld.net
      // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // +   improved by: mdsjack (http://www.mdsjack.bo.it)
      // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
      // +      input by: Erkekjetter
      // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // +      input by: DxGx
      // +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
      // +    tweaked by: Jack
      // +   bugfixed by: Onno Marsman
      // *     example 1: trim('    Kevin van Zonneveld    ');
      // *     returns 1: 'Kevin van Zonneveld'
      // *     example 2: trim('Hello World', 'Hdle');
      // *     returns 2: 'o Wor'
      // *     example 3: trim(16, 1);
      // *     returns 3: 6
      var whitespace, l = 0,
        i = 0;
      str += '';

      if (!charlist) {
        // default list
        whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
      } else {
        // preg_quote custom list
        charlist += '';
        whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
      }

      l = str.length;
      for (i = 0; i < l; i++) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
          str = str.substring(i);
          break;
        }
      }

      l = str.length;
      for (i = l - 1; i >= 0; i--) {
        if (whitespace.indexOf(str.charAt(i)) === -1) {
          str = str.substring(0, i + 1);
          break;
        }
      }

      return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
    }
    function in_array (needle, haystack, argStrict) {
      // http://kevin.vanzonneveld.net
      // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
      // +   improved by: vlado houba
      // +   input by: Billy
      // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
      // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
      // *     returns 1: true
      // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
      // *     returns 2: false
      // *     example 3: in_array(1, ['1', '2', '3']);
      // *     returns 3: true
      // *     example 3: in_array(1, ['1', '2', '3'], false);
      // *     returns 3: true
      // *     example 4: in_array(1, ['1', '2', '3'], true);
      // *     returns 4: false
      var key = '',
        strict = !! argStrict;

      if (strict) {
        for (key in haystack) {
          if (haystack[key] === needle) {
            return true;
          }
        }
      } else {
        for (key in haystack) {
          if (haystack[key] == needle) {
            return true;
          }
        }
      }

      return false;
    }
//})(jq181);
})(window.jQuery);
