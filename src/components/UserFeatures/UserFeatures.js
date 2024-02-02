import "./UserFeatures.scss";
import dumbbells from "../../assests/images/dumbbells.jpg";
import food from "../../assests/images/food.jpg";
import graph from "../../assests/images/graph.jpg";
import { Link, useParams } from "react-router-dom";

const UserFeatures = () => {
  let { id } = useParams();

  return (
    <div className="features">
      <div className="features__container">
        <div className="features__card">
          <img
            src={dumbbells}
            alt="Rack of dumbbells"
            className="features__card-image"
          />
          <div className="features__card-container">
            <Link to="workouts">
              <h4 className="features__card-title">Start workout</h4>
            </Link>
          </div>
        </div>
        <div className="features__card">
          <img
            src={food}
            alt="Rack of dumbbells"
            className="features__card-image"
          />
          <div className="features__card-container">
            <h4 className="features__card-title">Track meals</h4>
          </div>
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
