/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // load sinon for test spies
  app.import('bower_components/sinon/index.js');

  return app.toTree();
};
