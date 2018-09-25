<?php
    $hasImage = (isset($content['field_image_teaser']) && $content['field_image_teaser']);
?>

<div class="row noside-margin">
    <div class="col-12 mb-20">
        <h2 class="blue-line v2"><?php print $title; ?></h2>
    </div>
    <?php print render($title_suffix); ?>
    <?php if ($hasImage) { ?>
        <div class="col-md-8 col-sm-12 mb-20">
            <?php print render($content['body'])?>
        </div>
        <div class="col-md-4 col-sm-12 mb-20">
            <div class="search-image"><?php print render($content['field_image_teaser']); ?></div>
            <div class="readmore-container">
                <a class="btn btn-physiomer pull-right" href="<?=$node_url?>">
                <i class="icon-fleche-bleue">&nbsp;</i><?php print render($content['field_label_read_more']); ?>
                </a>
            </div>
        </div>
    <?php } else { ?>
        <div class="col-md-12 col-sm-12 mb-20">
            <?php print render($content['body'])?>
        </div>
        <div class="col-md-12 col-sm-12 mb-20">
            <div class="readmore-full-container">
                <a class="btn btn-physiomer pull-right" href="<?=$node_url?>">
                    <i class="icon-fleche-bleue">&nbsp;</i><?php print render($content['field_label_read_more']); ?>
                </a>
            </div>
        </div>    
    <?php } ?>
</div>

<div class="top-line hide">
  <hr />
  <div class="pull-right">
    <a href="#"><i class="icon-top">&nbsp;</i> <?php print t('Back to top of page'); ?></a>
  </div>
</div>
