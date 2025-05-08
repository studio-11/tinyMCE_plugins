import {getTinyMCE} from 'editor_tiny/loader';

export default new Promise(async resolve => {
  const tinymce = await getTinyMCE();
  const PLUGIN = 'tiny_helloworld/plugin';

  tinymce.PluginManager.add(PLUGIN, editor => {

    // TEXT‑ONLY icon (avoids pix cache)
    editor.ui.registry.addButton('helloworld', {
      text: 'HW',
      tooltip: 'Hello World',
      onAction: () => editor.insertContent('hello world')
    });

    editor.ui.registry.addMenuItem('helloworld', {
      text: 'Insert Hello World',
      onAction: () => editor.insertContent('hello world')
    });

    return {
      getMetadata: () => ({ name: 'Hello World', url: 'https://example.com' })
    };
  });

  resolve([PLUGIN]);   // tell Moodle the plugin is ready
});
