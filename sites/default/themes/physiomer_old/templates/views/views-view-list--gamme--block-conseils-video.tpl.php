<?php
/**
 * @file views-view-list.tpl.php
 * Default simple view template to display a list of rows.
 *
 * - $title : The title of this group of rows.  May be empty.
 * - $options['type'] will either be ul or ol.
 * @ingroup views_templates
 */

?>
<?php print $wrapper_prefix; ?>
  <?php if (!empty($title)) : ?>
    <h3><?php print $title; ?></h3>
  <?php endif; ?>
  <?php print $list_type_prefix; ?>
    <?php foreach ($rows as $id => $row): ?>
      <li class="<?php print $classes_array[$id]; ?>"><?php print $row; ?></li>
    <?php endforeach; ?>

    <a class="btn pink-btn large" href="<?php print physiomer2013_urlt('node/41') ?>">
        <i class="icon-fleche-blanche"></i> <?php print t('All our videos'); ?>
    </a>
  <?php print $list_type_suffix; ?>
<?php print $wrapper_suffix; ?>
