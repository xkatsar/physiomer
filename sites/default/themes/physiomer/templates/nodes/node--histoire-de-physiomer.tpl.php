<article id="node-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>
    <div class="row-fluid">
        <div class="span6">
    		<h2 class="row-fluid"><?php print $title; ?></h2>
        	<?php print render($content['body']); ?></div>
        <div class="span6"><?php print render($content['field_image']); ?></div>
    </div>
     

</article> <!-- /.node -->
