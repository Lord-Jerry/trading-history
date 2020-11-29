import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
    const logger = require('redux-logger').createLogger({ collapsed: true });
    middlewares.push(logger);
}

export default createStore(reducers, composeWithDevTools(applyMiddleware(...middlewares)));
