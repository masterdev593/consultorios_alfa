import {
  ESTADO_RECIBE
} from '../acciones/constantes';

const initialState = {
  catEstado: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ESTADO_RECIBE:
      return {
        ...state,
        catEstado: action.payload
      };

    default:
      return state;
  }
};
