import * as actionTypes from "../actionTypes";
import axios from "axios";

export const signUpUser = (newuser) => {
    return (dispatch) => {
        axios
          .post("http://localhost:9000/user/api/signupuser", newuser)
          .catch((err) => {
            console.log("Error while saving new user: ", err);
          });
      };
}

export const signInUser = (creds) => {
    return (dispatch) => {
        axios
            .post("http://localhost:9000/user/api/signinuser", creds)
            .then((ServerData) => {
                let signedUser = ServerData.data;
                dispatch(addUserToStore(signedUser));
            })
            .catch((err) => {
                console.log("Error while signing in user: ", err);
            });
    }
}

export const addUserToStore = (user) => {
    return {
        type: actionTypes.AddUserToStore,
        payload: user
    }
}

export const signOutUser = () => {
    const guest = {
        username : "Guest",
        password : "",
        email: "",
        mobile : 0,
        address : "",
        age: 0,
        gender: ""
    }
    return {
        type: actionTypes.SignOut,
        payload: guest
    }
}