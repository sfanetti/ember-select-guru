import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  options: Ember.A([
    Ember.Object.create({
      name: '123'
    }),
    Ember.Object.create({
      name: '456'
    }),
    Ember.Object.create({
      name: '758'
    })
  ]),
  multipleValue: Ember.A([]),
  actions: {
    queryTermChanged(queryTerm) {
      console.log(queryTerm);
    },
    handleSingleSelect(option) {
      this.set('singleValue', option);
    },
    handleMultiSelect(options) {
      this.set('multipleValue', options);
    },
    remoteQueryTermChanged(queryTerm) {
      return this.store.query('user', { q: queryTerm }).then((result) => {
        this.set('remoteOptions', result.toArray());
      });
    },
    handleRemoteSelect(option) {
      this.set('remoteValue', option);
    }
  }
});
