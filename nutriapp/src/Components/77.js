import React from "react";
import { useState, useEffect, useRef } from "react";
const Login = () => {
  return (
    <div className="Loginsignup">
      <form className="loginform ">
        <div className="regbackbtn">
          <button className="signupbtn">Go Back</button>
        </div>

        <div className="signup1" style={{ justifyContent: "center" }}>
          <div className="signup11">
            <label>Username:</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="signup11">
            <label>Password:</label>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="signupbtnfront">
          <button className="signupbtn">Next</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
