import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Parse from "parse";

// You can pass props using the spread operator to throw them on an object if there are too many to break out
const ProtectedRouteBad = ({ children, isLoggedIn }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(!Parse.User.current()) {
      navigate("/login");
    }
  },[isLoggedIn, navigate]);

    return children;
};

export default ProtectedRouteBad;
