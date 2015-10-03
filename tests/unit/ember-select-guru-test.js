import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

const { sinon } = window;

const { run } = Ember;

moduleForComponent('ember-select-guru',
  'Unit: ember-select-guru');

test('query change executes #onSearchInputChange action', function(assert) {
  assert.expect(2);

  let component = this.subject();
  let queryHandler = () => {};

  component.set('attrs', {});
  component.set('attrs.onSearchInputChange', queryHandler);
  let onSearchInputChangeSpy = sinon.spy(component.get('attrs'), 'onSearchInputChange');

  run(() => {
    component.set('queryTerm', 'New value');
  });

  assert.ok(onSearchInputChangeSpy.calledOnce, '#onSearchInputChange should be executed');
  assert.ok(onSearchInputChangeSpy.calledWith('New value'), '#onSearchInputChange should be executed with proper query term');
});

test('if #onSearchInputChange returns null, it sets filtered options except currently selected', function(assert) {
  assert.expect(3);

  let component = this.subject();
  let queryHandler = () => { return null; };
  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  component.set('attrs', {});
  component.set('attrs.onSearchInputChange', queryHandler);

  run(() => {
    component.set('options', options);
  });

  run(() => {
    component.set('value', options[0]);
    component.set('queryTerm', 'ABC');
  });

  assert.equal(component.get('_options.length'), 2, '_options should contain of two elements');
  assert.ok(Ember.A(component.get('_options')).contains(options[1]), '_options should contain second element from array');
  assert.ok(Ember.A(component.get('_options')).contains(options[2]), '_options should contain third element from array');
});

test('if #onSearchInputChange returns promise, it gets into pending state', function(assert) {
  assert.expect(1);

  let component = this.subject();
  let queryHandler = () => { return new Ember.RSVP.Promise(function(){}); };

  component.set('attrs', {});
  component.set('attrs.onSearchInputChange', queryHandler);

  run(() => {
    component.set('queryTerm', 'ABC');
  });

  assert.ok(component.get('isPending'), 'component should move to isPending state');
});

test('if #onSearchInputChange returned promise fulfills, it sets options except currently selected', function(assert) {
  assert.expect(0);
});

test('if #onSearchInputChange returned promise fails, it gets into failed state', function(assert) {
  assert.expect(0);
});

test('if #onSearchInputChange returns array, it sets intersection of returned array and currently available options', function(assert) {
  assert.expect(0);
});

test('value change updates possible options', function(assert) {
  assert.expect(0);
});

test('options change updates possible options', function(assert) {
  assert.expect(0);
});
