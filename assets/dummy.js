"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/adapters/application', ['exports', 'ember-data', 'dummy/config/environment'], function (exports, DS, Config) {

  'use strict';

  exports['default'] = DS['default'].JSONAPIAdapter.extend({
    host: Config['default'].apiURL
  });

});
define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/blueprints/ember-highlight-code', ['exports', 'ember-highlight-code/blueprints/ember-highlight-code'], function (exports, ember_highlight_code) {

	'use strict';



	exports['default'] = ember_highlight_code['default'];

});
define('dummy/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'dummy/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('dummy/components/ember-highlight-code', ['exports', 'ember-highlight-code/components/ember-highlight-code'], function (exports, ember_highlight_code) {

	'use strict';



	exports['default'] = ember_highlight_code['default'];

});
define('dummy/components/ember-select-dropdown', ['exports', 'ember-select-guru/components/ember-select-dropdown'], function (exports, Dropdown) {

	'use strict';

	exports['default'] = Dropdown['default'];

});
define('dummy/components/ember-select-guru', ['exports', 'ember-select-guru/components/ember-select-guru'], function (exports, EmberSelectGuru) {

	'use strict';

	exports['default'] = EmberSelectGuru['default'];

});
define('dummy/components/list-item', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    click: function click() {
      this.sendAction('onClick', this.get('option'));
    }
  });

});
define('dummy/components/multi-value-component', ['exports', 'ember-select-guru/components/multi-value-component'], function (exports, MultiValueComponent) {

	'use strict';

	exports['default'] = MultiValueComponent['default'];

});
define('dummy/components/option-component', ['exports', 'ember-select-guru/components/option-component'], function (exports, OptionComponent) {

	'use strict';

	exports['default'] = OptionComponent['default'];

});
define('dummy/controllers/application', ['exports', 'ember', 'dummy/example-constants/names', 'dummy/example-constants/colors', 'dummy/example-constants/numbers'], function (exports, Ember, names, colors, numbers) {

  'use strict';

  var Controller = Ember['default'].Controller;
  var get = Ember['default'].get;
  var A = Ember['default'].A;
  var RSVP = Ember['default'].RSVP;
  var run = Ember['default'].run;

  exports['default'] = Controller.extend({
    options: new A(numbers['default']),
    colorOptions: new A(colors['default']),
    names: new A(names['default']),
    multipleValue: new A([]),
    actions: {
      handleSingleSelect: function handleSingleSelect(option) {
        this.set('singleValue', option);
      },
      handleColorSelect: function handleColorSelect(option) {
        this.set('colorValue', option);
      },
      handleMultiSelect: function handleMultiSelect(options) {
        this.set('multipleValue', options);
      },
      remoteQueryTermChanged: function remoteQueryTermChanged(queryTerm) {
        var defer = RSVP.defer();
        run.later(this, function () {
          var results = this._searchForUsers(queryTerm);
          this.set('remoteOptions', results);
          defer.resolve();
        }, 500);
        return defer.promise;
      },
      handleRemoteSelect: function handleRemoteSelect(option) {
        this.set('remoteValue', option);
      },
      customSearchInputChange: function customSearchInputChange(queryTerm) {
        var options = this.get('options');
        var number = parseInt(queryTerm, 10);
        if (queryTerm === '') {
          return options;
        }
        if (isNaN(number)) {
          return new A();
        }
        return options.filter(function (item) {
          return parseInt(item.get('name'), 10) > number;
        });
      }
    },
    _searchForUsers: function _searchForUsers(query) {
      return this.get('names').filter(function (item) {
        return get(item, 'name') && get(item, 'name').toLowerCase().indexOf(query.toLowerCase()) > -1;
      });
    }
  });

});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('dummy/ember-select-guru/tests/modules/ember-select-guru/components/ember-select-dropdown.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-select-guru/components');
  QUnit.test('modules/ember-select-guru/components/ember-select-dropdown.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-select-guru/components/ember-select-dropdown.js should pass jshint.');
  });

});
define('dummy/ember-select-guru/tests/modules/ember-select-guru/components/ember-select-guru.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-select-guru/components');
  QUnit.test('modules/ember-select-guru/components/ember-select-guru.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-select-guru/components/ember-select-guru.js should pass jshint.');
  });

});
define('dummy/ember-select-guru/tests/modules/ember-select-guru/components/multi-value-component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-select-guru/components');
  QUnit.test('modules/ember-select-guru/components/multi-value-component.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-select-guru/components/multi-value-component.js should pass jshint.');
  });

});
define('dummy/ember-select-guru/tests/modules/ember-select-guru/components/option-component.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-select-guru/components');
  QUnit.test('modules/ember-select-guru/components/option-component.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-select-guru/components/option-component.js should pass jshint.');
  });

});
define('dummy/ember-select-guru/tests/modules/ember-select-guru/utils/array-utils.jshint', function () {

  'use strict';

  QUnit.module('JSHint - modules/ember-select-guru/utils');
  QUnit.test('modules/ember-select-guru/utils/array-utils.js should pass jshint', function (assert) {
    assert.ok(true, 'modules/ember-select-guru/utils/array-utils.js should pass jshint.');
  });

});
define('dummy/example-constants/colors', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = [Ember['default'].Object.create({
    name: 'red',
    color: '#f00'
  }), Ember['default'].Object.create({
    name: 'green',
    color: '#0f0'
  }), Ember['default'].Object.create({
    name: 'blue',
    color: '#00f'
  })];

});
define('dummy/example-constants/names', ['exports'], function (exports) {

	'use strict';

	exports['default'] = [{ id: 1, name: 'John' }, { id: 2, name: 'Kerry' }, { id: 3, name: 'Elize' }, { id: 4, name: 'Anita' }, { id: 5, name: 'Joe' }, { id: 6, name: 'Simpson' }, { id: 7, name: 'Queer' }, { id: 8, name: 'Abidale' }, { id: 9, name: 'Momy' }, { id: 10, name: 'Sanders' }, { id: 11, name: 'Donald' }, { id: 12, name: 'Brown' }];

});
define('dummy/example-constants/numbers', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = [Ember['default'].Object.create({
    name: '123',
    description: 'one hundred twenty-three'
  }), Ember['default'].Object.create({
    name: '456',
    description: 'four hundred fifty-six'
  }), Ember['default'].Object.create({
    name: '758',
    description: 'seven hundred fifty-eight'
  })];

});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 44,
              "column": 10
            },
            "end": {
              "line": 50,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            actions: {\n              onSelectEvent(value) {\n                this.set('value', value);\n              }\n            }\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 52,
              "column": 10
            },
            "end": {
              "line": 57,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("{{ember-select-guru\n              value=value\n              options=options\n              onSelect=(action \"onSelectEvent\")}}\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 75,
              "column": 10
            },
            "end": {
              "line": 81,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("{{ember-select-guru\n              value=values\n              options=options\n              onSelect=(action \"onSelectEvent\")\n              multiple=true}}\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child3 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 83,
              "column": 10
            },
            "end": {
              "line": 87,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            onSelectEvent(values) {\n              this.set('values', values);\n            }\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child4 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 108,
              "column": 10
            },
            "end": {
              "line": 114,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("{{ember-select-guru\n              value=value\n              options=options\n              onSearchInputChange=(action \"queryTermChanged\")\n              onSelect=(action \"handleSelect\")}}\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child5 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 117,
              "column": 10
            },
            "end": {
              "line": 134,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            actions: {\n              queryTermChanged(queryTerm) {\n                // remember to return the result of\n                // store query or any other Promise\n                return this.store.query('user', { q: queryTerm }).then((result) => {\n                  // you must explicitly set `options` binded\n                  // to component in the fetching callback\n                  this.set('options', result.toArray());\n                });\n              },\n              handleRemoteSelect(option) {\n                // option is single object instance in regular mode (no multiple)\n                // in multiple mode, it would be array of objects\n                this.set('value', option);\n              }\n            }\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child6 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 153,
              "column": 10
            },
            "end": {
              "line": 168,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            [\n              {\n                name: '123',\n                description: 'one hundred twenty-three'\n              },\n              {\n                name: '456',\n                description: 'four hundred fifty-six'\n              },\n              {\n                name: '758',\n                description: 'seven hundred fifty-eight'\n              }\n            ]\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child7 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 172,
              "column": 10
            },
            "end": {
              "line": 178,
              "column": 12
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("{{ember-select-guru\n              value=value\n              options=options\n              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("strong");
          var el2 = dom.createTextNode("searchKey='description'");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n              onSelect=(action \"onSelectEvent\")}}\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child8 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 197,
              "column": 10
            },
            "end": {
              "line": 213,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            actions: {\n              customSearchInputChange(queryTerm) {\n                const options = this.get('options');\n                const number = parseInt(queryTerm, 10);\n                if(queryTerm == '') {\n                  return options;\n                }\n                if(isNaN(number)) {\n                  return Ember.A();\n                }\n                return options.filter((item) => {\n                  return parseInt(item.get('name'), 10) > number;\n                });\n              }\n            }\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child9 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 215,
              "column": 10
            },
            "end": {
              "line": 221,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("{{ember-select-guru\n              value=value\n              options=options\n              ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("strong");
          var el2 = dom.createTextNode("onSearchInputChange=(action \"customSearchInputChange\")");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n              onSelect=(action \"onSelectEvent\")}}\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child10 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 240,
              "column": 10
            },
            "end": {
              "line": 247,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("{{ember-select-guru\n              value=colorValue\n              options=colorOptions\n              optionComponent='list-item'\n              singleValueComponent='color-selected'\n              onSelect=(action \"handleColorSelect\")}}\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    var child11 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 261,
              "column": 10
            },
            "end": {
              "line": 273,
              "column": 10
            }
          },
          "moduleName": "dummy/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            var EmberApp = require('ember-cli/lib/broccoli/ember-app');\n\n            module.exports = function(defaults) {\n              var app = new EmberApp(defaults, {\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("strong");
          var el2 = dom.createTextNode("emberSelectGuru: {\n                  includeCss: false\n                }");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n              });\n\n              return app.toTree();\n            };\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 282,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1,"href","https://github.com/netguru/ember-select-guru");
        var el2 = dom.createElement("img");
        dom.setAttribute(el2,"style","z-index:9999; position: absolute; top: 0; right: 0; border: 0;");
        dom.setAttribute(el2,"src","https://camo.githubusercontent.com/365986a132ccd6a44c23a9169022c0b5c890c387/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f7265645f6161303030302e706e67");
        dom.setAttribute(el2,"alt","Fork me on GitHub");
        dom.setAttribute(el2,"data-canonical-src","https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","sidebar");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        dom.setAttribute(el4,"id","title");
        dom.setAttribute(el4,"class","sidebar-brand");
        var el5 = dom.createTextNode("ember-select-guru");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4,"class","sidebar-nav list-unstyled");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#single");
        var el7 = dom.createTextNode("Single selection");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#multiple");
        var el7 = dom.createTextNode("Multiple selection");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#remote");
        var el7 = dom.createTextNode("Remote selection");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#search-key");
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("searchKey");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" property");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#search-array");
        var el7 = dom.createTextNode("Custom search");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#components");
        var el7 = dom.createTextNode("Customizing components");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("a");
        dom.setAttribute(el6,"href","#stylesheets");
        var el7 = dom.createTextNode("Vendored stylesheets");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-12 content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        dom.setAttribute(el4,"id","single");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Single selection");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("The basic usage of this component is a select box with a dynamic search input:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-8");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("First you need to configure a controller action that will handle component's ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("onSelect");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" event.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("The components should be defined in template with already mentiond ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("value");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" attribute as a component value, ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("options");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" being an array of possible options as components options and the handler you defined in your controller. ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        dom.setAttribute(el4,"id","multiple");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Multiple selection");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("ember-select-guru allows you to choose multiple items. Also, you can remove any item from the list.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-8");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Example code of component embedded in a template:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("You can pass through ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("options");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" an array of objects which serves data. The controller requires the action handler same as formerly in single selection: ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("and don't forget about setting ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("values");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" as an empty array. It could be done in ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("setupController");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" and it is important during initialization of component.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        dom.setAttribute(el4,"id","remote");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Remote single selection");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Remote single selection works the same as the former ones, except you need to return promise that is fetching your data from ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("onSearchInputChange");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" action. ember-select-guru will chain a callback on that promise and enter the ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("pending");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" state waiting for your data. Your job is to wait for that promise and eventually obtain the data from remote endpoint. When the promise resolves, you should copy the result data from the promise to the ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("options");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" binidng. Thanks to Ember Run Loop mechanism, the component will go back from ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("pending");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" state to normal state and accept your new data in options in the same moment.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Take a look at this example:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-8");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Your template should look like this:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Remember, that ember-select-guru has no two-way data binding. Handle ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("onSelect");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" properly by setting ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("value");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" with proper arguments. Your controller code should look like this:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        dom.setAttribute(el4,"id","search-key");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("searchKey");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" property");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("ember-select-guru");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" is searching through ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("name");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" property in ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("case-insensitive");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" way by default. You can easily change the attribute used for searching. Try typing \"fifty\" into the field below.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-8");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("We decided to search by the options ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("description");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" attribute. The options we have are as follows:");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("You can change the attribute that is used for filtering options by providing a value for the ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("searchKey");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" property.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("But if you want to search in case-sensitive or any other way, check out following ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("b");
        var el8 = dom.createTextNode("custom search");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" section.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        dom.setAttribute(el4,"id","search-array");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Custom search");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("We will filter the numbers and return only those that are bigger than the number in search input.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-8");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("This can be obtained by returning an array of your custom search from ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("onSearchInputChange");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" action. Similarly to remote option where you return a promise, here you must return array that intersects in some part or not at all with array in your ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("options");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" attribute.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("hr");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        dom.setAttribute(el4,"id","components");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Customizing components");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("You can customize each ember-select-guru components by providing your own components in templates.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-8");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("In this case we have two custom components: ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("list-item");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" and ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("single-selected");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" that are stored in main ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("components");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" directory. You must provide a path to the component that will be properly resolved by your Ember Resolver. There are no limitations in providing these components - they can be built upon other components, have your custom CSS or a lot of custom logic.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("However, you must apply to the original components simple API. ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"href","https://github.com/netguru/ember-select-guru/tree/master/addon/components");
        var el8 = dom.createTextNode("Take a look at their implementation in components folder to see what is needed.");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","row");
        dom.setAttribute(el4,"id","stylesheets");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-12");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("h2");
        var el7 = dom.createTextNode("Vendored stylesheets");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-4");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("\n            There are vendored stylesheets included in this addon but you can switch them off by setting ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("includeCss");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" to ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("false");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" in the ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("ember-cli-build.js");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" file.\n          ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","col-md-8");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-xs-12 footer");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2, 1, 3]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [5]);
        var element3 = dom.childAt(element0, [5]);
        var element4 = dom.childAt(element3, [5]);
        var element5 = dom.childAt(element0, [9]);
        var element6 = dom.childAt(element5, [5]);
        var element7 = dom.childAt(element0, [13]);
        var element8 = dom.childAt(element7, [5]);
        var element9 = dom.childAt(element0, [17]);
        var element10 = dom.childAt(element9, [5]);
        var element11 = dom.childAt(element0, [21]);
        var morphs = new Array(18);
        morphs[0] = dom.createMorphAt(dom.childAt(element1, [3]),3,3);
        morphs[1] = dom.createMorphAt(element2,3,3);
        morphs[2] = dom.createMorphAt(element2,7,7);
        morphs[3] = dom.createMorphAt(dom.childAt(element3, [3]),3,3);
        morphs[4] = dom.createMorphAt(element4,3,3);
        morphs[5] = dom.createMorphAt(element4,7,7);
        morphs[6] = dom.createMorphAt(dom.childAt(element5, [3]),5,5);
        morphs[7] = dom.createMorphAt(element6,3,3);
        morphs[8] = dom.createMorphAt(element6,7,7);
        morphs[9] = dom.createMorphAt(dom.childAt(element7, [3]),3,3);
        morphs[10] = dom.createMorphAt(element8,3,3);
        morphs[11] = dom.createMorphAt(element8,7,7);
        morphs[12] = dom.createMorphAt(dom.childAt(element9, [3]),3,3);
        morphs[13] = dom.createMorphAt(element10,3,3);
        morphs[14] = dom.createMorphAt(element10,5,5);
        morphs[15] = dom.createMorphAt(dom.childAt(element11, [3]),3,3);
        morphs[16] = dom.createMorphAt(dom.childAt(element11, [5]),3,3);
        morphs[17] = dom.createMorphAt(dom.childAt(element0, [23, 5]),1,1);
        return morphs;
      },
      statements: [
        ["inline","ember-select-guru",[],["value",["subexpr","@mut",[["get","singleValue",["loc",[null,[38,18],[38,29]]]]],[],[]],"options",["subexpr","@mut",[["get","options",["loc",[null,[39,20],[39,27]]]]],[],[]],"onSelect",["subexpr","action",["handleSingleSelect"],[],["loc",[null,[40,21],[40,50]]]]],["loc",[null,[37,10],[40,52]]]],
        ["block","ember-highlight-code",[],["language","javascript"],0,null,["loc",[null,[44,10],[50,35]]]],
        ["block","ember-highlight-code",[],["language","handlebars"],1,null,["loc",[null,[52,10],[57,35]]]],
        ["inline","ember-select-guru",[],["value",["subexpr","@mut",[["get","multipleValue",["loc",[null,[68,16],[68,29]]]]],[],[]],"options",["subexpr","@mut",[["get","options",["loc",[null,[69,18],[69,25]]]]],[],[]],"onSelect",["subexpr","action",["handleMultiSelect"],[],["loc",[null,[70,19],[70,47]]]],"multiple",true],["loc",[null,[67,10],[71,25]]]],
        ["block","ember-highlight-code",[],["language","handlebars"],2,null,["loc",[null,[75,10],[81,35]]]],
        ["block","ember-highlight-code",[],["language","javascript"],3,null,["loc",[null,[83,10],[87,35]]]],
        ["inline","ember-select-guru",[],["value",["subexpr","@mut",[["get","remoteValue",["loc",[null,[100,16],[100,27]]]]],[],[]],"options",["subexpr","@mut",[["get","remoteOptions",["loc",[null,[101,18],[101,31]]]]],[],[]],"onSearchInputChange",["subexpr","action",["remoteQueryTermChanged"],[],["loc",[null,[102,30],[102,63]]]],"onSelect",["subexpr","action",["handleRemoteSelect"],[],["loc",[null,[103,19],[103,48]]]]],["loc",[null,[99,10],[103,50]]]],
        ["block","ember-highlight-code",[],["language","handlebars"],4,null,["loc",[null,[108,10],[114,35]]]],
        ["block","ember-highlight-code",[],["language","javascript"],5,null,["loc",[null,[117,10],[134,35]]]],
        ["inline","ember-select-guru",[],["value",["subexpr","@mut",[["get","singleValue",["loc",[null,[146,16],[146,27]]]]],[],[]],"options",["subexpr","@mut",[["get","options",["loc",[null,[147,18],[147,25]]]]],[],[]],"searchKey","description","onSelect",["subexpr","action",["handleSingleSelect"],[],["loc",[null,[149,19],[149,48]]]]],["loc",[null,[145,10],[149,50]]]],
        ["block","ember-highlight-code",[],["language","javascript"],6,null,["loc",[null,[153,10],[168,35]]]],
        ["block","ember-highlight-code",[],["language","handlebars"],7,null,["loc",[null,[172,10],[178,37]]]],
        ["inline","ember-select-guru",[],["value",["subexpr","@mut",[["get","singleValue",["loc",[null,[190,18],[190,29]]]]],[],[]],"options",["subexpr","@mut",[["get","options",["loc",[null,[191,20],[191,27]]]]],[],[]],"onSearchInputChange",["subexpr","action",["customSearchInputChange"],[],["loc",[null,[192,32],[192,66]]]],"onSelect",["subexpr","action",["handleSingleSelect"],[],["loc",[null,[193,21],[193,50]]]]],["loc",[null,[189,10],[193,52]]]],
        ["block","ember-highlight-code",[],["language","javascript"],8,null,["loc",[null,[197,10],[213,35]]]],
        ["block","ember-highlight-code",[],["language","handlebars"],9,null,["loc",[null,[215,10],[221,35]]]],
        ["inline","ember-select-guru",[],["value",["subexpr","@mut",[["get","colorValue",["loc",[null,[232,18],[232,28]]]]],[],[]],"options",["subexpr","@mut",[["get","colorOptions",["loc",[null,[233,20],[233,32]]]]],[],[]],"optionComponent","list-item","singleValueComponent","color-selected","onSelect",["subexpr","action",["handleColorSelect"],[],["loc",[null,[236,21],[236,49]]]]],["loc",[null,[231,10],[236,51]]]],
        ["block","ember-highlight-code",[],["language","handlebars"],10,null,["loc",[null,[240,10],[247,35]]]],
        ["block","ember-highlight-code",[],["language","javascript"],11,null,["loc",[null,[261,10],[273,35]]]]
      ],
      locals: [],
      templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10, child11]
    };
  }()));

});
define('dummy/templates/components/color-selected', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/color-selected.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("strong");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element0, 'style');
        morphs[1] = dom.createMorphAt(element0,0,0);
        return morphs;
      },
      statements: [
        ["attribute","style",["concat",["color: ",["get","value.color",["loc",[null,[1,25],[1,36]]]],";"]]],
        ["content","value.name",["loc",[null,[1,42],[1,58]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/ember-select-dropdown', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ember-select-dropdown.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","yield",["loc",[null,[1,0],[1,9]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/ember-select-guru', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@2.0.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 10
                },
                "end": {
                  "line": 8,
                  "column": 10
                }
              },
              "moduleName": "dummy/templates/components/ember-select-guru.hbs"
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","component",[["get","multiValueComponent",["loc",[null,[7,24],[7,43]]]]],["value",["subexpr","@mut",[["get","selectedValue",["loc",[null,[7,50],[7,63]]]]],[],[]],"onRemoveClick","onRemoveValueClick"],["loc",[null,[7,12],[7,100]]]]
            ],
            locals: ["selectedValue"],
            templates: []
          };
        }());
        return {
          meta: {
            "revision": "Ember@2.0.2",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 6
              },
              "end": {
                "line": 10,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/components/ember-select-guru.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1,"class","multi-value__selected");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            return morphs;
          },
          statements: [
            ["block","each",[["get","value",["loc",[null,[6,18],[6,23]]]]],[],0,null,["loc",[null,[6,10],[8,19]]]]
          ],
          locals: [],
          templates: [child0]
        };
      }());
      var child1 = (function() {
        return {
          meta: {
            "revision": "Ember@2.0.2",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 6
              },
              "end": {
                "line": 12,
                "column": 6
              }
            },
            "moduleName": "dummy/templates/components/ember-select-guru.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
            return morphs;
          },
          statements: [
            ["inline","component",[["get","singleValueComponent",["loc",[null,[11,20],[11,40]]]]],["value",["subexpr","@mut",[["get","value",["loc",[null,[11,47],[11,52]]]]],[],[]]],["loc",[null,[11,8],[11,54]]]]
          ],
          locals: [],
          templates: []
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 4
            },
            "end": {
              "line": 13,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/ember-select-guru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","if",[["get","multiple",["loc",[null,[4,12],[4,20]]]]],[],0,1,["loc",[null,[4,6],[12,13]]]]
        ],
        locals: [],
        templates: [child0, child1]
      };
    }());
    var child1 = (function() {
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 4
            },
            "end": {
              "line": 15,
              "column": 4
            }
          },
          "moduleName": "dummy/templates/components/ember-select-guru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
          return morphs;
        },
        statements: [
          ["content","placeholder",["loc",[null,[14,6],[14,21]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            meta: {
              "revision": "Ember@2.0.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 24,
                  "column": 8
                },
                "end": {
                  "line": 26,
                  "column": 8
                }
              },
              "moduleName": "dummy/templates/components/ember-select-guru.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n        ");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              return morphs;
            },
            statements: [
              ["inline","component",[["get","pendingComponent",["loc",[null,[25,22],[25,38]]]]],[],["loc",[null,[25,10],[25,40]]]]
            ],
            locals: [],
            templates: []
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            return {
              meta: {
                "revision": "Ember@2.0.2",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 26,
                    "column": 17
                  },
                  "end": {
                    "line": 28,
                    "column": 8
                  }
                },
                "moduleName": "dummy/templates/components/ember-select-guru.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("\n          ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n        ");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                return morphs;
              },
              statements: [
                ["inline","component",[["get","failureComponent",["loc",[null,[27,22],[27,38]]]]],[],["loc",[null,[27,10],[27,40]]]]
              ],
              locals: [],
              templates: []
            };
          }());
          var child1 = (function() {
            var child0 = (function() {
              var child0 = (function() {
                return {
                  meta: {
                    "revision": "Ember@2.0.2",
                    "loc": {
                      "source": null,
                      "start": {
                        "line": 29,
                        "column": 10
                      },
                      "end": {
                        "line": 31,
                        "column": 10
                      }
                    },
                    "moduleName": "dummy/templates/components/ember-select-guru.hbs"
                  },
                  arity: 2,
                  cachedFragment: null,
                  hasRendered: false,
                  buildFragment: function buildFragment(dom) {
                    var el0 = dom.createDocumentFragment();
                    var el1 = dom.createTextNode("            ");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createComment("");
                    dom.appendChild(el0, el1);
                    var el1 = dom.createTextNode("\n");
                    dom.appendChild(el0, el1);
                    return el0;
                  },
                  buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                    var morphs = new Array(1);
                    morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                    return morphs;
                  },
                  statements: [
                    ["inline","component",[["get","optionComponent",["loc",[null,[30,24],[30,39]]]]],["option",["subexpr","@mut",[["get","option",["loc",[null,[30,47],[30,53]]]]],[],[]],"onClick",["subexpr","action",["onOptionClick"],[],["loc",[null,[30,62],[30,86]]]],"currentHighlight",["subexpr","@mut",[["get","currentHighlight",["loc",[null,[30,104],[30,120]]]]],[],[]],"index",["subexpr","@mut",[["get","index",["loc",[null,[30,127],[30,132]]]]],[],[]]],["loc",[null,[30,12],[30,134]]]]
                  ],
                  locals: ["option","index"],
                  templates: []
                };
              }());
              return {
                meta: {
                  "revision": "Ember@2.0.2",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 28,
                      "column": 17
                    },
                    "end": {
                      "line": 32,
                      "column": 8
                    }
                  },
                  "moduleName": "dummy/templates/components/ember-select-guru.hbs"
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                  dom.insertBoundary(fragment, null);
                  return morphs;
                },
                statements: [
                  ["block","each",[["get","_options",["loc",[null,[29,18],[29,26]]]]],[],0,null,["loc",[null,[29,10],[31,19]]]]
                ],
                locals: [],
                templates: [child0]
              };
            }());
            var child1 = (function() {
              return {
                meta: {
                  "revision": "Ember@2.0.2",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 32,
                      "column": 8
                    },
                    "end": {
                      "line": 34,
                      "column": 8
                    }
                  },
                  "moduleName": "dummy/templates/components/ember-select-guru.hbs"
                },
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("          ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createComment("");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n        ");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var morphs = new Array(1);
                  morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                  return morphs;
                },
                statements: [
                  ["inline","component",[["get","noOptionsComponent",["loc",[null,[33,22],[33,40]]]]],[],["loc",[null,[33,10],[33,42]]]]
                ],
                locals: [],
                templates: []
              };
            }());
            return {
              meta: {
                "revision": "Ember@2.0.2",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 28,
                    "column": 8
                  },
                  "end": {
                    "line": 34,
                    "column": 15
                  }
                },
                "moduleName": "dummy/templates/components/ember-select-guru.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode(" ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [
                ["block","if",[["get","hasOptions",["loc",[null,[28,23],[28,33]]]]],[],0,1,["loc",[null,[28,17],[34,15]]]]
              ],
              locals: [],
              templates: [child0, child1]
            };
          }());
          return {
            meta: {
              "revision": "Ember@2.0.2",
              "loc": {
                "source": null,
                "start": {
                  "line": 26,
                  "column": 8
                },
                "end": {
                  "line": 34,
                  "column": 22
                }
              },
              "moduleName": "dummy/templates/components/ember-select-guru.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode(" ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment,1,1,contextualElement);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [
              ["block","if",[["get","hasFailed",["loc",[null,[26,23],[26,32]]]]],[],0,1,["loc",[null,[26,17],[34,22]]]]
            ],
            locals: [],
            templates: [child0, child1]
          };
        }());
        return {
          meta: {
            "revision": "Ember@2.0.2",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 4
              },
              "end": {
                "line": 36,
                "column": 4
              }
            },
            "moduleName": "dummy/templates/components/ember-select-guru.hbs"
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","ember-select-guru__search-wrapper");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","options-wrapper");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]),1,1);
            return morphs;
          },
          statements: [
            ["inline","input",[],["placeholder",["subexpr","@mut",[["get","searchPlaceholder",["loc",[null,[21,28],[21,45]]]]],[],[]],"value",["subexpr","@mut",[["get","queryTerm",["loc",[null,[21,52],[21,61]]]]],[],[]],"class","ember-select-guru__search"],["loc",[null,[21,8],[21,97]]]],
            ["block","if",[["get","isPending",["loc",[null,[24,14],[24,23]]]]],[],0,1,["loc",[null,[24,8],[34,29]]]]
          ],
          locals: ["optionsList"],
          templates: [child0, child1]
        };
      }());
      return {
        meta: {
          "revision": "Ember@2.0.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 2
            },
            "end": {
              "line": 37,
              "column": 2
            }
          },
          "moduleName": "dummy/templates/components/ember-select-guru.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [
          ["block","ember-select-dropdown",[],["name",["subexpr","@mut",[["get","name",["loc",[null,[19,34],[19,38]]]]],[],[]],"visible",["subexpr","@mut",[["get","isExpanded",["loc",[null,[19,47],[19,57]]]]],[],[]],"willHideDropdown","willHideDropdown"],0,null,["loc",[null,[19,4],[36,30]]]]
        ],
        locals: [],
        templates: [child0]
      };
    }());
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 39,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/ember-select-guru.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ember-select-guru__container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","ember-select-guru__trigger");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(3);
        morphs[0] = dom.createElementMorph(element1);
        morphs[1] = dom.createMorphAt(element1,1,1);
        morphs[2] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["element","action",["expandComponent"],[],["loc",[null,[2,42],[2,70]]]],
        ["block","if",[["get","hasValue",["loc",[null,[3,10],[3,18]]]]],[],0,1,["loc",[null,[3,4],[15,11]]]],
        ["block","if",[["get","isExpanded",["loc",[null,[18,8],[18,18]]]]],[],2,null,["loc",[null,[18,2],[37,9]]]]
      ],
      locals: [],
      templates: [child0, child1, child2]
    };
  }()));

});
define('dummy/templates/components/failure-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/failure-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Sorry, something went wrong...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/list-item', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/list-item.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"style","margin: 3px 0");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","clearfix");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(2);
        morphs[0] = dom.createAttrMorph(element1, 'style');
        morphs[1] = dom.createMorphAt(element0,3,3);
        return morphs;
      },
      statements: [
        ["attribute","style",["concat",["width: 30px; height: 30px; float: left; background-color: ",["get","option.color",["loc",[null,[2,75],[2,87]]]]]]],
        ["content","option.name",["loc",[null,[3,2],[3,17]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/multi-value-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/multi-value-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" ");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("span");
        dom.setAttribute(el1,"class","multi-value__remove");
        var el2 = dom.createTextNode("×");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","value.name",["loc",[null,[1,0],[1,14]]]],
        ["element","action",["onRemoveClick"],[],["loc",[null,[1,49],[1,75]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/no-options-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/no-options-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","ember-select-guru__option");
        var el2 = dom.createTextNode("No options.");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/option-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/option-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","option.name",["loc",[null,[1,0],[1,15]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/pending-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/pending-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Fetching data...\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/templates/components/single-value-component', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@2.0.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/components/single-value-component.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","value.name",["loc",[null,[1,0],[1,14]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('dummy/tests/adapters/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'adapters/application.js should pass jshint.'); 
  });

});
define('dummy/tests/app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function(assert) { 
    assert.ok(true, 'app.js should pass jshint.'); 
  });

});
define('dummy/tests/components/list-item.jshint', function () {

  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/list-item.js should pass jshint', function(assert) { 
    assert.ok(true, 'components/list-item.js should pass jshint.'); 
  });

});
define('dummy/tests/controllers/application.jshint', function () {

  'use strict';

  QUnit.module('JSHint - controllers');
  QUnit.test('controllers/application.js should pass jshint', function(assert) { 
    assert.ok(true, 'controllers/application.js should pass jshint.'); 
  });

});
define('dummy/tests/example-constants/colors.jshint', function () {

  'use strict';

  QUnit.module('JSHint - example-constants');
  QUnit.test('example-constants/colors.js should pass jshint', function(assert) { 
    assert.ok(true, 'example-constants/colors.js should pass jshint.'); 
  });

});
define('dummy/tests/example-constants/names.jshint', function () {

  'use strict';

  QUnit.module('JSHint - example-constants');
  QUnit.test('example-constants/names.js should pass jshint', function(assert) { 
    assert.ok(true, 'example-constants/names.js should pass jshint.'); 
  });

});
define('dummy/tests/example-constants/numbers.jshint', function () {

  'use strict';

  QUnit.module('JSHint - example-constants');
  QUnit.test('example-constants/numbers.js should pass jshint', function(assert) { 
    assert.ok(true, 'example-constants/numbers.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/resolver.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/resolver.js should pass jshint.'); 
  });

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/helpers/start-app.jshint', function () {

  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function(assert) { 
    assert.ok(true, 'helpers/start-app.js should pass jshint.'); 
  });

});
define('dummy/tests/integration/ember-select-guru-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

  'use strict';

  var sinon = window.sinon;
  var run = Ember['default'].run;

  ember_qunit.moduleForComponent('ember-select-guru/components/ember-select-guru', 'Integration: ember-select-guru/components/ember-select-guru', { integration: true });

  ember_qunit.test('it renders options on dropdown opening', function (assert) {
    assert.expect(2);

    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return null;
    });

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 97
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 68], [1, 95]]]]], ['loc', [null, [1, 0], [1, 97]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().length, 3, 'dropdown should render all options');
  });

  ember_qunit.test('it renders proper notification when options are empty', function (assert) {
    assert.expect(2);

    var options = [];

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return null;
    });

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 97
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 68], [1, 95]]]]], ['loc', [null, [1, 0], [1, 97]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().text().trim(), 'No options.', 'dropdown should render no options notification');
  });

  ember_qunit.test('it renders proper notification when promise returned from query', function (assert) {
    assert.expect(2);

    var options = [];

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return new Ember['default'].RSVP.Promise(function () {});
    });

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 97
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 68], [1, 95]]]]], ['loc', [null, [1, 0], [1, 97]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().text().trim(), 'Fetching data...', 'dropdown should render fetching data notification');
  });

  ember_qunit.test('it renders proper notification when promise returned from query fails', function (assert) {
    assert.expect(3);
    var done = assert.async();

    var options = [];
    var defer = Ember['default'].RSVP.defer();

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return defer.promise;
    });

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 97
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 68], [1, 95]]]]], ['loc', [null, [1, 0], [1, 97]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().text().trim(), 'Fetching data...', 'dropdown should render fetching data notification');

    defer.reject();
    run.next(function () {
      assert.equal(Ember['default'].$('.options-wrapper').children().text().trim(), 'Sorry, something went wrong...', 'dropdown should render failure notification');
      done();
    });
  });

  ember_qunit.test('it renders options when promise from returned query resolves', function (assert) {
    assert.expect(3);
    var done = assert.async();

    var options = [];
    var defer = Ember['default'].RSVP.defer();

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return defer.promise;
    });

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 97
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 68], [1, 95]]]]], ['loc', [null, [1, 0], [1, 97]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().text().trim(), 'Fetching data...', 'dropdown should render fetching data notification');

    defer.resolve();
    this.set('options', [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }]);

    run.next(function () {
      assert.equal(Ember['default'].$('.options-wrapper').children().length, 3, 'dropdown should render available options');
      done();
    });
  });

  ember_qunit.test('it closes the dropdown on selection', function (assert) {
    var _this = this;

    assert.expect(3);

    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return null;
    });
    this.set('actions.onSelect', function (value) {
      _this.set('value', value);
    });

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 126
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 68], [1, 95]]]], 'onSelect', ['subexpr', 'action', ['onSelect'], [], ['loc', [null, [1, 105], [1, 124]]]]], ['loc', [null, [1, 0], [1, 126]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().length, 3, 'dropdown should render all options');

    Ember['default'].$('.options-wrapper').children().last().click();
    assert.equal(Ember['default'].$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
  });

  ember_qunit.test('it closes the dropdown on remove from multiple selection', function (assert) {
    var _this2 = this;

    assert.expect(4);

    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    this.setProperties({
      options: options,
      value: Ember['default'].A([options[0]]),
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return null;
    });
    this.set('actions.onSelect', function (value) {
      _this2.set('value', value);
    });

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 140
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['multiple', true, 'value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 40], [1, 45]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 54], [1, 61]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 82], [1, 109]]]], 'onSelect', ['subexpr', 'action', ['onSelect'], [], ['loc', [null, [1, 119], [1, 138]]]]], ['loc', [null, [1, 0], [1, 140]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(Ember['default'].$('.multi-value__selected').children('li').length, 1, 'component should render selected values');

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().length, 2, 'dropdown should render possible options except selected one');

    Ember['default'].$('.multi-value__remove').click();
    assert.equal(Ember['default'].$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
  });

  ember_qunit.test('it sends #onSelect action with proper values set on remove value click', function (assert) {
    var _this3 = this;

    assert.expect(6);

    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    this.setProperties({
      options: options,
      value: Ember['default'].A([options[0], options[1]]),
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return null;
    });
    this.set('actions.onSelect', function (value) {
      _this3.set('value', value);
    });

    var onSelectSpy = sinon.spy(this.get('actions'), 'onSelect');

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 140
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['multiple', true, 'value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 40], [1, 45]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 54], [1, 61]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 82], [1, 109]]]], 'onSelect', ['subexpr', 'action', ['onSelect'], [], ['loc', [null, [1, 119], [1, 138]]]]], ['loc', [null, [1, 0], [1, 140]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.equal(Ember['default'].$('.multi-value__selected').children('li').length, 2, 'component should render selected values');

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.equal(Ember['default'].$('.options-wrapper').children().length, 1, 'dropdown should render possible options except selected ones');

    Ember['default'].$('.multi-value__remove:first').click();
    assert.equal(Ember['default'].$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
    assert.ok(onSelectSpy.calledOnce, '#onSelect should be called once for removed option');
    var onSelectSpyCall = onSelectSpy.getCall(0);
    assert.equal(onSelectSpyCall.args[0][0], options[1], '#onSelect should be called with one selected value');
  });

  ember_qunit.test('it let\'s control component by keyboard', function (assert) {
    var _this4 = this;

    assert.expect(7);

    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.queryTermChanged', function () {
      return null;
    });
    this.set('actions.onSelect', function (value) {
      _this4.set('value', value);
    });

    var onSelectSpy = sinon.spy(this.get('actions'), 'onSelect');

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 126
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSearchInputChange', ['subexpr', 'action', ['queryTermChanged'], [], ['loc', [null, [1, 68], [1, 95]]]], 'onSelect', ['subexpr', 'action', ['onSelect'], [], ['loc', [null, [1, 105], [1, 124]]]]], ['loc', [null, [1, 0], [1, 126]]]]],
        locals: [],
        templates: []
      };
    })()));

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');
    assert.ok(Ember['default'].$('.options-wrapper div:first').hasClass('is-active'), 'initially first element should be active');

    var event = Ember['default'].$.Event('keydown');
    event.keyCode = 40;
    this.$('.ember-select-guru').trigger(event);

    assert.ok(Ember['default'].$('.options-wrapper div:nth-child(2)').hasClass('is-active'), 'after keypress second element should be active');

    event.keyCode = 13;
    this.$('.ember-select-guru').trigger(event);

    assert.equal(Ember['default'].$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
    var onSelectSpyCall = onSelectSpy.getCall(0);
    assert.equal(onSelectSpyCall.args[0], options[1], '#onSelect should be called with selected value');

    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');

    event.keyCode = 27;
    this.$('.ember-select-guru').trigger(event);

    assert.equal(Ember['default'].$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
  });

  ember_qunit.test('it don\'t sends onSelect when ENTER clicked with empty options', function (assert) {
    var _this5 = this;

    assert.expect(3);

    var options = [];

    this.setProperties({
      options: options,
      actions: {}
    });

    this.set('actions.onSelect', function (value) {
      _this5.set('value', value);
    });

    var onSelectSpy = sinon.spy(this.get('actions'), 'onSelect');

    this.render(Ember['default'].HTMLBars.template((function () {
      return {
        meta: {
          'revision': 'Ember@2.0.2',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 78
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'ember-select-guru', [], ['value', ['subexpr', '@mut', [['get', 'value', ['loc', [null, [1, 26], [1, 31]]]]], [], []], 'options', ['subexpr', '@mut', [['get', 'options', ['loc', [null, [1, 40], [1, 47]]]]], [], []], 'onSelect', ['subexpr', 'action', ['onSelect'], [], ['loc', [null, [1, 57], [1, 76]]]]], ['loc', [null, [1, 0], [1, 78]]]]],
        locals: [],
        templates: []
      };
    })()));
    this.$('.ember-select-guru__trigger').click();

    assert.ok(Ember['default'].$('.ember-select-guru__dropdown').length, 'dropdown should render');

    var event = Ember['default'].$.Event('keydown');
    event.keyCode = 13;
    this.$('.ember-select-guru').trigger(event);

    assert.equal(Ember['default'].$('.ember-select-guru__dropdown').length, 0, 'dropdown should hide');
    assert.equal(onSelectSpy.called, false, '#onSelect should not be called at all');
  });

});
define('dummy/tests/integration/ember-select-guru-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - integration');
  QUnit.test('integration/ember-select-guru-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'integration/ember-select-guru-test.js should pass jshint.'); 
  });

});
define('dummy/tests/router.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function(assert) { 
    assert.ok(true, 'router.js should pass jshint.'); 
  });

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/test-helper.jshint', function () {

  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function(assert) { 
    assert.ok(true, 'test-helper.js should pass jshint.'); 
  });

});
define('dummy/tests/unit/ember-select-guru-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

  'use strict';

  var sinon = window.sinon;
  var run = Ember['default'].run;

  ember_qunit.moduleForComponent('ember-select-guru', 'Unit: ember-select-guru', { unit: true });

  ember_qunit.test('query change executes #onSearchInputChange action', function (assert) {
    assert.expect(2);

    var component = this.subject();
    var queryHandler = function queryHandler() {};

    component.set('attrs', {});
    component.set('attrs.onSearchInputChange', queryHandler);
    var onSearchInputChangeSpy = sinon.spy(component.get('attrs'), 'onSearchInputChange');

    run(function () {
      component.set('queryTerm', 'New value');
    });

    assert.ok(onSearchInputChangeSpy.calledOnce, '#onSearchInputChange should be executed');
    assert.ok(onSearchInputChangeSpy.calledWith('New value'), '#onSearchInputChange should be executed with proper query term');
  });

  ember_qunit.test('if #onSearchInputChange returns null, it sets filtered options except currently selected case-insensitive', function (assert) {
    assert.expect(3);

    var component = this.subject();
    var queryHandler = function queryHandler() {
      return null;
    };
    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    component.set('attrs', {});
    component.set('attrs.onSearchInputChange', queryHandler);

    run(function () {
      component.set('options', options);
    });

    run(function () {
      component.set('value', options[0]);
      component.set('queryTerm', 'abc');
    });

    assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[1]), '_options should contain second element from array');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[2]), '_options should contain third element from array');
  });

  ember_qunit.test('if #onSearchInputChange returns promise, it gets into pending state', function (assert) {
    assert.expect(1);

    var component = this.subject();
    var promise = new Ember['default'].RSVP.Promise(function () {});
    var queryHandler = function queryHandler() {
      return promise;
    };

    component.set('attrs', {});
    component.set('attrs.onSearchInputChange', queryHandler);

    run(function () {
      component.set('queryTerm', 'ABC');
    });

    assert.ok(component.get('isPending'), 'component should move to isPending state');
  });

  ember_qunit.test('if #onSearchInputChange returned promise fulfills, it gets back from isPending state', function (assert) {
    assert.expect(1);
    var done = assert.async();

    var component = this.subject();
    var defer = Ember['default'].RSVP.defer();
    var queryHandler = function queryHandler() {
      return defer.promise;
    };

    component.set('attrs', {});
    component.set('attrs.onSearchInputChange', queryHandler);

    run(function () {
      component.set('queryTerm', 'ABC');
    });

    defer.resolve();

    run.next(function () {
      assert.ok(!component.get('isPending'), 'component should move from isPending state');
      done();
    });
  });

  ember_qunit.test('if #onSearchInputChange returned promise fails, it gets into failed state', function (assert) {
    assert.expect(1);
    var done = assert.async();

    var component = this.subject();
    var defer = Ember['default'].RSVP.defer();
    var queryHandler = function queryHandler() {
      return defer.promise;
    };

    component.set('attrs', {});
    component.set('attrs.onSearchInputChange', queryHandler);

    run(function () {
      component.set('queryTerm', 'ABC');
    });

    defer.reject();

    run.next(function () {
      assert.ok(component.get('hasFailed'), 'component should move to hasFailed state');
      done();
    });
  });

  ember_qunit.test('if #onSearchInputChange returns array, it sets intersection of returned array and currently available options', function (assert) {
    assert.expect(2);

    var component = this.subject();
    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];
    var queryHandler = function queryHandler() {
      return options.slice(0, 1);
    };

    component.set('attrs', {});
    component.set('attrs.onSearchInputChange', queryHandler);

    run(function () {
      component.set('options', options);
    });

    run(function () {
      component.set('value', options[0]);
      component.set('queryTerm', 'ABC');
    });

    assert.equal(component.get('_options.length'), 1, '_options should contain one element');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[0]), '_options should contain first element from array');
  });

  ember_qunit.test('value change updates possible options', function (assert) {
    assert.expect(3);

    var component = this.subject();
    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    run(function () {
      component.set('options', options);
    });

    run(function () {
      component.set('value', options[0]);
    });

    assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[1]), '_options should contain second element from array');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[2]), '_options should contain third element from array');
  });

  ember_qunit.test('options change updates possible options', function (assert) {
    assert.expect(6);

    var component = this.subject();
    var options = [{ name: 'ABC' }, { name: 'ABCD' }, { name: 'ABCDE' }];

    run(function () {
      component.set('options', options);
    });

    run(function () {
      component.set('value', options[0]);
    });

    assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[1]), '_options should contain second element from array');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[2]), '_options should contain third element from array');

    run(function () {
      component.set('value', options[1]);
    });

    assert.equal(component.get('_options.length'), 2, '_options should contain two elements');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[0]), '_options should contain first element from array');
    assert.ok(Ember['default'].A(component.get('_options')).contains(options[2]), '_options should contain third element from array');
  });

});
define('dummy/tests/unit/ember-select-guru-test.jshint', function () {

  'use strict';

  QUnit.module('JSHint - unit');
  QUnit.test('unit/ember-select-guru-test.js should pass jshint', function(assert) { 
    assert.ok(true, 'unit/ember-select-guru-test.js should pass jshint.'); 
  });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"name":"ember-select-guru","version":"1.1.1+f3bdeb09"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map