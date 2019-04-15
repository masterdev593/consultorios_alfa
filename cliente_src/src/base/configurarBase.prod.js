import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reductores';
// import { routerMiddleware } from 'connected-react-router';
// import createHistory from 'history/createBrowserHistory';

// export const history = createHistory();

// NOTA: Apunta a la IP real del servidor donde se aloja express.
const axiosInstance = axios.create({
  baseURL: 'http://181.198.134.143:5000'
});

const middleware = [
  thunk.withExtraArgument(axiosInstance)
];

const configurarBase = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(...middleware)
);

export default configurarBase;
