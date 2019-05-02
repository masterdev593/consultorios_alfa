'use strict';
const moment = require('moment');
const Promise = require('bluebird');

module.exports = function(catCitas) {
  catCitas.validatesUniquenessOf('consultorio', {
    message: 'Este consultorio se encuentra ocupado',
  });
  const obtenerHora = hora => {
    const horas = moment.utc(hora).format('H');
    let respuesta = '';
    respuesta = horas;
    return Promise.resolve(respuesta);
  };
  catCitas.reservas = function(fecha) {
    const today = moment()
      .startOf('day')
      .toDate();
    const especifico = moment(fecha)
      .startOf('day')
      .toDate();
    const end = moment(today)
      .endOf('day')
      .toDate();
    const endespecifico = moment(fecha)
      .endOf('day')
      .toDate();
    return catCitas
      .find({
        where: {
          and: [
            {horaInicio: {gte: fecha ? especifico : today}},
            {horaInicio: {lte: fecha ? endespecifico : end}},
          ],
        },
      })
      .map(tile => obtenerHora(tile.horaInicio))
      .catch(function(error) {
        console.log(error);
      });
  };
  catCitas.remoteMethod('reservas', {
    accepts: {arg: 'fecha', type: 'date'},
    http: {
      path: '/reservas-hoy',
      verb: 'get',
    },
    returns: {
      arg: 'reservas',
      type: 'string',
    },
  });
};
