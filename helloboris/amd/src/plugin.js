// amd/src/plugin.js
import { getTinyMCE }      from 'editor_tiny/loader';
import { pluginName }      from './common';
import { getSetupCommands } from './commands';
import * as Configuration  from './configuration';

export default new Promise((resolve) => {
    // Initialise the plugin.
    Promise.all([
        getTinyMCE(),
        getSetupCommands(),
    ]).then(([tinyMCE, setupCommands]) => {
        // This is where we define icons, buttons, menu items, and so on.
        tinyMCE.PluginManager.add(pluginName, (editor) => {
            // Note: The contents of this method must be synchronous and not return any Promise.
            setupCommands(editor);
            return;
        });

        // Resolve the Plugin and include configuration.
        resolve([pluginName, Configuration]);
    });
});