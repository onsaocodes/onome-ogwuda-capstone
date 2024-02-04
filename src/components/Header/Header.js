import "./Header.scss";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

const Header = ({ userLoggedIn, setUserLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    setUserLoggedIn(false);
    navigate("/");
  };

  return (
    <header>
      <nav className="nav">
        <Link to="/" className="nav__link">
          <div className="nav__logo">
            <img src={logo} alt="dumbbell" className="nav__logo-img" />
            <h2 className="nav__logo-text">habitrack</h2>
          </div>
        </Link>
        {userLoggedIn ? (
          <button className="nav__button" onClick={handleLogOut}>
            Logout
          </button>
        ) : (
          <Link to="/login" className="nav__button">
            Members Area
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
