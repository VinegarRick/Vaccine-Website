import React, { Component, PureComponent, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useHistory } from "react-router-dom";
import "./app.css";


import Home from "./ApplicationComponent/Home/Home";
//import Notifications from "./Common/Notifications";
import Header from "./Common/HeaderComponent";
//import Footer from "./Common/FooterComponent";
import About from "./ApplicationComponent/About/About";
import NotFound from "./Common/NotFoundPage";
//import User from "./ApplicationComponent/User/UserComponent";
import SignIn from "./ApplicationComponent/User/SignIn"
import SignUp from "./ApplicationComponent/User/SignUp"
import Admin from "./ApplicationComponent/Admin/Admin"
import Hospitals from "./ApplicationComponent/Appointment/Hospitals"


export default class Application extends Component {
    constructor(props){ //props is read only object is used to share info from one comp to another
        super(props);
        /*this.User = {
            Name : "Garrick",
            Age : 19
        }*/
    }

    render(){
        return(
            <Router>
                <Header/>
                
                <Routes>
                    <Route path="/" element={<Navigate replace to={"/home"} />}/>
                    <Route path="/home" element={<Home/>} />
                    <Route path="/admin" element={<Admin/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/hospitals" element={<Hospitals/>} />
                    <Route path="/signin" element={<SignIn/>} />
                    <Route path="/signup" element={<SignUp/>} />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
                
            </Router>
        )
    }
}