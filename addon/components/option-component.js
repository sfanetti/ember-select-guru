import Ember from 'ember';

const { Component } = Ember;

export default Component.extend({
  click() {
    this.sendAction("onClick", this.get('option'));
  }
});
