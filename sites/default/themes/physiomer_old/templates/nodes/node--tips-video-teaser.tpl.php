  <article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
    <div class="content"<?php print $content_attributes; ?>>
      <?php
        // Hide comments, tags, and links now so that we can render them later.
        hide($content['comments']);
        hide($content['links']);
        hide($content['field_tags']);
        hide($content['field_image']);
        hide($content['body']);

        $videoUrl = field_get_items('node', $node, 'field_video');
        if (count($videoUrl)) {
          $videoUrl = $videoUrl[0];
          $wrapper = file_stream_wrapper_get_instance_by_uri($videoUrl['uri']);
          if (is_object($wrapper)) {
            $parts = $wrapper->get_parameters();
            $scheme = file_uri_scheme($videoUrl['uri']);
            if ($scheme == 'youtube') {
              $videoId = check_plain($parts['v']);
              $videoUrl = "http://www.youtube.com/embed/". $videoId. "";
              
            }
            elseif($scheme == 'dailymotion') {
              $videoId = check_plain($parts['video_id']);
              $videoUrl = "http://www.dailymotion.com/swf/video/".$videoId."";;
            }
          }
        }

      ?>
      <div class="tips-video-list-item fancybox-video" 
           data-fancybox-href="<?php print $videoUrl; ?>"
           data-fancybox-title="<?php print $title; ?>"
           data-fancybox-type="iframe"
      >
        <?php print render($title_suffix); ?>
        <div class="video-preview-container">
          <?php print render($content['field_image']); ?>
          <div class="video-caption">
            <a href="<?php print $node_url; ?>">
              <?php print render($content['field_sous_titre']); ?>
              <strong><?php print $title; ?></strong></a>
          </div>
        </div>
      </div>
    
  </div>
  </article> 
