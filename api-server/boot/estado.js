'use strict';
const moment = require('moment');
const createDebugger = require('debug');
const log = createDebugger('consultorios:server');
log.enabled = true;

module.exports = function(app) {
  const fecha = moment().format('MMMM Do YYYY, h:mm:ss a');
  app.get('/estado', function(req, res) {
    res.json({fecha: fecha, corriendo: true});
  });
  log('> BOOT: Ruta estado [✓]');
};
