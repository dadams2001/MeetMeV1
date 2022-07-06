import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ component: Component, flag, ...rest }) => {
  const navigate = useNavigate();
  const goBackHandler = () => {
    navigate.goBack();
  };
  console.log(rest); // show rest.path in the console
    return (
    <div>
      {flag ? (
        <Navigate to={rest.path} />
      ) : (
        <div>
          <p>User Does not exist</p> <button onClick={goBackHandler}>Go back.</button>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;