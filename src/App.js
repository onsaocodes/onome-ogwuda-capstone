import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
