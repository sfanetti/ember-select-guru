import DS from 'ember-data';
import Config from 'dummy/config/environment';

export default DS.JSONAPIAdapter.extend({
  host: Config.apiURL
});
