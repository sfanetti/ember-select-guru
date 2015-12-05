import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';

const { sinon } = window;

const { run } = Ember;

moduleForComponent('ember-select-guru',
  'Unit: ember-select-guru', { unit: true });

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

test('if #onSearchInputChange returns null, it sets filtered options except currently selected case-insensitive', function(assert) {
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
    component.set('queryTerm', 'abc');
  });

  assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
  assert.ok(Ember.A(component.get('_options')).contains(options[1]), '_options should contain second element from array');
  assert.ok(Ember.A(component.get('_options')).contains(options[2]), '_options should contain third element from array');
});

test('if #onSearchInputChange returns promise, it gets into pending state', function(assert) {
  assert.expect(1);

  let component = this.subject();
  let promise = new Ember.RSVP.Promise(function(){});
  let queryHandler = () => { return promise; };

  component.set('attrs', {});
  component.set('attrs.onSearchInputChange', queryHandler);

  run(() => {
    component.set('queryTerm', 'ABC');
  });

  assert.ok(component.get('isPending'), 'component should move to isPending state');
});

test('if #onSearchInputChange returned promise fulfills, it gets back from isPending state', function(assert) {
  assert.expect(1);
  let done = assert.async();

  let component = this.subject();
  let defer = Ember.RSVP.defer();
  let queryHandler = () => { return defer.promise; };

  component.set('attrs', {});
  component.set('attrs.onSearchInputChange', queryHandler);

  run(() => {
    component.set('queryTerm', 'ABC');
  });

  defer.resolve();

  run.next(() => {
    assert.ok(!component.get('isPending'), 'component should move from isPending state');
    done();
  });
});

test('if #onSearchInputChange returned promise fails, it gets into failed state', function(assert) {
  assert.expect(1);
  let done = assert.async();

  let component = this.subject();
  let defer = Ember.RSVP.defer();
  let queryHandler = () => { return defer.promise; };

  component.set('attrs', {});
  component.set('attrs.onSearchInputChange', queryHandler);

  run(() => {
    component.set('queryTerm', 'ABC');
  });

  defer.reject();

  run.next(() => {
    assert.ok(component.get('hasFailed'), 'component should move to hasFailed state');
    done();
  });
});

test('if #onSearchInputChange returns array, it sets intersection of returned array and currently available options', function(assert) {
  assert.expect(2);

  let component = this.subject();
  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];
  let queryHandler = () => { return options.slice(0, 1); };

  component.set('attrs', {});
  component.set('attrs.onSearchInputChange', queryHandler);

  run(() => {
    component.set('options', options);
  });

  run(() => {
    component.set('value', options[0]);
    component.set('queryTerm', 'ABC');
  });

  assert.equal(component.get('_options.length'), 1, '_options should contain one element');
  assert.ok(Ember.A(component.get('_options')).contains(options[0]), '_options should contain first element from array');
});

test('value change updates possible options', function(assert) {
  assert.expect(3);

  let component = this.subject();
  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  run(() => {
    component.set('options', options);
  });

  run(() => {
    component.set('value', options[0]);
  });

  assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
  assert.ok(Ember.A(component.get('_options')).contains(options[1]), '_options should contain second element from array');
  assert.ok(Ember.A(component.get('_options')).contains(options[2]), '_options should contain third element from array');
});

test('options change updates possible options', function(assert) {
  assert.expect(6);

  let component = this.subject();
  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  run(() => {
    component.set('options', options);
  });

  run(() => {
    component.set('value', options[0]);
  });

  assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
  assert.ok(Ember.A(component.get('_options')).contains(options[1]), '_options should contain second element from array');
  assert.ok(Ember.A(component.get('_options')).contains(options[2]), '_options should contain third element from array');

  run(() => {
    component.set('value', options[1]);
  });

  assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
  assert.ok(Ember.A(component.get('_options')).contains(options[0]), '_options should contain first element from array');
  assert.ok(Ember.A(component.get('_options')).contains(options[2]), '_options should contain third element from array');
});
