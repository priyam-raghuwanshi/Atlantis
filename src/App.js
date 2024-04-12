import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import LogginPage from "./LogginPage";
import Home from "./Home";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import AuthContextProvider from "./context/AuthContextProvider";

function App() {
  useEffect(() => {
    localStorage.setItem("email", "test@gmail.com");
    localStorage.setItem("password", "test@123");
  }, []);
  return (
    <BrowserRouter>
      <NavigationHandler></NavigationHandler>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<LogginPage />}></Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
function NavigationHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      // If user is logged in, navigate to "/"
      navigate("/");
    } else {
      // If user is not logged in, navigate to "/login"
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    localStorage.setItem("email", "test@gmail.com");
    localStorage.setItem("password", "test@123");
  }, []);

  // NavigationHandler doesn't render anything in the UI
  return null;
}

export default App;
