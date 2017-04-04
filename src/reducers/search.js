import { SEARCH } from '../actions/search';

const initialState = {};

const search = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH.SEARCH:
        return {
            ...state,
            [ action.payload.table ] : action.payload.key,
        };
        default:
        return state
    }
};

export default search;