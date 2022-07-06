import React, { useEffect, useState } from "react";
import ProtectedRouteBad from "../../Common/AppTools/ProtectedRouteBad";
import MainGood from "./MainGood";
import Parse from "parse";

const MainHome = () => {
  const [flag, setFlag] = useState(false);
  const [firstName, setfirstName] = useState();
  const [lastName, setlastName] = useState();

  const check = !!(Parse.User.current() && Parse.User.current().authenticated);

  useEffect(() => {
    console.log(check);
    if (check) {
      console.log("GOOD");
      setFlag(true);
      setfirstName(Parse.User.current().get("firstName"));
      setlastName(Parse.User.current().get("lastName"));
    } else {
      console.log("BAD");
      setFlag(false);
    }
  }, [check]);

  return (
    <div>
      <ProtectedRouteBad
        exact
        path={`/user/${firstName}/${lastName}`}
        flag={flag}
        component={MainGood}
      />
    </div>
  );
};

export default MainHome;
