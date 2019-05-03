'use strict';
const moment = require('moment');
const Promise = require('bluebird');

module.exports = function(catCitas) {

  // catCitas.validatesUniquenessOf('consultorio', {
  //   message: 'Este consultorio se encuentra ocupado',
  // });

  // const obtenerHora = data => {
  //   // const horas = moment.utc(data.horaInicio).format('H');
  //   // let respuesta = '';
  //   // respuesta = horas + '-' + data.consultorio;
  // };
  
  catCitas.reservas = function(inFecha, inConsultorio) {
    const today = moment()
      .startOf('day')
      .toDate();
    const especifico = moment(inFecha)
      .startOf('day')
      .toDate();
    const end = moment(today)
      .endOf('day')
      .toDate();
    const endespecifico = moment(inFecha)
      .endOf('day')
      .toDate();
    return catCitas
      .find({
        where: {
          and: [
            {horaInicio: {gte: inFecha ? especifico : today}},
            {horaInicio: {lte: inFecha ? endespecifico : end}},
            {consultorio: inConsultorio},
          ],
        },
        fields: {horaInicio: true, consultorio: true},
      })
      .map(data => { return Promise.resolve(data); })
      .catch(function(error) {
        console.log(error);
      });
  };
  catCitas.remoteMethod('reservas', {
    accepts: [{arg: 'fecha', type: 'date'}, {arg: 'consultorio', type: 'string'}],
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
