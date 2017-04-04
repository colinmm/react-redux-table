import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const COLUMN = createTypes('COLUMN', [
    'TOGGLE',
    'SORT',
]);

export const toggleColumn = (key) => createAction(COLUMN.TOGGLE, { key });

export const sortColumn = (key,direction,table) => createAction(COLUMN.SORT, { key,direction,table });