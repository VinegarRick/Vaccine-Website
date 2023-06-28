import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../State/User/userActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStore = useSelector((state) => state.userReducer.user);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const onTextChange = (evt) => {
    const target = evt.target;
    const classList = target.classList;
    const value = target.value;

    if (classList.contains("username")) {
      setUserName(value);
    } else if (classList.contains("pass")) {
      setPassword(value);
    }

    evt.preventDefault();
  };

  const signIn = (evt) => {
    const creds = {
      username: username,
      password: password
    }
    dispatch(signInUser(creds))
    navigate("/home");

    evt.preventDefault();
  };

  const navigateToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className="sign-in-container">
      <div className="signin-form col-md-8">
        <h1 className="sign-in-text">Sign In</h1>
        <p className="subtext">Stay updated on your vaccinations</p>

        <div>
          <input
            type="text"
            className="form-control username-input-field username"
            placeholder="Username"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control input-field pass"
            placeholder="Password"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <input
          type="button"
          className="btn btn-primary sign-in-button"
          value="Sign In"
          onClick={signIn}
        />

        <p className="join-here-text">
          New to site?{" "}
          <span className="join-here-link" onClick={navigateToSignUp}>
            Join here.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
