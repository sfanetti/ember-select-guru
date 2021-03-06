import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

const { sinon } = window;
const { run } = Ember;

moduleForComponent('ember-select-guru/components/ember-select-guru',
  'Integration: ember-select-guru/components/ember-select-guru', { integration: true });

test('it renders options on dropdown opening', function(assert) {
  assert.expect(2);

  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  this.setProperties({
    options,
    actions: {}
  });

  this.set('actions.queryTermChanged', () => { return null; });

  this.render(
    hbs('{{ember-select-guru value=value options=options onSearchInputChange=(action "queryTermChanged")}}')
  );

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().length, 3, 'dropdown should render all options');
});

test('it renders proper notification when options are empty', function(assert) {
  assert.expect(2);

  const options = [];

  this.setProperties({
    options,
    actions: {}
  });

  this.set('actions.queryTermChanged', () => { return null; });

  this.render(
    hbs('{{ember-select-guru value=value options=options onSearchInputChange=(action "queryTermChanged")}}')
  );

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().text().trim(), 'No options.', 'dropdown should render no options notification');
});

test('it renders proper notification when promise returned from query', function(assert) {
  assert.expect(2);

  const options = [];

  this.setProperties({
    options,
    actions: {}
  });

  this.set('actions.queryTermChanged', () => { return new Ember.RSVP.Promise(() => {}); });

  this.render(
    hbs('{{ember-select-guru value=value options=options onSearchInputChange=(action "queryTermChanged")}}')
  );

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().text().trim(), 'Fetching data...', 'dropdown should render fetching data notification');
});

test('it renders proper notification when promise returned from query fails', function(assert) {
    assert.expect(3);
    let done = assert.async();

    const options = [];
    const defer = Ember.RSVP.defer();

    this.setProperties({
      options,
      actions: {}
    });

    this.set('actions.queryTermChanged', () => { return defer.promise; });

    this.render(
      hbs('{{ember-select-guru value=value options=options onSearchInputChange=(action "queryTermChanged")}}')
    );

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember.$('.options-wrapper').children().text().trim(), 'Fetching data...', 'dropdown should render fetching data notification');

    defer.reject();
    run.next(() => {
      assert.equal(Ember.$('.options-wrapper').children().text().trim(), 'Sorry, something went wrong...', 'dropdown should render failure notification');
      done();
    });
});

test('it renders options when promise from returned query resolves', function(assert) {
  assert.expect(3);
    let done = assert.async();

    const options = [];
    const defer = Ember.RSVP.defer();

    this.setProperties({
      options,
      actions: {}
    });

    this.set('actions.queryTermChanged', () => { return defer.promise; });

    this.render(
      hbs('{{ember-select-guru value=value options=options onSearchInputChange=(action "queryTermChanged")}}')
    );

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember.$('.options-wrapper').children().text().trim(), 'Fetching data...', 'dropdown should render fetching data notification');

    defer.resolve();
    this.set('options', [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }]);

    run.next(() => {
      assert.equal(Ember.$('.options-wrapper').children().length, 3, 'dropdown should render available options');
      done();
    });
});

test('it closes the dropdown on selection', function(assert) {
  assert.expect(3);

  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  this.setProperties({
    options,
    actions: {}
  });

  this.set('actions.queryTermChanged', () => { return null; });
  this.set('actions.onSelect', (value) => { this.set('value', value); });

  this.render(
    hbs('{{ember-select-guru value=value options=options onSearchInputChange=(action "queryTermChanged") onSelect=(action "onSelect")}}')
  );

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().length, 3, 'dropdown should render all options');

  Ember.$('.options-wrapper').children().last().click();
  assert.equal(Ember.$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
});

test('it closes the dropdown on remove from multiple selection', function(assert) {
  assert.expect(4);

  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  this.setProperties({
    options,
    value: Ember.A([options[0]]),
    actions: {}
  });

  this.set('actions.queryTermChanged', () => { return null; });
  this.set('actions.onSelect', (value) => { this.set('value', value); });

  this.render(
    hbs('{{ember-select-guru multiple=true value=value options=options onSearchInputChange=(action "queryTermChanged") onSelect=(action "onSelect")}}')
  );

  assert.equal(Ember.$('.multi-value__selected').children('li').length, 1, 'component should render selected values');

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().length, 2, 'dropdown should render possible options except selected one');

  Ember.$('.multi-value__remove').click();
  assert.equal(Ember.$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
});

test('it sends #onSelect action with proper values set on remove value click', function(assert) {
  assert.expect(6);

  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  this.setProperties({
    options,
    value: Ember.A([options[0], options[1]]),
    actions: {}
  });

  this.set('actions.queryTermChanged', () => { return null; });
  this.set('actions.onSelect', (value) => { this.set('value', value); });

  const onSelectSpy = sinon.spy(this.get('actions'), 'onSelect');

  this.render(
    hbs('{{ember-select-guru multiple=true value=value options=options onSearchInputChange=(action "queryTermChanged") onSelect=(action "onSelect")}}')
  );

  assert.equal(Ember.$('.multi-value__selected').children('li').length, 2, 'component should render selected values');

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().length, 1, 'dropdown should render possible options except selected ones');

  Ember.$('.multi-value__remove:first').click();
  assert.equal(Ember.$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
  assert.ok(onSelectSpy.calledOnce, '#onSelect should be called once for removed option');
  const onSelectSpyCall = onSelectSpy.getCall(0);
  assert.equal(onSelectSpyCall.args[0][0], options[1], '#onSelect should be called with one selected value');
});

test('it let\'s control component by keyboard', function(assert) {
  assert.expect(7);

  const options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

  this.setProperties({
    options,
    actions: {}
  });

  this.set('actions.queryTermChanged', () => { return null; });
  this.set('actions.onSelect', (value) => { this.set('value', value); });

  const onSelectSpy = sinon.spy(this.get('actions'), 'onSelect');

  this.render(
    hbs('{{ember-select-guru value=value options=options onSearchInputChange=(action "queryTermChanged") onSelect=(action "onSelect")}}')
  );

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');
  assert.ok(Ember.$('.options-wrapper div:first').hasClass('is-active'), 'initially first element should be active');

  let event = Ember.$.Event('keydown');
  event.keyCode = 40;
  this.$('.ember-select-guru').trigger(event);

  assert.ok(Ember.$('.options-wrapper div:nth-child(2)').hasClass('is-active'), 'after keypress second element should be active');

  event.keyCode = 13;
  this.$('.ember-select-guru').trigger(event);

  assert.equal(Ember.$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
  const onSelectSpyCall = onSelectSpy.getCall(0);
  assert.equal(onSelectSpyCall.args[0], options[1], '#onSelect should be called with selected value');

  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');

  event.keyCode = 27;
  this.$('.ember-select-guru').trigger(event);

  assert.equal(Ember.$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
});

test('it don\'t sends onSelect when ENTER clicked with empty options', function(assert) {
  assert.expect(3);

  const options = [];

  this.setProperties({
    options,
    actions: {}
  });

  this.set('actions.onSelect', (value) => { this.set('value', value); });

  const onSelectSpy = sinon.spy(this.get('actions'), 'onSelect');

  this.render(
    hbs('{{ember-select-guru value=value options=options onSelect=(action "onSelect")}}')
  );
  this.$('.ember-select-guru__trigger').click();

  assert.ok(Ember.$('.ember-select-guru__dropdown').length, 'dropdown should render');

  let event = Ember.$.Event('keydown');
  event.keyCode = 13;
  this.$('.ember-select-guru').trigger(event);

  assert.equal(Ember.$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
  assert.equal(onSelectSpy.called, false, '#onSelect should not be called at all');
});

