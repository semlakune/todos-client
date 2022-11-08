import { combineReducers } from "redux"
import userReducer from "./user";
import categoryReducer from "./category";

const rootReducer = combineReducers({
    userReducer,
    categoryReducer
})

export default rootReducer