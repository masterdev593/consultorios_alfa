'use strict';
const createDebugger = require('debug');
const log = createDebugger('consultorios:server');
log.enabled = true;

module.exports = function enableAuthentication(server) {
  server.enableAuth();
  log('> BOOT: Autentificación habilitada [✓]');
};
