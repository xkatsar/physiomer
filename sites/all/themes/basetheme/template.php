<?php

//A remplacer basetheme par le bon nom de theme !

function basetheme_html_head_alter(&$head_elements) {
    $head_elements['system_meta_content_type']['#attributes'] = array(
        'charset' => 'utf-8'
    );
}

function basetheme_breadcrumb($variables) {
    $breadcrumb = $variables['breadcrumb'];

    if (!empty($breadcrumb)) {
        // Provide a navigational heading to give context for breadcrumb links to
        // screen-reader users. Make the heading invisible with .element-invisible.
        $heading = '<h2 class="element-invisible">' . t('You are here') . '</h2>';
        // Uncomment to add current page to breadcrumb
        $breadcrumb[] = drupal_get_title();
        return '<nav class="breadcrumb">' . $heading . implode(' » ', $breadcrumb) . '</nav>';
    }
}

/**
 * hack to translate views page title
 * @see  hook_breadcrumb which add the current title to the end of the breadcrumb
 */
function basetheme_preprocess_views_view(&$vars) {
    $view = $vars['view'];
    if ($view->current_display == 'page') {
        $view->human_name = t($view->human_name);
        drupal_set_title($view->human_name);
        // krumo($view);
    }

}

function basetheme_menu_local_tasks(&$variables) {
    $output = '';

    if (!empty($variables['primary'])) {
        $variables['primary']['#prefix']  = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
        $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
        $variables['primary']['#suffix']  = '</ul>';
        $output .= drupal_render($variables['primary']);
    }
    if (!empty($variables['secondary'])) {
        $variables['secondary']['#prefix']  = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
        $variables['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';
        $variables['secondary']['#suffix']  = '</ul>';
        $output .= drupal_render($variables['secondary']);
    }
    return $output;
}

//FORMS ALTER
function basetheme_form_alter(&$form, $form_state, $form_id) {
        //Here alter forms, use form_id
}

//MENU MULTI-NIVEAUX
function basetheme_links($variables) {
    if (array_key_exists('id', $variables['attributes']) && $variables['attributes']['id'] == 'main-menu-links') {
            $pid = variable_get('menu_main_links_source', 'main-menu');
        $tree = menu_tree($pid);
        return drupal_render($tree);
    }
    return theme_links($variables);
}

//PREPROCESS HTML
function basetheme_preprocess_html(&$variables) {
    $variables['ajax'] = check_ajax();
    if(check_ajax()) {
        $variables['theme_hook_suggestions'][] = 'html__ajax';
    }

    /**
     *  Ajoute l'identifiant du noeud de base pour un noeud traduit
     *
     */
    if (arg(0)=='node' && arg(1) > 0) {
        $node = node_load(arg(1));
        if (isset($node->tnid) && $node->tnid > 0) {
            $variables['classes_array'][] = 'page-node-tnid-' . $node->tnid;
        }
        else {
            $variables['classes_array'][] = 'page-node-tnid-' . $node->nid;
        }
    }
}

//PREPROCESS PAGE
function basetheme_preprocess_page(&$variables) {
        $variables['ajax'] = check_ajax();
        if(check_ajax()) {
                $variables['theme_hook_suggestions'][] = 'page__ajax';
        }
    if(isset($variables['node'])){
        if (arg(0) == 'node') {
            $variables['theme_hook_suggestions'][]  = sprintf('page__%s', $variables['node']->type);
        }
    }
    if (arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
        $tid = arg(2);
        $vid = db_query("SELECT vid FROM {taxonomy_term_data} WHERE tid = :tid", array(':tid' => $tid))->fetchField();
        $variables['theme_hook_suggestions'][] = sprintf('page__vocabulary__%s', $vid);
        $variables['theme_hook_suggestions'][] = sprintf('page__taxonomy__term__%s', $tid);
    }
}

//PREPROCESS NODE
function basetheme_preprocess_node(&$variables) {
    $variables['ajax'] = check_ajax();
    $variables['theme_hook_suggestions'][] = sprintf('node__%s', $variables['view_mode']);

    /**
     *  Ajoute l'identifiant du noeud de base pour un noeud traduit
     *
     */
    if (isset($variables['node'])) {
        $node = $variables['node'];
        if (isset($node->tnid) && $node->tnid > 0) {
            $variables['theme_hook_suggestions'][] = sprintf('node__%s', $node->tnid);
            $variables['theme_hook_suggestions'][] = sprintf('node__tnid_%s__', $node->tnid, $variables['view_mode']);
        }
        else {
            $variables['theme_hook_suggestions'][] = sprintf('node__%s', $node->nid);
            $variables['theme_hook_suggestions'][] = sprintf('node__tnid_%s__', $node->nid, $variables['view_mode']);
        }
    }

    $variables['theme_hook_suggestions'][] = sprintf('node__%s__%s', $variables['node']->type, $variables['view_mode']);
    $variables['submitted'] = t('Published by !username on !datetime', array('!username' => $variables['name'], '!datetime' => $variables['date']));
    if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
        $variables['classes_array'][] = 'node-full';
    }
}

function basetheme_preprocess_field(&$vars, $hook) {
    $elem = $vars['element'];
    $vars['theme_hook_suggestions'][] = sprintf('field__%s__%s', $elem['#field_name'], $elem['#view_mode']);
    $vars['theme_hook_suggestions'][] = sprintf('field__%s__%s__%s', $elem['#field_name'], $elem['#bundle'], $elem['#view_mode']);
}

//PREPROCESS REGION
function basetheme_preprocess_region(&$variables, $hook) {
    // Use a bare template for the content region.
    if ($variables['region'] == 'content') {
        $variables['theme_hook_suggestions'][] = 'region__bare';
    }
}

//PREPROCESS BLOCK
function basetheme_preprocess_block(&$variables, $hook) {
    if (isset($variables['elements']['#config'])) {
        $variables['theme_hook_suggestions'][] = sprintf('block__delta__%s', $variables['elements']['#config']['delta']);
    }
    // Use a bare template for the page's main content.
    if ($variables['block_html_id'] == 'block-system-main') {
        $variables['theme_hook_suggestions'][] = 'block__bare';
    }
    $variables['title_attributes_array']['class'][] = 'block-title';
}

function basetheme_process_block(&$variables, $hook) {
    // Drupal 7 should use a $title variable instead of $block->subject.
    $variables['title'] = $variables['block']->subject;
}

function basetheme_preprocess_search_block_form(&$vars) {
    $vars['search_form'] = str_replace('type="text"', 'type="search"', $vars['search_form']);
}


function check_ajax() {
    return (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest');
}