import Ember from 'ember';
import { test, moduleForComponent } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

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

  this.$('.value-wrapper').click();

  assert.ok(Ember.$('.tether-wrapper').length, 'dropdown should render');
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

  this.$('.value-wrapper').click();

  assert.ok(Ember.$('.tether-wrapper').length, 'dropdown should render');
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

  this.$('.value-wrapper').click();

  assert.ok(Ember.$('.tether-wrapper').length, 'dropdown should render');
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

    this.$('.value-wrapper').click();

    assert.ok(Ember.$('.tether-wrapper').length, 'dropdown should render');
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

    this.$('.value-wrapper').click();

    assert.ok(Ember.$('.tether-wrapper').length, 'dropdown should render');
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

  this.$('.value-wrapper').click();

  assert.ok(Ember.$('.tether-wrapper').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().length, 3, 'dropdown should render all options');

  Ember.$('.options-wrapper').children().last().click();
  assert.equal(Ember.$('.tether-wrapper.hidden').length, 1, 'dropdown should hide');
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

  this.$('.value-wrapper').click();

  assert.ok(Ember.$('.tether-wrapper').length, 'dropdown should render');
  assert.equal(Ember.$('.options-wrapper').children().length, 2, 'dropdown should render possible options except selected one');
  assert.equal(Ember.$(".multiple-value-selector").children('li').length, 1, 'dropdown should render selected values');

  Ember.$(".multiple-value-selector li span").click();
  assert.equal(Ember.$('.tether-wrapper.hidden').length, 1, 'dropdown should hide');
});
