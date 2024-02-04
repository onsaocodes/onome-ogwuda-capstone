import "./LandingPage.scss";
import hero_img from "../../assets/images/hero_image.png";
import Features from "../../components/Features/Features";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__heading">
            <h1 className="hero__title">Fitness made easy</h1>
            <p className="hero__text">Start your fitness journey today.</p>
            <Link to="/signup">
              <button className="hero__sign-up">Get started</button>
            </Link>
          </div>
          <img
            src={hero_img}
            alt="woman lunging with a barbell"
            className="hero__image"
          />
        </div>
      </div>
      <Features />
    </>
  );
};

export default LandingPage;
