/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-select-guru',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/lodash/lodash.min.js');
  }
};
