<?php
  /*$divPattern = '<div class="%spanClass%">%content%</div>';
  
  $labelReadMore = '<br/><a class="btn btn-physiomer pull-right" href="'. $node_url .'"><i class="icon-fleche-bleue">&nbsp;</i>'. render($content['field_label_read_more']) .' </a>';
  $bodyPattern = str_replace('%content%', render($content['body']). $labelReadMore, $divPattern);

  $hasImage = (isset($content['field_image_teaser']) && $content['field_image_teaser']);

  $body = array();
  if ($hasImage) {
    $imagePattern = str_replace('%content%', render($content['field_image_teaser']), $divPattern);
  }
  else {
    $body[] = str_replace('%spanClass%', 'span12', $bodyPattern);
  }
  if ('odd' == $zebra) {
    if ($hasImage) {
      $body[] = str_replace('%spanClass%', 'span4', $imagePattern);
      $body[] = str_replace('%spanClass%', 'span8', $bodyPattern);
    }
  }
  elseif ('even' == $zebra) {
    if ($hasImage) {
      $body[] = str_replace('%spanClass%', 'span8', $bodyPattern);
      $body[] = str_replace('%spanClass%', 'span4', $imagePattern);
    }
  }

  $body = implode('', $body);*/
?>

<div class="row-inline <?php print $zebra ?>" id="node-gamme-content-id-<?php print $node->nid; ?>">
    <h2 class="blue-line"><?php print $title; ?></h2>
    <?php print render($title_suffix); ?>
    <div class="row content-row">
        <?php if (isset($content['field_image_teaser']) && $content['field_image_teaser'] ): ?>
            <div class="col-xs-12 col-sm-5 col-md-3">
                <?php print render($content['field_image_teaser']);?>
            </div>
            <div class="<?php if(isset($content['field_image_teaser'])): ?>col-xs-12 col-sm-7 col-md-9<?php else: ?>col-sm-12<?php endif; ?>">
                <?php print render($content['body']); ?>
                <br/>
                <a class="btn btn-physiomer pull-right" href="<?php print $node_url; ?>"><i class="icon-fleche-bleue">&nbsp;</i> <?php print render($content['field_label_read_more']); ?></a>
            </div>
        <?php endif; ?>
    </div>
</div>
<div class="top-line">
    <hr />
    <div class="pull-right">
        <a href="#"><i class="icon-top">&nbsp;</i> <?php print t('Back to top of page'); ?></a>
    </div>
</div>

