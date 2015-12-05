import Ember from 'ember';

import names from 'dummy/example-constants/names';
import colors from 'dummy/example-constants/colors';
import numbers from 'dummy/example-constants/numbers';

const { Controller, get, A, RSVP, run } = Ember;

export default Controller.extend({
  options: new A(numbers),
  colorOptions: new A(colors),
  names: new A(names),
  multipleValue: new A([]),
  actions: {
    handleSingleSelect(option) {
      this.set('singleValue', option);
    },
    handleColorSelect(option) {
      this.set('colorValue', option);
    },
    handleMultiSelect(options) {
      this.set('multipleValue', options);
    },
    remoteQueryTermChanged(queryTerm) {
      let defer = RSVP.defer();
      run.later(this, function() {
        const results = this._searchForUsers(queryTerm);
        this.set('remoteOptions', results);
        defer.resolve();
      }, 500);
      return defer.promise;
    },
    handleRemoteSelect(option) {
      this.set('remoteValue', option);
    },
    customSearchInputChange(queryTerm) {
      const options = this.get('options');
      const number = parseInt(queryTerm, 10);
      if(queryTerm === '') {
        return options;
      }
      if(isNaN(number)) {
        return new A();
      }
      return options.filter((item) => {
        return parseInt(item.get('name'), 10) > number;
      });
    }
  },
  _searchForUsers(query) {
    return this.get('names').filter((item) => {
      return (get(item, 'name') && (get(item, 'name').toLowerCase().indexOf(query.toLowerCase()) > -1));
    });
  }
});
