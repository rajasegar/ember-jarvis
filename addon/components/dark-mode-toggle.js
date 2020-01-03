import Component from '@ember/component';
import layout from '../templates/components/dark-mode-toggle';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  customize: service(),
  darkMode: computed.reads('customize.darkMode')
});
