/**
 * Atto Hello World – bouton qui insère « hello world ».
 * Chemin impératif : yui/build/moodle-atto_helloworld-button/moodle-atto_helloworld-button.js
 *
 * Nécessite : pix/icon.png (ou .svg) au même niveau que version.php.
 */
YUI.add('moodle-atto_helloworld-button', function (Y) {

    // Identifiants.
    var COMPONENT = 'atto_helloworld',
        ICON      = 'icon';   // => pix/icon.png

    /**
     * Déclaration du plugin.
     */
    Y.namespace('M.atto_helloworld').Button = Y.Base.create(
        'button',                             // nom YUI interne
        Y.M.editor_atto.EditorPlugin,         // classe parente
        [], {                                 // prototype

        /**
         * Initialisation : ajoute le bouton à la barre.
         */
        initializer: function () {
            this.addButton({
                icon          : ICON,
                iconcomponent : COMPONENT,
                callback      : this._insertText,
                title         : 'helloworld_desc'   // chaîne de langue
            });
        },

        /**
         * Callback : insère le texte.
         */
        _insertText: function () {
            this.editor.focus();
            this.get('host').insertContentAtFocusPoint('hello world');
            this.markUpdated();
        }

    });

}, '@VERSION@', { requires: ['moodle-editor_atto-plugin'] });
