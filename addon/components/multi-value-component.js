import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  tagName: 'li',
  actions: {
    onRemoveClick() {
      this.sendAction('onRemoveClick', this.get('value'));
    }
  }
});
