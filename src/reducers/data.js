import { DATA } from '../actions/data';

const initialState = {
    isFetching : true,
    data       : null,
    headers    : null,
}

function data(state = initialState, action = {}) {
    switch (action.type) {
        case DATA.FETCH_SUCCESS:            
            return {
                ...state,
                isFetching : false,
                data       : action.payload,
                headers    : Object.keys(action.payload[0]),
            }
        case DATA.FETCH_ERROR:
            return {
                ...state,
                isFetching : false,
            }
        default:
            return state;
    }
}

export default data;