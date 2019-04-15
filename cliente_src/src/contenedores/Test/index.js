import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    tipo: state.alerta.tipo,
    mensaje: state.alerta.mensaje
  };
}

class PruebaPagina extends Component {
  render() {
    return (
      <div>
        <h1>Soy una PruebaPagina conectada.</h1>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(PruebaPagina);
