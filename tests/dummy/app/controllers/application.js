import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  options: Ember.A(['123', '456']),
  multipleValue: Ember.A([]),
  value: null,
  actions: {
    queryTermChanged(queryTerm) {
      console.log(queryTerm);
    },
    handleSingleSelect(option) {
      this.set('singleValue', option);
    },
    handleMultiSelect(options) {
      this.set('multipleValue', options);
    }
  }
});
