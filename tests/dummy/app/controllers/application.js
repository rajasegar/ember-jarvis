import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Controller.extend({
customize: service(),
theme: computed.reads('customize.theme')
});
