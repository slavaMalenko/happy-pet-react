import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import filters from './reducers/filters';
import animals from './reducers/animals';



const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const redusers = combineReducers({
    filters,
    animals
})

const store = createStore(
    redusers,
    composeEnhancer(applyMiddleware(thunk)),
);

window.store = store;

export default store;