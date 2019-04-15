import {
  MOSTRAR_DRAWER,
  RESET_DRAWER
} from '../acciones/constantes';

const initialState = {
  abiertoDrawer: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MOSTRAR_DRAWER:
      return {
        ...state,
        abiertoDrawer: !state.abiertoDrawer
      };
    case RESET_DRAWER:
      return {
        ...state,
        abiertoDrawer: false
      };

    default:
      return state;
  }
};
