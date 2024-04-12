import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";

const Navbar = () => {
  const { logout } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between">
          <div className="navbar-brand" href="#">
            React App
          </div>
          <div>
            {localStorage.getItem("isLoggedIn") === "true" && (
              <button className="btn btn-primary" onClick={logout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
