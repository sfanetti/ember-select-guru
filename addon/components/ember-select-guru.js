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
      this.setProperties({
        isPending: false,
        hasFailed: false
      });
      const result = this.attrs.onSearchInputChange(this.get('queryTerm'));
      // handle if result is a promise
      if('function' === typeof result.then) {
        this.set('isPending', true);
        result.then(() => {
          this.set('isPending', false);
        }, () => {
          this.set('hasFailed', true);
        });
      // handle if result is an array (external search)
      } else if(Array.isArray(result)) {
      // handle if result is undefined (internal search)
      } else {
        // TODO - perform internal search
      }
    });
  }),
  didReceiveAttrs() {
    this.set('_options', this.get('attrs.options'));
  },
  actions: {
    onOptionClick(option) {}
  }
});
