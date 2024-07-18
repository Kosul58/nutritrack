import React from "react";
import { useRef, useState, useEffect } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const Calculate = () => {
  const closemodal1 = useRef(null);
  const closemodal2 = useRef(null);
  const gcheck1 = useRef(null);
  const gcheck2 = useRef(null);
  const jcheck1 = useRef(null);
  const jcheck2 = useRef(null);
  const jcheck3 = useRef(null);
  const jcheck4 = useRef(null);
  const jcheck5 = useRef(null);

  const jcheck = [jcheck1, jcheck2, jcheck3, jcheck4, jcheck5];

  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");
  const [inputValuex1, setInputValuex1] = useState("");
  const [inputValuex2, setInputValuex2] = useState("");
  const [inputValuex3, setInputValuex3] = useState("");
  const [inputValuex4, setInputValuex4] = useState("");
  const [submittedValue2, setSubmittedValue2] = useState("");

  const handleChange1 = (event) => {
    setInputValue1(event.target.value);
  };
  const handleChange2 = (event) => {
    setInputValue2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const inputValue11 = inputValue1 / 100;
    setSubmittedValue((inputValue2 / inputValue11 ** 2).toFixed(2));
  };

  const hanglechangex1 = (event) => {
    setInputValuex1(event.target.value);
  };
  const hanglechangex2 = (event) => {
    setInputValuex2(event.target.value);
  };
  const hanglechangex3 = (event) => {
    setInputValuex3(event.target.value);
  };
  const hanglechangex4 = (event) => {
    setInputValuex4(event.target.value);
  };

  const handleSubmit2 = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setSubmittedValue2(inputValuex3);
  };

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
  const changegcolor4 = (a) => {
    jcheck.forEach((ref, index) => {
      if (index == a) {
        ref.current.classList.add("gchecked");
      } else {
        ref.current.classList.remove("gchecked");
      }
    });
  };

  const modalopen = (a) => {
    if (a == 0) {
      closemodal1.current.classList.remove("signblock");
      closemodal2.current.classList.add("signblock");
    } else if (a == 1) {
      closemodal2.current.classList.remove("signblock");
      closemodal1.current.classList.add("signblock");
    }
  };
  const modalclose = (a) => {
    if (a == 0) {
      closemodal1.current.classList.add("signblock");
    } else if (a == 1) {
      closemodal2.current.classList.add("signblock");
    }
  };

  return (
    <div className="Loginsignup">
      <div className="loginform ">
        <div className="regbackbtn">
          <button className="signupbtn">Go Back</button>
        </div>

        <div className="signup1" style={{ justifyContent: "center" }}>
          <div className="calc1" onClick={() => modalopen(0)}>
            BMI
          </div>
        </div>
        <div className="signup1" style={{ justifyContent: "center" }}>
          <div className="calc1" onClick={() => modalopen(1)}>
            BMR
          </div>
        </div>
        <div className="signupbtnfront">
          <button className="signupbtn">Next</button>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="loginform1 signblock"
        ref={closemodal1}
      >
        <div className="regbackbtn" onClick={() => modalclose(0)}>
          <IoIosCloseCircle size={30} />
        </div>
        <div className="signup11">
          <label>Height(cm):</label>
          <input
            type="number"
            value={inputValue1}
            onChange={handleChange1}
          ></input>
        </div>
        <div className="signup11">
          <label>Weight(kg):</label>
          <input
            type="number"
            value={inputValue2}
            onChange={handleChange2}
          ></input>
        </div>
        <button type="submit" className="signupbtn">
          Calculate
        </button>
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          {submittedValue && <span>BMI: {submittedValue}</span>}
        </div>
      </form>
      <form
        onSubmit={handleSubmit2}
        className="loginform1 signblock"
        ref={closemodal2}
      >
        <div className="regbackbtn" onClick={() => modalclose(1)}>
          <IoIosCloseCircle size={30} />
        </div>
        <div className="signup11" style={{ marginTop: "10px" }}>
          <label>Height(cm):</label>
          <input type="number"></input>
        </div>
        <div className="signup11">
          <label>Weight(kg):</label>
          <input type="number"></input>
        </div>

        <div className="hkkh1">
          <div className="healthissues" style={{ marginTop: "-40px" }}>
            <label>Activity Level:</label>
            <div className="hselect1">
              <div
                ref={jcheck1}
                className="hissues1"
                style={{ height: "30px" }}
                key={0}
                onClick={() => changegcolor4(0)}
                value={1.2}
                onChange={hanglechangex3}
              >
                Sedentary
              </div>
              <div
                ref={jcheck2}
                className="hissues1"
                style={{ height: "30px" }}
                key={1}
                onClick={() => changegcolor4(1)}
                value={1.375}
                onChange={hanglechangex3}
              >
                Lightly Active
              </div>
              <div
                ref={jcheck3}
                className="hissues1"
                style={{ height: "30px" }}
                key={2}
                onClick={() => changegcolor4(2)}
                value={1.55}
                onChange={hanglechangex3}
              >
                Moderately Active
              </div>
              <div
                ref={jcheck4}
                className="hissues1"
                style={{ height: "30px" }}
                key={3}
                onClick={() => changegcolor4(3)}
                value={1.725}
                onChange={hanglechangex3}
              >
                Very Active
              </div>
              <div
                ref={jcheck5}
                className="hissues1"
                style={{ height: "30px" }}
                key={4}
                onClick={() => changegcolor4(4)}
                value={1.9}
                onChange={hanglechangex3}
              >
                Extremely Active
              </div>
            </div>
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

        <button type="submit" className="signupbtn">
          Calculate
        </button>
        <div style={{ marginTop: "20px", fontSize: "24px" }}>
          {submittedValue2 && <span>BMI: {submittedValue2}</span>}
        </div>
      </form>
    </div>
  );
};

export default Calculate;
