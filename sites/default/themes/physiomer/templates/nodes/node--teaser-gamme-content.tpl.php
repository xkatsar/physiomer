  <div class="row-inline" id="node-gamme-content-id-<?php print $node->nid; ?>">
    <h2 class="blue-line"><?php print $title; ?></h2>
    <?php print render($title_suffix); ?>
    <div class="row">
      <?php if(isset($content['field_image_teaser'])): ?>
        <div class="col-xs-12 col-sm-5 col-md-3">
          <?php print render($content['field_image_teaser']); ?>
        </div>
      <?php endif; ?>
      <div class="<?php if(isset($content['field_image_teaser'])): ?>col-xs-12 col-sm-7 col-md-9<?php else: ?>col-sm-12<?php endif; ?>">
        <?php print render($content['body']); ?>
      <br/>
      <a class="btn btn-physiomer pull-right" href="<?php print $node_url; ?>"><i class="icon-fleche-bleue">&nbsp;</i> <?php print render($content['field_label_read_more']); ?></a>
      </div>
    </div>
  </div>
  <div class="top-line">
    <hr />
    <div class="pull-right">
      <a href="#"><i class="icon-top">&nbsp;</i> <?php print t('Back to top of page'); ?></a></div>
  </div>
