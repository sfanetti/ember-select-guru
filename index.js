/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-select-guru',

  included: function(app) {
    if (app.options.nativeStyles) {
      app.import('vendor/ember-select-guru.css');
    }
  }
};
