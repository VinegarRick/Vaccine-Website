import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUpUser } from "../../State/User/userActions";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userStore = useSelector((state) => state.userReducer.user);
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("");
  const [signedUp, setSignedUp] = useState(false);
  const [userExists, setUserExists] = useState(false);

  useEffect(() => {
    return () => {
      console.log("Unmounting signup component")
      setSignedUp(false)
    }
  }, []);

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

  const signUp = async (evt) => {
    const newUser = {
      username: username,
      password: password,
      email: email,
      mobile: mobile,
      address: address,
      age: age,
      gender: gender
    }

    /*dispatch(signUpUser(newUser)).then((result) => {
      if (result) {
        setSignedUp(true)
        //setUserExists(false)
      } else {
        setUserExists(true)
      }
    })*/

    /*try {
      const result = await dispatch(signUpUser(newUser));
      if (result) {
        setSignedUp(true);
        // setUserExists(false)
      } else {
        setUserExists(true);
      }
    } catch (error) {
      console.log("Error while signing up:", error);
    }*/

    dispatch(signUpUser(newUser))
      .then((result) => {
        /*console.log(result.status)
        if (result.status === 201) {
          setSignedUp(true)
        } else {
          setUserExists(true)
        }*/
        setSignedUp(true)
      })
      .catch((error) => {
        console.log("Error while signing up", error)
        setUserExists(true)
      })

    evt.preventDefault();
  };

  const navigateToSignIn = () => {
    navigate("/signin");
  };

  return (
    <div>
      {signedUp ? (
        <h3> Your account has been successfully created. Please sign in!</h3>
      ) : (
    <div className="sign-in-container">
      <div className="signup-form col-md-8">
        <h1 className="sign-in-text">Sign Up</h1>
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
          {userExists && <p style={{ color: "red" }}> Username is already taken </p>}
        <div>

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
          <input
            type="text"
            className="form-control input-field email"
            placeholder="Email"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control input-field mobile"
            placeholder="Mobile"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control input-field address"
            placeholder="Address"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="number"
            className="form-control input-field age"
            placeholder="Age"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <div>
          <input
            type="text"
            className="form-control input-field gender"
            placeholder="Gender"
            onChange={onTextChange}
            maxLength={40}
          />
        </div>

        <input
          type="button"
          className="btn btn-primary sign-in-button"
          value="Sign Up"
          onClick={signUp}
        />

        <p className="join-here-text">
          Already have an account?{" "}
          <span className="join-here-link" onClick={navigateToSignIn}>
            Sign in.
          </span>
        </p>
      </div>
    </div>
    )}
    </div>
  );
};

export default SignUp;
