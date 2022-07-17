import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Parse from "parse";


const ProtectedRouteGood = ({ children, isLoggedIn }) => {
  const navigate = useNavigate();
  useEffect(() => {
    if(Parse.User.current()) {
      navigate("/profile");
    }
  },[isLoggedIn, navigate]);
  
  return children;
};

export default ProtectedRouteGood;
