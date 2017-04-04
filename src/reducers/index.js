import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import data from './data';
import column from './column';
import search from './search';

export const rootReducer = combineReducers({
    routing : routerReducer,
    data    : data,
    column  : column,
    search  : search,
});

export default rootReducer;