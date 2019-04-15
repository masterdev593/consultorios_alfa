import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './inferior.css';

const inferior = () => {
  return (
    <footer className='inferior'>
      <Typography className='aire'>
        <Link className='link' to={'/'}>
          &copy; 2019 FIZZVR
        </Link>
      </Typography>
      <Typography className='aire'>
        <Link className='link' to={'/terminos'}>
          Términos de uso
        </Link>
      </Typography>
      <Typography className='aire'>
        <Link className='link' to={'/privacidad'}>
          Privacidad
        </Link>
      </Typography>
    </footer>
  );
};

export default inferior;
