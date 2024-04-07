import "./index.css";
import { useState } from "react";

const LastSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="last-sec-bg-container">
      <div className="first-part">
        <h1 className="last-sec-heading">
          Kick off your ACCA prep journey with Indigo Learn
        </h1>
        <p className="paragraph">
          Sign In and get access to all our free courses
        </p>
        <button className="enroll-btn">Enroll Now</button>
      </div>
      <div className="cont-2">
        <div className="form-container">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input-styling"
          />
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="input-styling"
          />
          <input
            type="text"
            placeholder="Enter Your Phone No"
            className="input-styling"
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="input-styling"
          />
          <button className="callback-btn" onClick={handleOpen}>
            Request Call Back
          </button>
        </div>

        {open && (
          <div className="modal">
            <h1>Successfully Enrolled</h1>
            <button onClick={handleClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LastSection;
