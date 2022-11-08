import {USER_FETCH_DETAIL} from "../actions/actionType";

const initialState = {
    user: {},
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_FETCH_DETAIL:
            return { ...state, user: action.payload }
        default:
            return state
    }
}

export default userReducer