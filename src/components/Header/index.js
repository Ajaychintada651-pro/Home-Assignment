import "./index.css";

const Header = () => {
  return (
    <div className="bg-container">
      <h1 className="logo">IndigoLearn</h1>
      <div className="middle-container">
        <p>About</p>
        <p>Why Choose Us?</p>
        <p>Placement Assistance</p>
        <p>Learning</p>
      </div>
      <div className="header-btn-cont">
        <button className="login-button">Login/SignUp</button>
      </div>
    </div>
  );
};

export default Header;
