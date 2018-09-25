<div data-country-limit="<?php print render($content['field_country_limit']); ?>">
    <?php
      // Hide comments, tags, and links now so that we can render them later.
      hide($content['comments']);
      hide($content['links']);
      hide($content['field_tags']);
      hide($content['field_country_limit']);
      print render($content);

    ?>
</div>