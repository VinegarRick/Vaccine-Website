import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { connect, useSelector, useDispatch } from "react-redux";
import { signOutUser } from "../State/User/userActions";

const Header = () => {
  const username = useSelector((state) => state.userReducer.user.username);
  const dispatch = useDispatch();
  
  const signOutAction = (evt) => {
    dispatch(signOutUser());
    evt.preventDefault();
  };

  return (
    <>
      {username === "Guest" ? (
        <b>Please sign in to see other features.</b>
      ) : (
        <b>Hello {username}</b>
      )}
      <div className="navbar">
        <div className="nav-left-buttons">
          {username === "Admin" && (
            <NavLink to="/admin" className="navbar-link" activeClassName="success">
              Admin
            </NavLink>
          )}

          <NavLink to="/home" className="navbar-link" activeClassName="success">
            Home
          </NavLink>
          <NavLink to="/about" className="navbar-link" activeClassName="success">
            About
          </NavLink>
          <NavLink to="/stats" className="navbar-link" activeClassName="success">
            Statistics
          </NavLink>
          
          {username !== "Guest" && (
            <NavLink to="/hospitals" className="navbar-link" activeClassName="success">
              Schedule
            </NavLink>)}
          {username !== "Guest" && (
            <NavLink to="/visits" className="navbar-link" activeClassName="success">
              Visits
            </NavLink>
          )}
        </div>

        <div className="nav-right-buttons">
          {username === "Guest" && (
            <NavLink to="/signin" className="navbar-link" activeClassName="success">
              Login
            </NavLink>
          )}
          {username !== "Guest" && (
            <NavLink
              to="/home"
              className="navbar-link"
              activeClassName="success"
              onClick={signOutAction}
            >
              Logout
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
