import {
  MOSTRAR_DRAWER,
  RESET_DRAWER,
  // eslint-disable-next-line no-unused-vars
  MOSTRAR_NUEVO
} from './constantes';

export const _cmdmostrarDrawer = () => {
  return { type: MOSTRAR_DRAWER };
};
export const _cmdresetDrawer = () => {
  return { type: RESET_DRAWER };
};
