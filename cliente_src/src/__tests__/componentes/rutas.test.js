import React from 'react';
import { shallow } from 'enzyme';
import App from '../../contenedores/Rutas';

describe('Rutas en FIZZVR', () => {
  let rutas = shallow(<App />);
  it('contiene las rutas', () => {
    expect(rutas.find('Route')).toHaveLength(5);
  });
});
