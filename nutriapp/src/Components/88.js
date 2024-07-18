import React from "react";
import { useState, useEffect, useRef } from "react";
import img1 from "../Assets/Picture1.png";

const Workker = () => {
  const gcheck1 = useRef(null);
  const gcheck2 = useRef(null);
  const regform1 = useRef(null);
  const regform2 = useRef(null);
  const hcheck1 = useRef(null);
  const hcheck2 = useRef(null);
  const hcheck3 = useRef(null);
  const icheck1 = useRef(null);
  const icheck2 = useRef(null);
  const icheck3 = useRef(null);
  const icheck4 = useRef(null);
  const jcheck1 = useRef(null);
  const jcheck2 = useRef(null);
  const jcheck3 = useRef(null);
  const jcheck4 = useRef(null);
  const jcheck5 = useRef(null);

  const icheck = [icheck1, icheck2, icheck3, icheck4];
  const jcheck = [jcheck1, jcheck2, jcheck3, jcheck4, jcheck5];
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

  const changegcolor2 = (a) => {
    if (a == 0) {
      hcheck1.current.classList.add("gchecked");
      hcheck2.current.classList.remove("gchecked");
      hcheck3.current.classList.remove("gchecked");
    }
    if (a == 1) {
      hcheck2.current.classList.add("gchecked");
      hcheck1.current.classList.remove("gchecked");
      hcheck3.current.classList.remove("gchecked");
    }
    if (a == 2) {
      hcheck3.current.classList.add("gchecked");
      hcheck1.current.classList.remove("gchecked");
      hcheck2.current.classList.remove("gchecked");
    }
  };

  const changegcolor3 = (a) => {
    icheck.forEach((ref, index) => {
      if (index == a) {
        if (ref.current.classList.contains("gchecked")) {
          ref.current.classList.remove("gchecked");
        } else {
          ref.current.classList.add("gchecked");
        }
      }
    });
  };

  const changegcolor4 = (a) => {
    jcheck.forEach((ref, index) => {
      if (index == a) {
        ref.current.classList.add("gchecked");
      } else {
        ref.current.classList.remove("gchecked");
      }
    });
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
          <div className="regbackbtn">
            <button className="signupbtn">Go Back</button>
          </div>
          <div className="signup1" style={{ paddingTop: "90px" }}>
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
          </div>
          <div className="signup1" style={{ paddingTop: "90px" }}>
            <div className="signup11">
              <label>Age:</label>
              <input type="number" placeholder="18"></input>
            </div>

            <div className="signup11">
              <label>Height(cm):</label>
              <input type="number" placeholder="170"></input>
            </div>

            <div className="signup11">
              <label>Weight(kg):</label>
              <input type="number" placeholder="65"></input>
            </div>

            <div className="reasoncheck">
              <label>Select Your Goal:</label>
              <div
                ref={hcheck1}
                className="goalcheck"
                onClick={() => changegcolor2(0)}
              >
                Loose Weight
              </div>
              <div
                ref={hcheck2}
                className="goalcheck"
                onClick={() => changegcolor2(1)}
              >
                Gain Weight
              </div>
              <div
                ref={hcheck3}
                className="goalcheck"
                onClick={() => changegcolor2(2)}
              >
                Maintain Weight
              </div>
            </div>
          </div>
          <div className="signupbtnfront">
            <button className="signupbtn" onClick={() => changepage(0)}>
              Next
            </button>
          </div>
        </div>
        <div ref={regform2} className="loginform signblock">
          <div className="healthissues">
            <label>Select Health Issues:</label>
            <div className="hselect">
              <div
                ref={icheck1}
                className="hissues"
                onClick={() => changegcolor3(0)}
              >
                Diabities
              </div>
              <div
                ref={icheck2}
                className="hissues"
                onClick={() => changegcolor3(1)}
              >
                Low BP
              </div>
            </div>
            <div className="hselect">
              <div
                ref={icheck3}
                className="hissues"
                onClick={() => changegcolor3(2)}
              >
                High BP
              </div>
              <div
                ref={icheck4}
                className="hissues"
                onClick={() => changegcolor3(3)}
              >
                Iron Deficiency
              </div>
            </div>
          </div>
          <div className="healthissues">
            <label>Activity Level:</label>
            <div className="hselect1">
              <div
                ref={jcheck1}
                className="hissues1"
                key={0}
                onClick={() => changegcolor4(0)}
              >
                Sedentary
              </div>
              <div
                ref={jcheck2}
                className="hissues1"
                key={1}
                onClick={() => changegcolor4(1)}
              >
                Lightly Active
              </div>
              <div
                ref={jcheck3}
                className="hissues1"
                key={2}
                onClick={() => changegcolor4(2)}
              >
                Moderately Active
              </div>
              <div
                ref={jcheck4}
                className="hissues1"
                key={3}
                onClick={() => changegcolor4(3)}
              >
                Very Active
              </div>
              <div
                ref={jcheck5}
                className="hissues1"
                key={4}
                onClick={() => changegcolor4(4)}
              >
                Extremely Active
              </div>
            </div>
          </div>

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
