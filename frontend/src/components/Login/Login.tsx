import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [toggle, setToggle] = useState("login");

  function handleToggle() {
    if (toggle === "login") setToggle("signup");
    else setToggle("login");
  }

  return (
    <>
      <div className="container">
        <div className="logo-container">
          <h1>Login To Blog Application</h1>
        </div>
        {toggle === "login" ? (
          <div className="login-container">
            <input type="text" placeholder="Enter your username" />
            <input type="text" placeholder="Enter passowrd" />

            <button>Login</button>
            <p>OR</p>
            <button onClick={() => handleToggle()}>Signup</button>
          </div>
        ) : (
          <div className="signup-container">
            <input type="text" placeholder="Enter your name" />
            <input type="text" placeholder="Enter your username" />
            <input type="text" placeholder="Enter passowrd" />

            <button>Signup</button>
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
