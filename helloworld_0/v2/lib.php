<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * Atto text editor helloworld plugin lib.
 *
 * @package    atto_helloworld
 * @copyright  2023 Your Name <your.email@example.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

/**
 * Initialise the js strings required for this module.
 */
function atto_helloworld_strings_for_js() {
    global $PAGE;

    $strings = array(
        'insertheading' => 'insertheading',
    );

    $PAGE->requires->strings_for_js($strings, 'atto_helloworld');
}

/**
 * Return the js params required for this module.
 * @return array of additional params to pass to javascript init function for this module.
 */
function atto_helloworld_params_for_js() {
    return array();
}

/**
 * Get icon mapping for font-awesome.
 */
function atto_helloworld_get_fontawesome_icon_map() {
    return [
        'atto_helloworld:icon' => 'fa-star' // Vous pouvez choisir une autre icône
    ];
}