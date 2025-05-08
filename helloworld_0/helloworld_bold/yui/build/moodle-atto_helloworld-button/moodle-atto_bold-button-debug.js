YUI.add('moodle-atto_helloworld-button', function (Y) {

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
}, '@VERSION@', {"requires": ["moodle-editor_atto-plugin"]});