import * as actionTypes from "../actionTypes";
import axios from "axios";

/*export const signUpUser = (newuser) => {
    return (dispatch) => {
        axios
          .post("http://localhost:9000/user/api/signupuser", newuser)
          .then((response) => {
            return response.data;
          })
          .catch((err) => {
            console.log("Error while saving new user: ", err);
            return 0;
          });
      };
}*/

export const signUpUser = (newuser) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios
                .post("http://localhost:9000/user/api/signupuser", newuser)
                .then((response) => {
                    resolve({data: response.data, status: response.status});
                })
                .catch((err) => {
                    console.log("Error while saving new user: ", err);
                    reject(err);
                });
        });
    }
};
  

/*export const signInUser = (creds) => {
    return (dispatch) => {
        axios
            .post("http://localhost:9000/user/api/signinuser", creds)
            .then((response) => {
                //let signedUser = response.data;
                console.log("heyhey " + (typeof response.data) + " " + response.data)
                if (typeof response.data === "object" && response.data !== null) {
                    dispatch(addUserToStore(response.data));
                    return 0;
                } else {
                    return response.data;
                }
            })
            .catch((err) => {
                console.log("Error while signing in user: ", err);
                return '1';
            });
    }
}*/

export const signInUser = (creds) => {
    return (dispatch) => {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:9000/user/api/signinuser", creds)
          .then((response) => {
            //if (typeof response.data === "object" && response.data !== null) {
              dispatch(addUserToStore(response.data));
              resolve({ data: response.data, status: response.status });
            /*} else {
              resolve({ data: response.data, status: response.status });
            }*/
          })
          .catch((err) => {
            console.log("Error while signing in user: ", err.response.status);
            reject({data: err.response.data, status: err.response.status});
          });
      });
    };
  };
  

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
        mobile : "",
        address : "",
        age: 0,
        gender: ""
    }
    return {
        type: actionTypes.SignOut,
        payload: guest
    }
}