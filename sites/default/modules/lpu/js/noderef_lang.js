(function($, _und){
    function toggle_noderef(){
        if (Drupal.settings.lpu.back_noderef_hide_lang !== _und) {
            for (var i in Drupal.settings.lpu.back_noderef_hide_lang) {
                for (var nid in Drupal.settings.lpu.back_noderef_lang) {
                    var lang = Drupal.settings.lpu.back_noderef_lang[nid];
                    var selector = '.'+Drupal.settings.lpu.back_noderef_hide_lang[i]['html-class'];
                    nid = nid.substring(4);

                    if ($('#edit-language').val() != lang) {
                        $(selector.replace('%nid%', nid)).hide();
                    }
                    else {
                        $(selector.replace('%nid%', nid)).show();
                    }
                    if ($('#edit-language').val() == 'und') {
                        $(selector.replace('%nid%', nid)).show();
                    }
                }
            }
        }
    }
    $(function(){
        toggle_noderef();
        $('#edit-language').bind('change', function(){
            toggle_noderef();
        });
    });
})(jQuery);