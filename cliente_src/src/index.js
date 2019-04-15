import React from 'react';
import { render } from 'react-dom';
import App from './contenedores/Rutas';
import { Provider } from 'react-redux';

import configurarBase from './base';
import * as serviceWorker from './serviceWorker';
import './estilos.css';
const store = configurarBase();

/* const tema = createMuiTheme({
  palette: {
    primary: {
      light: common['white'],
      main: common['white'],
      dark: common['white']
    },
    secondary: {
      light: common['black'],
      main: common['black'],
      dark: common['black']
    }
  }
}); */

console.log('====================================');
console.log('> BETA.ini');
render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('fizzvr')
);
serviceWorker.register();
console.log('> BETA.fin');
console.log('====================================');
