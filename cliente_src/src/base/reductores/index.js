import { combineReducers } from 'redux';
// import { connectRouter } from 'connected-react-router';
// import opciones from './opciones';
// import errores from './errores';
import alertaReductor from './alerta.Reductor';
import estadoReductor from './estado.Reductor';
import seriesReductor from './series.Reductor';
import opcionesReductor from './opciones.Reductor';

export default combineReducers({
  alerta: alertaReductor,
  estado: estadoReductor,
  series: seriesReductor,
  opciones: opcionesReductor
});
