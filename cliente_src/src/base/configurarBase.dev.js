import { createStore, applyMiddleware, compose } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import logg from 'redux-logger';
// import { routerMiddleware } from 'connected-react-router';
// import createHistory from 'history/createBrowserHistory';
// import rootReducer from './rootReducer';
import rootReducer from './reductores';

// export const history = createHistory();
// NOTA: Apunta a la IP real del servidor donde se aloja express.
const configurarBase = preloadedState => {
  const axiosInstance = axios.create({
    baseURL: 'http://192.168.100.95:5000'
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [
    thunk.withExtraArgument(axiosInstance),
    logg
  ];
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reductores', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
};
export default configurarBase;

/*

export default function configureStore() {
  const routerMiddlewaree = routerMiddleware(history);

  const middlewares = [routerMiddlewaree];
  const store = createStore(
    rootReducer(history),
    compose(applyMiddleware(...middlewares))
  );
  return store;
} */

