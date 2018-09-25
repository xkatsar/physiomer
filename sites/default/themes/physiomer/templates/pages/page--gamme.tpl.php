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

          <nav class="navbar navbar-expand-lg navbar-light bg-light navbar-mobile">
            <a class="navbar-brand" href="#">Physiomer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse flex-grow-0" id="navbarNavDropdown">
              <?php if ($page['navigation']): ?><div id="navigation"><?php print render($page['navigation']); ?></div><?php endif; ?>
            </div>
          </nav>

          <div class="pull-right">
            <?php print render($page['header']); ?>
          </div>
      </div>
    </div>

    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light navbar-desktop">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <?php if ($page['navigation']): ?><div id="navigation"><?php print render($page['navigation']); ?></div><?php endif; ?>
        </div>
      </nav>
    </div>

  </header> <!-- /#header -->

  <?php if ($page['highlighted']): ?><div id="highlighted"><?php print render($page['highlighted']); ?></div><?php endif; ?>

  <section id="main" role="main" class="clearfix container">

    <div class="gamme clearfix">
      <?php print $messages; ?>
      <a id="main-content"></a>
    <?php if ($breadcrumb): print $breadcrumb; endif;?>
      <?php if (!empty($page['help'])): print render($page['help']); endif;?>
      <?php if (!empty($tabs['#primary'])): ?><div class="tabs-wrapper clearfix"><?php print render($tabs); ?></div><?php endif; ?>
      <?php if ($action_links): ?><ul class="action-links"><?php print render($action_links); ?></ul><?php endif; ?>
      <div id="content">
        <?php print render($page['content']); ?>
      </div>
      <div id="subcontainer">

        <div class="row">
          <?php if ($page['sidebar_first_top']): ?>
            <aside id="sidebar-first-top" role="complementary" class="col-md-12 col-lg-9 sidebar clearfix">
              <?php print render($page['sidebar_first_top']); ?>
            </aside>  <!-- /#sidebar-first -->
          <?php endif; ?>

          <?php if ($page['sidebar_second']): ?>
            <aside id="sidebar-second" role="complementary" class="col-md-12 col-lg-3 sidebar clearfix">
              <?php print render($page['sidebar_second']); ?>
            </aside>  <!-- /#sidebar-second -->
          <?php endif; ?>
        </div>

        <div class="row">
          <?php if ($page['sidebar_first']): ?>
            <aside id="sidebar-first" role="complementary" class="col-md-12 sidebar clearfix">
              <?php print render($page['sidebar_first']); ?>
            </aside>  <!-- /#sidebar-first -->
          <?php endif; ?>
        </div>



      </div>
    </div>
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
