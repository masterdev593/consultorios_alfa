import {
  CAT_SERIES_SOLICITA,
  CAT_SERIES_RECIBE,
  CAT_SERIES_AGREGA,
  CAT_SERIES_ERROR,
  CAT_SERIES_NUEVO
} from '../acciones/constantes';

const initialState = {
  catSeries: [],
  estaCargando: false,
  mostrarNuevo: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CAT_SERIES_SOLICITA:
      return {
        ...state,
        estaCargando: true
      };
    case CAT_SERIES_RECIBE:
      return {
        ...state,
        estaCargando: false,
        catSeries: [...action.payload]
      };
    case CAT_SERIES_AGREGA:
      return {
        ...state,
        catSeries: [...state.catSeries, action.payload],
        estaCargando: false,
        mostrarNuevo: false
      };
    case CAT_SERIES_NUEVO:
      return {
        ...state,
        mostrarNuevo: !state.mostrarNuevo
      };
    case CAT_SERIES_ERROR:
      return {
        ...state,
        estaCargando: false,
        mostrarNuevo: false
      };
    default:
      return state;
  }
};
