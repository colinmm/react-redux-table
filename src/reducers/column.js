import { COLUMN } from '../actions/column';

const initialState = {
    omit : [],
};

const column = (state = initialState, action) => {
    switch (action.type) {
        // Hide/show columns
        case COLUMN.TOGGLE:
        return {
                ...state,
                omit: state.omit.includes(action.payload.key) ?
                    state.omit.filter(i => i !== action.payload.key) :
                    [ ...state.omit, action.payload.key],
        };
      // Sort by column
      case COLUMN.SORT:
        return {
            ...state,
            [ action.payload.table ] : {
                [ action.payload.key ] : action.payload.direction,
            },
        };
        default:
        return state
    }
};

export default column;