'use strict';

module.exports = function(/* environment, appConfig */) {
  return { 
    GITHUB_API_TOKEN: process.env.GITHUB_API_TOKEN
  };
};
