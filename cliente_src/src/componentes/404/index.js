import React from 'react';
import lander1 from '../../recursos/lander1.jpg';
import lander2 from '../../recursos/lander2.jpg';
import Fondo from '../fondo';
import Alerta from '../alerta';

const Noencontrado = () => {
  return (
    <Fondo imagenes={[lander1, lander2, lander1 ]}>
      <Alerta mensaje='Error 404' tipo='warning' />
    </Fondo>
  );
};

export default Noencontrado;
