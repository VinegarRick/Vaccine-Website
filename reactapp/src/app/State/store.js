import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import thunk from "redux-thunk"; 

import userReducer from "./User/userReducer";
import vaccineReducer from "./Vaccine/vaccineReducer";

const logger = () => (next) => (action) => {
    console.log("Logged Action : Store File ", action);
    return next(action); 
}

const rootReducer = combineReducers({
    userReducer,
    vaccineReducer
})

export default configureStore(
    {reducer : rootReducer},
    {},
    applyMiddleware(logger, thunk)
)