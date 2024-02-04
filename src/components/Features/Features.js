import "./Features.scss";
import dumbbells from "../../assets/images/dumbbells.jpg";
import food from "../../assets/images/food.jpg";
import graph from "../../assets/images/graph.jpg";

const Features = () => {
  return (
    <div className="features">
      <div className="features__heading">
        <h2 className="features__title">Features</h2>
      </div>
      <div className="features__container">
        <div className="features__card">
          <img
            src={dumbbells}
            alt="Rack of dumbbells"
            className="features__card-image"
          />
          <div className="features__card-container">
            <h4 className="features__card-title">
              Bespoke workouts tailored to your goals
            </h4>
          </div>
        </div>
        <div className="features__card">
          <img
            src={food}
            alt="Rack of dumbbells"
            className="features__card-image"
          />
          <div className="features__card-container">
            <h4 className="features__card-title">
              Meals you will actually enjoy - we don't cut out any food groups
            </h4>
          </div>
        </div>
        <div className="features__card">
          <img
            src={graph}
            alt="Rack of dumbbells"
            className="features__card-image"
          />
          <div className="features__card-container">
            <h4 className="features__card-title">
              Keep track of your progress
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
