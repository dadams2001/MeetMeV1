import React, { useEffect, useState } from "react";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import MainGood from "./MainGood";

const MainHome = () => {
  const [flag, setFlag] = useState(false);

  var check = document.getElementById("flagBox");;

  useEffect(() => {
    if (check) {
      if (check.checked) {
        console.log("GOOD");
        setFlag(true);
      } else {
        console.log("BAD");
        setFlag(false);
      }
    }
  }, [check]);

 

  return (
    <div>
      <ProtectedRoute
        exact
        path="/user/current"
        flag={flag}
        component={MainGood}
      />
    </div>
  );
};

export default MainHome;
