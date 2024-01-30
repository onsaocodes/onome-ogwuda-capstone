import "./RegistrationPage.scss";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <>
      <div className="registration">
        <h2 className="registration__title">Tell us more about you</h2>
        <form className="registration__form">
          <label htmlFor="first-name" className="registration__form-label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            className="registration__form-input"
          />
          <label htmlFor="last-name" className="registration__form-label">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            className="registration__form-input"
          />
          <label htmlFor="dob" className="registration__form-label">
            Date of Birth
          </label>
          <input type="text" id="dob" className="registration__form-input" />
          <label htmlFor="number" className="registration__form-label">
            Phone Number
          </label>
          <input
            type="number"
            id="number"
            className="registration__form-input"
          />
          <label htmlFor="email" className="registration__form-label">
            Email
          </label>
          <input type="email" id="email" className="registration__form-input" />
          <div className="registration__form-btns">
            <Link to="/login" className="registration__form-btn">
              Login
            </Link>
            <Link to="/biometrics" className="registration__form-btn">
              Next
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;
