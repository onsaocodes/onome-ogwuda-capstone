import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WorkoutPage.scss";
import { Link } from "react-router-dom";

const WorkoutPage = () => {
  const [workout, setWorkout] = useState(null);
  let { id } = useParams();

  const URL = process.env.REACT_APP_URL;
  const PORT = process.env.REACT_APP_PORT;

  const getUserWorkouts = async () => {
    try {
      const response = await axios.get(`${URL}${PORT}/users/${id}/workouts`);
      setWorkout(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserWorkouts();
  }, []);

  if (!workout) {
    return <section className="workouts-absent">No workouts found...</section>;
  }

  const handleCompletion = () => {
    alert("Done");
  };

  return (
    <div className="workouts">
      <h3 className="workouts__header">Workouts</h3>
      <div className="workouts__next">
        <h4 className="workouts__selected">Next workout: Leg Day</h4>
        <div className="workouts__upcoming">
          <div className="workouts__upcoming-container">
            <div className="workouts__legday-container">
              <form>
                <div className="workouts__legday">
                  <iframe
                    width="200"
                    height="200"
                    src="https://www.youtube.com/embed/kRX2NfqM90g?si=mvglcfKM9ULD-3Sq"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>{workout[id - 1].exercise1_name}</p>
                  <p>{workout[id - 1].exercise1_reps}</p>
                </div>
                <div className="workouts__legday">
                  <iframe
                    width="200"
                    height="200"
                    src="https://www.youtube.com/embed/zU-f6DMCdAI?si=5twb-4JEF86OqxiI"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>{workout[id - 1].exercise2_name}</p>
                  <p>{workout[id - 1].exercise2_reps}</p>
                </div>
                <div className="workouts__legday">
                  <iframe
                    width="200"
                    height="200"
                    src="https://www.youtube.com/embed/4ZDm5EbiFI8?si=7277NXC58SIcdf2L"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>{workout[id - 1].exercise3_name}</p>
                  <p>{workout[id - 1].exercise3_reps}</p>
                </div>
                <div className="workouts__legday">
                  <iframe
                    width="200"
                    height="200"
                    src="https://www.youtube.com/embed/G_8LItOiZ0Q?si=6iaH1PBQ4dbv-ObX"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>{workout[id - 1].exercise4_name}</p>
                  <p>{workout[id - 1].exercise4_reps}</p>
                </div>
                <div className="workouts__legday">
                  <iframe
                    width="200"
                    height="200"
                    src="https://www.youtube.com/embed/mAgbXQdd4LM?si=KIaAfEkfRe3Sy-p3"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>{workout[id - 1].exercise5_name}</p>
                  <p>{workout[id - 1].exercise5_reps}</p>
                </div>
                <div className="workouts__legday">
                  <iframe
                    width="200"
                    height="200"
                    src="https://www.youtube.com/embed/Zep-wKHWkNM?si=d-7c8gKg9gFfW1Dt"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <p>{workout[id - 1].exercise6_name}</p>
                  <p>{workout[id - 1].exercise6_reps}</p>
                </div>
                <div
                  className="workouts__submission"
                  onSubmit={handleCompletion}
                >
                  <Link to={`/user/${id}`}>Complete Workout</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
