import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// NOTA: Incluir el logo posteriormente
import Escribiendo from '../typing';
import Alerta from '../alerta';
import './bienvenidoMain.css';
import Fondo from '../fondo';
import lander1 from '../../recursos/lander1.jpg';
import lander2 from '../../recursos/lander2.jpg';
import lander3 from '../../recursos/lander3.jpg';
import lander4 from '../../recursos/lander1.jpg';

const mensajes = [
  'Desarrollador Web Fullstack',
  'NodeJS',
  'Material-UI, Bootstrap, React, Redux, MongoDB, Mysql, Express'
];

class bienvenidoMain extends Component {

  componentDidMount() {
    this.props._cmdgetEstado(10);
  }

  render() {
    const { mensaje, tipo } = this.props;
    return (
      <Fondo imagenes={[lander1, lander2, lander3, lander4]}>
        {mensaje.length > 1 && <Alerta mensaje={mensaje} tipo={tipo} />}
        <div className='bienvenidoMain'>
          <header className='bienvenidoHeader'>
            <Escribiendo mensajes={mensajes} />
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '0.5em' }}>
                <Button
                  component={Link}
                  style={{
                    color: '#00ff00',
                    borderRadius: '20px',
                    fontWeight: '600',
                    borderColor: '#00ff00'
                  }}
                  to='/dashboard'
                  variant='outlined'
                  >
                  ¿ya tienes cuenta? ingresa
                </Button>
              </div>
                <Button
                  className='bienvenidoAire'
                  component={Link}
                  style={{
                    color: '#f8f8f8',
                    borderRadius: '20px',
                    fontWeight: '600',
                    borderColor: '#fff'
                  }}
                  to='/registro'
                  variant='outlined'
                  >
                  ¿eres nuevo? registrate
                </Button>
            </div>
          </header>
        </div>
      </Fondo>
    );
  }
}

bienvenidoMain.propTypes = {
  _cmdgetEstado: PropTypes.func.isRequired,
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired
};

export default bienvenidoMain;
