import { useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [userCred, setUserCred] = useState({
    email: "",
    password: "",
  });

  const isUserAuthenticated = (userCred, e) => {
    e.preventDefault();
    console.log(userCred);
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");

    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userCred.email || !userCred.password) {
      setErrorMessage("Please enter both email and password.");
    } else if (!emailFormat.test(userCred.email)) {
      setErrorMessage(
        "Invalid email format. Please enter a valid email address."
      );
    } else if (
      storedEmail === userCred.email &&
      storedPassword === userCred.password
    ) {
      localStorage.setItem("isLoggedIn", true);
      console.log("User logged in successfully");
      navigate("/");
    } else {
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  function logout() {
    localStorage.setItem("isLoggedIn", false);
    navigate("/login");
    return true;
  }
  return (
    <AuthContext.Provider
      value={{
        userCred,
        setUserCred,
        isUserAuthenticated,
        logout,
        errorMessage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
