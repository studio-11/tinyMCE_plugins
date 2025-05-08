// amd/src/configuration.js
import { buttonName }     from './common';
import { addMenubarItem } from 'editor_tiny/utils';

export const configure = (instanceConfig) => {
    // Update the instance configuration to add the inspiration option to the toolbar and menu.
    return {
        menu: addMenubarItem(instanceConfig.menu, 'insert', buttonName),
    };
};
