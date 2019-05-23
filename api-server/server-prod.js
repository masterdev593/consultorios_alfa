'use strict';

require('dotenv').config();

const _ = require('lodash');
const loopback = require('loopback');
const boot = require('loopback-boot');
const expressState = require('express-state');
const path = require('path');
const createDebugger = require('debug');

const log = createDebugger('consultorios:server');
// force logger to always output
// this may be brittle
log.enabled = true;

const app = loopback();
const isBeta = !!process.env.BETA;

expressState.extend(app);
app.set('state namespace', '__consultorios__');
app.set('port', process.env.PORT || 3000);
app.use(loopback.token());
app.disable('x-powered-by');

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV,
});

const {mongods} = app.datasources;
mongods.on('connected', _.once(() => log('> Base de Datos conectada')));
app.start = _.once(function() {
  const server = app.listen(app.get('port'), function() {
    app.emit('started');
    log(
      '> El servidor de ALFA CONSULTORIOS está escuchando en el puerto %d modo %s',
      app.get('port'),
      app.get('env')
    );
    if (isBeta) {
      log('> ALFA CONSULTORIOS esta en modo BETA');
    }
    log(`> Conectando con la BDD ${mongods.settings.url}`);
  });

  process.on('SIGINT', () => {
    log('> Apagando el servidor');
    server.close(() => {
      log('> El servidor esta cerrado');
    });
    log('> Cerrando la conexión con la BDD');
    mongods.disconnect()
      .then(() => {
        log('> BDD conexión cerrada');
        // exit process
        // this may close kept alive sockets
        // eslint-disable-next-line no-process-exit
        process.exit(0);
      });
  });
});

module.exports = app;

// start the server if `$ node server.js`
// in production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
