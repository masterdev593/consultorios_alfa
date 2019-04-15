import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { _cmdsatisfactoriaAlerta, _cmderrorAlerta, _cmdadvertenciaAlerta, _cmdinfoAlerta, _cmdlimpioAlerta } from '../../base/acciones/alerta.Acciones';
import { _cmdmostrarNuevo } from '../../base/acciones/series.Acciones';
import { _cmdmostrarDrawer, _cmdresetDrawer } from '../../base/acciones/opciones.Acciones';
import superiorMain from './superiorMain';
// import { push } from 'connected-react-router';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  mostrarNuevo: state.series.mostrarNuevo,
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje,
  abiertoDrawer: state.opciones.abiertoDrawer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdmostrarNuevo,
      _cmdmostrarDrawer,
      _cmdresetDrawer
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(superiorMain);
