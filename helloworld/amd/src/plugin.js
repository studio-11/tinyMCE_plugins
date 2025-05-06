import {getTinyMCE} from 'editor_tiny/loader';

export default new Promise(async resolve => {

    const tinyMCE = await getTinyMCE();
    const PLUGINNAME = 'tiny_helloworld/plugin';   // identifiant unique

    // Enregistrement auprès de TinyMCE
    tinyMCE.PluginManager.add(PLUGINNAME, editor => {

        // 1. Déclare l’icône (le SVG est chargé en chaîne brute pour rester simple)
        const iconSvg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><text x="3" y="18" font-size="14">HW</text></svg>';
        editor.ui.registry.addIcon('helloworld', iconSvg);

        // 2. Déclare le bouton dans la toolbar
        editor.ui.registry.addButton('helloworld', {
            icon: 'helloworld',
            tooltip: 'Hello World',
            onAction: () => {
                editor.insertContent('hello world');
            }
        });

        // 3. Métadonnées (affichées dans « Aide / À propos »)
        return {
            getMetadata: () => ({
                name: 'Hello World',
                url: 'https://github.com/studio-11/tinyMCE_plugins'
            })
        };
    });

    // Résout la promesse en retournant le nom du plugin
    resolve([PLUGINNAME]);
});
