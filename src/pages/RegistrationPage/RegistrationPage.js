import "./RegistrationPage.scss";
import hero_img from "../../assests/images/hero_image.png";
import Features from "../../components/Features/Features";
import { Link } from "react-router-dom";

const RegistrationPage = () => {
  return (
    <>
      <div className="registration">
        <h2 className="registration__title">Tell us more about you</h2>
        <form className="registration__form">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" id="dob" />
          <label htmlFor="number">Phone Number</label>
          <input type="number" id="number" />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
          <div className="registration__form-btns">
            <Link to="/dashboard" className="registration__form-btn">
              Submit
            </Link>
            <Link to="/login" className="registration__form-btn">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistrationPage;
