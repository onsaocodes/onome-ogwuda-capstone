import "./MealPage.scss";
import africa from "../../assets/images/africa.jpg";
import india from "../../assets/images/india.jpg";
import custom from "../../assets/images/custom.jpg";
import america from "../../assets/images/america.jpg";
import british from "../../assets/images/british.jpg";
import vegetarian from "../../assets/images/vegetarian.jpg";

const MealPage = () => {
  return (
    <div className="meals">
      <h2 className="meals__title">Meal Plans</h2>
      <div className="meals__card-container">
        <div className="meals__card  meals__card--current">
          <img
            className="meals__image meals__image--current"
            src={africa}
            alt="African contient"
          />
          <div className="meals__container">
            <p className="meals__day">Afro Food</p>
            <p className="meals__status">Current Plan</p>
          </div>
        </div>
        <div className="meals__card">
          <img className="meals__image" src={india} alt="barbell squat" />
          <div className="meals__container">
            <p className="meals__day">Indian Food</p>
          </div>
        </div>
        <div className="meals__card">
          <img className="meals__image" src={america} alt="barbell squat" />
          <div className="meals__container">
            <p className="meals__day">American Food</p>
          </div>
        </div>
        <div className="meals__card">
          <img className="meals__image" src={british} alt="barbell squat" />
          <div className="meals__container">
            <p className="meals__day">British</p>
          </div>
        </div>
        <div className="meals__card">
          <img className="meals__image" src={vegetarian} alt="barbell squat" />
          <div className="meals__container">
            <p className="meals__day">Vegetarian</p>
          </div>
        </div>
        <div className="meals__card">
          <img className="sidenav__image" src={custom} alt="barbell squat" />
          <div className="sidenav__container">
            <p className="sidenav__day">Custom Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealPage;
