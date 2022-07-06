import React from "react";
import { Link, useParams } from "react-router-dom";

// Needs to be updated via updates in CodeSandbox
const MainGood = () => {
  //let { firstname, lastname } = useParams();
  return (
    <div>
      <h1>
        You're all logged in
      </h1>
      <button>
        <Link to="/main">Go back.</Link>
      </button>
    </div>
  );
};

export default MainGood;
