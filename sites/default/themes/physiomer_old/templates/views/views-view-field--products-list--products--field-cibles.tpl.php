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
    $term = taxonomy_term_load($row->field_data_field_cibles_field_cibles_tid);
    $term = i18n_string_object_translate('taxonomy_term', $term);
    // exit;
?>
<h2 id="<?php print implode('-', $id) ?>" class="<?php if (isset($row->field_data_field_cibles_field_cibles_tid)) print 'cible-'.$row->field_data_field_cibles_field_cibles_tid ?>">
    <i class="rubrique-icon">&nbsp;</i><span class="rubrique-title"><?php print $term->name; ?></span>
</h2>
