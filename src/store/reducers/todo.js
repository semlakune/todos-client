import {TASK_ALL_FETCH, TASK_FETCH_SUCCESS} from "../actions/actionType";

const initialState = {
    tasks: [],
    allTask: []
}

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TASK_FETCH_SUCCESS:
            return { ...state, tasks: action.payload }
        case TASK_ALL_FETCH:
            return { ...state, allTask: action.payload }
        default:
            return state
    }
}