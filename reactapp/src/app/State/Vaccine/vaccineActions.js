import * as actionTypes from "../actionTypes";
import axios from "axios";

export const AddVaccineToStore = (vaccine) => {
    return {
        type : actionTypes.AddVaccineToStore,
        payload : vaccine
    }
}

export const AddVaccineListToStore = (vaccines) => {
    return {
        type : actionTypes.AddVaccineListToStore,
        payload : vaccines
    }
}

export const FetchVaccinesFromDB = () => {
    return (dispatch) => {
        console.log("strange")
        axios
            .post("http://localhost:9000/vaccine/api/getvaccines")
            .then((response) => {
                const vaccines = response.data
                dispatch(AddVaccineListToStore(vaccines))
            })
            .catch((error) => {
                console.log("Error while fetching vaccines from DB: ", error)
            })
    }
}