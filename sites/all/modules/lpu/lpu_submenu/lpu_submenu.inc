<?php 
/**
 * Renders a menu tree based on the current path.
 *
 * The tree is expanded based on the current path and dynamic paths are also
 * changed according to the defined to_arg functions (for example the 'My
 * account' link is changed from user/% to a link with the current user's uid).
 *
 * @param $menu_name
 *   The name of the menu.
 *
 * @return
 *   A structured array representing the specified menu on the current page, to
 *   be rendered by drupal_render().
 */
function lpu_submenu_tree($menu_name, $max_depth = NULL) {
  $tree = menu_tree_page_data($menu_name, $max_depth);
  return lpu_submenu_tree_output($tree);
}

/**
 * Returns a rendered menu tree.
 *
 * The menu item's LI element is given one of the following classes:
 * - expanded: The menu item is showing its submenu.
 * - collapsed: The menu item has a submenu which is not shown.
 * - leaf: The menu item has no submenu.
 *
 * @param $tree
 *   A data structure representing the tree as returned from menu_tree_data.
 *
 * @return
 *   A structured array to be rendered by drupal_render().
 */
function lpu_submenu_tree_output($tree) {
  $build = array();
  $items = array();

  // Pull out just the menu links we are going to render so that we
  // get an accurate count for the first/last classes.
  foreach ($tree as $data) {
    if ($data['link']['access'] && !$data['link']['hidden']) {
      $items[] = $data;
    }
  }

  $router_item = menu_get_item();
  $num_items = count($items);
  foreach ($items as $i => $data) {
    $class = array();
    if ($i == 0) {
      $class[] = 'first';
    }
    if ($i == $num_items - 1) {
      $class[] = 'last';
    }
    // Set a class for the <li>-tag. Since $data['below'] may contain local
    // tasks, only set 'expanded' class if the link also has children within
    // the current menu.
    if ($data['link']['has_children'] && $data['below']) {
      $class[] = 'expanded';
    }
    elseif ($data['link']['has_children']) {
      $class[] = 'collapsed';
    }
    else {
      $class[] = 'leaf';
    }

    // Add unique class on menu item based on the menu mlid
    $class[] = 'menu-'. $data['link']['mlid'];
    
    /*// Add 'active' class on the li elem of each menu item which are the current page
    if ($data['link']['link_path'] == check_plain($_GET['q'])
    ||  url($data['link']['link_path']) == check_plain($_GET['q'])) {
        $class[] = 'active';
    }
    //*/
    // Append active class.
    if (
        ($data['link']['link_path'] == $_GET['q'] 
        || ($data['link']['link_path'] == '<front>' 
            && drupal_is_front_page()
           )
        ) 
        || url($data['link']['link_path']) == $_GET['q']
      ) {
      $class[] = 'active';
    }
    
    // Set a class if the link is in the active trail.
    if ($data['link']['in_active_trail']) {
      $class[] = 'active-trail';
      $data['link']['localized_options']['attributes']['class'][] = 'active-trail';
    }
    // Normally, l() compares the href of every link with $_GET['q'] and sets
    // the active class accordingly. But local tasks do not appear in menu
    // trees, so if the current path is a local task, and this link is its
    // tab root, then we have to set the class manually.
    if ($data['link']['href'] == $router_item['tab_root_href'] && $data['link']['href'] != $_GET['q']) {
      $data['link']['localized_options']['attributes']['class'][] = 'active';
    }

    // Allow menu-specific theme overrides.
    $element['#theme'] = 'menu_link__' . strtr($data['link']['menu_name'], '-', '_');
    $element['#attributes']['class'] = $class;
    $element['#title'] = $data['link']['title'];
    $element['#href'] = $data['link']['href'];
    $element['#localized_options'] = !empty($data['link']['localized_options']) ? $data['link']['localized_options'] : array();
    $element['#below'] = $data['below'] ? lpu_submenu_tree_output($data['below']) : $data['below'];
    $element['#original_link'] = $data['link'];
    // Index using the link's unique mlid.
    $build[$data['link']['mlid']] = $element;
  }
  if ($build) {
    // Make sure drupal_render() does not re-order the links.
    $build['#sorted'] = TRUE;
    // Add the theme wrapper for outer markup.
    // Allow menu-specific theme overrides.
    $build['#theme_wrappers'][] = 'menu_tree__' . strtr($data['link']['menu_name'], '-', '_');
  }

  return $build;
}