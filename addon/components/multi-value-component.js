import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'li',
  classNames: 'multi-value__option',
  actions: {
    onRemoveClick() {
      this.sendAction('onRemoveClick', this.get('value'));
    }
  }
});
