<?php
    // Hide comments, tags, and links now so that we can render them later.
    hide($content['field_sous_titre']);
    hide($content['comments']);
    hide($content['links']);
    hide($content['field_tags']);
    hide($content['field_conseil_type']);

    $conseilType = field_get_items('node', $node, 'field_conseil_type');
    $conseilType = $conseilType[0]['value'];
    if ($conseilType == 'video') {
        hide($content['field_visuels']);
        hide($content['field_image']);
    }
    else {
        
        hide($content['field_video']);
    }
?>
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

        <div class="node-content node-conseil-type-<?php print $conseilType ?>"<?php print $content_attributes; ?>>
            
            <div class="p25">
                <div class="node-header-group">
                    <?php print render($title_prefix); ?>
                    <?php if (isset($content['field_sous_titre'])): ?>
                        <?php print render($content['field_sous_titre']) ?>
                    <?php endif; ?>
                    <h1>
                        <?php print $title; ?>
                    </h1>
                    <?php print render($title_suffix); ?>
                </div>
                <?php print render($content); ?>
            </div>
        </div>

     

    <?php if (!$page): ?>
        </article> <!-- /.node -->
    <?php endif; ?>