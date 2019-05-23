'use strict';
const createDebugger = require('debug');
const log = createDebugger('consultorios:server');
log.enabled = true;

module.exports = function mountRestApi(app) {
  const restApiRoot = app.get('restApiRoot');
  app.use(restApiRoot, app.loopback.rest());
  log('> BOOT: Montar REST API [✓]');
};

