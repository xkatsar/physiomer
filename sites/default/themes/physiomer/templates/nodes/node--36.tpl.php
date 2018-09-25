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
                if (isset($content['field_video']) && isset($content['field_video']['#access'])) {
                  $content['field_video']['#access'] = true;
                }
            ?>
            <div class="p25">
                <div class="node-header-group">
                    <?php print render($title_prefix); ?>
                    <h1><?php print $title; ?></h1>
                    <?php print render($title_suffix); ?>
                    <?php if (isset($content['field_sous_titre'])): ?>
                        <?php print render($content['field_sous_titre']) ?>
                    <?php endif; ?>
                </div>
                <?php print render($content); ?>
            </div>
        </div>

     

    <?php if (!$page): ?>
        </article> <!-- /.node -->
    <?php endif; ?>