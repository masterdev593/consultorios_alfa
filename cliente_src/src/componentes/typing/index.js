import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const Escribiendo = ({ mensajes }) => {
  return (
    <div style={{ fontFamily: 'Underdog', color: '#00ff00', fontSize: '1.5em', backgroundColor: 'rgba(0, 0, 0, 0.63)', borderRadius: '6px', padding: '10px', width: '90%'}}>
      <Typist cursor={{ show: false }}>
        <p> {mensajes[0]}</p>
      </Typist>
      <Typist cursor={{ show: false }}>
        <p> {mensajes[1]}</p>
      </Typist>
      <Typist cursor={{ show: false }}>
        <p> {mensajes[2]}</p>
      </Typist>
    </div>  );
};

Escribiendo.propTypes = {
  mensajes: PropTypes.array.isRequired
};

export default Escribiendo;
