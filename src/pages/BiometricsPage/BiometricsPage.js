import "./BiometricsPage.scss";
import { Link } from "react-router-dom";

const BiometricsPage = () => {
  return (
    <>
      <div className="biometrics">
        <h2 className="biometrics__title">What do you want to achieve?</h2>
        <form className="biometrics__form">
          <div className="biometrics__form-weight">
            <label
              htmlFor="weight"
              className="biometrics__form-label biometrics__form-label--capitalise"
            >
              Fasted weight
            </label>
            <input type="text" id="weight" className="biometrics__form-input" />
            <label htmlFor="weight" className="biometrics__form-label">
              kg
            </label>
          </div>
          <div className="biometrics__form-desired">
            <label
              htmlFor="desired-weight"
              className="biometrics__form-label biometrics__form-label--capitalise"
            >
              Desired weight
            </label>
            <input
              type="text"
              id="desired-weight"
              className="biometrics__form-input"
            />
            <label
              htmlFor="weight"
              className="biometrics__form-label biometrics__form-label--capitalise"
            >
              kg
            </label>
          </div>
          <div className="biometrics__form-height">
            <label
              htmlFor="height"
              className="biometrics__form-label biometrics__form-label--capitalise"
            >
              Height
            </label>
            <input type="text" id="height" className="biometrics__form-input" />
            <label htmlFor="height" className="biometrics__form-label">
              cm
            </label>
          </div>
          <div className="biometrics__form-goals">
            <label
              htmlFor="goals"
              className="biometrics__form-label biometrics__form-label--capitalise"
            >
              Main goal
            </label>
            <button type="button" className="biometrics__form-goal">
              Fat loss
            </button>
            <button type="button" className="biometrics__form-goal">
              Muscle gain
            </button>
          </div>
          <div className="biometrics__form-dob">
            <label
              htmlFor="dob"
              className="biometrics__form-label biometrics__form-label--capitalise"
            >
              Date of Birth
            </label>
            <input type="text" id="dob" className="biometrics__form-input" />
          </div>
          <div className="biometrics__form-availability">
            <p className="biometrics__form-question">
              Days available to train for up to one hour per week:
            </p>
            <div className="biometrics__form-option">
              <input
                type="radio"
                name="days"
                id="days-2"
                className="biometrics__form-number"
              />
              <label
                htmlFor="days"
                className="biometrics__form-label biometrics__form-label--capitalise"
              >
                2
              </label>
            </div>
            <div className="biometrics__form-option">
              <input
                type="radio"
                name="days"
                id="days-2"
                className="biometrics__form-number"
                defaultChecked
              />
              <label htmlFor="days">3 (Recommended) </label>
            </div>
            <div className="biometrics__form-option">
              <input
                type="radio"
                name="days"
                id="days-2"
                className="biometrics__form-number"
              />
              <label htmlFor="days">4</label>
            </div>
            <div className="biometrics__form-option">
              <input
                type="radio"
                name="days"
                id="days-2"
                className="biometrics__form-number"
              />
              <label htmlFor="days">5</label>
            </div>
          </div>
          <div className="biometrics__form-levels">
            <p className="biometrics__form-question">
              What is current level of training?
            </p>
            <div className="biometrics__form-level">
              <input
                type="radio"
                name="days"
                id="days-2"
                className="biometrics__form-level"
              />
              <label htmlFor="days">Beginner - new to training</label>
            </div>
            <div className="biometrics__form-level">
              <input
                type="radio"
                name="days"
                id="days-2"
                className="biometrics__form-level"
              />
              <label htmlFor="days">
                Intermediate - have been training for more than 3 months
              </label>
            </div>
          </div>
          <div className="biometrics__form-btns">
            <Link to="/signup" className="biometrics__form-btn">
              Back
            </Link>
            <Link to="/dashboard" className="biometrics__form-btn">
              Create account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default BiometricsPage;
