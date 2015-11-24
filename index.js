/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-select-guru',

  included: function(app, parentAddon) {
    this._super.included.apply(this, arguments);
    if (!app.options.emberSelectGuru || app.options.emberSelectGuru.includeCss == true) {
      app.import('vendor/ember-select-guru.css');
    }
  }
};
