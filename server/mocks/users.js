module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();
  var fuzzy = require('fuzzy');

  usersRouter.get('/', function(req, res) {
    var names = [{ id: 1, name: 'John' },
                 { id: 2, name: 'Kerry' },
                 { id: 3, name: 'Elize' },
                 { id: 4, name: 'Anita' },
                 { id: 5, name: 'Joe' },
                 { id: 6, name: 'Simpson' },
                 { id: 7, name: 'Queer' },
                 { id: 8, name: 'Abidale' },
                 { id: 9, name: 'Momy' },
                 { id: 10, name: 'Sanders' },
                 { id: 11, name: 'Donald' },
                 { id: 12, name: 'Brown' }
                ];
    var options = { extract: function(el) { return el.name; } };

    var results = names;
    if (req.query.q.length > 0) {
      results = fuzzy.filter(req.query.q, names, options);
      results = results.map(function(item) {
        return item.original;
      });
    }
    res.send({
      'data': results.map(function(item) {
        return {
          id: item.id,
          type: 'users',
          attributes: { name: item.name }
        };
      })
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
