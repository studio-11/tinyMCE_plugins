YUI.add('moodle-atto_helloworld-button', function(Y) {

    var COMPONENT = 'atto_helloworld',
        ICON      = 'icon';   // pix/icon.svg

    /**
     * HelloWorld button.
     */
    Y.namespace('M.atto_helloworld').Button = Y.Base.create('button',
        Y.M.editor_atto.EditorPlugin, [], {

        initializer: function() {
            // Ajoute l'icône dans la toolbar.
            this.addButton({
                icon: ICON,
                iconcomponent: COMPONENT,
                callback: this._insertText
            });
        },

        /**
         * Callback : insère "hello world".
         */
        _insertText: function() {
            this.editor.focus();
            this.get('host').insertContentAtFocusPoint('hello world');
            this.markUpdated(); // signale à Atto que le contenu a changé
        }

    });

}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});
