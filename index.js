'use strict';

module.exports = {
  name: require('./package').name,

included() {
let app = this._findHost();
this._super.included.apply(this, arguments);
app.import('vendor/ember-jarvis.css');
}
};
