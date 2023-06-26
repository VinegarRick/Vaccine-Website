import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk"; 

import userReducer from "./User/userReducer";

const logger = () => (next) => (action) => {
    console.log("Logged Action : Store File ", action);
    return next(action); 
}

const rootReducer = combineReducers({
    userReducer
})

export default configureStore(
    {reducer : rootReducer},
    {},
    applyMiddleware(logger, thunk)
)