import Ember from 'ember';

const { _ } = window;

const { Component, computed, observer, get } = Ember;

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
  searchKey: 'value',
  hasOptions: computed.notEmpty('_options'),
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
  attrsObserver: observer('value', 'value.[]', 'options.[]', function() {
    Ember.run.once(() => {
      this._handleAttrsChange();
    });
  }),
  actions: {
    onOptionClick(option) {
      if(this.get('multiple')) {
        // handle multiple selection
        this.get('_value').pushObject(option);
        this.attrs.onSelect(this.get('_value'));
      } else {
        // handle single selection
        this.attrs.onSelect(option);
      }
    }
  },
  init() {
    this._super.apply(this, arguments);
    this._handleAttrsChange();
  },
  _handleAttrsChange() {
    let possibleOptions = [];
    if(this.get('multiple')) {
      possibleOptions = _.difference(this.get('options'), this.get('value'));
    } else {
      possibleOptions = _.difference(this.get('options'), [this.get('value')]);
    }
    this.set('_value', this.get('value'));
    this.set('_options', possibleOptions);
  }
});
