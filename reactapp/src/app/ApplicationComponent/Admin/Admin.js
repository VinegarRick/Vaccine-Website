import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { saveVaccineToDB, saveHospitalToDB } from "../../State/Admin/adminActions";


let Admin = ()=>{
    const username = useSelector((state) => state.userReducer.user.username);
    let [hospitalList, setHospitalList] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let vaccineNameRef = useRef(null)
    let vaccineTypeRef = useRef(null)
    let priceRef = useRef(null)
    let sideEffectsRef = useRef(null)
    let originRef = useRef(null)
    let dosesRequiredRef = useRef(null)
    let strainsCoveredRef = useRef(null)

    let hospitalNameRef = useRef(null)
    let hospitalTypeRef = useRef(null)
    let hospitalAddressRef = useRef(null)
    let hospitalVaccinesRef = useRef(null)

    useEffect(()=>{
        //fetchHospitalList();
    }, []);

    async function fetchHospitalList() {
        try {
          const response = await axios.get("http://localhost:9000/hospital/api/gethospitals"); // route not yet implemented
          setHospitalList(response.data.hospitals);
        } catch (error) {
          console.log("Error fetching hospitals:", error);
        }
      }      

    let readVaccineFormData = (evt)=>{
        let vaccine = {
            name : vaccineNameRef.current.value,
            type : vaccineTypeRef.current.value,
            price : priceRef.current.value,
            sideEffects : sideEffectsRef.current.value,
            origin : originRef.current.value,
            dosesRequired : dosesRequiredRef.current.value,
            strainsCovered : strainsCoveredRef.current.value
        }

        dispatch(saveVaccineToDB(vaccine))
        resetVaccineForm()

        evt.preventDefault();
    }

    let readHospitalFormData = (evt)=>{
        let hospital = {
            name : hospitalNameRef.current.value,
            address : hospitalAddressRef.current.value,
            type : hospitalTypeRef.current.value,
            vaccineList : hospitalVaccinesRef.current.value
        }

        dispatch(saveHospitalToDB(hospital))
        resetHospitalForm()

        evt.preventDefault();
    }

    const resetVaccineForm = () => {
        vaccineNameRef.current.value = "";
        vaccineTypeRef.current.value = "";
        priceRef.current.value = "";
        sideEffectsRef.current.value = "";
        originRef.current.value = "";
        dosesRequiredRef.current.value = "";
        strainsCoveredRef.current.value = "";
    };

    const resetHospitalForm = () => {
        hospitalNameRef.current.value = "";
        hospitalAddressRef.current.value = "";
        hospitalTypeRef.current.value = "";
        hospitalVaccinesRef.current.value = "";
    };

    const handleItemClick = (hospitalName) => {
        setHospitalList((prevList) =>
          prevList.map((hospital) =>
            hospital.name === hospitalName ? { ...hospital, isExpanded: !hospital.isExpanded } : hospital
          )
        );
      };

    return(
        <>
            <div className="vaccine-hospital-form-container">
                {username == "Admin" && (<>
                <h1 className="vaccine-header">Vaccine</h1>
                <form className={"form col-md-10 vaccineForm"} onSubmit={readVaccineFormData}>                
                    <label>
                        <b>Name:</b>
                        <input type="text" className={"form-control col-md-12"} ref={vaccineNameRef} 
                            placeholder="Please enter vaccine name" maxLength={20} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Type:</b>
                        <input type="text" className={"form-control col-md-12"} ref={vaccineTypeRef} 
                            placeholder="Please enter vaccine type" maxLength={20} required/>
                    </label>
                    <br/>                
                    <label>
                        <b>Price:</b>
                        <input type="number" className={"form-control col-md-12"} ref={priceRef} 
                                placeholder="Please enter price" maxLength={20} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Side Effects:</b>
                        <input type="text" className={"form-control col-md-12"} ref={sideEffectsRef} 
                            placeholder="Please enter side effects" maxLength={20} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Origin:</b>
                        <input type="text" className={"form-control col-md-12"} ref={originRef} 
                            placeholder="Please enter vaccine origin" maxLength={20} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Doses Required:</b>
                        <input type="text" className={"form-control col-md-12"} ref={dosesRequiredRef} 
                            placeholder="Please enter doses required" maxLength={20} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Strains Covered:</b>
                        <input type="text" className={"form-control col-md-12"} ref={strainsCoveredRef} 
                            placeholder="Please enter strains covered name" maxLength={20} required/>
                    </label>
                    <br/>
                    <input type="submit" className={"btn btn-primary save-vaccine-button"} value="Save Vaccine" />
                </form>
                </>)}

                {username == "Admin" && (<>
                <h1 className="hospital-header">Hospitals</h1>
                <form className={"form col-md-10 hospitalForm"} onSubmit={readHospitalFormData}>                
                    <label>
                        <b>Name:</b>
                        <input type="text" className={"form-control col-md-12"} ref={hospitalNameRef} 
                            placeholder="Please enter vaccine name" maxLength={20} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Address</b>
                        <input type="text" className={"form-control col-md-12"} ref={hospitalAddressRef} 
                            placeholder="Please enter address" maxLength={20} required/>
                    </label>
                    <br/>                
                    <label>
                        <b>Type:</b>
                        <input type="text" className={"form-control col-md-12"} ref={hospitalTypeRef} 
                                placeholder="Please enter type (government/hospital" maxLength={20} required/>
                    </label>
                    <br/>
                    <label>
                        <b>Vaccines:</b>
                        <input type="text" className={"form-control col-md-12"} ref={hospitalVaccinesRef} 
                            placeholder="Please enter available vaccines" maxLength={20} required/>
                    </label>
                    <br/>
                    <input type="submit" className={"btn btn-primary save-hospital-button"} value="Save Hospital" />
                </form>
                </>)}
            </div>

            <h1>Pending Appointments</h1>

        </>
    )
}

export default Admin;