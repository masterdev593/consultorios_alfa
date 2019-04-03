'use strict';

module.exports = function(app) {
  app.get('/estado', function(req, res) {
    res.json({corriendo: true});
  });
};
