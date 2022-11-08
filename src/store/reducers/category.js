import {CATEGORY_FETCH_DETAIL, CATEGORY_FETCH_SUCCESS} from "../actions/actionType";

const initialState = {
    categories: [],
    category: {}
}

export default function categoryReducer(state = initialState, action) {
    switch (action.type) {
        case CATEGORY_FETCH_SUCCESS:
            return { ...state, categories: action.payload }
        case CATEGORY_FETCH_DETAIL:
            return { ...state, category: action.payload }
        default:
            return state
    }
}