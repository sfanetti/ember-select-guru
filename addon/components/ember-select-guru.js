import Ember from 'ember';

import intersection from 'npm:lodash/array/intersection';
import difference from 'npm:lodash/array/difference';

const { Component, computed, observer, get, run } = Ember;

export default Component.extend({
  isPending: false,
  hasFailed: false,
  remoteData: false,
  queryTerm: null,
  multiple: false,
  searchPlaceholder: 'Type to search...',
  placeholder: 'Click to select...',
  pendingComponent: 'pending-component',
  failureComponent: 'failure-component',
  optionComponent: 'option-component',
  noOptionsComponent: 'no-options-component',
  singleValueComponent: 'single-value-component',
  multiValueComponent: 'multi-value-component',
  searchKey: 'name',
  classNames: 'ember-select-guru',
  hasOptions: computed.notEmpty('_options'),
  hasValue: computed.notEmpty('value'),
  queryTermObserver: observer('queryTerm', function() {
    Ember.run.once(() => {
      this.setProperties({
        isPending: false,
        hasFailed: false,
        remoteData: false,
      });
      const result = this.attrs.onSearchInputChange && this.attrs.onSearchInputChange(this.get('queryTerm'));
      if(result === undefined || result === null) {
        // handle if result is undefined (internal search)
        this._handleAttrsChange();
        if(!this.get('queryTerm')) { return; }
        const possibleOptions = this._searchForOptions();
        this.set('_options', possibleOptions);
      } else if('function' === typeof result.then) {
        // handle if result is a promise
        this.set('isPending', true);
        this.set('_remoteData', true);
        result.then(() => {
          this.set('isPending', false);
        }, () => {
          this.set('hasFailed', true);
          this.set('isPending', false);
        });
      } else if(Array.isArray(result)) {
        // handle if result is an array (external search)
        const options = intersection(result, this.get('options'));
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
    },
    onRemoveValueClick(option) {
      this.get('_value').removeObject(option);
      this.attrs.onSelect(this.get('_value'));
    },
    expandComponent() {
      if(!this.get('isExpanded')) { this._resetCurrentHighlight(); }
      this.set('isExpanded', true);
      this.set('queryTerm', '');
      run.schedule('afterRender', this, function() {
        this.$('input').focus();
      });
    },
    willHideDropdown() {
      this.set('isExpanded', false);
    }
  },
  init() {
    this._super.apply(this, arguments);
    this._handleAttrsChange();
    this.set('attachTo', `#${this.get('elementId')}`);
    this.set('name', `select-guru-${this.get('elementId')}`);
  },
  didInsertElement() {
    this.$().bind('keydown', Ember.run.bind(this, this._handleKeyDown));
  },
  willDestroyElement() {
    this.$().unbind('keydown');
  },
  _resetCurrentHighlight() {
    this.set('currentHighlight', 0);
  },
  _handleKeyDown(event) {
    switch(event.keyCode) {
      case 27:
        this.set('isExpanded', false);
        return;
      case 40:
        if((this.get('currentHighlight') + 1) >= this.get('_options').length) { return; }
        this.incrementProperty('currentHighlight');
        return;
      case 38:
        if(this.get('currentHighlight') === 0) { return; }
        this.decrementProperty('currentHighlight');
        return;
      case 13:
        const option = this.get('_options')[this.get('currentHighlight')];
        this.send('onOptionClick', option);
        this.set('isExpanded', false);
        return;
      default:
        return;
    }
  },
  _handleAttrsChange() {
    let possibleOptions = [], availableOptions = this.get('options');

    if(this.get('multiple')) {
      possibleOptions = difference(availableOptions, this.get('value'));
    } else {
      possibleOptions = difference(availableOptions, [this.get('value')]);
    }
    this.set('_value', this.get('value'));
    this.set('_options', possibleOptions);
  },
  _searchForOptions() {
    const term = this.get('queryTerm');
    const searchKey = this.get('searchKey');

    return this.get('_options').filter((item) => {
      return (get(item, searchKey) && (get(item, searchKey).indexOf(term) > -1));
    });
  }
});
