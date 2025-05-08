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
 * Atto text editor helloworld plugin.
 *
 * @package    atto_helloworld
 * @copyright  2025 Your Name <your.email@example.com>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * @module moodle-atto_helloworld-button
 */

/**
 * Atto text editor helloworld plugin.
 *
 * @namespace M.atto_helloworld
 * @class button
 * @extends M.editor_atto.EditorPlugin
 */

Y.namespace('M.atto_helloworld').Button = Y.Base.create('button', Y.M.editor_atto.EditorPlugin, [], {
    initializer: function() {
        this.addButton({
            icon: 'icon',
            iconComponent: 'atto_helloworld',
            buttonName: 'helloworld',
            callback: this._handleClick,
            callbackArgs: 'Hello World!'
        });
    },

    /**
     * Handle the click event from the button.
     *
     * @method _handleClick
     * @param {EventFacade} e
     * @param {string} text to be inserted
     * @private
     */
    _handleClick: function(e, text) {
        this.get('host').insertContentAtFocusPoint(text);
        this.markUpdated();
    }
});