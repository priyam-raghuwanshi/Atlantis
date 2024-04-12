import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";

const LogginPage = () => {
  const { userCred, setUserCred, isUserAuthenticated, errorMessage } =
    useContext(AuthContext);
  const onChange = (e) => {
    setUserCred({ ...userCred, [e.target.name]: e.target.value });
    console.log(userCred);
  };

  return (
    <div className="p-5 d-flex justify-content-center">
      <form
        className="col-4"
        onSubmit={(e) => isUserAuthenticated(userCred, e)}
      >
        <div className="mb-3 ">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={userCred.email}
            onChange={onChange}
            placeholder="Enter email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={userCred.password}
            onChange={onChange}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary  col-3 mt-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogginPage;
