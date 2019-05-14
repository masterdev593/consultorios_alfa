'use strict';
const re = /\S+@\S+\.\S+/;

module.exports = function(Catcontacto) {
  Catcontacto.validatesFormatOf('email', {
    with: re,
    message: 'Debe ingresar un email válido'
  });
};
