 <?php if (!$page): ?>
        <article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
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
            <div>
                <?php print render($content); ?>
                <p class='hide' id="obligatoires">* <?php print t('Required fields'); ?></p> 
            </div>
        </div>     

    <?php if (!$page): ?>
        </article> <!-- /.node -->
    <?php endif; ?>