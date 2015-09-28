import Ember from 'ember';

const { _ } = window;

const { Component, computed, observer } = Ember;

export default Component.extend({
  isPending: false,
  hasFailed: false,
  queryTerm: null,
  multiple: false,
  searchPlaceholder: 'Type to search...',
  pendingComponent: 'pending-component',
  failureComponent: 'failure-component',
  optionComponent: 'option-component',
  noOptionsComponent: 'no-options-component',
  singleValueComponent: 'single-value-component',
  multiValueComponent: 'multi-value-component',
  hasOptions: computed.notEmpty('options'),
  queryTermObserver: observer('queryTerm', function() {
    Ember.run.once(() => {
      this.setProperties({
        isPending: false,
        hasFailed: false
      });
      const result = this.attrs.onSearchInputChange(this.get('queryTerm'));
      if(result == null) {
        // handle if result is undefined (internal search)
        // TODO - perform internal search
      } else if('function' === typeof result.then) {
        // handle if result is a promise
        this.set('isPending', true);
        result.then(() => {
          this.set('isPending', false);
        }, () => {
          this.set('hasFailed', true);
        });
      } else if(Array.isArray(result)) {
        // handle if result is an array (external search)
        const options = _.intersection(result, this.get('options'));
        this.set('_options', options);
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
