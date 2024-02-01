import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import BiometricsPage from "./pages/BiometricsPage/BiometricsPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserDashboardPage from "./pages/UserDashboardPage/UserDashboardPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<RegistrationPage />} />
            <Route path="/biometrics" element={<BiometricsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/users/:id" element={<UserDashboardPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
