import { setDefaults } from '@storybook/addon-info';
import { setOptions } from '@storybook/addon-options';
import { configure } from '@storybook/react';

// Option defaults:
setOptions({
  /**
   * name to display in the top left corner
   * @type {String}
   */
  name: 'TED Bootstrap',

  /**
   * URL for name in top left corner to link to
   * @type {String}
   */
  url: 'https://github.com/tedconf/react-ted-bootstrap',
});

// addon-info
setDefaults({
  header: false,
  inline: true,
  styles: {
    infoBody: {
      border: 'none',
    },
  },
});

const req = require.context('../src/', true, /story\.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
