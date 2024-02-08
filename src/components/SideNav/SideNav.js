import "./SideNav.scss";
import squat from "../../assets/images/woman_squatting.jpg";
import pullup from "../../assets/images/pullup.jpg";
import pushup from "../../assets/images/pushup.jpg";
import rest from "../../assets/images/rest.jpg";
import run from "../../assets/images/run.jpg";

const SideNav = () => {
  return (
    <div className="sidenav">
      <h2 className="sidenav__title">Workout Schedule</h2>
      <div className="sidenav__card-container">
        <div className="sidenav__card">
          <img className="sidenav__image" src={squat} alt="barbell squat" />
          <div className="sidenav__container">
            <p className="sidenav__day">Mon</p>
            <p className="sidenav__workout">Legs</p>
            <p className="sidenav__status">Complete</p>
          </div>
        </div>
        <div className="sidenav__card">
          <img className="sidenav__image" src={pullup} alt="barbell squat" />
          <div className="sidenav__container">
            <p className="sidenav__day">Tue</p>
            <p className="sidenav__workout">Upper - Pull</p>
            <p className="sidenav__status">Complete</p>
          </div>
        </div>
        <div className="sidenav__card">
          <img className="sidenav__image" src={rest} alt="barbell squat" />
          <div className="sidenav__container">
            <p className="sidenav__day">Wed</p>
            <p className="sidenav__workout">Rest</p>
            <p className="sidenav__status">Complete</p>
          </div>
        </div>
        <div className="sidenav__card sidenav__card--current">
          <img
            className="sidenav__image sidenav__image--current"
            src={squat}
            alt="barbell squat"
          />
          <div className="sidenav__container">
            <p className="sidenav__day">Thur</p>
            <p className="sidenav__workout">Legs</p>
            <p className="sidenav__status">In progress</p>
          </div>
        </div>
        <div className="sidenav__card">
          <img className="sidenav__image" src={pushup} alt="barbell squat" />
          <div className="sidenav__container">
            <p className="sidenav__day">Fri</p>
            <p className="sidenav__workout">Upper - Push</p>
            <p className="sidenav__status">Incomplete</p>
          </div>
        </div>
        <div className="sidenav__card">
          <img className="sidenav__image" src={run} alt="barbell squat" />
          <div className="sidenav__container">
            <p className="sidenav__day">Sat</p>
            <p className="sidenav__workout">Cardio & Abs</p>
            <p className="sidenav__status">Incomplete</p>
          </div>
        </div>
        <div className="sidenav__card">
          <img className="sidenav__image" src={rest} alt="barbell squat" />
          <div className="sidenav__container">
            <p className="sidenav__day">Sun</p>
            <p className="sidenav__workout">Rest</p>
            <p className="sidenav__status">Incomplete</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
