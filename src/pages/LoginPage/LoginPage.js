import "./LoginPage.scss";
import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginPage = ({ setUserLoggedIn }) => {
  const [user, setUser] = useState(null);
  const id = 1;

  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isLoggedIn", true);
    setUserLoggedIn(true);
    navigate(`/users/${id}`);
  };

  const URL = process.env.REACT_APP_URL;
  const PORT = process.env.REACT_APP_PORT;

  const getUser = async () => {
    try {
      const response = await axios.get(`${URL}${PORT}/users/${id}`);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="login">
        <h2 className="login__title">Login</h2>
        <form className="login__form">
          <label htmlFor="email" className="login__form-label">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="login__form-input"
            defaultValue={user.email}
          />

          <label htmlFor="password" className="login__form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="login__form-input"
            defaultValue={user.password}
          />

          <div className="login__form-remember">
            <label htmlFor="stay-logged-in" className="login__form-label">
              Remember me
            </label>
            <input
              type="checkbox"
              name="stay-logged-in"
              id="stay-logged-in"
              defaultChecked
            />
          </div>

          <div className="login__form-btns">
            <Link to="/signup" className="login__form-btn">
              Sign Up
            </Link>
            <button
              to={`/users/${id}`}
              className="login__form-btn login__form-btn--submit"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
