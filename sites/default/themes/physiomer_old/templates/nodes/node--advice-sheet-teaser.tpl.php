  <article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
    <div class="content"<?php print $content_attributes; ?>>
      <?php
        // Hide comments, tags, and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        hide($content['field_tags']);
        hide($content['field_image']);
        hide($content['body']);
      ?>
      <a class="advice-sheet-list-item" href="<?php print $node_url; ?>">
        <?php print $title; ?>
      </a>
      <?php print render($title_suffix); ?>
    
  </div>
  </article> 
