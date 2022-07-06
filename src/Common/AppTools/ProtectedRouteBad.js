import { useEffect } from "react";
import{
  BrowseRouter,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRouteBad = ({ children, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn) {
      navigate("/login");
    }
  },[isLoggedIn]);
  
  { 
    if(isLoggedIn) {
      return children;
    }
  }
};

export default ProtectedRouteBad;
