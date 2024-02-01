import "./UserDashboardPage.scss";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboardPage = () => {
  const [user, setUser] = useState(null);
  let { id } = useParams();

  const URL = process.env.REACT_APP_URL;
  const PORT = process.env.REACT_APP_PORT;

  console.log(`${URL}${PORT}/users/${id}`);
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

  console.log(user);

  if (!user) {
    return <section className="user-absent">User not found...</section>;
  }

  return (
    <>
      <div className="user">
        <div className="user__title-container">
          <h2 className="user__title">Welcome {user.first_name}</h2>
        </div>
      </div>
    </>
  );
};

export default UserDashboardPage;
