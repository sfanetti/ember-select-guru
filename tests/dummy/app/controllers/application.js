import Ember from 'ember';

import names from 'dummy/example-constants/names';
import colors from 'dummy/example-constants/colors';
import numbers from 'dummy/example-constants/numbers';

const { Controller } = Ember;

export default Controller.extend({
  options: Ember.A(numbers),
  colorOptions: Ember.A(colors),
  names: Ember.A(names),
  multipleValue: Ember.A([]),
  actions: {
    queryTermChanged(queryTerm) {
      console.log(queryTerm);
    },
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
      return this.store.query('user', { q: queryTerm }).then((result) => {
        this.set('remoteOptions', result.toArray());
      });
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
        return Ember.A();
      }
      return options.filter((item) => {
        return parseInt(item.get('name'), 10) > number;
      });
    }
  }
});
