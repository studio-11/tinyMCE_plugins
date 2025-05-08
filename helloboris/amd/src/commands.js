import { component, buttonName, buttonIcon } from './common';
import { getButtonImage } from 'editor_tiny/utils';
import { getString } from 'core/str';

export const getSetupCommands = async () => {
    // Fetch the translated strings, and the rendered image in SVG format.
    const [
        buttonText,
        buttonImage,
    ] = await Promise.all([
        getString('buttontitle', component),
        getButtonImage('icon', component),
    ]);

    return (editor) => {
        // Register the Icon.
        editor.ui.registry.addIcon(buttonIcon, buttonImage.html);

        // Register the menu item.
        editor.ui.registry.addMenuItem(buttonName, {
            icon: buttonIcon,
            text: buttonText,
            onAction: () => {
                window.console.log('Menu item clicked');
            },
        });
    };
};
