import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

import filters from './reducers/filters';

const redusers = combineReducers({
    filters,
})

const store = createStore(
    redusers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;