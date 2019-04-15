import React from 'react';
import Superior from '../../componentes/zSuperior';
import Noencontrado from '../../componentes/404';
import Inferior from '../../componentes/inferior';

const NoencontradoPagina = () => {
  return (
    <div>
      <Superior
        propEstilo={{ background: 'rgba(0, 0, 0, 0.63)' }}
        propTitulo='Error'
      />
      <Noencontrado/>
      <Inferior />
    </div>
  );
};

export default NoencontradoPagina;
