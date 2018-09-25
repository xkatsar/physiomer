
<?php if (!$page): ?>
    <article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
<?php endif; ?>

    <?php if ($user_picture || $display_submitted || !$page): ?>
        <?php if (!$page): ?>
            <header>
    <?php endif; ?>

            <?php print $user_picture; ?>

            <?php print render($title_prefix); ?>
            <?php if (!$page): ?>
                <h2<?php print $title_attributes; ?>><a href="<?php print $node_url; ?>"><?php print $title; ?></a></h2>
            <?php endif; ?>
            <?php print render($title_suffix); ?>

            <?php if ($display_submitted): ?>
                <span class="submitted"><?php print $submitted; ?></span>
            <?php endif; ?>

        <?php if (!$page): ?>
            </header>
    <?php endif; ?>
    <?php endif; ?>

    <div class="container node-content"<?php print $content_attributes; ?>>
        <?php
            // Hide comments, tags, and links now so that we can render them later.
            hide($content['comments']);
            hide($content['links']);
            hide($content['field_tags']);
            hide($content['field_pour_qui']);
            hide($content['field_symptomes']);
            hide($content['field_image']);
            hide($content['field_header_fiche']);
            hide($content['field_mini_descriptif']);
            hide($content['field_mini_descriptif_hover']);
            hide($content['language']);

            if (isset($content['field_video']) && isset($content['field_video']['#access'])) {
              $content['field_video']['#access'] = true;
            }

            // $block = module_invoke('views', 'block_view', 'view_conseils-block_conseils_products');
            // krumo($block);
            // print render($block);
        ?>

        <div class="node-header clearfix">
            <div class="node-header-group">
                <h1 class="rounded-title">
                    <?php print $title; ?>
                </h1>
                <?php print render($title_suffix); ?>
            </div>
            <div class="row">
                <div class="col-sm-12 col-lg-4 product-image-left">
                    <?php print render($content['field_image']) ?>
                </div>
                <div class="col-sm-12 col-lg-4 content">
                    <?php print render($content['field_header_fiche']) ?>
                </div>
                <div class="col-sm-12 col-lg-4 post-it">
                    <div class="postit-header">
                        &nbsp;
                    </div>
                    <div class="post-it-content">
                        <?php print render($content['field_pour_qui']); ?>
                        <?php print render($content['field_symptomes']); ?>
                        <h2 class="postit-title comment-video">
                            <?php print t('How?') ?>
                        </h2>
                        <a class="btn btn-physiomer comment-video" href="#products-in-videos"><i class="icon-fleche-bleue">&nbsp;</i> <?php print t("Voir la vidéo d'utilisation") ?></a>
                    </div>
                </div>
            </div>
        </div>
        <hr class="header-shadow" />
        <?php print render($content) ?>

    </div>



    <?php print render($content['comments']); ?>

<?php if (!$page): ?>
    </article> <!-- /.node -->
<?php endif; ?>
