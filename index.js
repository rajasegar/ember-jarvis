'use strict';

module.exports = {
  name: require('./package').name,

included() {
this._super.included.apply(this, arguments);
this.import('vendor/ember-jarvis.css');
}
};
