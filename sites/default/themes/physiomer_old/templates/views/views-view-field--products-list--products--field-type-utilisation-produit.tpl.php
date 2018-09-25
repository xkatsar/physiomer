<?php
 /**
  * This template is used to print a single field in a view. It is not
  * actually used in default Views, as this is registered as a theme
  * function which has better performance. For single overrides, the
  * template is perfectly okay.
  *
  * Variables available:
  * - $view: The view object
  * - $field: The field handler object that can process the input
  * - $row: The raw SQL result that can be used
  * - $output: The processed output that will normally be used.
  *
  * When fetching output from the $row, this construct should be used:
  * $data = $row->{$field->field_alias}
  *
  * The above will guarantee that you'll always get the correct data,
  * regardless of any changes in the aliasing that might happen if
  * the view is modified.
  */
    $id = array('products_cat');
    if (isset($row->field_data_field_cibles_field_cibles_tid)) {
        $id[] = $row->field_data_field_cibles_field_cibles_tid;
    }
    if (isset($row->field_data_field_type_utilisation_produit_field_type_utilisa)) {
        $id[] = $row->field_data_field_type_utilisation_produit_field_type_utilisa;
    }
    $term = taxonomy_term_load($row->field_data_field_type_utilisation_produit_field_type_utilisa);
    $term = i18n_string_object_translate('taxonomy_term', $term);

?>
<div class="type-utilisation-title <?php if (isset($row->field_data_field_cibles_field_cibles_tid)): ?>
      <?php print 'type-cible-'.$row->field_data_field_cibles_field_cibles_tid ?>
    <?php endif; ?>">
  <h3 id="<?php print implode('-', $id); ?>">
    <?php print $term->name; ?>
  </h3>
  <div class="arrow-title-sub"></div>
</div>