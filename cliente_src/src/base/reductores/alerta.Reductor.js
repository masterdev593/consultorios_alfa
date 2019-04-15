import {
  ALERTA_SATISFACTORIA,
  ALERTA_ERROR,
  ALERTA_ADVERTENCIA,
  ALERTA_INFO,
  ALERTA_LIMPIAR
} from '../acciones/constantes';

const initialState = {
  tipo: 'success',
  mensaje: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALERTA_SATISFACTORIA:
      return {
        tipo: 'success',
        mensaje: action.mensaje
      };
    case ALERTA_ERROR:
      return {
        tipo: 'error',
        mensaje: 'Falla en la comunicación. Cód. ' + action.codigo
      };
    case ALERTA_ADVERTENCIA:
      return {
        tipo: 'warning',
        mensaje: action.mensaje
      };
    case ALERTA_INFO:
      return {
        tipo: 'info',
        mensaje: action.mensaje
      };
    case ALERTA_LIMPIAR:
      return {
        tipo: 'success',
        mensaje: ''
      };
    default:
      return state;
  }
};
