'use strict';
const moment = require('moment');

module.exports = function(app) {
  const fecha = moment().format('MMMM Do YYYY, h:mm:ss a');
  app.get('/estado', function(req, res) {
    res.json({fecha: fecha, corriendo: true});
  });
};
