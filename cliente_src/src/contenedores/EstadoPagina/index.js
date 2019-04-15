import React from 'react';
import Superior from '../../componentes/zSuperior';
import Estado from '../../componentes/zEstado';
import Inferior from '../../componentes/inferior';

const EstadoPagina = () => {
  return (
    <div>
      <Superior
        propEstilo={{ background: 'rgba(0, 0, 0, 0.63)' }}
        propTitulo='Estado'
      />
      <Estado/>
      <Inferior />
    </div>
  );
};

export default EstadoPagina;
