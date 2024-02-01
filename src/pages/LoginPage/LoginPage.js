import "./LoginPage.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div className="login">
        <h2 className="login__title">Login</h2>
        <form className="login__form">
          <label htmlFor="email" className="login__form-label">
            Email Address
          </label>
          <input type="email" id="email" className="login__form-input" />
          <label htmlFor="password" className="login__form-label">
            Password
          </label>
          <input type="email" id="email" className="login__form-input" />
          <div className="login__form-remember">
            <label htmlFor="stay-logged-in" className="login__form-label">
              Remember me
            </label>
            <input type="checkbox" name="stay-logged-in" id="stay-logged-in" />
          </div>

          <div className="login__form-btns">
            <Link to="/signup" className="login__form-btn">
              Sign Up
            </Link>
            <Link to="/dashboard" className="login__form-btn">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
