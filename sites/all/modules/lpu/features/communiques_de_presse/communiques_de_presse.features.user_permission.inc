<?php
/**
 * @file
 * communiques_de_presse.features.user_permission.inc
 */

/**
 * Implements hook_user_default_permissions().
 */
function communiques_de_presse_user_default_permissions() {
  $permissions = array();

  // Exported permission: create communique_de_presse content.
  $permissions['create communique_de_presse content'] = array(
    'name' => 'create communique_de_presse content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: delete any communique_de_presse content.
  $permissions['delete any communique_de_presse content'] = array(
    'name' => 'delete any communique_de_presse content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: delete own communique_de_presse content.
  $permissions['delete own communique_de_presse content'] = array(
    'name' => 'delete own communique_de_presse content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: edit any communique_de_presse content.
  $permissions['edit any communique_de_presse content'] = array(
    'name' => 'edit any communique_de_presse content',
    'roles' => array(),
    'module' => 'node',
  );

  // Exported permission: edit own communique_de_presse content.
  $permissions['edit own communique_de_presse content'] = array(
    'name' => 'edit own communique_de_presse content',
    'roles' => array(),
    'module' => 'node',
  );

  return $permissions;
}
