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
        if(!this.get('queryTerm')) { return this._handleAttrsChange(); }
        const possibleOptions = this._searchForOptions();
        this.set('_options', possibleOptions);
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
    let availableOptions = [];
    if(this.get('queryTerm')) {
      availableOptions = this.get('_options');
    } else {
      availableOptions = this.get('options');
    }
    if(this.get('multiple')) {
      possibleOptions = _.difference(availableOptions, this.get('value'));
    } else {
      possibleOptions = _.difference(availableOptions, [this.get('value')]);
    }
    this.set('_value', this.get('value'));
    this.set('_options', possibleOptions);
  },
  _searchForOptions() {
    const term = this.get('queryTerm');

    return this.get('options').filter((item) => {
      return (get(item, this.get('searchKey')) && (get(item, this.get('searchKey')).indexOf(term) > -1));
    });
  }
});
