import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {

  }, []);

  const onTextChange = (evt) => {
    const target = evt.target;
    const classList = target.classList;
    const value = target.value;

    /*if (classList.contains("username")) {
      setUserName(value);
    } else if (classList.contains("pass")) {
      setPassword(value);
    } else {
      //setMobile(value);
    }*/

    evt.preventDefault();
  };

  const signInUser = (evt) => {

    evt.preventDefault();
  };

  const signUpUser = (evt) => {
    navigate("/signup")

    evt.preventDefault();
  };


  return (
    <>
      <h1>Sign In</h1>
      <section className="componentClass">
        <div className="form col-md-8">
          <div className="col-md-12">
            <b>User Name</b>
            <input
              type="text"
              className="form-control col-md-6 username"
              //value={userName}
              placeholder="Enter user name here"
              onChange={onTextChange}
              maxLength={40}
            />
          </div>

          <div className="col-md-12">
            <b>Password</b>
            <input
              type="password"
              className="form-control col-md-6 pass"
              //value={password}
              placeholder="Enter password here"
              onChange={onTextChange}
              maxLength={40}
            />
          </div>

          <input
            type="button"
            className="btn btn-primary col-md-2 signInUser"
            value="Sign In"
            onClick={signInUser}
          />

            {/*<p>New to site? Join here.</p>
            <input
                type="button"
                className="btn btn-primary col-md-2 signUpUser"
                value="Sign Up"
                onClick={signUpUser}
              />*/}

        </div>
      </section>

      <div>
      <p>New to site? Join here.</p>
        <input
            type="button"
            className="btn btn-primary col-md-2 signUpUser"
            value="Sign Up"
            onClick={signUpUser}
          />
      </div>


    </>
  );
};

export default SignIn;
