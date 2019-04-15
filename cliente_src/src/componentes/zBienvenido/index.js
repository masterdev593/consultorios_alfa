import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _cmdgetEstado } from '../../base/acciones/estado.Acciones';
import bienvenidoMain from './bienvenidoMain';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdgetEstado
    },
    dispatch
  );

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(bienvenidoMain));
