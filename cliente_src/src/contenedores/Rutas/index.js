import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BienvenidoPagina from '../BienvenidoPagina';
// import BienvenidoPagina2 from '../BienvenidoPagina2/Home';
import DashboardPagina from '../DashboardPagina';
import EstadoPagina from '../EstadoPagina';
import NoEncontradoPagina from '../NoencontradoPagina';
import TestPagina from '../Test';

const Rutas = () => {
  return (
    <div>
      <Helmet>
        <title>📲 Desarrollador Web NodeJS</title>
      </Helmet>
      <Router>
        <Switch>
          <Route component={BienvenidoPagina} exact={true} path='/' />
          <Route component={DashboardPagina} exact={true} path='/dashboard' />
          <Route component={EstadoPagina} exact={true} path='/es' />
          <Route component={TestPagina} exact={true} path='/test' />
          <Route component={NoEncontradoPagina} path='*' />
        </Switch>
      </Router>
    </div>
  );
};

export default Rutas;
