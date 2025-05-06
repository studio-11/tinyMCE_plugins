<?php
defined('MOODLE_INTERNAL') || die();

$plugin = new stdClass();          // ←  important !
$plugin->component = 'atto_helloworld';
$plugin->version = 2025050601;   // ← +1
$plugin->requires  = 2022112800;   // version Moodle mini, termine par ;
$plugin->maturity  = MATURITY_ALPHA;
$plugin->release   = '0.1.0';
