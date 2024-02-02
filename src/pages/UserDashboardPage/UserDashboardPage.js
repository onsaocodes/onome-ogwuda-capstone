import "./UserDashboardPage.scss";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import UserFeatures from "../../components/UserFeatures/UserFeatures";

const UserDashboardPage = () => {
  const [user, setUser] = useState(null);
  let { id } = useParams();

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
    return <section className="user-absent">User not found...</section>;
  }

  return (
    <>
      <div className="user">
        <div className="user__title-container">
          <h2 className="user__title">Welcome {user.first_name}</h2>
        </div>
        <UserFeatures />
      </div>
    </>
  );
};

export default UserDashboardPage;
