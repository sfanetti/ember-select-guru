import Ember from 'ember';

const { Controller } = Ember;

export default Controller.extend({
  options: Ember.A([
    Ember.Object.create({
      name: '123',
      description: 'one hundred twenty-three'
    }),
    Ember.Object.create({
      name: '456',
      description: 'four hundred fifty-six'
    }),
    Ember.Object.create({
      name: '758',
      description: 'seven hundred fifty-eight'
    }),
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
    },
    customSearchInputChange(queryTerm) {
      const options = this.get('options');
      const number = parseInt(queryTerm, 10);
      if(queryTerm == '') {
        return options;
      }
      if(isNaN(number)) {
        return Ember.A();
      }
      return options.filter((item) => {
        return parseInt(item.get('name'), 10) > number;
      });
    }
  }
});
