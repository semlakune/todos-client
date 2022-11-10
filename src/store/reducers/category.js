import {CATEGORY_DETAIL, CATEGORY_FETCH_SUCCESS} from "../actions/actionType";

const initialState = {
    categories: [],
    category: {}
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORY_FETCH_SUCCESS:
            return { ...state, categories: action.payload }
        case CATEGORY_DETAIL:
            return { ...state, category: action.payload }
        default:
            return state
    }
}