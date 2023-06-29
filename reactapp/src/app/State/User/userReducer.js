import * as actionTypes from "../actionTypes";

const initialState = {
    user : { 
        username : "Guest",
        password : "",
        email: "",
        mobile : "",
        address : "",
        age: 0,
        gender: ""
    }
}

const userReducer = (state=initialState, action)=>{

    console.log("We are in user reducer with action payload - ", action.payload)

    switch (action.type) {

        case actionTypes.AddUserToStore:
            //return {state : action.payload}   
            /*return {...state, 
                username : action.payload.username, password : action.payload.password, email : action.payload.email, mobile : action.payload.mobile, address : action.payload.address, age : action.payload.age, gender : action.payload.gender
            }*/ 

            return {...state, user : action.payload}

        case actionTypes.SignOut:
            /*return {...state, 
                username : action.payload.username, password : action.payload.password, email : action.payload.email, mobile : action.payload.mobile, address : action.payload.address, age : action.payload.age, gender : action.payload.gender
            }*/
            
            return {...state, user : action.payload}

        case actionTypes.UserAlreadyExists:
            return {...state, signupSuccess : false}

        case actionTypes.IncorrectUserCreds:
            return {...state, signinSuccess : false}

        default:
            return state;
    }

}

export default userReducer;