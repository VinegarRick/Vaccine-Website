import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStore = useSelector((state) => state.userReducer);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");

  useEffect(() => {}, []);

  const onTextChange = (evt) => {
    const target = evt.target;
    const classList = target.classList;
    const value = target.value;

    if (classList.contains("username")) {
      setUserName(value);
    } else if (classList.contains("pass")) {
      setPassword(value);
    } else if (classList.contains("email")) {
      setEmail(value)
    } else if (classList.contains("mobile")) {
      setMobile(value)
    } else if (classList.contains("address")) {
      setAddress(value)
    } else if (classList.contains("age")) {
      setAge(value)
    } else if (classList.contains("gender")) {
      setGender(value)
    } 

    evt.preventDefault();
  };

  const signUpUser = (evt) => {
    //dispatch(addUserToDB(username, password))

    evt.preventDefault();
  };

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  return (
    <div className="sign-in-container">
      <div className="signup-form col-md-8">
        <h1 className="sign-in-text">Sign Up</h1>
        <p className="subtext">Stay updated on your vaccinations</p>

        <div>
          <input
            type="text"
            className="form-control username-input-field"
            placeholder="Username"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="password"
            className="form-control input-field"
            placeholder="Password"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control input-field"
            placeholder="Email"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control input-field"
            placeholder="Mobile"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control input-field"
            placeholder="Address"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="number"
            className="form-control input-field"
            placeholder="Age"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control input-field"
            placeholder="Gender"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <input
          type="button"
          className="btn btn-primary sign-in-button"
          value="Sign Up"
          onClick={signUpUser}
        />

        <p className="join-here-text">
          Already have an account?{" "}
          <span className="join-here-link" onClick={navigateToSignIn}>
            Sign in.
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
