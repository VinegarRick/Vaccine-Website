import * as actionTypes from "../actionTypes";

const initialState = {
    //User : { 
        username : "Guest",
        password : "",
        email: "",
        mobile : 0,
        address : "",
        age: 0,
        gender: ""
    //}
}

const userReducer = (state=initialState, action)=>{

    console.log("We are in user reducer with action payload - ", action.payload)

    switch (action.type) {

        case actionTypes.AdduserToStore:
            return state;    

        default:
            return state;
    }

}

export default userReducer;