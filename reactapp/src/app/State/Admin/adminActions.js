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

export const saveVaccineToDB = (newvaccine) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios
                .post("http://localhost:9000/vaccine/api/savevaccine", newvaccine)
                .then((response) => {
                    resolve({data: response.data, status: response.status});
                })
                .catch((err) => {
                    console.log("Error while saving new vaccine: ", err);
                    reject(err);
                });
        });
    }
};

export const saveHospitalToDB = (newhospital) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            axios
                .post("http://localhost:9000/hospital/api/savehospital", newhospital)
                .then((response) => {
                    resolve({data: response.data, status: response.status});
                })
                .catch((err) => {
                    console.log("Error while saving new hospital: ", err);
                    reject(err);
                });
        });
    }
};