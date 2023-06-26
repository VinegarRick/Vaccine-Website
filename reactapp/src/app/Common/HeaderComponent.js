import React from "react";
import { NavLink, useNavigate } from "react-router-dom";//hoooks for navigations
import { connect, useSelector } from "react-redux";

const Header = () => {

    //using connect and mapStateToProps
    //let userName = props.User.userName; //it is available as props as we are returning from mapSateToProps

    //let userName = useSelector((state)=>state.userReducer.User.userName)

    //by using useSelector hook
    //let password = useSelector((state)=>state.userReducer.User.password) //it is mapping store as props

    /*let goAboutHook = useNavigate();

    let goToAboutClick = (evt)=>{
        goAboutHook("/about/2023")
        evt.preventDefault();
    }*/

    return(
        <>
            <div className="navbar">
                <NavLink to="/home" className="nav-button" activeclassname="success" >Home </NavLink> 
                <NavLink to="/about" className="nav-button" activeclassname="success" >About </NavLink> 
                <NavLink to="/signin" className="nav-button" activeclassname="success" >Login </NavLink> 
                {/*{userName != "Guest" && (<>

                </>)*/}
            </div>
        </>
    )
}

export default Header;