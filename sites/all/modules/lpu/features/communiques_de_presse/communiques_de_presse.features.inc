<?php
/**
 * @file
 * communiques_de_presse.features.inc
 */

/**
 * Implements hook_views_api().
 */
function communiques_de_presse_views_api() {
  return array("version" => "3.0");
}

/**
 * Implements hook_node_info().
 */
function communiques_de_presse_node_info() {
  $items = array(
    'communique_de_presse' => array(
      'name' => t('Communiqués de presse'),
      'base' => 'node_content',
      'description' => '',
      'has_title' => '1',
      'title_label' => t('Title'),
      'help' => '',
    ),
  );
  return $items;
}
