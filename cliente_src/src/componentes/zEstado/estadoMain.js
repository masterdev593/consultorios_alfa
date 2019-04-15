import React, { Component } from 'react';
import PropTypes from 'prop-types';

class estadoMain extends Component {
  componentWillMount() {
  }
  componentDidMount() {
    this.props._cmdgetEstado(40);

  }

  render() {
    const { mensaje, tipo, catEstado } = this.props;
    return (
      <div>
        {mensaje + ' --- ' + tipo}
        <h1>{catEstado.appVersion}</h1>
        <h1>{catEstado.appInicio}</h1>
        <h1>{catEstado.appHoy}</h1>
        <h1>{catEstado.appHace}</h1>
        <h1>{catEstado.appDiasCorriendo}</h1>
        <h1>{catEstado.appVistaPagina}</h1>
        <h1>{catEstado.appCookies}</h1>
      </div>
    );
  }
}

estadoMain.propTypes = {
  _cmdgetEstado: PropTypes.func.isRequired,
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
  catEstado: PropTypes.object
};

export default estadoMain;
