/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-select-guru',

  included: function(app) {
    if (app.options.emberSelectGuru && app.options.emberSelectGuru.includeCss !== false) {
      app.import('vendor/ember-select-guru.css');
    }
  }
};
