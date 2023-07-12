import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux"; 
import axios from "axios";
import { useNavigate } from "react-router-dom";

let Hospitals = ()=>{
    const dispatch = useDispatch()

    const [selectedVaccine, setSelectedVaccine] = useState("")
    const vaccineList = ["Vaccine 1", "Vaccine 2", "Vaccine 3"] // Replace with your actual vaccine list
  
    const handleVaccineChange = (event) => {
      setSelectedVaccine(event.target.value)
    };

    return (
        <div className="appointment-container">
            <h2>Select Vaccine</h2>
            <select value={selectedVaccine} onChange={handleVaccineChange}>
            <option value="">-- Select a Vaccine --</option>
            {vaccineList.map((vaccine) => (
                <option key={vaccine} value={vaccine}>
                {vaccine}
                </option>
            ))}
            </select>
            {selectedVaccine && (
            <>
                <h3>Eligible Hospitals</h3>
                {/* Render the list of hospitals here */}
            </>
            )}
      </div>
    )
}

export default Hospitals