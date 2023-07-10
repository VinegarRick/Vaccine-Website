const express = require("express");
const hospitalRoutes = express.Router({});
const HospitalModel = require("../data-model/hospitalDataModel")

hospitalRoutes.post("/api/savehospital", (req, res) => {
  // Read the user object sent in request body
  console.log("hospital ", req.body);
  let HospitalToSave = req.body;

  HospitalModel
    .findOne({ name: req.body.name })
    .then((existingHospital) => {
      if (existingHospital) {
        console.log("hospital already exists: ", existingHospital);
        res.sendStatus(409);
      } else {
        let newHospital = new HospitalModel(HospitalToSave);
        newHospital
          .save()
          .then((newHospital) => {
            console.log("successful save ", newHospital);
            res.sendStatus(201);
          })
          .catch((err1) => {
            console.log("err saving hospital", err1);
            res.sendStatus(500);
          });
      }
    })
    .catch((err) => {
      console.log("err while saving hospital ", err);
      res.sendStatus(500);
    });
});
  
hospitalRoutes.get("/api/gethospitals", (req, res) => {
  HospitalModel
    .find()
    .then((allhospitals) => {
      res.send(allhospitals);
    })
    .catch(() => {
      res.send("error while fetching hospitals");
    });
});

module.exports = hospitalRoutes;