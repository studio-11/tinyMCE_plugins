import {getTinyMCE} from 'editor_tiny/loader';

export default new Promise(async resolve => {

    const tinyMCE = await getTinyMCE();
    const PLUGINNAME = 'tiny_helloworld/plugin';   // identifiant unique

    // Enregistrement auprès de TinyMCE
    tinyMCE.PluginManager.add(PLUGINNAME, editor => {

       const iconSvg = M.util.image_url('icon', 'tiny_helloworld');
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
