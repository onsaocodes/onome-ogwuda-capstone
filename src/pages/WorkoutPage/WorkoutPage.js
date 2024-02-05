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
  console.log("User workouts: ", workout);

  if (!workout) {
    return <section className="workouts-absent">No workouts found...</section>;
  }

  const handleCompletion = () => {
    alert("Done");
  };

  return (
    <div className="workouts">
      <div className="workouts__next">
        <h3 className="workouts__header">Workouts</h3>

        <h4 className="workouts__selected">Next workout: Leg Day</h4>
        <div className="workouts__upcoming">
          <div className="workouts__container">
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
              <div className="workouts__legday-description">
                <p className="workouts__legday-name">
                  {workout[id - 1].exercise1_name}
                </p>

                <p className="workouts__legday-reps">
                  Complete 3 sets of this workout, completing{" "}
                  {workout[id - 1].exercise1_reps} reps.
                </p>
                <form className="workouts__form">
                  <div className="workouts__form-set1">
                    <div className="workouts__form-set1--load">
                      <label htmlFor="set1">Load (kg) </label>
                      <input
                        type="text"
                        name="set1"
                        id="set1"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set1--reps">
                      <label htmlFor="set1-reps">Reps </label>
                      <input
                        type="text"
                        name="set1-reps"
                        id="set1-reps"
                        className="workouts__form-input"
                        placeholder="6"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set2">
                    <div className="workouts__form-set2--load">
                      <label htmlFor="set2">Load (kg) </label>
                      <input
                        type="text"
                        name="set2"
                        id="set2"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set2--reps">
                      <label htmlFor="set2-reps">Reps </label>
                      <input
                        type="text"
                        name="set2-reps"
                        id="set2-reps"
                        className="workouts__form-input"
                        placeholder="8"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set3">
                    <div className="workouts__form-set3--load">
                      <label htmlFor="set3">Load (kg) </label>
                      <input
                        type="text"
                        name="set3"
                        id="set3"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set3--reps">
                      <label htmlFor="set3-reps">Reps </label>
                      <input
                        type="text"
                        name="set3-reps"
                        id="set3-reps"
                        className="workouts__form-input"
                        placeholder="10"
                      />
                    </div>
                  </div>
                </form>
              </div>
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
              <div className="workouts__legday-description">
                <p className="workouts__legday-name">
                  {workout[id - 1].exercise2_name}
                </p>

                <p className="workouts__legday-reps">
                  Complete 3 sets of this workout, completing{" "}
                  {workout[id - 1].exercise2_reps} reps.
                </p>
                <form className="workouts__form">
                  <div className="workouts__form-set1">
                    <div className="workouts__form-set1--load">
                      <label htmlFor="set1">Load (kg) </label>
                      <input
                        type="text"
                        name="set1"
                        id="set1"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set1--reps">
                      <label htmlFor="set1-reps">Reps </label>
                      <input
                        type="text"
                        name="set1-reps"
                        id="set1-reps"
                        className="workouts__form-input"
                        placeholder="6"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set2">
                    <div className="workouts__form-set2--load">
                      <label htmlFor="set2">Load (kg) </label>
                      <input
                        type="text"
                        name="set2"
                        id="set2"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set2--reps">
                      <label htmlFor="set2-reps">Reps </label>
                      <input
                        type="text"
                        name="set2-reps"
                        id="set2-reps"
                        className="workouts__form-input"
                        placeholder="8"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set3">
                    <div className="workouts__form-set3--load">
                      <label htmlFor="set3">Load (kg) </label>
                      <input
                        type="text"
                        name="set3"
                        id="set3"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set3--reps">
                      <label htmlFor="set3-reps">Reps </label>
                      <input
                        type="text"
                        name="set3-reps"
                        id="set3-reps"
                        className="workouts__form-input"
                        placeholder="10"
                      />
                    </div>
                  </div>
                </form>
              </div>
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
              <div className="workouts__legday-description">
                <p className="workouts__legday-name">
                  {workout[id - 1].exercise3_name}
                </p>

                <p className="workouts__legday-reps">
                  Complete 3 sets of this workout, completing{" "}
                  {workout[id - 1].exercise3_reps} reps.
                </p>
                <form className="workouts__form">
                  <div className="workouts__form-set1">
                    <div className="workouts__form-set1--load">
                      <label htmlFor="set1">Load (kg) </label>
                      <input
                        type="text"
                        name="set1"
                        id="set1"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set1--reps">
                      <label htmlFor="set1-reps">Reps </label>
                      <input
                        type="text"
                        name="set1-reps"
                        id="set1-reps"
                        className="workouts__form-input"
                        placeholder="10"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set2">
                    <div className="workouts__form-set2--load">
                      <label htmlFor="set2">Load (kg) </label>
                      <input
                        type="text"
                        name="set2"
                        id="set2"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set2--reps">
                      <label htmlFor="set2-reps">Reps </label>
                      <input
                        type="text"
                        name="set2-reps"
                        id="set2-reps"
                        className="workouts__form-input"
                        placeholder="12"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set3">
                    <div className="workouts__form-set3--load">
                      <label htmlFor="set3">Load (kg) </label>
                      <input
                        type="text"
                        name="set3"
                        id="set3"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set3--reps">
                      <label htmlFor="set3-reps">Reps </label>
                      <input
                        type="text"
                        name="set3-reps"
                        id="set3-reps"
                        className="workouts__form-input"
                        placeholder="12"
                      />
                    </div>
                  </div>
                </form>
              </div>
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
              <div className="workouts__legday-description">
                <p className="workouts__legday-name">
                  {workout[id - 1].exercise4_name}
                </p>

                <p className="workouts__legday-reps">
                  Complete 3 sets of this workout, completing{" "}
                  {workout[id - 1].exercise4_reps} reps.
                </p>
                <form className="workouts__form">
                  <div className="workouts__form-set1">
                    <div className="workouts__form-set1--load">
                      <label htmlFor="set1">Load (kg) </label>
                      <input
                        type="text"
                        name="set1"
                        id="set1"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set1--reps">
                      <label htmlFor="set1-reps">Reps </label>
                      <input
                        type="text"
                        name="set1-reps"
                        id="set1-reps"
                        className="workouts__form-input"
                        placeholder="15"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set2">
                    <div className="workouts__form-set2--load">
                      <label htmlFor="set2">Load (kg) </label>
                      <input
                        type="text"
                        name="set2"
                        id="set2"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set2--reps">
                      <label htmlFor="set2-reps">Reps </label>
                      <input
                        type="text"
                        name="set2-reps"
                        id="set2-reps"
                        className="workouts__form-input"
                        placeholder="12"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set3">
                    <div className="workouts__form-set3--load">
                      <label htmlFor="set3">Load (kg) </label>
                      <input
                        type="text"
                        name="set3"
                        id="set3"
                        className="workouts__form-input"
                      />
                    </div>
                    <div className="workouts__form-set3--reps">
                      <label htmlFor="set3-reps">Reps </label>
                      <input
                        type="text"
                        name="set3-reps"
                        id="set3-reps"
                        className="workouts__form-input"
                        placeholder="10"
                      />
                    </div>
                  </div>
                </form>
              </div>
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
              <div className="workouts__legday-description">
                <p className="workouts__legday-name">
                  {workout[id - 1].exercise5_name}
                </p>

                <p className="workouts__legday-reps">
                  Complete 2 sets of this workout, completing{" "}
                  {workout[id - 1].exercise5_reps} reps.
                </p>
                <form className="workouts__form">
                  <div className="workouts__form-set1">
                    <div className="workouts__form-set1--load">
                      <label htmlFor="set1">Load (kg) </label>
                      <input
                        type="text"
                        name="set1"
                        id="set1"
                        className="workouts__form-input"
                        placeholder="Body weight recommended"
                      />
                    </div>
                    <div className="workouts__form-set1--reps">
                      <label htmlFor="set1-reps">Reps </label>
                      <input
                        type="text"
                        name="set1-reps"
                        id="set1-reps"
                        className="workouts__form-input"
                        placeholder="15"
                      />
                    </div>
                  </div>
                  <div className="workouts__form-set2">
                    <div className="workouts__form-set2--load">
                      <label htmlFor="set2">Load (kg) </label>
                      <input
                        type="text"
                        name="set2"
                        id="set2"
                        className="workouts__form-input"
                        placeholder="Body weight recommended"
                      />
                    </div>
                    <div className="workouts__form-set2--reps">
                      <label htmlFor="set2-reps">Reps </label>
                      <input
                        type="text"
                        name="set2-reps"
                        id="set2-reps"
                        className="workouts__form-input"
                        placeholder="15"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
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
            <div className="workouts__legday-description">
              <p className="workouts__legday-name">
                {workout[id - 1].exercise6_name}
              </p>

              <p className="workouts__legday-reps">
                Complete 3 sets of this workout, completing{" "}
                {workout[id - 1].exercise6_reps} reps.
              </p>
              <form className="workouts__form">
                <div className="workouts__form-set1">
                  <div className="workouts__form-set1--load">
                    <label htmlFor="set1">Load (kg) </label>
                    <input
                      type="text"
                      name="set1"
                      id="set1"
                      className="workouts__form-input"
                    />
                  </div>
                  <div className="workouts__form-set1--reps">
                    <label htmlFor="set1-reps">Reps </label>
                    <input
                      type="text"
                      name="set1-reps"
                      id="set1-reps"
                      className="workouts__form-input"
                      placeholder="15"
                    />
                  </div>
                </div>
                <div className="workouts__form-set2">
                  <div className="workouts__form-set2--load">
                    <label htmlFor="set2">Load (kg) </label>
                    <input
                      type="text"
                      name="set2"
                      id="set2"
                      className="workouts__form-input"
                    />
                  </div>
                  <div className="workouts__form-set2--reps">
                    <label htmlFor="set2-reps">Reps </label>
                    <input
                      type="text"
                      name="set2-reps"
                      id="set2-reps"
                      className="workouts__form-input"
                      placeholder="15"
                    />
                  </div>
                </div>
                <div className="workouts__form-set2">
                  <div className="workouts__form-set2--load">
                    <label htmlFor="set2">Load (kg) </label>
                    <input
                      type="text"
                      name="set2"
                      id="set2"
                      className="workouts__form-input"
                    />
                  </div>
                  <div className="workouts__form-set3--reps">
                    <label htmlFor="set3-reps">Reps </label>
                    <input
                      type="text"
                      name="set3-reps"
                      id="set3-reps"
                      className="workouts__form-input"
                      placeholder="15"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="workouts__submission" onSubmit={handleCompletion}>
          <Link to={`/user/${id}`}>Complete Workout</Link>
        </div>
      </div>
    </div>
  );
};

export default WorkoutPage;
