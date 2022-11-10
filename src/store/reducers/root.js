import { combineReducers } from "redux"
import userReducer from "./user";
import categoryReducer from "./category";
import todoReducer from "./todo";

const rootReducer = combineReducers({
    userReducer,
    categoryReducer,
    todoReducer
})

export default rootReducer