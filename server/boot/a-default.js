'use strict';
const moment = require('moment');

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
      if (err) return cb(err);
      console.log(
        'Una instancia de `Usuario` ah sido creada:',
        usuario
      );
      cb();
    }
  );
};
