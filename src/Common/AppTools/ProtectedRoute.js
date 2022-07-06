import React from "react";
import{
  BrowseRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRoute = ({ element: Component, flag, ...rest }) => {
  const history = useNavigate();


  const goBackHandler = () => {
    history.goBack();
  };

  console.log(rest); // show rest.path in the console
  return (
    <div>
      {flag ? (
        <Route render={()=><Navigate to={rest.path}/>} />
      ) : (
        <div>
          <p>User Does not exist</p>{" "}
          <button onClick={goBackHandler}>Go back.</button>
        </div>
      )}
    </div>
  );
};

export default ProtectedRoute;
