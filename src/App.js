import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BiometricsPage from "./pages/BiometricsPage/BiometricsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage";
import WorkoutPage from "./pages/WorkoutPage/WorkoutPage";
import MealPage from "./pages/MealPage/MealPage";
import { useEffect, useState } from "react";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [storage, setStorage] = useState(localStorage.getItem("isLoggedIn"));

  useEffect(() => {
    if (storage) {
      setUserLoggedIn(false);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Header userLoggedIn={userLoggedIn} setUserLoggedIn={setUserLoggedIn} />
        <main className="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/biometrics" element={<BiometricsPage />} />
            <Route
              path="/login"
              element={<LoginPage setUserLoggedIn={setUserLoggedIn} />}
            />
            <Route path="/users/:id" element={<UserDashboardPage />} />
            <Route path="/users/:id/workouts" element={<WorkoutPage />} />
            <Route path="/users/:id/meals" element={<MealPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
