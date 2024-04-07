import "./index.css";
import RegistrationImg from "../../images/registration.png";
import { useState } from "react";
import Modal from "../Modal";

const TopSection = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNo, setPhoneNo] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="top-sec-bg-cont">
      <div className="cont-1">
        <h1>Become ACCA in 18 months</h1>
        <p>
          It must be the best learning platform to become ACCA in just 18 months
          and in this we are giving training in a very simple way It must be the
          best learning platform to become ACCA in just 18 months
        </p>
        <div className="cards-cont">
          <div className="card">
            <img
              src={RegistrationImg}
              alt="registration"
              className="registration-image"
            />
            <div
              style={{ display: "flex", flexDirection: "column", width: "20%" }}
            >
              <p className="card-text">registrations</p>
              <p className="card-text">128989323+</p>
            </div>
          </div>
          <div className="card">
            <img
              src={RegistrationImg}
              alt="registration"
              className="registration-image"
            />
            <div
              style={{ display: "flex", flexDirection: "column", width: "20%" }}
            >
              <p className="card-text">registrations</p>
              <p className="card-text">128989323+</p>
            </div>
          </div>
          <div className="card">
            <img
              src={RegistrationImg}
              alt="registration"
              className="registration-image"
            />
            <div
              style={{ display: "flex", flexDirection: "column", width: "20%" }}
            >
              <p className="card-text">registrations</p>
              <p className="card-text">128989323+</p>
            </div>
          </div>
          <div className="card">
            <img
              src={RegistrationImg}
              alt="registration"
              className="registration-image"
            />
            <div
              style={{ display: "flex", flexDirection: "column", width: "20%" }}
            >
              <p className="card-text">registrations</p>
              <p className="card-text">128989323+</p>
            </div>
          </div>
        </div>
      </div>
      <div className="cont-2">
        <div className="form-container">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input-styling"
            value={name}
          />
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="input-styling"
            value={email}
          />
          <input
            type="text"
            placeholder="Enter Your Phone No"
            className="input-styling"
            value={phoneNo}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-styling"
            value={password}
          />
          <button className="callback-btn" onClick={handleOpen}>
            Request Call Back
          </button>
        </div>
      </div>
      {open && (
        <div className="modal">
          <h1>Successfully Enrolled</h1>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default TopSection;
