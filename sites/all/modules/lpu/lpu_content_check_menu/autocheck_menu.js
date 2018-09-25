function autocheckMenu() {
  if (jQuery('#edit-menu-enabled').is(':checked')) {
    jQuery('#edit-menu-link-title').val(jQuery('#edit-title').val());
  }
  else {
    jQuery('#edit-menu-enabled').attr('checked', true);
    jQuery('#edit-menu-link-title').val(jQuery('#edit-title').val());
  }
}
jQuery(function(){
  jQuery('#edit-title').change(autocheckMenu);
  jQuery('#edit-title').blur(autocheckMenu);
  jQuery('#edit-title').keyup(autocheckMenu);
  //jQuery('#edit-title').focusout('autocheckMenu');
  //jQuery('#edit-title').focuson('autocheckMenu');
});