import React from "react";
import { useState, useEffect, useRef } from "react";
import img1 from "../Assets/Picture1.png";

const Workker = () => {
  const gcheck1 = useRef(null);
  const gcheck2 = useRef(null);
  const regform1 = useRef(null);
  const regform2 = useRef(null);
  const changegcolor = (a) => {
    if (a == 0) {
      gcheck1.current.classList.add("gchecked");
      gcheck2.current.classList.remove("gchecked");
    }
    if (a == 1) {
      gcheck2.current.classList.add("gchecked");
      gcheck1.current.classList.remove("gchecked");
    }
  };

  const changepage = (a) => {
    if (a == 0) {
      regform1.current.classList.add("signblock");
      regform2.current.classList.remove("signblock");
    } else if (a == 1) {
      regform2.current.classList.add("signblock");
      regform1.current.classList.remove("signblock");
    }
  };
  return (
    <>
      <div className="Loginsignup">
        <div ref={regform1} className="loginform ">
          <div className="signup1">
            <div className="signup11">
              <label>Username:</label>
              <input type="text" placeholder="Username" />
            </div>
            <div className="signup11">
              <label>Email:</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="signup11">
              <label>Password:</label>
              <input type="password" placeholder="Password" />
            </div>
            <div className="signup11">
              <label>Confirm Password:</label>
              <input type="password" placeholder="Confirm Password" />
            </div>
          </div>
          <div className="signup1">
            <div className="gendercheck">
              <label>Gender:</label>
              <div className="genderr">
                <div
                  ref={gcheck1}
                  className="genderchoose"
                  onClick={() => changegcolor(0)}
                >
                  Male
                </div>
                <div
                  ref={gcheck2}
                  className="genderchoose"
                  onClick={() => changegcolor(1)}
                >
                  Female
                </div>
              </div>
            </div>
            <div className="signup11">
              <label>Age:</label>
              <input type="number"></input>
            </div>

            <div className="signup11">
              <label>Height(cm):</label>
              <input type="number"></input>
            </div>

            <div className="signup11">
              <label>Weight(kg):</label>
              <input type="number"></input>
            </div>
          </div>
          <div className="signupbtnfront">
            <button className="signupbtn" onClick={() => changepage(0)}>
              Next
            </button>
          </div>
        </div>
        <div ref={regform2} className="loginform signblock">
          <div className="signupbtnback">
            <button className="signupbtn" onClick={() => changepage(1)}>
              Prev
            </button>
            <button className="signupbtn" onClick={() => changepage(2)}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Workker;
