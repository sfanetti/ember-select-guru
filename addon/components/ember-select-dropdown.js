import Ember from 'ember';
import Tether from 'npm:tether/dist/js/tether';

const { computed, observer, run } = Ember;

export default Ember.Component.extend({
  clickOutEventNamespace: 'el-popup',
  visible: false,
  autoHide: true,
  name: '',
  enabled: false,
  classNames: 'el-tether',
  attachTo: null,

  bodyElement: computed(function() {
    if (Ember.testing && this.get('bodyTag')) {
      return 'ember-testing';
    } else if(Ember.testing) {
      return Ember.$('#ember-testing')[0];
    } else {
      return this.get('bodyTag') || Ember.$('body')[0];
    }
  }),

  willInsertElement: function() {
    this.set('$wrapper', this.$('.tether-wrapper'));
  },

  didInsertElement: function() {
    let tether = null;
    const $target = Ember.$(this.get('attachTo'));

    Ember.assert(
      `The 'attachTo' property needs to be a css selector
      which targets an existing DOM node.`,
      $target.length
    );

    run(() => {
      tether = new Tether({
        element: this.get('$wrapper'),
        target: $target,
        attachment: 'top left',
        targetAttachment: 'top left',
        enabled: this.get('enabled'),
        optimizations: {
          moveElement: false
        },
        moveRoot: false,
        constraints: [
          {
            to: 'scrollParent',
            attachment: 'together',
            pin: ['right']
          }
        ]
      });
    });

    this.set('tether', tether);

    Ember.$(document).bind(
      this.get('_clickOutEventName'),
      { component: this },
      run.bind(this, this.clickoutHandler)
    );
  },

  willDestroyElement: function() {
    this.set('$wrapper', null);
    run(() => { this.get('tether').destroy(); });

    Ember.$(document).unbind(
      this.get('_clickOutEventName')
    );
  },

  _willHideDropdown: function() {
    this.sendAction('willHideDropdown');
    this.set('visible', false);
  },

  _willOpenDropdown: function() {
    this.sendAction('willOpenDropdown');
  },

  observeVisible: observer('visible', function() {
    const visible = this.get('visible');
    const tether = this.get('tether');

    if (visible) {
      run.scheduleOnce('render', this, () => { tether.enable(); });
      run.scheduleOnce('afterRender', this, () => { tether.position(); });
      run(() => { this._willOpenDropdown(); });
    } else {
      run(() => { tether.disable(); });
    }
  }),

  clickoutHandler: function(event) {
    const component = event.data.component;
    const $el = component.get('$wrapper');
    const $target = Ember.$(event.target);
    const triggerFor = $target.closest('[trigger-for]').attr('trigger-for');

    if (triggerFor === component.get('name')) {
      return;
    }

    if (component.get('autoHide') && !$target.closest($el).length) {
      run(() => { component._willHideDropdown(); });
    }
  },

  _clickOutEventName: computed('clickOutEventNamespace', function() {
    return `
      click.${this.get('clickOutEventNamespace')}.${this.get('elementId')}
    `;
  })
});
