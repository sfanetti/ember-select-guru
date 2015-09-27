import Ember from 'ember';

const { Component, computed, observer } = Ember;

export default Component.extend({
  isPending: false,
  hasFailed: false,
  queryTerm: null,
  searchPlaceholder: 'Type to search...',
  pendingComponent: 'pending-component',
  failureComponent: 'failure-component',
  optionComponent: 'option-component',
  noOptionsComponent: 'no-options-component',
  hasOptions: computed.notEmpty('options'),
  queryTermObserver: observer('queryTerm', function() {
    Ember.run.once(() => {
      const result = this.attrs.onSearchInputChange(this.get('queryTerm'));
      console.log(result);
    });
  }),
  didReceiveAttrs() {
    this.set('_options', this.get('attrs.options'));
  },
  actions: {
    onOptionClick(option) {}
  }
});
