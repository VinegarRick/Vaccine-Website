import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../../State/User/userActions";
import { FetchVaccinesFromDB } from "../../State/Vaccine/vaccineActions";
//import { FetchHospitalsFromDB } from "../../State/Hospital/hospitalActions";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStore = useSelector((state) => state.userReducer.user);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [wrongPassword, setWrongPassword] = useState(false);
  const [userDoesNotExist, setUserDoesNotExist] = useState(false);

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

  const signIn = async (evt) => {
    const creds = {
      username: username,
      password: password
    }

    /*try {
      const result = await dispatch(signInUser(creds))
      console.log("yoyo: " + result)
      if (result == 1) {
        setUserDoesNotExist(true)
      } else if (result == -1) {
        setWrongPassword(true)
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error while signing in", error)
    }*/

    dispatch(signInUser(creds))
      .then((result) => {
        dispatch(FetchVaccinesFromDB())
        navigate("/home")
      })
      .catch((error) => {
        if (error.status == 404) {
          setUserDoesNotExist(true)
        } else if (error.status == 401) {
          setWrongPassword(true)
        } else {
          console.log("Error while signing in")
        }
      })

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
          {userDoesNotExist && <p style={{ color: "red" }}> Username does not exist </p>}
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

        <div>
          {wrongPassword && <p style={{ color: "red" }}> Incorrect password </p>}
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
