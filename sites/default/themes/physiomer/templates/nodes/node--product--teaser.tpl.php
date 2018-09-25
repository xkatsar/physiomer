
  <article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
    <div class="content"<?php print $content_attributes; ?>>
    <?php print render($title_suffix); ?>
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
      ?>

      <div class="product-thumb">
        <?php print render($content['field_image']); ?>
      </div>
      <a class="product-btn" href="<?php print $node_url; ?>">
        <?php print $title; ?>
      </a>
      <div class="product-detail">
        <?php print render($content['field_mini_descriptif']); ?>
      </div>
      <div class="product-detail-hover">
        <?php print render($content['field_mini_descriptif_hover']); ?>
      </div>

  </div>
  </article> 
