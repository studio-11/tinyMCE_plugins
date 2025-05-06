<?php
defined('MOODLE_INTERNAL') || die();

/**
 * Atto HelloWorld – aucune donnée à transmettre au JS.
 *
 * @param string $elementid   L’ID du champ textarea/iframe.
 * @param int    $contextid   Contexte, non utilisé ici.
 * @param array  $options     Options de l’éditeur.
 * @return array              Paramètres envoyés au module YUI.
 */
function atto_helloworld_params_for_js($elementid, $contextid, $options) : array {
    return [];
}
