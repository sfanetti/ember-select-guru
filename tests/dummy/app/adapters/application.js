import DS from 'ember-data';
import Config from 'dummy/config/environment';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  host: Config.apiURL
});
