import React from 'react';
import './loader.css';
// import CircularProgress from '@material-ui/core/CircularProgress';
// OPCIONAL: <CircularProgress size={50} style={{color: '#FFC107', textAlign: 'center'}} />

const Loader = () => {
  return (
    <div>
      <div className='sk-folding-cube'>
        <div className='sk-cube1 sk-cube' />
        <div className='sk-cube2 sk-cube' />
        <div className='sk-cube4 sk-cube' />
        <div className='sk-cube3 sk-cube' />
      </div>
      <div style={{color: '#FFC107', textAlign: 'center'}}>
        <p>Cargando...</p>
      </div>
    </div>
  );
};

export default Loader;
