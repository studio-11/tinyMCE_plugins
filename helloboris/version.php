<?php
defined('MOODLE_INTERNAL') || die();

$plugin->version = 2025050805;   // +1 pour forcer l'upgrade
$plugin->requires  = 2022112800.00;      // Moodle 4.1 min.
$plugin->component = 'tiny_helloboris';
$plugin->maturity  = MATURITY_STABLE;
$plugin->release   = '4.1-0';

$plugin->dependencies = [
    'mod_forum' => 2022041900,
    'mod_data'  => 2022041900,
];

