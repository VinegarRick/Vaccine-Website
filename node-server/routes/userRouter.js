const express = require("express");
const userRoutes = express.Router({});
//const userDataModel = require("../data-model/userDataModel");
const UserModel = require("../data-model/userDataModel")

userRoutes.post("/api/signupuser", (req, res) => {
  // Read the user object sent in request body
  console.log("user ", req.body);
  let userToSave = req.body;

  UserModel
    .findOne({ username: req.body.username })
    .then((existingUser) => {
      if (existingUser) {
        console.log("user already exists: ", existingUser);
        res.sendStatus(409);
      } else {
        let newUser = new UserModel(userToSave);
        newUser
          .save()
          .then((newUser) => {
            console.log("successful signup ", newUser);
            res.sendStatus(201);
          })
          .catch((err1) => {
            console.log("err signup", err1);
            res.sendStatus(500);
          });
      }
    })
    .catch((err) => {
      console.log("err while signing up ", err);
      res.sendStatus(500);
    });
});

userRoutes.post("/api/signinuser", (req, res) => {
    // Read the user object sent in request body
    console.log("user ", req.body);
    //let userToSign = req.body;
  
    UserModel
      .findOne({ username: req.body.username })
      .then((existingUser) => {
        if (existingUser) {
            if (existingUser.password == req.body.password) {
                console.log("user successfully signed in")
                res.send(existingUser)
            } else {
                console.log("unsuccessful sign in, incorrect password")
                res.sendStatus(401)
            }
        } else {
            console.log("err signing in, user does not exist");
            res.sendStatus(404);
        };
      })
      .catch((err) => {
        console.log("err while signing in ", err);
        res.sendStatus(500);
      });
  });
  

/*userRoutes.get("/api/getuser", (req, res) => {
  UserModel
    .find()
    .then((allusers) => {
      res.send(allusers);
    })
    .catch(() => {
      res.send("error while fetching users");
    });
});*/

module.exports = userRoutes;