import * as actionTypes from "../actionTypes";
const initialState = {
    vaccines : []
}

const vaccineReducer = (state=initialState, action)=>{
    console.log("We are in vaccine reducer with action payload - ", action.payload)

    switch (action.type) {

        case actionTypes.AddVaccineToStore:
            return {...state, vaccines : [...state.vaccines, action.payload]}

        case actionTypes.AddVaccineListToStore:
            return {...state, vaccines : action.payload}

        default:
            return state;
    }
}

export default vaccineReducer