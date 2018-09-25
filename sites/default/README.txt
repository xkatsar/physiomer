# Installation d'une instance de site : 

* éditer le fichier sites/default/local.vhost et remplacer SITENAME par le nom machine du site
* créer une base de donnée pour ce site avec comme nom le SITENAME (nom machine du site)
    mysql -uroot -p
    create database SITENAME;
  Attention le nom de la base de données ne doit comporter que des lettres et des underscores _
* faire un lien symbolique ou copier le fichier site/default/local.vhost dans le dossier contenant tous les virtual host d'apache 
** pour debian / linux :
    ln -s `pwd`/local.vhost /etc/apache2/site-availables/SITENAME
** pour MAC : 
    ln -s `pwd`/local.vhost /etc/apache2/vhosts.d/SITENAME
* redémarrer Apache : 
    apachectl restart
    ou
    /etc/init.d/apache2 restart
* ajouter la ligne suivante dans votre fichier de hosts
    127.0.0.1 SITENAME.local
  Ce fichier se trouve : 
  * sous windows : C:/windows/system32/drivers/etc/hosts
  * sous MAC & linux : /etc/hosts
* Enfin lancer votre navigateur et taper l'adresse SITENAME.local et commencer l'installation du drupal

# Tooltips

## Drush

### Sauvegarde backup & migrate 
  drush bam-backup db

# Drupal README

Place downloaded and custom themes that modify your site's appearance in this
directory to ensure clean separation from Drupal core and to facilitate safe,
self-contained code updates. Contributed themes from the Drupal community may 
be downloaded at http://drupal.org/project/themes.

It is safe to organize themes into subdirectories and is recommended to use 
Drupal's sub-theme functionality to ensure easy maintenance and upgrades.

In multisite configuration, themes found in this directory are available to
all sites. Alternatively, the sites/your_site_name/themes directory pattern may 
be used to restrict themes to a specific site instance.

Refer to the "Appearance" section of the README.txt in the Drupal root
directory for further information on theming.

