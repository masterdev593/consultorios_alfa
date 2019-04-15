import reducers from '../../base/reductores';

test('Los reductores de toda la aplicación.', () => {
  let state;
  state = reducers(
    {
      rutas: {
        location: { pathname: '/series', search: '', hash: '', key: 'd3hv2i' }
      },
      alerta: {}
    },
    {
      type: 'alerta/ALERTA_SATISFACTORIA',
      mensaje: 'Mensaje satisfactorio.'
    }
  );
  expect(state).toEqual({
    rutas: {
      location: { pathname: '/series', search: '', hash: '', key: 'd3hv2i' }
    },
    alerta: {
      tipo: 'success',
      mensaje: 'Mensaje satisfactorio.'
    }
  });

  state = reducers(
    {
      rutas: {
        location: { pathname: '/series', search: '', hash: '', key: 'd3hv2i' }
      },
      alerta: {}
    },
    {
      type: 'alerta/ALERTA_ERROR',
      mensaje: 'Mensaje de error.'
    }
  );
  expect(state).toEqual({
    rutas: {
      location: { pathname: '/series', search: '', hash: '', key: 'd3hv2i' }
    },
    alerta: {
      tipo: 'error',
      mensaje: 'Mensaje de error.'
    }
  });

  state = reducers(
    {
      rutas: {
        location: { pathname: '/series', search: '', hash: '', key: 'd3hv2i' }
      },
      alerta: {}
    },
    {
      type: 'alerta/ALERTA_ADVERTENCIA',
      mensaje: 'Mensaje de advertencia.'
    }
  );
  expect(state).toEqual({
    rutas: {
      location: { pathname: '/series', search: '', hash: '', key: 'd3hv2i' }
    },
    alerta: {
      tipo: 'warning',
      mensaje: 'Mensaje de advertencia.'
    }
  });
  state = reducers(
    {
      rutas: { location: { pathname: '/', search: '', hash: '' } },
      alerta: {}
    },
    { type: 'alerta/ALERTA_INFO', mensaje: 'Mensaje de información.' }
  );
  expect(state).toEqual({
    rutas: { location: { pathname: '/', search: '', hash: '' } },
    alerta: { tipo: 'info', mensaje: 'Mensaje de información.' }
  });
});
