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
        res.send(existingUser);
      } else {
        let newUser = new UserModel(userToSave);
        newUser
          .save()
          .then((newUser) => {
            console.log("successful signup ", newUser);
            res.send(newUser);
          })
          .catch((err1) => {
            console.log("err signup", err1);
            res.send("error while sign up");
          });
      }
    })
    .catch((err) => {
      console.log("err while login ", err);
      res.send("Error while Login - existing user");
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
                res.send("incorrect password")
            }
        } else {
            console.log("err signing in");
            res.send("error while signing in");
        };
      })
      .catch((err) => {
        console.log("err while signing in ", err);
        res.send("Error while signing in - user does not exist");
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