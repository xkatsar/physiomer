<?php
    $hasVideo = strstr($content, 'data-fancybox-href');
    $hasImages = strlen(render($en_images));
    $hasVideoTxt = strlen(render($en_video));
    $hasTips = strlen(render($nos_astuces));
    if (!$hasVideo && !$hasTips && !$hasImages && !$hasVideoTxt) return;
?>

<div id="<?php print $block_html_id; ?>" class="tabbable <?php print $classes; ?>"<?php print $attributes; ?>>
<h3><?php print t('Our recommandations for use', array(), array('context' => 'product')) ?></h3>
  <ul class="nav nav-tabs">
    <?php if ($hasVideo): ?>
        <li class="active"><a href="#products-in-videos"><?php print t('In videos', array(), array('context' => 'product')) ?></a></li>
    <?php endif; ?>
    <?php if ($hasImages): ?>
        <li class="<?php if ($hasImages && !$hasVideo): ?>active<?php endif; ?>"><a href="#products-in-images"><?php print t('In images', array(), array('context' => 'product')) ?></a></li>
    <?php endif; ?>
    <?php if ($hasTips): ?>
        <li class="<?php if ($hasTips && !$hasVideo && !$hasImages): ?>active<?php endif; ?>"><a href="#products-our-tips"><?php print t('Our tips', array(), array('context' => 'product')) ?></a></li>
    <?php endif; ?>
  </ul>
  <div class="tab-content">
    <?php if ($hasVideo): ?>
        <div class="tab-pane active" id="products-in-videos">
            <?php print $content ?>
            <?php print render($en_video); ?>
        </div>
    <?php endif; ?>
    <?php if ($hasImages): ?>
        <div class="tab-pane <?php if ($hasImages && !$hasVideo): ?>active<?php endif; ?>" id="products-in-images"><?php print render($en_images) ?></div>
    <?php endif; ?>
    <?php if ($hasTips): ?>
        <div class="tab-pane <?php if ($hasTips && !$hasVideo && !$hasImages): ?>active<?php endif; ?>" id="products-our-tips"><?php print render($nos_astuces) ?></div>
    <?php endif; ?>

  </div>
</div>