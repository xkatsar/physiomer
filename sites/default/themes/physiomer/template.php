<?php

function physiomer_preprocess_node(&$vars){
    if ('product' == $vars['type']) {
        /**
         *
         * Ajoute les couleurs des produits au produits
         * @var [type]
         */
        if (isset($vars['node'])) {
            $node = $vars['node'];

            drupal_add_css(
                '#node-'. $vars['node']->nid .'.node-product .product-btn { background-color: #'. physiomer_get_product_color($node) .' !important; }',
                array(
                    'group' => CSS_THEME,
                    'type' => 'inline',
                    'media' => 'screen',
                    'preprocess' => FALSE,
                    'weight' => '9999',
                )
            );

        }
    }
    if (isset($vars['node'])) {
        $node = $vars['node'];
        if ($node->nid == 36) {
            $file = dirname(__FILE__) .  '/physiometre/physiometre-js.csv';
            $rows = array();
            if (($handle = fopen($file, "r")) !== FALSE) {
                while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
                    $rows[] = array(
                        'tranche' => trim($data[0], ' '),
                        'age' => trim($data[1], ' '),
                        'symptomes' => explode('|', trim(str_replace(' ; ', '|', $data[2]))),
                        'rhumes' => trim($data[3], ' '),
                        'allergie' => trim($data[4], ' '),
                        'enceinte' => trim($data[5], ' '),
                        'produit1' => trim($data[6], ' '),
                        'produit2' => trim($data[7], ' '),
                    );
                }
            }
            drupal_add_js(array('physiometre' => $rows), 'setting');
        }
    }

 // krumo($vars['theme_hook_suggestions']);
 	// krumo($vars);
	// physiomer_replaceReadmoreLinkByReadmoreField($vars);
}


function physiomer_urlt($path, $lang = null) {
    global $language;
    if($lang === null) {
        $lang = $language->language;
    }

    $urls = translation_path_get_translations($path);
    if (isset($urls[$language->language])) {
        return url($urls[$lang]);
    }
    return url($path);
}

function physiomer_get_product_color($node) {
    $field = field_get_items('node', $node, 'field_couleur');
    if (isset($field[0]['jquery_colorpicker'])) {
        return $field[0]['jquery_colorpicker'];
    }

    $cibles = field_get_items('node', $node, 'field_cibles');
    if (is_array($cibles)) {
        foreach ($cibles as &$cible) {
            if (isset($cible['tid'])) {
                $cible['term'] = taxonomy_term_load($cible['tid']);
                $fieldT = field_get_items('taxonomy_term', $cible['term'], 'field_couleur');
                if (isset($fieldT[0]['jquery_colorpicker'])) {
                    return $fieldT[0]['jquery_colorpicker'];
                }
            }
        }
    }

    return '';
}


function physiomer_preprocess_block(&$vars){
// krumo($vars['theme_hook_suggestions']);
    if ('block-views-conseils-products' == $vars['block_html_id']) {
        if ('node' == arg(0) && arg(1) > 0) {
            $node = node_load(arg(1));
            if ($node->type == 'product') {
                $enImages = field_view_field('node', $node, 'field_en_images');
                $enImages['#label_display'] = 'hidden';
                $vars['en_images'] = $enImages;
                $ourTips = field_view_field('node', $node, 'field_nos_astuces');
                $ourTips['#label_display'] = 'hidden';
                $vars['nos_astuces'] = $ourTips;
                $enVideo = field_view_field('node', $node, 'field_texte_en_videos');
                $enVideo['#label_display'] = 'hidden';
                $vars['en_video'] = $enVideo;
            }
        }
    }
    elseif (in_array($vars['block_html_id'], array('block-views-conseils-texts', 'block-views-conseils-videos'))) {

        if ('node' == arg(0) && arg(1) > 0) {
                $node = node_load(arg(1));
                $conseilType = field_get_items('node', $node, 'field_conseil_type');
                $conseilType = $conseilType[0]['value'];
                if ($conseilType == 'text') {
                    $vars['classes_array'][] = 'hide';
                }
        }
    }
}
function physiomer_preprocess_page(&$vars){
    global $language;
    drupal_add_js(array('current_language' => $language), 'setting');
    drupal_add_js(array('physiomer_i18n' => array('return_page_gamme' => t('&lt; Return to page'))), 'setting');
    drupal_add_js(array('physiomer_i18n' => array('contact_us_for_password' => t('Contact us to retrieve a password'))), 'setting');
    drupal_add_css('https://use.fontawesome.com/releases/v5.3.1/css/all.css', array('type' => 'external'));

    if ($language->language == 'en') {
        $vars['logo'] = str_replace('logo.png', 'logo-en.png', $vars['logo']);
    }
    else if ($language->language == 'el') {
        $vars['logo'] = str_replace('logo.png', 'logo-gr.png', $vars['logo']);
    }

    /**
     * PAGE DE RECHERCHE
     */
    if ('search' == arg(0) && 'content' == arg(1)) {
        physiomer_format_search_results($vars);
    }


    /**
     * ESPACE PRIVE PHARMACIEN / MEDECIN
     */
    $vars['espace_prive'] = in_array(lpu_spaces_get(), array('Pharmacien', 'Médecin'));
    $menus = array(
        0 => lpu_generate_block('menu_block', 1),
        'Public' => lpu_generate_block('menu_block', 1),
        'Pharmacien' => lpu_generate_block('menu_block', 7), // pharmacien
        'Médecin' => lpu_generate_block('menu_block', 8), // medecin
    );
    unset($vars['page']['navigation']['menu_block_1']);
    if ($vars['espace_prive']) {
        $vars['page']['navigation']['main_menu'] = $menus[lpu_spaces_get()];
    }
    else {
        $vars['page']['navigation']['main_menu'] = $menus['Public'];
    }
}

function physiomer_menu_local_tasks(&$vars) {
    $output = '';

    if (!empty($vars['primary'])) {
        $vars['primary']['#prefix'] = '<ul class="tabs primary clearfix">';
        $vars['primary']['#suffix'] = '</ul>';
        $output .= drupal_render($vars['primary']);
    }
    if (!empty($vars['secondary'])) {
        $vars['secondary']['#prefix'] = '<ul class="tabs secondary clearfix">';
        $vars['secondary']['#suffix'] = '</ul>';
        $output .= drupal_render($vars['secondary']);
    }
    return $output;

}

function physiomer_preprocess_html(&$vars) {
    if ('node' == arg(0) && arg(1) > 0) {
        $node = node_load(arg(1));
        if ($node->type == 'home') {
            if (isset($vars['classes_array']) && !drupal_is_front_page() && in_array('not-front', $vars['classes_array'])) {
                unset($vars['classes_array']['not-front']);
            }
            $vars['classes_array'][] = 'front';
        }
    }
}
function physiomer_process_html(&$vars) {
    $head = drupal_add_html_head();
    if(isset($head['system_meta_content_type'])) {
        $vars['meta_charset'] = drupal_render($head['system_meta_content_type']);
        unset($head['system_meta_content_type']);
    }
    if(isset($head['metatag_description'])) {
        $vars['meta_description'] = drupal_render($head['metatag_description']);
        unset($head['metatag_description']);
    }

    // Suppression de l'auteur de chaque contenu
    if (isset($head['metatag_dcterms.creator'])) {
        unset($head['metatag_dcterms.creator']);
    }

    foreach($head as $key => &$h){
        if (substr($key, 0, 40) == 'drupal_add_html_head_link:shortcut icon:') {
            unset($head[$key]);
            break;
        }
    }
    $vars['head'] = drupal_render($head);
}

function physiomer_preprocess_field(&$vars, $hook){
 // krumo($vars['theme_hook_suggestions']);
    // krumo($vars);
    if (isset($vars['#field_name']) && $vars['#bundle']) {
        if ('field_video' == $vars['#field_name'] && 'conseils' == $vars['#bundle']) {
            $vars['#access'] = true;
        }
    }
}

function physiomer_breadcrumb($vars) {
  $breadcrumb = $vars['breadcrumb'];

  if (!empty($breadcrumb)) {
    // Provide a navigational heading to give context for breadcrumb links to
    // screen-reader users. Make the heading invisible with .element-invisible.
    $heading = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
    $heading = '';
    // Uncomment to add current page to breadcrumb
    // $breadcrumb[] = drupal_get_title();
    foreach ($breadcrumb as &$item) {
        $item = '<div class="breadcrumb-item" itemscope itemtype="http://data-vocabulary.org/Breadcrumb">' . $item . '</div>';
    }
    return '<div class="breadcrumb">' . $heading . implode(' <span class="separator">&gt;</span> ', $breadcrumb) . '</div>';
  }
}


function physiomer_preprocess_views_view(&$vars) {
    if ($vars['display_id'] == 'block_products_gamme') {
        // krumo($vars);
    }
}

function physiomer_preprocess_search_results(&$vars) {
}

function physiomer_menu_link__menu_block__menu_pharmacien(&$vars) {
    return physiomer_menu_link__menu_block__main_menu($vars);
}
function physiomer_menu_link__menu_block__menu_medecin(&$vars) {
    return physiomer_menu_link__menu_block__main_menu($vars);
}
function physiomer_menu_link__menu_block__main_menu(&$vars) {
    $element = $vars['element'];
    // krumo($element);
    if (isset($element['#href'])) {
        $href = $element['#href'];
        if (substr($href, 0, 5) == 'node/') {
            $nid = intval(substr($href, 5));
            if (is_int($nid) && $nid > 0) {
                if (isset($vars['element']['#attributes']) && isset($vars['element']['#attributes']['class'])) {
                    if (!in_array('menu-node-nid-'. $nid, $element['#attributes']['class'])) {
                        $element['#attributes']['class'][] = 'menu-node-nid-'. $nid;
                    }
                }
            }
        }
    }

    $sub_menu = '';

    if ($element['#below']) {
        $sub_menu = drupal_render($element['#below']);
    }
    $output = l($element['#title'], $element['#href'], $element['#localized_options']);
    return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

function physiomer_menu_link__menu_block__menu_menu_footer(&$vars) {
    // krumo($vars);
    $element = $vars['element'];
    $sub_menu = '';

    if ($element['#below']) {
        $sub_menu = drupal_render($element['#below']);
    }
    $output = l($element['#title'], $element['#href'], $element['#localized_options']);
    if (isset($vars['element']) && isset($vars['element']['#attributes']) && isset($vars['element']['#attributes']['class'])) {
        if (in_array('expanded', $element['#attributes']['class'])) {
            $output = '<h3>' . $output . '</h3>';
        }
    }
    return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}
/**
 * Remplace le titre du lien "Lire la suite" par la valeur du champ "Libellé 'Lire la suite'" si ce champ existe pour ce noeud
 *
 * @see  physiomer_preprocess_node()
 *
 * @param  array &$vars [description]
 * @return void
 */
function physiomer_replaceReadmoreLinkByReadmoreField(&$vars) {
	if (
		   isset($vars['content'])
		&& isset($vars['content']['links'])
		&& isset($vars['content']['links']['node'])
		&& isset($vars['content']['links']['node']['#links'])
		&& isset($vars['content']['links']['node']['#links']['node-readmore'])
    ) {
		$readmoreLink = &$vars['content']['links']['node']['#links']['node-readmore'];
		$fieldReadmore = field_get_items('node', $vars['node'], 'field_label_read_more');
		if ($fieldReadmore) {
			$readmoreLink['title'] = $fieldReadmore[0]['value'];
			hide($vars['content']['field_label_read_more']);
		}
	}

}

// function physiomer_preprocess_file_entity(&$variables) {
//   if ($variables['type'] == 'image') {
//     // Alt Text
//     if (!empty($variables['field_media_alt_text']) && !empty($variables['field_media_alt_text']['und'][0]['safe_value'])) {
//       $variables['content']['file']['#alt'] = $variables['field_media_alt_text']['und'][0]['safe_value'];
//     }

//     // Title
//     if (!empty($variables['field_media_title']) && !empty($variables['field_media_title']['und'][0]['safe_value'])) {
//       $variables['content']['file']['#title'] = $variables['field_media_title']['und'][0]['safe_value'];
//     }
//   }
// }

/**
 * get information of an image field (width, height, size, url, path)
 *
 * @param  stdClass  $__node      [description]
 * @param  string  $__fieldName [description]
 * @param  integer $__key       [description]
 * @param  string  $__info      [description]
 * @return array               [description]
 */
function physiomer_get_field_image_info($__node, $__fieldName, $__key = 0, $__info = 'all') {
    $image = field_get_items('node', $__node, $__fieldName);
    $output = field_view_value('node', $__node, $__fieldName, $image[$__key]);
    $infos = image_get_info($image[0]['uri']);
    $infos['url'] = file_create_url($output['#item']['uri']);
    if (array_key_exists($__info, $infos)) {
        return $infos[$__info];
    }

    return $infos;
}


function physiomer_format_search_results(&$vars) {
    $main = &$vars['page']['content']['system_main'];

    $excludedNodes = array(
        100, // Plan du site
        35, // Tous nos produits
        99, // Mentions légales
        41, // Tous nos conseils vidéos
        42, // Toutes nos fiches conseils
        96, // Bonne réponse jeu concours
    );

    // REGROUPEMENT DES RÉSULTATS DE RECHERCHE PAR FIELDSET (PRODUIT OU PAGE/ARTICLE)
    if (isset($main['search_results'])) {

        $searchPage = &$main['search_results'];
        if (isset($searchPage['search_results'])) {
            $results = &$searchPage['search_results'];

            $fieldsets = array(
                'products' => array(
                    '#type' => 'fieldset',
                    '#title' => 'Products (!count)',
                    '#count' => 0,
                    '#attributes' => array(
                        'id' => 'products-search-results',
                        'class' => array('products', 'row-fluid')
                    ),
                ),
                'articles' => array(
                    '#type' => 'fieldset',
                    '#title' => 'Articles (!count)',
                    '#count' => 0,
                    '#attributes' => array(
                        'id' => 'articles-search-results',
                        'class' => array('articles', 'row-fluid')
                    ),
                ),
            );
            foreach ($results as $key => &$result) {
                if (
                    isset($result['#node'])
                    && is_object($result['#node'])
                    && $result['#node']->language == 'el' // n'affiche que les contenus de la langue de l'utilisateur
                    && !in_array($result['#node']->nid, $excludedNodes)
                    && !in_array($result['#node']->tnid, $excludedNodes)
                ) {
                    switch ($result['#node']->type) {
                        case 'page':
                        case 'article':
                            if ($fieldsets['articles']['#count'] < 20) {
                                $fieldsets['articles'][$key] = $result;
                                $fieldsets['articles']['#count']++;
                            }
                            break;
                        case 'product':
                            if ($fieldsets['products']['#count'] < 6) {
                                $fieldsets['products'][$key] = $result;
                                $fieldsets['products']['#count']++;
                            }
                            break;
                        default:
                            break;
                    }

                }
            }

            $totalResults = 0;
            $titles = array();
            // AFFICHAGE DU NOMBRE DE RÉSULTAT POUR CHAQUE FIELDSET
            foreach($fieldsets as $key => &$fieldset) {
                if ($fieldset['#count'] < 1) {
                    unset($fieldsets[$key]); // remove fieldset if no results in it
                }
                else {
                    $fieldset['#title'] = t($fieldset['#title'], array('!count' => $fieldset['#count']));
                    $totalResults += $fieldset['#count'];
                    $titles[] = '<a href="#'. $fieldset['#attributes']['id'] .'">'. $fieldset['#title'] .'</a>';
                }
            }
            $results = $fieldsets;

        }

        $searchPage['search_extra'] = array(
            '#theme' => 'item_list',
            '#items' => $titles,
        );
        // TITRE
        $searchPage['search_title'] = array(
            '#markup' => t('<h1>!total Search results</h1>', array('!total'=> $totalResults)),
        );

        if (isset($main['search_form'])) {
            $searchForm = $main['search_form'];
            hide($main['search_form']);
            $searchPage['search_form'] = $searchForm;
        }
    }
}

function lpu_arg($index = NULL, $path = NULL, $system = TRUE) {
    if ($system) {
        return arg($index, $path);
    }
    else {
        $args = explode('/', request_uri());
        array_shift($args);
        if (isset($args[$index])) {
            return $args[$index];
        }

    }
    return NULL;

}

/**
 * Function to render a block
 * @param string $module (e.g.: views or block)
 * @param string $delta (e.g.: for views module, the delta is #ViewId-#displayName, for block module, the delta is a number 18)
 * @param boolean $render if true, the return value is an html string, if false, the return value is a renderable array
 * @param string|array
 */
function lpu_generate_block($module, $delta, $render = false){
    $block = block_load($module, $delta);
    $block_content = _block_render_blocks(array($block));
    $build = _block_get_renderable_array($block_content);
    if(!$render) return $build;
    return drupal_render($build);
}
