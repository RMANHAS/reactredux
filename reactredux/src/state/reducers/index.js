import { combineReducers } from "redux";
import amontReducer from "./amontReducer";


const reducers=combineReducers({
    amount:amontReducer
})


export default reducers;