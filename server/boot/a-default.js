'use strict';
const moment = require('moment');
const createDebugger = require('debug');
const log = createDebugger('consultorios:server');
log.enabled = true;
module.exports = function(app, cb) {
  const fecha = moment().format('YYYY-MM-DD');
  app.models.cat_usuarios.create(
    {
      rol: 'admin',
      especialidad: 'admin',
      expira: fecha,
      username: 'admin',
      email: 'admin@admin.com',
      password: 'edGVGD'
    },
    function(err, usuario) {
      if (err) {
        log('> BOOT: `Usuario` por default existente, Por favor cambiar la contraseña');
      } else {
        log(
          '> BOOT: `Usuario` por default creado:',
          usuario
        );
      }
      cb();
    }
  );
};
