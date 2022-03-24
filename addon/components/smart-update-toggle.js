import Component from '@ember/component';
import layout from '../templates/components/smart-update-toggle';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
  layout,
  tagName: '',
  customize: service(),
  smartUpdate: computed.alias('customize.smartUpdate'),
});
