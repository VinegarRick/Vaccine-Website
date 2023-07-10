const express = require("express");
const vaccineRoutes = express.Router({});
const VaccineModel = require("../data-model/vaccineDataModel")

vaccineRoutes.post("/api/savevaccine", (req, res) => {
  // Read the user object sent in request body
  console.log("vaccine ", req.body);
  let vaccineToSave = req.body;

  VaccineModel
    .findOne({ name: req.body.name })
    .then((existingVaccine) => {
      if (existingVaccine) {
        console.log("vaccine already exists: ", existingVaccine);
        res.sendStatus(409);
      } else {
        let newVaccine = new VaccineModel(vaccineToSave);
        newVaccine
          .save()
          .then((newVaccine) => {
            console.log("successful save ", newVaccine);
            res.sendStatus(201);
          })
          .catch((err1) => {
            console.log("err saving vaccine", err1);
            res.sendStatus(500);
          });
      }
    })
    .catch((err) => {
      console.log("err while saving vaccine ", err);
      res.sendStatus(500);
    });
});
  
vaccineRoutes.get("/api/getvaccines", (req, res) => {
  VaccineModel
    .find()
    .then((allvaccines) => {
      res.send(allvaccines);
    })
    .catch(() => {
      res.send("error while fetching vaccines");
    });
});

module.exports = vaccineRoutes;