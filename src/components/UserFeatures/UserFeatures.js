import "./UserFeatures.scss";
import dumbbells from "../../assets/images/dumbbells.jpg";
import food from "../../assets/images/food.jpg";
import graph from "../../assets/images/graph.jpg";
import { Link } from "react-router-dom";

const UserFeatures = () => {
  return (
    <div className="features">
      <div className="features__container">
        <div className="features__card">
          <Link to="workouts" className="features__card-link">
            <img
              src={dumbbells}
              alt="Rack of dumbbells"
              className="features__card-image"
            />
            <div className="features__card-container">
              <h4 className="features__card-title">Start workout</h4>
            </div>
          </Link>
        </div>
        <div className="features__card">
          <Link to="meals" className="features__card-link">
            <img
              src={food}
              alt="Rack of dumbbells"
              className="features__card-image"
            />
            <div className="features__card-container">
              <h4 className="features__card-title">Track meals</h4>
            </div>
          </Link>
        </div>
        <div className="features__card">
          <img
            src={graph}
            alt="Rack of dumbbells"
            className="features__card-image"
          />
          <div className="features__card-container">
            <h4 className="features__card-title">Track progress</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFeatures;
