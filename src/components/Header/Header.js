import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__link">
          <div className="nav__logo">
            <img src={logo} alt="dumbbell" className="nav__logo-img" />
            <h2 className="nav__logo-text">habitrack</h2>
          </div>
        </Link>
        <Link to="/login" className="nav__button">
          Members Area
        </Link>
      </nav>
    </header>
  );
};

export default Header;
