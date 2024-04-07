import "./index.css";
import RegistrationImg from "../../images/registration.png";

const WhyChooseUsSection = () => {
  return (
    <div className="whyChooseUs-section">
      <h1 className="heading">Why Choose Us?</h1>
      <div className="cards-container">
        <div className="card-1">
          <img src={RegistrationImg} alt="faculty" className="faculty-image" />
          <h2 className="card-heading">Expert Faculty</h2>
          <p className="card-description">
            The entire teaching and administrative force of a university,
            college, or school. one of the departments of learning, as theology,
            medicine
          </p>
        </div>
        <div className="card-1">
          <img src={RegistrationImg} alt="faculty" className="faculty-image" />
          <h2 className="card-heading">Expert Faculty</h2>
          <p className="card-description">
            The entire teaching and administrative force of a university,
            college, or school. one of the departments of learning, as theology,
            medicine
          </p>
        </div>
        <div className="card-1">
          <img src={RegistrationImg} alt="faculty" className="faculty-image" />
          <h2 className="card-heading">Expert Faculty</h2>
          <p className="card-description">
            The entire teaching and administrative force of a university,
            college, or school. one of the departments of learning, as theology,
            medicine
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsSection;
