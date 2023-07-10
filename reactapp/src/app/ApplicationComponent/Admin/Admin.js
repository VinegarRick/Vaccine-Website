import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

let Admin = ()=>{
    const username = useSelector((state) => state.userReducer.user.username);
    let [hospitalList, setHospitalList] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let nameRef = useRef(null)
    let typeRef = useRef(null)
    let priceRef = useRef(null)
    let sideEffectsRef = useRef(null)
    let originRef = useRef(null)
    let dosesRequiredRef = useRef(null)
    let strainsCoveredRef = useRef(null)

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

    // once user has updated values in respective textboxes read it and send back to server
    let readFormData = (evt)=>{
        let vaccine = {
            name : nameRef.current.value,
            type : typeRef.current.value,
            price : priceRef.current.value,
            sideEffects : sideEffectsRef.current.value,
            origin : originRef.current.value,
            dosesRequired : dosesRequiredRef.current.value,
            strainsCovered : strainsCoveredRef.current.value
        }

        // to be handled still

        evt.preventDefault();
    }

    const handleItemClick = (hospitalName) => {
        setHospitalList((prevList) =>
          prevList.map((hospital) =>
            hospital.name === hospitalName ? { ...hospital, isExpanded: !hospital.isExpanded } : hospital
          )
        );
      };

    return(
        <>
            {username == "Admin" && (<>
            <h1>Vaccine</h1>
            <form className={"form col-md-10 vaccine"} onSubmit={readFormData}>                
                <label>
                    <b>Name:</b>
                    <input type="text" className={"form-control col-md-12"} ref={nameRef} 
                        placeholder="Please enter vaccine name" maxLength={20} required/>
                </label>
                <br/>
                <label>
                    <b>Type:</b>
                    <input type="text" className={"form-control col-md-12"} ref={typeRef} 
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
                <input type="submit" className={"btn btn-primary"} value="Save Vaccine" />
            </form>
            </>)}


        </>
    )
}

export default Admin;