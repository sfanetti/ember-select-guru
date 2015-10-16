import Ember from 'ember';

const { computed, run } = Ember;

export default Ember.Component.extend({
  click() {
    this.sendAction("onClick", this.get('option'));
  }
});
