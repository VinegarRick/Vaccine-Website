const express = require("express");
const adminRoutes = express.Router({caseSensitive:true})//options for router can be put in, like case sensetive

adminRoutes.get('/Hello',(req, res)=>{res.send("I am the true hello from express route")})

adminRoutes.get('/',(req, res)=>{res.send("I am the default route from admin router")})

module.exports = adminRoutes;