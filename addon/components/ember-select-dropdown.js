import Ember from 'ember';

const { computed, run } = Ember;

export default Ember.Component.extend({
  clickOutEventNamespace: 'el-popup',
  classNames: 'el-tether',

  didInsertElement: function() {
    Ember.$(document).bind(
      this.get('_clickOutEventName'),
      { component: this },
      run.bind(this, this.clickoutHandler)
    );
  },

  willDestroyElement: function() {
    Ember.$(document).unbind(
      this.get('_clickOutEventName')
    );
  },

  _willHideDropdown: function() {
    this.sendAction('willHideDropdown');
  },

  clickoutHandler: function(event) {
    if((this.$().parent().children('.value-wrapper').has(event.target).length > 0) ||
       (this.$().parent().children('.value-wrapper')[0] === event.target) ||
       (this.$('input.ember-select-guru-search')[0] === event.target)) {
      return;
    } else {
      run(() => { this._willHideDropdown(); });
    }
  },

  _clickOutEventName: computed('clickOutEventNamespace', function() {
    return `
      click.${this.get('clickOutEventNamespace')}.${this.get('elementId')}
    `;
  })
});
