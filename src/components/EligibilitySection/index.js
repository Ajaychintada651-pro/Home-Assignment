import "./index.css";
import Timer from "../../images/timer.png";

const EligibilitySection = () => (
  <div className="eligibility-section-bg-cont">
    <div className="sub-card">
      <h3 style={{ marginBottom: "0px" }}>Levels</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={Timer} alt="timer" className="timer-image" />
        <p className="sub-card-txt">Three Levels</p>
      </div>
    </div>
    <div className="sub-card">
      <h3 style={{ marginBottom: "0px" }}>Duration</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={Timer} alt="timer" className="timer-image" />
        <p className="sub-card-txt">Three Levels</p>
      </div>
    </div>
    <div className="sub-card">
      <h3 style={{ marginBottom: "0px" }}>Exams</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={Timer} alt="timer" className="timer-image" />
        <p className="sub-card-txt">Three Levels</p>
      </div>
    </div>
    <div className="sub-card">
      <h3 style={{ marginBottom: "0px" }}>Exemptions</h3>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <img src={Timer} alt="timer" className="timer-image" />
        <p className="sub-card-txt">Three Levels</p>
      </div>
    </div>
  </div>
);

export default EligibilitySection;
