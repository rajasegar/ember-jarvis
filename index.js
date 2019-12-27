'use strict';

const path = require('path');
module.exports = {
  name: require('./package').name,

included(app) {
this._super.included.apply(this, arguments);
app.import(path.join('vendor', 'ember-jarvis.css'));
}
};
