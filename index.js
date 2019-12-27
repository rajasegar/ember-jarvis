'use strict';


module.exports = {
  name: require('./package').name,
  afterInstall() {
  // Add @octokit/rest to package.json
  return this.addPackagesToProject([
  { name: '@octokit/rest' }
  ]);
  }
};
