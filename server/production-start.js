'use strict';

require('babel-register');
const _ = require('lodash');
const createDebugger = require('debug');

const log = createDebugger('consultorios:server:production-start');
const startTime = Date.now();

log.enabled = true;

const app = require('./server');

let timeoutHandler;
let killTime = 15;

const onConnect = _.once(() => {
  log('db connected in: %s', Date.now() - startTime);
  if (timeoutHandler) {
    clearTimeout(timeoutHandler);
  }
  app.start();
});

timeoutHandler = setTimeout(() => {
  const message = `db did not connect after ${killTime}s -- crashing hard`;
  // purposely shutdown server
  // pm2 should restart this in production
  throw new Error(message);
}, killTime * 1000);

app.dataSources.mongods.on('connected', onConnect);
