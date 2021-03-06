<div id="container" class="clearfix">

  <div id="skip-link">
    <a href="#main-content" class="element-invisible element-focusable"><?php print t('Skip to main content'); ?></a>
    <?php if ($main_menu): ?>
      <a href="#navigation" class="element-invisible element-focusable"><?php print t('Skip to navigation'); ?></a>
    <?php endif; ?>
  </div>

  <header id="header" role="banner" class="clearfix">
    <div id="consent_blackbar"></div>
    <div class="container">
      <div class="row-fluid" id="top-header">
        <?php if ($logo): ?>
            <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" id="logo">
              <img src="<?php print $logo; ?>" alt="<?php print t('Physiomer'); ?>" />
            </a>
          <?php endif; ?>
          <?php if ($site_name || $site_slogan): ?>
            <hgroup id="site-name-slogan" class="hide">
              <?php if ($site_name): ?>
                <div id="site-name">
                  <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><span><?php print $site_name; ?></span></a>
                </div>
              <?php endif; ?>
              <?php if ($site_slogan): ?>
                <div id="site-slogan"><?php print $site_slogan; ?></div>
              <?php endif; ?>
            </hgroup>
          <?php endif; ?>

          <div class="pull-right">
            <?php print render($page['header']); ?>
          </div>
      </div>

    </div>

    <?php if ($page['navigation']): ?><div id="navigation"><div class="container"><?php print render($page['navigation']); ?></div></div><?php endif; ?>



  </header> <!-- /#header -->

  <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>

  <section id="main" role="main" class="clearfix container">
      <a id="main-content"></a>
      <?php if ($breadcrumb): print $breadcrumb; endif;?>
      <?php //print render($title_prefix); ?>
      <?php if (false && $title): ?><h1 class="title" id="page-title"><?php print $title; ?></h1><?php endif; ?>
      <?php //print render($title_suffix); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
      <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper clearfix"><?php print render($tabs); ?></div><?php endif; ?>
            <?php print $messages; ?>

        <div class="node-header clearfix">

            <div class="row-fluid display-table">
                <div class="submenu-left table-cell">
                  <div class="node-header-group">
                      <?php print render($page['content']['system_main']['search_results']['search_title']) ?>
                  </div>
                    <div class="list">
                        <?php print render($page['content']['system_main']['search_results']['search_extra']) ?>
                    </div>
                </div>
                <div class="content-right table-cell" style="padding-top:0;">
                    <h2><?php print t('My search query') ?></h2>
                    <?php print render($page['content']['system_main']['search_results']['search_form']); ?>
                </div>
            </div>
        </div>
        <hr class="header-shadow" />
        <div class="p25">
            <?php print render($page['content']['system_main']['search_results']['search_results']); ?>
        </div>

      <?php //krumo($page['content']); ?>
      <?php //print render($page['content']); ?>

    <?php if ($page['sidebar_first']): ?>
      <aside id="sidebar-first" role="complementary" class="sidebar clearfix">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>

    <?php if ($page['sidebar_second']): ?>
      <aside id="sidebar-second" role="complementary" class="sidebar clearfix">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>

    <?php if ($page['sup_footer']): ?>
      <div id="sup-footer">
        <?php print render($page['sup_footer']) ?>
      </div>
    <?php endif; ?>

  </section> <!-- /#main -->

  <footer id="footer" role="contentinfo" class="clearfix container">
    <?php print render($page['footer']) ?>
  </footer> <!-- /#footer -->



</div> <!-- /#container -->
