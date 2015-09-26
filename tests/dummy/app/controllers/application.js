import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  options: Ember.A(['123', '456']),
  actions: {
    queryTermChanged(queryTerm) {
      console.log(queryTerm);
    }
  }
});
