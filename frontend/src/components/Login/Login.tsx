import React, { useState } from "react";
import "./login.css";

import API from "../../services/api";

let signupObject = {
  username: "",
  email: "",
  password: "",
};

let loginObject = {
  username: "",
  passoword: "",
};

const Login = () => {
  const [toggle, setToggle] = useState("login");
  const [signupObj, setChanges] = useState(signupObject);
  const [loginObj, setLoginObj] = useState(loginObject);

  function handleLoginChanges(e: any) {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
  }
  function handleSignupChanges(e: any) {
    setChanges({
      ...signupObj,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  function handleToggle() {
    if (toggle === "login") setToggle("signup");
    else setToggle("login");
  }

  function loginUser() {
    // now we need to hit api endpoint for login and use store the access token refresh token in local/session storage
  }
  async function signupUser() {
    API.userSignup(signupObj);
  }

  return (
    <>
      <div className="container">
        <div className="logo-container">
          <h1>Login To Blog Application</h1>
        </div>
        {toggle === "login" ? (
          <div className="login-container">
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={handleLoginChanges}
            />
            <input
              type="text"
              placeholder="Enter Passowrd"
              name="password"
              onChange={handleLoginChanges}
            />

            <button onClick={loginUser}>Login</button>
            <p>OR</p>
            <button onClick={() => handleToggle()}>Signup</button>
          </div>
        ) : (
          <div className="signup-container">
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleSignupChanges}
            />
            <input
              type="text"
              placeholder="Enter Username"
              name="username"
              onChange={handleSignupChanges}
            />
            <input
              type="text"
              placeholder="Enter Passowrd"
              name="password"
              onChange={handleSignupChanges}
            />

            <button onClick={signupUser}>Signup</button>
            <p>OR</p>
            <button onClick={() => handleToggle()}>
              Already have an account
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
