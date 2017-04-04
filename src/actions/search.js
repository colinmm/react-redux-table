import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const SEARCH = createTypes('SEARCH', [
    'SEARCH',
]);

export const search = (key,table) => createAction(SEARCH.SEARCH, { key,table });