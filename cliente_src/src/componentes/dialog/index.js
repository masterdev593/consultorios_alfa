import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class dialogForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
    this.cmdAceptar = this.cmdAceptar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cmdAceptar(e) {
    e.preventDefault();
    let datos = {
      title: this.state.title,
      content: this.state.content
    };
    this.props.cmdpostSeries(datos);
    this.setState = {
      title: '',
      content: ''
    };
  }

  render() {
    const { open, cmdmostrarNuevo } = this.props;
    return (
      <div>
        <Dialog
          aria-labelledby='form-dialog-title'
          onClose={cmdmostrarNuevo}
          open={open}
          >
          <DialogTitle id='form-dialog-title'>
            Nueva serie de intriga
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Para ingresar una nueva serie, ingrese los datos a continuación.
            </DialogContentText>
            <TextField
              fullWidth
              id='title'
              label='Título'
              margin='dense'
              name='title'
              onChange={e => this.handleChange(e)}
              type='text'
            />
            <TextField
              fullWidth
              id='content'
              label='Contenido'
              margin='dense'
              name='content'
              onChange={e => this.handleChange(e)}
              type='text'
            />
          </DialogContent>
          <DialogActions>
            <Button color='secondary' onClick={cmdmostrarNuevo}>
              Cancelar
            </Button>
            <Button color='primary' onClick={this.cmdAceptar}>
              Aceptar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

dialogForm.propTypes = {
  open: PropTypes.bool,
  cmdmostrarNuevo: PropTypes.func,
  cmdpostSeries: PropTypes.func
};

export default dialogForm;
