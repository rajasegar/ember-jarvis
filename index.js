'use strict';

const path = require('path');
const funnel = require('broccoli-funnel');
const merge = require('broccoli-merge-trees');

module.exports = {
  name: require('./package').name,

  // Taken from ember-split-view-modifier
  treeForVendor(tree) {
    let libPath = path.join(path.dirname(require.resolve('@octokit/rest')), '..');
    let lib = funnel(this.treeGenerator(libPath));
    return merge([tree, lib]);
  },

  included() {
    this._super.included.apply(this, arguments);
  }

};
