import "./LandingPage.scss";
import hero_img from "../../assests/images/hero_image.png";
import Features from "../../components/Features/Features";

const LandingPage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__heading">
            <h1 className="hero__title">Fitness made easy</h1>
            <p className="hero__text">Start your fitness journey today.</p>
            <button className="hero__sign-up">Get started</button>
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
