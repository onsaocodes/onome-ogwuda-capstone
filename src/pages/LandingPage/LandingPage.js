import "./LandingPage.scss";
import hero_img from "../../assests/images/hero_image.png";

const LandingPage = () => {
  return (
    <>
      <div className="hero">
        <div className="hero__container">
          {/* <h1 className="hero__title">Welcome</h1> */}
          <img
            src={hero_img}
            alt="women lunging with a barbell"
            className="hero__image"
          />
        </div>
        <button className="hero__sign-up">Start Training</button>
      </div>
    </>
  );
};

export default LandingPage;
