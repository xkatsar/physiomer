<article class="node-<?php print $node->nid; ?> multi  <?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <div class="content row-fluid"<?php print $content_attributes; ?>>
    <?php
      // Hide comments, tags, and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      hide($content['field_tags']);
      hide($content['field_image']);
      hide($content['body']);
      hide($content['field_mini_descriptif']);
      hide($content['field_mini_descriptif_hover']);
      hide($content['language']);
      if (array_key_exists('field_descriptif_physiometre', $content)) {
        if (array_key_exists('#label_display', $content['field_descriptif_physiometre'])) {
          $content['field_descriptif_physiometre']['#label_display'] = 'hidden';
        }
      }
    ?>
      <div class="span4 text-right">
          <?php print render($content['field_image']); ?>
      </div>
      <div class="span8 desc-content">
        <h2><?php print $title; ?></h2>
        <?php print render($content['field_descriptif_physiometre']); ?>
        <a href="<?php print $node_url; ?>" class="btn btn-physiomer"><i class="icon-fleche-bleue"></i> <?php print t('Show the product sheet'); ?></a>
      </div>
  </div>
  <?php print render($title_suffix); ?>
</article> 
