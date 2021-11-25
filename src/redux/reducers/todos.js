import { ADD_TODO, TOGGLE_TODO } from '../actionTypes';

const initialState = {
    allIds: [],
    byIds: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case 'tb/ui/HIDE_TOP_NAV':{
            return '我是 tb/ui/HIDE_TOP_NAV';
        }
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                    ...state.byIds,
                    [id]: {
                        content,
                        completed: false,
                    },
                },
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                    ...state.byIds,
                    [id]: {
                        ...state.byIds[id],
                        completed: !state.byIds[id].completed,
                    },
                },
            };
        }
        default:
            return state;
    }
}
