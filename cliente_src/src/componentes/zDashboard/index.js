import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _cmdmostrarDrawer } from '../../base/acciones/opciones.Acciones';
import drawerMain from './dashboardMain';

const mapStateToProps = state => ({
  abiertoDrawer: state.opciones.abiertoDrawer
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdmostrarDrawer
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(drawerMain);
