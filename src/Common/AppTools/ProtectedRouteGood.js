import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const ProtectedRouteGood = ({ children, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
      navigate("/profile");
    }
  },[isLoggedIn, navigate]);
  
  return children;
};

export default ProtectedRouteGood;
