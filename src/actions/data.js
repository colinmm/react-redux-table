import createAction from './utils/createAction';
import createTypes from './utils/createTypes';

export const DATA = createTypes('DATA', [
    'FETCH_SUCCESS',
    'FETCH_ERROR',
]);

const receiveData = (json) => createAction(DATA.FETCH_SUCCESS,json)

export function requestData() {
    const json = [{ firstName:'colin', lastName:'mather', age:'31' },
                  { firstName:'naoko', lastName:'hoshi', age:'30' },
                  { firstName:'chumsie', lastName:'cat', age:'???'}];
    return dispatch => {
        dispatch(receiveData(json));
    }
}