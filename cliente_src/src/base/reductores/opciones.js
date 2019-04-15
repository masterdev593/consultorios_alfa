export const SOLICITA_MOSTRARLISTA = 'opciones/SOLICITA_MOSTRARLISTA';
export const SOLICITA_SERVICIOCORREO = 'opciones/SOLICITA_SERVICIOCORREO';
export const THEME_CHANGE_PALETTE_TYPE = 'opciones/THEME_CHANGE_PALETTE_TYPE';

const initialState = {
  mostrarListaClientes: false,
  servicioCorreos: true,
  paletteType: 'light'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SOLICITA_MOSTRARLISTA:
      return {
        ...state,
        mostrarListaClientes: !state.mostrarListaClientes
      };
    case SOLICITA_SERVICIOCORREO:
      return {
        ...state,
        servicioCorreos: !state.servicioCorreos
      };
    case THEME_CHANGE_PALETTE_TYPE:
      return {
        ...state,
        paletteType: state.paletteType === 'light' ? 'dark' : 'light'
      };

    default:
      return state;
  }
};

export const _mostrarlista = () => {
  return dispatch => {
    dispatch({
      type: SOLICITA_MOSTRARLISTA
    });

  };
};
export const _serviciocorreo = () => {
  return dispatch => {
    dispatch({
      type: SOLICITA_SERVICIOCORREO
    });

  };
};
export const _cmdCambiarTema = () => {
  return dispatch => {
    dispatch({
      type: THEME_CHANGE_PALETTE_TYPE
    });

  };
};
