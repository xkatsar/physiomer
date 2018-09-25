  <?php if (!$page): ?>
    <article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
  <?php endif; ?>

    <?php if ($user_picture || $display_submitted || !$page): ?>
      <?php if (!$page): ?>
        <header>
  	<?php endif; ?>

        <?php print $user_picture; ?>
    
        <?php if ($display_submitted): ?>
          <span class="submitted"><?php print $submitted; ?></span>
        <?php endif; ?>

      <?php if (!$page): ?>
        </header>
  	<?php endif; ?>
    <?php endif; ?>

    <div class="node-content"<?php print $content_attributes; ?>>
      <?php
        // Hide comments, tags, and links now so that we can render them later.
        hide($content['field_sous_titre']);
        hide($content['comments']);
        hide($content['links']);
        hide($content['field_tags']);
        print render($content);
      ?>
      <?php print render($title_suffix); ?>
    </div>



  <?php if (!$page): ?>
    </article> <!-- /.node -->
  <?php endif; ?>